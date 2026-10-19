(() => {
  "use strict";

  const root = document.querySelector("[data-topic-showcase]");
  if (!(root instanceof HTMLElement)) {
    throw new Error("The topic showcase is missing its container.");
  }

  const viewport = root.querySelector("[data-showcase-track]");
  const controls = root.querySelector("[data-showcase-controls]");
  const previous = root.querySelector("[data-showcase-previous]");
  const next = root.querySelector("[data-showcase-next]");
  const motion = root.querySelector("[data-showcase-motion]");
  const status = root.querySelector("[data-showcase-status]");
  if (!(viewport instanceof HTMLElement) || !(controls instanceof HTMLElement) ||
      !(previous instanceof HTMLButtonElement) || !(next instanceof HTMLButtonElement) ||
      !(motion instanceof HTMLButtonElement) || !(status instanceof HTMLElement)) {
    throw new Error("The topic showcase is missing a required control.");
  }

  const cards = [...viewport.querySelectorAll(".topic-card")];
  if (cards.length === 0) {
    throw new Error("The topic showcase has no cards to display.");
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const speed = 22;
  const endRest = 1600;
  // The lead cards stay in place for a moment before the first drift.
  const startRest = 8000;
  const startedAt = performance.now();
  let userPaused = false;
  let hovered = window.matchMedia("(hover: hover)").matches && viewport.matches(":hover");
  let focused = viewport.contains(document.activeElement);
  let arrowFocused = document.activeElement === previous || document.activeElement === next;
  let inView = false;
  let maximum = 0;
  let step = 0;
  let position = viewport.scrollLeft;
  let direction = 1;
  let frame = 0;
  let lastTime = 0;
  let restingUntil = 0;

  function canMove() {
    return maximum > 1 && !userPaused && !reducedMotion.matches &&
      !hovered && !focused && !arrowFocused && inView && !document.hidden;
  }

  function setDisabled(button, disabled, opposite, oppositeEnabled) {
    if (button.disabled === disabled) return;
    if (disabled && document.activeElement === button) {
      // A disabled button drops focus to the page; keep keyboard users on the controls.
      if (oppositeEnabled) {
        opposite.disabled = false;
        opposite.focus({ preventScroll: true });
      } else {
        viewport.focus({ preventScroll: true });
      }
    }
    button.disabled = disabled;
  }

  function updateButtons() {
    const atStart = maximum <= 1 || viewport.scrollLeft <= 1;
    const atEnd = maximum <= 1 || viewport.scrollLeft >= maximum - 1;
    setDisabled(previous, atStart, next, !atEnd);
    setDisabled(next, atEnd, previous, !atStart);
  }

  function updateControls() {
    motion.disabled = reducedMotion.matches || maximum <= 1;
    const label = motion.disabled ? "Motion off" : userPaused ? "Resume motion" : "Pause motion";
    if (motion.textContent !== label) motion.textContent = label;

    const message = reducedMotion.matches
      ? "Automatic motion is off for reduced motion. Scroll, swipe, or use the arrows."
      : maximum <= 1
        ? "All topics are visible."
        : userPaused
          ? "Motion paused. Scroll, swipe, or use the arrows to explore."
          : "A slow scroll in both directions. Motion pauses while you explore the cards.";
    if (status.textContent !== message) status.textContent = message;
    updateButtons();
  }

  function tick(time) {
    frame = 0;
    if (!canMove()) {
      refresh();
      return;
    }

    const elapsed = lastTime ? Math.min(time - lastTime, 64) : 0;
    lastTime = time;
    if (time >= restingUntil && time - startedAt >= startRest) {
      // Keep fractional position here; reading rounded scrollLeft each frame can stall slow motion.
      position += direction * speed * elapsed / 1000;
      if (direction > 0 && position >= maximum) {
        position = maximum;
        direction = -1;
        restingUntil = time + endRest;
        root.dataset.direction = "backward";
      } else if (direction < 0 && position <= 0) {
        position = 0;
        direction = 1;
        restingUntil = time + endRest;
        root.dataset.direction = "forward";
      }
      viewport.scrollLeft = position;
    }
    frame = window.requestAnimationFrame(tick);
  }

  function refresh() {
    window.cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    restingUntil = 0;
    position = Math.min(maximum, Math.max(0, viewport.scrollLeft));
    updateControls();
    const running = canMove();
    root.dataset.motion = running ? "running" : "paused";
    if (running || focused || reducedMotion.matches) {
      // Resume takes over a smooth scroll; focus and reduced motion must leave the content still.
      viewport.scrollTo({ left: position, behavior: "auto" });
    }
    if (running) {
      frame = window.requestAnimationFrame(tick);
    }
  }

  function measure() {
    maximum = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const first = cards[0].getBoundingClientRect();
    step = cards.length > 1 ? cards[1].getBoundingClientRect().left - first.left : first.width;
    const active = document.activeElement;
    if (active instanceof HTMLElement && active.classList.contains("topic-card-link") && viewport.contains(active)) {
      active.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
    }
    refresh();
  }

  function pauseForBrowsing() {
    userPaused = true;
    refresh();
  }

  function moveByCard(offset) {
    pauseForBrowsing();
    if (step <= 0) {
      throw new Error("Topic cards cannot be measured for navigation.");
    }
    // Card slots plus the true end, so the last press never moves only a few pixels.
    const slots = [];
    for (let left = 0; left < maximum - step / 2; left += step) slots.push(left);
    slots.push(maximum);
    const current = viewport.scrollLeft;
    const target = offset > 0
      ? slots.find(left => left > current + 1) ?? maximum
      : slots.findLast(left => left < current - 1) ?? 0;
    viewport.scrollTo({
      left: target,
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  }

  previous.addEventListener("click", () => moveByCard(-1));
  next.addEventListener("click", () => moveByCard(1));
  for (const arrow of [previous, next]) {
    // A focused arrow is a manual browsing intent; drift must not move focus or the track under it.
    arrow.addEventListener("focus", () => {
      arrowFocused = true;
      queueMicrotask(refresh);
    });
    arrow.addEventListener("blur", () => {
      queueMicrotask(() => {
        arrowFocused = document.activeElement === previous || document.activeElement === next;
        refresh();
      });
    });
  }
  motion.addEventListener("click", () => {
    userPaused = !userPaused;
    refresh();
  });
  viewport.addEventListener("pointerenter", event => {
    if (event.pointerType !== "touch") {
      hovered = true;
      refresh();
    }
  });
  viewport.addEventListener("pointerleave", event => {
    if (event.pointerType !== "touch") {
      hovered = false;
      refresh();
    }
  });
  viewport.addEventListener("pointerdown", pauseForBrowsing, { passive: true });
  viewport.addEventListener("wheel", event => {
    if (Math.abs(event.deltaX) > 0 || event.shiftKey) pauseForBrowsing();
  }, { passive: true });
  viewport.addEventListener("focusin", event => {
    focused = true;
    refresh();
    if (event.target instanceof HTMLElement && event.target.classList.contains("topic-card-link")) {
      event.target.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
      position = viewport.scrollLeft;
    }
  });
  viewport.addEventListener("focusout", () => {
    queueMicrotask(() => {
      focused = viewport.contains(document.activeElement);
      refresh();
    });
  });
  viewport.addEventListener("scroll", () => {
    if (!frame) position = viewport.scrollLeft;
    updateButtons();
  }, { passive: true });
  viewport.addEventListener("keydown", event => {
    if (event.target !== viewport) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      moveByCard(event.key === "ArrowRight" ? 1 : -1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      pauseForBrowsing();
      viewport.scrollTo({
        left: event.key === "Home" ? 0 : maximum,
        behavior: reducedMotion.matches ? "auto" : "smooth",
      });
    }
  });

  reducedMotion.addEventListener("change", refresh);
  document.addEventListener("visibilitychange", refresh);
  new ResizeObserver(measure).observe(viewport);
  new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting && entries[0].intersectionRatio >= 0.2;
    refresh();
  }, { threshold: [0, 0.2] }).observe(viewport);

  controls.hidden = false;
  previous.hidden = false;
  next.hidden = false;
  root.dataset.enhanced = "true";
  root.dataset.direction = "forward";
  measure();
})();
