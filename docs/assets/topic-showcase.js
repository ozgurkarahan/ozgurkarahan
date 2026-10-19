/*
 * Work wall ("Explore the work"): a native-scroll shelf with one authored motion feature.
 *
 * Modes (root data-mode): "drift" above 720px with motion allowed, "step" at 720px and below with motion
 * allowed, "manual" under prefers-reduced-motion. The root also exposes data-enhanced and data-motion
 * (running, playing, hover, browsing, paused, idle, ended, suspended, manual); the card whose drawing plays
 * carries data-play.
 *
 * A card's drawing plays when its frame becomes fully visible in the track and the window. The drift brakes
 * before a play and stays still until the play has finished, so the track never moves during one. Pause stops
 * drift, steps and plays. Touch or wheel input on the track, its keys, the arrows and keyboard focus inside
 * the shelf switch to browsing. Hover holds the drift. A hidden tab or a shelf less than half in view
 * suspends everything without a catch-up.
 * No library, no analytics.
 */
(() => {
  "use strict";

  const root = document.querySelector("[data-topic-showcase]");
  if (!(root instanceof HTMLElement)) return;
  const track = root.querySelector("[data-showcase-track]");
  const controls = root.querySelector("[data-showcase-controls]");
  const motionButton = root.querySelector("[data-showcase-motion]");
  const previous = root.querySelector("[data-showcase-previous]");
  const next = root.querySelector("[data-showcase-next]");
  const count = root.querySelector("[data-showcase-count]");
  const countText = root.querySelector("[data-showcase-count-text]");
  const live = root.querySelector("[data-showcase-live]");
  if (!(track instanceof HTMLElement) || !(controls instanceof HTMLElement) ||
      !(motionButton instanceof HTMLButtonElement) || !(previous instanceof HTMLButtonElement) ||
      !(next instanceof HTMLButtonElement) || !count || !countText || !live) {
    throw new Error("The work gallery is missing a required control.");
  }
  const cards = [...track.querySelectorAll(".topic-card")];
  const total = cards.length;
  if (total === 0) throw new Error("The work gallery has no cards.");
  const covers = cards.map(card => card.querySelector(".topic-image") || card);
  // Only inline drawings with motion classes play; bitmap covers and the end card stay still.
  const playable = covers.map(cover => cover.querySelector('svg [class*="wk-"]') !== null);

  const SPEED = 20;                 // drift, px/s
  const BRAKE_MS = 400;             // ease-out to a stop: 4 px at 20 px/s
  const BRAKE_DISTANCE = SPEED * BRAKE_MS / 2000;
  const ACCEL_MS = 800;
  const HOLD_MS = 600;              // still hold after a play
  const GAP_MS = 600;               // between sequential plays
  const FIRST_PLAY_MS = 1000;       // after the shelf is half in view and fonts are ready
  const FONT_WAIT_MS = 1000;
  const DRIFT_AFTER_MS = 1200;      // after the last initial play
  const DRIFT_FLOOR_MS = 8000;      // never before 8 s after load
  const END_REST_MS = 3000;
  const START_REST_MS = 2000;
  const AUTO_COOLDOWN_MS = 60000;
  const DWELL_MS = 400;
  const REPLAY_COOLDOWN_MS = 3000;
  const PLAY_TIMEOUT_MS = 5500;
  const SETTLE_MS = 150;
  const TOKEN_TIMEOUT_MS = 1500;
  const READING_MS = 5000;
  const ROUND_TRIPS = 2;
  const TOLERANCE = 2;
  const FRAME_CAP_MS = 64;
  const SHELF_RATIO = 0.5;
  const BROWSE_PX = 10;

  const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const narrowQuery = window.matchMedia("(max-width: 720px)");
  const now = () => performance.now();
  const loadedAt = now();

  let mode = "";
  let userPaused = false;
  let browsing = false;
  let stopped = "";                 // "idle" (desktop) or "ended" (mobile pass)
  let hovered = false;
  let pageHidden = document.hidden;
  let shelfInView = false;
  let coverInWindow = false;
  let wasSuspended = true;
  let fontsReady = false;
  let started = false;
  let initialDone = false;
  let driftReady = false;
  let resting = false;
  let stepping = false;
  let resnap = false;               // one-shot: rest on a card position after an aborted scripted step
  let touching = false;
  let generation = 0;

  // Geometry in scroll coordinates, cached on measure; never read per frame.
  let width = 0;
  let maxScroll = 0;
  let inset = 0;
  let insetEnd = 0;
  const cardLeft = [];
  const cardRight = [];
  const coverLeft = [];
  const coverRight = [];
  let slots = [0];
  let x = 0;
  let anchor = null;

  // Player.
  let current = null;
  const lastPlayEnd = new Array(total).fill(-Infinity);
  const passPlayed = new Array(total).fill(-1);
  let passId = 0;
  let loadQueue = [];
  let pending = -1;
  let nextAutoAt = 0;
  let lastAutoEnd = 0;
  let holding = false;
  const visible = new Array(total).fill(false);

  // Scrolls made by this script carry a token until they settle.
  let token = null;
  let settleTimer = 0;
  let announceOnSettle = false;
  let shown = { first: -1, last: -1 };

  const glide = {
    frame: 0, last: 0, phase: "off", elapsed: 0, dir: 1, v: 0, pos: 0,
    from: 0, target: 0, dur: 0, playAt: -1, boundary: false, brakeFor: -1, roundTrips: 0,
  };
  const dwell = { index: -1, source: "", timer: 0 };
  const timers = new Map();

  function later(name, ms, fn) {
    cancel(name);
    const gen = generation;
    timers.set(name, window.setTimeout(() => {
      timers.delete(name);
      if (gen === generation) fn();
    }, Math.max(0, ms)));
  }

  function cancel(name) {
    const id = timers.get(name);
    if (id !== undefined) {
      window.clearTimeout(id);
      timers.delete(name);
    }
  }

  // A new generation drops every queued play and pending timer of the previous one.
  function bump() {
    generation += 1;
    for (const id of timers.values()) window.clearTimeout(id);
    timers.clear();
    loadQueue = [];
    pending = -1;
    holding = false;
    resting = false;
  }

  const clampScroll = value => Math.min(maxScroll, Math.max(0, value));
  const pad = value => String(value).padStart(2, "0");
  const suspended = () => pageHidden || !shelfInView;
  const motionOn = () => mode !== "manual";
  const autoAllowed = () => motionOn() && started && !suspended() && !userPaused && (browsing || !stopped);
  const replayAllowed = () => motionOn() && !suspended() && !userPaused;
  const advanceAllowed = () => motionOn() && started && !suspended() && !userPaused && !browsing && !stopped;
  const canDrift = () => mode === "drift" && advanceAllowed() && driftReady && !hovered && !current &&
    !holding && !resting && maxScroll > 1;
  const inTrack = (i, s = x) => coverLeft[i] >= s - TOLERANCE && coverRight[i] <= s + width + TOLERANCE;
  const isVisible = (i, s = x) => coverInWindow && inTrack(i, s);
  const cardIndexOf = node => node instanceof Node ? cards.findIndex(card => card.contains(node)) : -1;

  function eligible(i) {
    return playable[i] && now() - lastPlayEnd[i] >= AUTO_COOLDOWN_MS && (browsing || passPlayed[i] !== passId);
  }

  function stateName() {
    if (mode === "manual") return "manual";
    if (suspended()) return "suspended";
    if (userPaused) return "paused";
    if (browsing) return "browsing";
    if (stopped) return stopped;
    if (hovered) return "hover";
    if (current || holding) return "playing";
    return "running";
  }

  function render() {
    const state = stateName();
    if (root.dataset.motion !== state) root.dataset.motion = state;
    const resume = userPaused || browsing || Boolean(stopped);
    const label = resume ? "Resume motion" : "Pause motion";
    if (motionButton.getAttribute("aria-label") !== label) motionButton.setAttribute("aria-label", label);
    const action = resume ? "resume" : "pause";
    if (motionButton.dataset.action !== action) motionButton.dataset.action = action;
  }

  // Reconciles the motion with the current flags; every event handler ends here.
  function update() {
    if (current && (current.user ? !replayAllowed() : !autoAllowed())) stopPlay();
    if (current && !isVisible(current.index)) stopPlay();
    if (canDrift()) startGlide();
    else stopGlide();
    render();
  }

  function announce(message) {
    live.textContent = "";
    window.setTimeout(() => { live.textContent = message; }, 60);
  }

  /* Player: one card at a time. Automatic plays queue, plays the visitor asks for interrupt. */
  function startPlay(index, user) {
    if (current) stopPlay();
    stopGlide();
    const card = cards[index];
    if (card.hasAttribute("data-play")) {
      // A replay restarts from its first frame: remove, force a style recalculation, set again.
      card.removeAttribute("data-play");
      if (typeof card.getAnimations === "function") card.getAnimations({ subtree: true });
    }
    const play = { index, user, timeout: 0 };
    current = play;
    if (!user) passPlayed[index] = passId;
    card.setAttribute("data-play", "");
    play.timeout = window.setTimeout(() => {
      if (current === play) endPlay(true);
    }, PLAY_TIMEOUT_MS);
    // The card's own animations are read once the next frame has computed its style, so starting a play never
    // forces a style recalculation; completion is whichever comes first, their end or the timeout.
    window.requestAnimationFrame(() => window.setTimeout(() => {
      if (current !== play || typeof card.getAnimations !== "function") return;
      const animations = card.getAnimations({ subtree: true }).filter(animation => {
        const timing = animation.effect ? animation.effect.getComputedTiming() : null;
        return !timing || Number.isFinite(timing.endTime);
      });
      Promise.allSettled(animations.map(animation => animation.finished)).then(() => {
        if (current === play) endPlay(true);
      });
    }, 0));
    render();
  }

  function stopPlay() {
    if (current) endPlay(false);
  }

  // Removing data-play snaps the drawing to its static final frame.
  function endPlay(completed) {
    const play = current;
    current = null;
    window.clearTimeout(play.timeout);
    cards[play.index].removeAttribute("data-play");
    const t = now();
    lastPlayEnd[play.index] = t;
    nextAutoAt = t + GAP_MS;
    if (!play.user) lastAutoEnd = t;
    if (completed) {
      holding = true;
      later("hold", HOLD_MS, () => {
        holding = false;
        pump();
        update();
      });
    }
    if (mode === "step") rearmStep();
    update();
  }

  function pump() {
    if (current || holding || !autoAllowed()) return;
    const t = now();
    if (t < nextAutoAt) {
      later("pump", nextAutoAt - t, pump);
      return;
    }
    let index = -1;
    while (index < 0 && loadQueue.length) {
      const i = loadQueue.shift();
      if (isVisible(i) && eligible(i)) index = i;
    }
    if (index < 0 && pending >= 0) {
      const i = pending;
      pending = -1;
      if (isVisible(i) && eligible(i)) index = i;
    }
    if (index < 0) {
      if (started && !initialDone) finishInitial();
      return;
    }
    if (mode === "drift" && glide.frame) {
      // Brake first; the play starts once the track has stopped.
      glide.brakeFor = index;
      return;
    }
    startPlay(index, false);
  }

  function finishInitial() {
    initialDone = true;
    if (mode !== "drift" || driftReady) return;
    const t = now();
    const at = Math.max((lastAutoEnd || t) + DRIFT_AFTER_MS, loadedAt + DRIFT_FLOOR_MS);
    later("drift", at - t, () => {
      driftReady = true;
      update();
    });
  }

  function replay(i) {
    if (!playable[i] || !replayAllowed() || !isVisible(i)) return;
    if (current && current.index === i) return;
    if (now() - lastPlayEnd[i] < REPLAY_COOLDOWN_MS) return;
    startPlay(i, true);
  }

  function scheduleDwell(i, source) {
    cancelDwell();
    if (i < 0 || !playable[i]) return;
    dwell.index = i;
    dwell.source = source;
    dwell.timer = window.setTimeout(() => {
      dwell.timer = 0;
      dwell.index = -1;
      replay(i);
    }, DWELL_MS);
  }

  function cancelDwell() {
    window.clearTimeout(dwell.timer);
    dwell.timer = 0;
    dwell.index = -1;
    dwell.source = "";
  }

  /* Visibility, counter and arrows, computed from the cached geometry. */
  function evaluate(queueArrivals) {
    const arrivals = [];
    for (let i = 0; i < total; i += 1) {
      const seen = isVisible(i);
      if (seen && !visible[i]) arrivals.push(i);
      visible[i] = seen;
    }
    // During the mobile pass the step cycle owns the plays.
    if (!queueArrivals || !autoAllowed() || (mode === "step" && advanceAllowed())) return;
    // Several cards revealed together play one at a time in reading order; a single arrival takes the
    // latest-wins slot.
    const ready = arrivals.filter(eligible);
    if (ready.length > 1) {
      for (const i of ready) {
        if (!loadQueue.includes(i)) loadQueue.push(i);
      }
    } else if (ready.length === 1) {
      pending = ready[0];
    }
    pump();
  }

  // A vertical return (or the end of a suspension) re-checks every card: one that arrived horizontally while
  // the drawings were cut by the window is still pending and plays now, subject to its pass and cooldown.
  function reevaluateArrivals() {
    visible.fill(false);
    evaluate(true);
    update();
  }

  function updateCounter() {
    let first = -1;
    let last = -1;
    for (let i = 0; i < total; i += 1) {
      if (cardLeft[i] >= x - TOLERANCE && cardRight[i] <= x + width + TOLERANCE) {
        if (first < 0) first = i;
        last = i;
      }
    }
    // Mid-gesture no card may be complete: keep the last valid value.
    if (last < 0 || (first === shown.first && last === shown.last)) return;
    shown = { first, last };
    count.textContent = `${pad(last + 1)} / ${pad(total)}`;
    countText.textContent = first === last
      ? `Work ${last + 1} of ${total}`
      : `Works ${first + 1} to ${last + 1} of ${total}`;
  }

  function setDisabled(button, disabled) {
    const value = disabled ? "true" : "false";
    if (button.getAttribute("aria-disabled") !== value) button.setAttribute("aria-disabled", value);
  }

  // aria-disabled keeps focus on the arrow at either end.
  function updateArrows() {
    const s = token ? token.target : x;
    setDisabled(previous, maxScroll <= 1 || s <= 1);
    setDisabled(next, maxScroll <= 1 || s >= maxScroll - 1);
  }

  function saveAnchor() {
    const ref = x + inset;
    for (let i = 0; i < total; i += 1) {
      if (cardRight[i] > ref + 0.5) {
        const size = Math.max(1, cardRight[i] - cardLeft[i]);
        anchor = { index: i, fraction: Math.max(0, (ref - cardLeft[i]) / size) };
        return;
      }
    }
  }

  function afterMove() {
    saveAnchor();
    evaluate(false);
    updateCounter();
    updateArrows();
  }

  /* Desktop drift: fractional position, rAF only while gliding or braking, frame delta capped. */
  function startGlide() {
    if (glide.frame) return;
    x = clampScroll(track.scrollLeft);
    glide.pos = x;
    if (glide.dir > 0 && x >= maxScroll - 0.5) glide.dir = -1;
    else if (glide.dir < 0 && x <= 0.5) glide.dir = 1;
    glide.phase = "accel";
    glide.elapsed = 0;
    glide.v = 0;
    glide.last = 0;
    glide.frame = window.requestAnimationFrame(tick);
  }

  function stopGlide() {
    if (glide.frame) window.cancelAnimationFrame(glide.frame);
    glide.frame = 0;
    glide.phase = "off";
    glide.v = 0;
    glide.brakeFor = -1;
  }

  // The nearest stop ahead: an eligible card becoming fully visible, a queued play, or the end of the track.
  function nextStop(pos, stopDistance) {
    const dir = glide.dir;
    const boundary = dir > 0 ? maxScroll : 0;
    let best = boundary;
    let index = -1;
    let isBoundary = true;
    if (glide.brakeFor >= 0) {
      const natural = pos + dir * stopDistance;
      best = dir > 0 ? Math.min(natural, boundary) : Math.max(natural, boundary);
      index = glide.brakeFor;
      isBoundary = false;
    }
    if (coverInWindow) {
      for (let i = 0; i < total; i += 1) {
        if (!eligible(i)) continue;
        const arrival = dir > 0 ? coverRight[i] - width : coverLeft[i];
        if (arrival < -TOLERANCE || arrival > maxScroll + TOLERANCE) continue;
        if ((arrival - pos) * dir <= 0.01) continue;
        if ((arrival - best) * dir < 0) {
          best = arrival;
          index = i;
          isBoundary = false;
        }
      }
    }
    if (!isBoundary && Math.abs(boundary - best) <= BRAKE_DISTANCE) {
      best = boundary;
      isBoundary = true;
    }
    return { pos: clampScroll(best), index, boundary: isBoundary };
  }

  function tick(time) {
    glide.frame = 0;
    if (!canDrift()) {
      stopGlide();
      render();
      return;
    }
    const dt = glide.last ? Math.min(time - glide.last, FRAME_CAP_MS) : 0;
    glide.last = time;
    glide.elapsed += dt;
    let pos = glide.pos;
    let arrived = false;
    if (glide.phase === "brake") {
      const u = glide.dur > 0 ? Math.min(1, glide.elapsed / glide.dur) : 1;
      pos = glide.from + (glide.target - glide.from) * (1 - (1 - u) * (1 - u));
      if (u >= 1) {
        pos = glide.target;
        arrived = true;
      }
    } else {
      if (glide.phase === "accel" && glide.elapsed >= ACCEL_MS) glide.phase = "cruise";
      const v = glide.phase === "accel" ? SPEED * glide.elapsed / ACCEL_MS : SPEED;
      glide.v = v;
      const stopDistance = v * BRAKE_MS / 2000;
      const stop = nextStop(pos, stopDistance);
      const remaining = (stop.pos - pos) * glide.dir;
      if (remaining <= stopDistance + 0.001) {
        // Brake so that velocity reaches zero exactly at the stop.
        glide.phase = "brake";
        glide.elapsed = 0;
        glide.from = pos;
        glide.target = stop.pos;
        glide.playAt = stop.index;
        glide.boundary = stop.boundary;
        glide.dur = remaining > 0.001 && v > 0 ? 2000 * remaining / v : 0;
        if (glide.dur === 0) {
          pos = stop.pos;
          arrived = true;
        }
      } else {
        pos = clampScroll(pos + glide.dir * v * dt / 1000);
      }
    }
    glide.pos = pos;
    x = pos;
    track.scrollLeft = pos;
    afterMove();
    if (arrived) {
      arrive();
      return;
    }
    glide.frame = window.requestAnimationFrame(tick);
  }

  function arrive() {
    const { playAt, boundary } = glide;
    const atEnd = glide.dir > 0;
    stopGlide();
    x = clampScroll(track.scrollLeft);
    afterMove();
    if (boundary) {
      glide.dir = atEnd ? -1 : 1;
      passId += 1;
      if (!atEnd) {
        glide.roundTrips += 1;
        if (glide.roundTrips >= ROUND_TRIPS) {
          stopped = "idle";
          update();
          return;
        }
      }
      const card = playAt >= 0 ? playAt : (atEnd ? -1 : 0);
      if (card >= 0 && isVisible(card) && eligible(card)) {
        startPlay(card, false);
        return;
      }
      resting = true;
      later("rest", atEnd ? END_REST_MS : START_REST_MS, () => {
        resting = false;
        update();
      });
      update();
      return;
    }
    if (playAt >= 0 && isVisible(playAt) && eligible(playAt)) {
      pending = -1;
      startPlay(playAt, false);
      return;
    }
    update();
  }

  /* Scrolling: a card revealed by any scroll other than the drift waits for the settle gate. */
  function slotAfter(s) {
    return slots.find(slot => slot > s + 1) ?? maxScroll;
  }

  function slotBefore(s) {
    for (let i = slots.length - 1; i >= 0; i -= 1) {
      if (slots[i] < s - 1) return slots[i];
    }
    return 0;
  }

  function scrollToX(target, smooth) {
    const left = clampScroll(target);
    token = { target: left, at: now() };
    track.scrollTo({ left, behavior: smooth && motionOn() ? "smooth" : "auto" });
    updateArrows();
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(checkSettle, SETTLE_MS);
  }

  function nearestSlot(s) {
    let nearest = 0;
    for (const slot of slots) {
      if (Math.abs(slot - s) < Math.abs(nearest - s)) nearest = slot;
    }
    return nearest;
  }

  // Pause, reduced motion and a hidden tab stop a smooth step at once: first where it is (cancelling the
  // compositor's smooth scroll), then, on the next frame, instantly on the nearest card position, so no two cards
  // are left half cut. Manual input simply takes over.
  function abortScroll(hard) {
    const had = Boolean(token);
    token = null;
    stepping = false;
    if (had && hard) {
      resnap = narrowQuery.matches;
      const s = track.scrollLeft;
      track.scrollTo({ left: s, behavior: "auto" });
      x = s;
      window.requestAnimationFrame(() => {
        if (token) return;
        const here = track.scrollLeft;
        const nearest = nearestSlot(here);
        if (Math.abs(nearest - here) > 0.5) scrollToX(nearest, false);
      });
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(checkSettle, SETTLE_MS);
    }
  }

  function onScroll() {
    const s = track.scrollLeft;
    if (glide.frame) {
      if (Math.abs(s - glide.pos) <= TOLERANCE) return;
      // Something else moved the track (find in page, a focus scroll): adopt it instead of fighting it.
      stopGlide();
    }
    const moved = Math.abs(s - x) > 0.5;
    x = s;
    saveAnchor();
    for (let i = 0; i < total; i += 1) {
      if (visible[i] && !isVisible(i)) visible[i] = false;
    }
    // A manual or scripted move stops the current play at once; the settle gate decides the next one.
    if (current && (moved || !isVisible(current.index))) stopPlay();
    updateArrows();
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(checkSettle, SETTLE_MS);
  }

  function checkSettle() {
    settleTimer = 0;
    const s = track.scrollLeft;
    if (Math.abs(s - x) > 0.5) {
      x = s;
      saveAnchor();
      settleTimer = window.setTimeout(checkSettle, SETTLE_MS);
      return;
    }
    if (token && Math.abs(s - token.target) > 1.5 && now() - token.at < TOKEN_TIMEOUT_MS) {
      settleTimer = window.setTimeout(checkSettle, SETTLE_MS);
      return;
    }
    token = null;
    settled();
  }

  function settled() {
    x = clampScroll(track.scrollLeft);
    // After an aborted scripted step (Pause, a suspension, a mode change) the phone shelf rests on a card position,
    // even if the cancelled smooth scroll overshot it. A visitor's own scroll is never corrected.
    if (resnap) {
      resnap = false;
      if (!browsing && !touching) {
        const nearest = nearestSlot(x);
        if (Math.abs(nearest - x) > 1) {
          scrollToX(nearest, false);
          return;
        }
      }
    }
    saveAnchor();
    updateArrows();
    updateCounter();
    if (announceOnSettle) {
      announceOnSettle = false;
      announce(countText.textContent);
    }
    if (mode === "step" && stepping) {
      stepping = false;
      stepCycle();
    } else {
      evaluate(true);
    }
    update();
  }

  /* Mobile: one forward pass. Settle, play the snapped card, read for 5 s, step, until the end card. */
  function snappedIndex() {
    for (let i = 0; i < total; i += 1) {
      if (cardLeft[i] >= x - TOLERANCE && cardRight[i] <= x + width + TOLERANCE) return i;
    }
    return -1;
  }

  function stepCycle() {
    cancel("read");
    if (mode !== "step" || !advanceAllowed()) return;
    evaluate(false);
    const k = snappedIndex();
    if (k < 0) {
      // Between card positions (an interrupted step or a fling): rest on the nearest card, then continue.
      const nearest = nearestSlot(x);
      if (Math.abs(nearest - x) > 0.5) {
        stepping = true;
        scrollToX(nearest, false);
      } else {
        later("read", READING_MS, advance);
      }
      return;
    }
    if (k >= total - 1) {
      stopped = "ended";
      bump();
      update();
      return;
    }
    if (isVisible(k) && eligible(k)) {
      pending = k;
      pump();
    }
    // A skipped play (cooldown, cut frame) still leaves the reading time before the next step.
    if (!current || current.index !== k) later("read", READING_MS, advance);
  }

  function advance() {
    // A play or the pointer over the shelf holds the step; the end of the play or pointerleave re-arms it.
    if (mode !== "step" || !advanceAllowed() || current || hovered) return;
    stepping = true;
    scrollToX(slotAfter(x), true);
  }

  function rearmStep() {
    if (mode === "step" && advanceAllowed() && !current && !stepping && !timers.has("read")) {
      later("read", READING_MS, advance);
    }
  }

  /* Browsing comes from physical input only, never from scroll events. It stops the drift and the mobile pass
     until Resume; queued plays (including the load sequence) still run for cards that stay fully visible. */
  function startBrowsing() {
    if (!motionOn()) return;
    resnap = false;
    if (!browsing) {
      browsing = true;
      cancel("read");
      abortScroll(false);
      stopGlide();
    }
    update();
  }

  function pauseMotion() {
    userPaused = true;
    bump();
    abortScroll(true);
    stopPlay();
    stopGlide();
    cancelDwell();
    update();
    announce("Motion paused");
  }

  function resumeMotion() {
    const restart = stopped === "ended" || (mode === "step" && x >= maxScroll - 1);
    userPaused = false;
    browsing = false;
    stopped = "";
    bump();
    glide.roundTrips = 0;
    passId += 1;
    if (!started) {
      // Resumed before the first play: the initial sequence and the 8 s rule still apply.
      tryStart();
      update();
      announce("Motion resumed");
      return;
    }
    if (mode === "drift" && !initialDone) {
      // Resumed during the initial sequence: the visible cards that have not played yet still play in order,
      // and the drift still waits for them and for the 8 s floor.
      evaluate(false);
      loadQueue = cards.map((_, i) => i).filter(i => visible[i] && eligible(i));
      pump();
      update();
      announce("Motion resumed");
      return;
    }
    initialDone = true;
    driftReady = true;
    if (mode === "step" && !suspended()) {
      stepping = true;
      if (restart) {
        scrollToX(0, true);
      } else {
        // The pass continues once the track rests on a card: an arrow step or a fling may still be under way.
        window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(checkSettle, SETTLE_MS);
      }
    }
    update();
    announce("Motion resumed");
  }

  function scheduleDrift(ms) {
    later("drift", ms, () => {
      driftReady = true;
      update();
    });
  }

  function tryStart() {
    if (started || !motionOn() || suspended() || !fontsReady || userPaused || timers.has("start")) return;
    later("start", FIRST_PLAY_MS, () => {
      started = true;
      evaluate(false);
      // The load sequence also runs when early input already switched to browsing (revealed cards still play).
      if (mode === "drift" || browsing) {
        loadQueue = cards.map((_, i) => i).filter(i => visible[i] && eligible(i));
        pump();
      } else {
        initialDone = true;
        stepCycle();
      }
      update();
    });
  }

  // Suspension restores the previous state on return: clocks and reading timers restart, no catch-up.
  function checkSuspension() {
    const s = suspended();
    if (s === wasSuspended) return;
    wasSuspended = s;
    if (s) {
      bump();
      abortScroll(true);
      stopPlay();
      stopGlide();
      visible.fill(false);
      return;
    }
    if (!motionOn()) return;
    if (!started) {
      tryStart();
      return;
    }
    if (mode === "drift") {
      if (!initialDone) {
        evaluate(false);
        loadQueue = cards.map((_, i) => i).filter(i => visible[i] && eligible(i));
        pump();
      } else if (!driftReady) {
        scheduleDrift(DRIFT_AFTER_MS);
      }
    }
    if (mode === "step" && advanceAllowed()) {
      // The pass continues once the track rests on a card (the suspension may have cut a step short).
      stepping = true;
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(checkSettle, SETTLE_MS);
    }
    later("arrivals", SETTLE_MS, reevaluateArrivals);
  }

  function setMode() {
    const nextMode = reducedQuery.matches ? "manual" : narrowQuery.matches ? "step" : "drift";
    if (nextMode === mode) return;
    const first = mode === "";
    mode = nextMode;
    root.dataset.mode = mode;
    if (first) return;  // the first measure waits for the first layout (ResizeObserver)
    bump();
    abortScroll(true);
    stopPlay();
    stopGlide();
    cancelDwell();
    stepping = false;
    measure();
    if (!motionOn()) {
      update();
      return;
    }
    // A live preference or layout change keeps an explicit Pause and restarts the motion of the new mode.
    stopped = "";
    if (!started) {
      tryStart();
    } else {
      initialDone = true;
      if (mode === "drift") {
        driftReady = false;
        scheduleDrift(DRIFT_AFTER_MS);
      } else if (advanceAllowed()) {
        stepping = true;
        window.clearTimeout(settleTimer);
        settleTimer = window.setTimeout(checkSettle, SETTLE_MS);
      }
    }
    update();
  }

  /* Geometry: measured on resize, fonts ready and pageshow, then reused by every frame. */
  const probe = document.createElement("div");
  probe.className = "topic-probe";
  probe.setAttribute("aria-hidden", "true");
  root.append(probe);

  function measure() {
    const hadGeometry = width > 0;
    const keep = anchor;
    width = track.clientWidth;
    maxScroll = Math.max(0, track.scrollWidth - width);
    const style = window.getComputedStyle(track);
    inset = parseFloat(style.scrollPaddingLeft) || 0;
    insetEnd = parseFloat(style.scrollPaddingRight) || 0;
    const s = track.scrollLeft;
    const origin = track.getBoundingClientRect().left + track.clientLeft - s;
    for (let i = 0; i < total; i += 1) {
      const card = cards[i].getBoundingClientRect();
      const cover = covers[i].getBoundingClientRect();
      cardLeft[i] = card.left - origin;
      cardRight[i] = card.right - origin;
      coverLeft[i] = cover.left - origin;
      coverRight[i] = cover.right - origin;
    }
    const raw = cardLeft.map(left => clampScroll(left - inset)).concat(maxScroll).sort((a, b) => a - b);
    slots = [];
    for (const value of raw) {
      if (!slots.length || value - slots[slots.length - 1] > 1) slots.push(value);
    }
    // The probe spans the drawings' band, so one observer tells whether the frames are inside the window.
    const band = covers[0].getBoundingClientRect();
    probe.style.top = `${band.top - root.getBoundingClientRect().top - root.clientTop}px`;
    probe.style.height = `${Math.max(1, band.height)}px`;
    x = clampScroll(s);
    // Resizing keeps the first intersecting card and its clipped fraction; a focused card stays fully visible.
    let target = x;
    if (hadGeometry && keep && keep.index < total) {
      const size = cardRight[keep.index] - cardLeft[keep.index];
      target = clampScroll(cardLeft[keep.index] + keep.fraction * size - inset);
    }
    const focused = cardIndexOf(document.activeElement);
    if (focused >= 0) target = fullyVisibleTarget(focused, target);
    if (Math.abs(target - x) > 0.5) {
      if (glide.frame) stopGlide();
      scrollToX(target, false);
      x = target;
    }
    saveAnchor();
    updateCounter();
    updateArrows();
  }

  function fullyVisibleTarget(i, s) {
    if (mode !== "drift" && narrowQuery.matches) return clampScroll(cardLeft[i] - inset);
    if (cardLeft[i] < s + inset - TOLERANCE) return clampScroll(cardLeft[i] - inset);
    if (cardRight[i] > s + width - insetEnd + TOLERANCE) return clampScroll(cardRight[i] - width + insetEnd);
    return s;
  }

  function bringIntoView(i) {
    const base = token ? token.target : x;
    const target = fullyVisibleTarget(i, base);
    if (Math.abs(target - base) > 0.5) scrollToX(target, false);
  }

  function arrowStep(direction) {
    const button = direction > 0 ? next : previous;
    if (button.getAttribute("aria-disabled") === "true") return;
    startBrowsing();
    stopPlay();
    const base = token ? token.target : x;
    announceOnSettle = true;
    scrollToX(direction > 0 ? slotAfter(base) : slotBefore(base), true);
  }

  /* Events. */
  previous.addEventListener("click", () => arrowStep(-1));
  next.addEventListener("click", () => arrowStep(1));
  motionButton.addEventListener("click", () => {
    if (!motionOn()) return;
    if (userPaused || browsing || stopped) resumeMotion();
    else pauseMotion();
  });

  track.addEventListener("scroll", onScroll, { passive: true });
  track.addEventListener("keydown", event => {
    if (event.target !== track || event.altKey || event.ctrlKey || event.metaKey) return;
    const base = token ? token.target : x;
    let target;
    if (event.key === "ArrowRight") target = slotAfter(base);
    else if (event.key === "ArrowLeft") target = slotBefore(base);
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = maxScroll;
    else return;
    event.preventDefault();
    startBrowsing();
    stopPlay();
    announceOnSettle = true;
    scrollToX(target, true);
  });

  track.addEventListener("focusin", event => {
    const target = event.target;
    let keyboard = false;
    try {
      keyboard = target instanceof HTMLElement && target.matches(":focus-visible");
    } catch (error) {
      keyboard = true;
    }
    if (!keyboard) return;
    // APG: keyboard focus inside the shelf stops the motion; the focused card is brought fully into view.
    startBrowsing();
    const i = cardIndexOf(target);
    if (i >= 0) {
      bringIntoView(i);
      scheduleDwell(i, "focus");
    }
  });
  track.addEventListener("focusout", () => {
    if (dwell.source === "focus") cancelDwell();
  });

  track.addEventListener("pointerenter", event => {
    if (event.pointerType === "touch") return;
    hovered = true;
    glide.roundTrips = 0;
    update();
  });
  track.addEventListener("pointerleave", event => {
    if (event.pointerType === "touch") return;
    hovered = false;
    if (dwell.source === "hover") cancelDwell();
    rearmStep();
    update();
  });
  track.addEventListener("pointerover", event => {
    if (event.pointerType === "touch") return;
    const i = cardIndexOf(event.target);
    if (i >= 0 && !(dwell.index === i && dwell.source === "hover")) scheduleDwell(i, "hover");
  });
  track.addEventListener("pointerout", event => {
    if (event.pointerType === "touch" || dwell.source !== "hover") return;
    const i = cardIndexOf(event.target);
    if (i >= 0 && i === dwell.index && cardIndexOf(event.relatedTarget) !== i) cancelDwell();
  });

  let gesture = null;
  function gestureStart(clientX, clientY) {
    gesture = { x: clientX, y: clientY };
  }
  function gestureMove(clientX, clientY) {
    if (!gesture) return;
    const dx = Math.abs(clientX - gesture.x);
    const dy = Math.abs(clientY - gesture.y);
    if (dx > BROWSE_PX && dx > dy) {
      gesture = null;
      startBrowsing();
    } else if (dy > BROWSE_PX) {
      gesture = null;
    }
  }
  track.addEventListener("touchstart", event => {
    touching = true;
    if (event.touches.length === 1) gestureStart(event.touches[0].clientX, event.touches[0].clientY);
    else gesture = null;
  }, { passive: true });
  track.addEventListener("touchmove", event => {
    if (event.touches.length === 1) gestureMove(event.touches[0].clientX, event.touches[0].clientY);
  }, { passive: true });
  track.addEventListener("touchend", event => {
    touching = event.touches.length > 0;
    gesture = null;
  }, { passive: true });
  track.addEventListener("touchcancel", event => {
    touching = event.touches.length > 0;
    gesture = null;
  }, { passive: true });
  track.addEventListener("pointerdown", event => {
    if (event.pointerType !== "touch" && event.button === 0) gestureStart(event.clientX, event.clientY);
  });
  track.addEventListener("pointermove", event => {
    if (event.pointerType === "touch") return;
    if (!(event.buttons & 1)) gesture = null;
    else gestureMove(event.clientX, event.clientY);
  });
  track.addEventListener("pointerup", event => {
    if (event.pointerType !== "touch") gesture = null;
  });
  track.addEventListener("wheel", event => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || (event.shiftKey && event.deltaY !== 0)) startBrowsing();
  }, { passive: true });

  reducedQuery.addEventListener("change", setMode);
  narrowQuery.addEventListener("change", setMode);
  document.addEventListener("visibilitychange", () => {
    pageHidden = document.hidden;
    checkSuspension();
    update();
  });
  // Back/forward cache: leave with no play, timer or scroll in flight; the return counts as the end of a
  // suspension (whichever of visibilitychange or pageshow comes first restarts the motion once).
  window.addEventListener("pagehide", () => {
    bump();
    abortScroll(false);
    stopPlay();
    stopGlide();
    cancelDwell();
    window.clearTimeout(settleTimer);
    settleTimer = 0;
    visible.fill(false);
    wasSuspended = true;
  });
  window.addEventListener("pageshow", event => {
    if (!event.persisted) return;
    pageHidden = document.hidden;
    if (width > 0) measure();
    checkSuspension();
    update();
  });

  const thresholds = [0.98, 0.99];
  for (let i = 0; i <= 20; i += 1) thresholds.push(i / 20);
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const bounds = entry.rootBounds;
      const top = bounds ? bounds.top : 0;
      const bottom = bounds ? bounds.bottom : window.innerHeight;
      const rect = entry.boundingClientRect;
      if (entry.target === track) {
        const span = Math.max(1, Math.min(rect.height, bottom - top));
        shelfInView = entry.isIntersecting && entry.intersectionRect.height / span >= SHELF_RATIO - 0.001;
      } else {
        const inside = entry.isIntersecting && rect.top >= top - TOLERANCE && rect.bottom <= bottom + TOLERANCE;
        if (inside !== coverInWindow) {
          coverInWindow = inside;
          if (!inside) {
            visible.fill(false);
            stopPlay();
          } else {
            later("arrivals", SETTLE_MS, reevaluateArrivals);
          }
        }
      }
    }
    checkSuspension();
    update();
  }, { threshold: thresholds.sort((a, b) => a - b) });

  // ResizeObserver callbacks run right after layout, so measuring there never forces an extra layout; its first
  // callback is the first measure (nothing reads layout while the script starts).
  let fontsWatched = false;
  const resizer = new ResizeObserver(() => {
    measure();
    if (!fontsWatched) {
      // Reading document.fonts.ready resolves pending font use, which needs layout: only ask after the first one.
      fontsWatched = true;
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          window.clearTimeout(fontTimer);
          onFonts();
        });
      }
    }
    update();
  });

  function onFonts() {
    const first = !fontsReady;
    fontsReady = true;
    if (width > 0) measure();
    if (first) tryStart();
    update();
  }

  /* Enhance. */
  track.tabIndex = 0;
  setMode();
  root.dataset.enhanced = "true";
  render();
  observer.observe(track);
  observer.observe(probe);
  resizer.observe(track);
  resizer.observe(root);
  const fontTimer = window.setTimeout(onFonts, FONT_WAIT_MS);
})();
