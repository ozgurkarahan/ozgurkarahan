---
name: "Blueprint Field Notes"
description: "Ozgur Karahan's stone, sage, and graphite portfolio system with one warm accountability accent and animated line drawings, recorded from the built homepage."
colors:
  canvas: "#f6faf6"
  surface: "#ffffff"
  ink: "#202b21"
  muted: "#485447"
  sage: "#305b3b"
  sage-soft: "#e1f0e1"
  graphite: "#26362a"
  dark-ink: "#f2f7f1"
  dark-muted: "#d1dfce"
  signal: "#c4dcb8"
  line: "#c6d2c3"
  warm: "#8a4b06"
  warm-soft: "#fbf0dc"
typography:
  display:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 4vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  display-narrow:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.85rem, 8.2vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 2.4vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  question-title:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 1.75vw, 1.55rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.65
  chip:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.06em"
  action:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontWeight: 700
    lineHeight: 1.4
  annotation:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.82em"
    fontWeight: 400
  counter:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    fontFeature: '"tnum"'
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.action}"
    padding: "0.8rem 1.05rem"
  button-primary-hover:
    backgroundColor: "{colors.sage}"
  button-light:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    padding: "0.8rem 1.05rem"
  button-light-hover:
    backgroundColor: "{colors.surface}"
  text-link:
    typography: "{typography.action}"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  topic-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  topic-drawing:
    backgroundColor: "{colors.canvas}"
  topic-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.sage}"
    typography: "{typography.chip}"
    padding: "0.1rem 0.45rem"
  topic-chip-live:
    backgroundColor: "{colors.warm-soft}"
    textColor: "{colors.warm}"
  topic-control:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    size: "44px"
    padding: "0"
  topic-control-hover:
    backgroundColor: "{colors.sage-soft}"
  topic-control-disabled:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
  topic-counter:
    textColor: "{colors.ink}"
    typography: "{typography.counter}"
  project-archive:
    textColor: "{colors.ink}"
---

# Design System: Blueprint Field Notes

## Overview

**Creative North Star: "Blueprint Field Notes"**

A working architecture brief: calm stone surfaces, deep green graphite, restrained sage, measured rules, and generous humanist type, with one warm accent reserved for accountability: Live status, and the key moment of each work drawing. The identity is clear, architectural, and human rather than dashboard-like or dependent on decorative technology imagery.

The person and the thesis open the page: a small square portrait beside the name in the masthead, then the headline, one factual sentence, and the two samples a visitor can use now. The moving work wall, the controlled horizontal topic shelf, follows inside the first screen as the index of the portfolio: DocWiki and Oz Radio lead it, and it ends on an invitation to bring a workflow. A status chip states what each card is, and each card keeps its own scope line, so qualifiers stay specific instead of repeating as hedges. One ruled three-column section then sets out the questions behind the work with their write-ups and source, before the archive and the graphite contact close. Precision comes from hierarchy and readable descriptions, not simulated application chrome.

The work wall is the page's one authored motion feature. Each project card carries an original line drawing in one shared pen, and each drawing replays its idea in under five seconds when its card comes fully into view, while the shelf brakes and waits for it. Meaning never depends on the motion: every drawing reads completely as a still, text never moves, and Pause, reduced motion, or a page without JavaScript leave a calm, fully legible shelf.

**Key Characteristics:**
- Stone and sage with a graphite inverse surface; one warm pair marks Live status and each drawing's single accountability moment.
- Public Sans hierarchy with selective monospace: recording durations and the gallery counter.
- A portrait beside the name, a thesis opening, a drawing-led work wall in the first screen, a ruled three-column question section, and native disclosures.
- Eight inline SVG drawings in one pen: a static base that carries the meaning, an animated emphasis layer that only underlines it.
- Separately scoped projects with adjacent descriptions and provenance.

This refresh records the inline stylesheet and markup in `index.html` and the work-wall script `docs\assets\topic-showcase.js` after Phase 2 (the animated work drawings and the rewritten shelf), and Phase 3: the first work page, `work\oz-radio\index.html` (`/work/oz-radio/`), its share image `docs\assets\social\oz-radio.svg`, and the two homepage links that lead to it. The frontmatter owns reusable tokens; local, git-ignored `.impeccable\` sidecars may add rendering examples and extensions. Homepage-specific direction is the contract comment at the top of `index.html` (thesis, world, story, first viewport, form), and each work page carries its own; the composition described below is an observed application, not a template for every surface. The one template is the Work pages component, which later pages under `/work/` reuse.

## Colors

Stone + Sage is one restrained accent family supported by green-tinted neutrals, plus one warm accountability pair; it is not a multi-accent theme. Frontmatter values retain the stylesheet's canonical hex notation and custom-property names. The work drawings use the same custom properties as inline styles with hex fallbacks, so the page and its drawings cannot drift apart.

### Primary
- **Sage** (`sage`): thesis emphasis, question numbers, card scope lines, neutral chip text, gallery-control borders, the end-card arrow, primary-action hover, card hover borders, and focus outlines on light surfaces. In the drawings it is the pen of meaning: meaningful routes and node outlines, the animated emphasis traces and arrowheads, the travelling token, and secondary labels.
- **Soft Sage** (`sage-soft`): gallery-control hover, the end card's panel, and the light fills inside the drawings: actor panels, and highlights (a consulted system, a new index entry, a footnote chip) that are always painted under the text they mark.
- **Light Signal** (`signal`): the light action on the graphite contact field, not a general-purpose text color.

### Status and key moments
- **Warm** (`warm`): the text and border of the Live chip, and in every work drawing the 4-unit outline or mark of its one key moment. It measures 6.45:1 on the canvas, 6.80:1 on paper, and 6.02:1 on its own fill. Inside the drawings it is a stroke or mark, never a text fill: a key label stays ink on warm-soft.
- **Warm Soft** (`warm-soft`): the Live chip's fill, and the static fill under each drawing's key moment.

### Neutral
- **Stone Canvas** (`canvas`): the page background, including the opening; the ground of every work drawing and of its frame; the fill of a disabled gallery control.
- **Paper Surface** (`surface`): topic cards, neutral chips, gallery controls, the portrait's backing, light text on the primary action, and the neutral frames inside the drawings.
- **Green Ink** (`ink`): headings, body text, the hero's live links, the primary action's fill, gallery-control icons, the counter, and the primary labels of the drawings.
- **Muted Ink** (`muted`): supporting prose, card descriptions, the Oz Antenna status line, captions, disabled control icons, and boundaries on light surfaces; in the drawings, neutral connectors, base marks, and the "Illustrative" label.
- **Graphite** (`graphite`): the inverse contact field.
- **Inverse Ink / Inverse Muted** (`dark-ink`, `dark-muted`): primary and supporting text on graphite; inverse ink also supplies focus outlines on that surface.
- **Measured Rule** (`line`): section separators, list rules, card/image borders, the portrait border, the neutral chip border, the disabled control border, and the neutral frames inside the drawings, which never carry meaning on their own; not a text color.

**The One Accent Family Rule.** Sage is the one structural accent family: its variants emphasize meaning and tonal structure, and no project gets a color of its own. The warm pair marks accountability and nothing else: the Live chip on the two samples a visitor can use now, and exactly one key moment per work drawing (the check, the citation, the person, the stop). It is never decoration, a hover state, a per-project color, or a second highlight inside a drawing.

One-off footer, favicon, browser-theme, and storyboard frame-ground colors are not additional palette tokens. Sidecar tonal ramps are synthesized swatch previews, not approved text/background combinations or an implemented color scale. WCAG 2.2 AA remains a requirement, not a blanket certification of every existing pairing.

## Typography

**Display and Body Font:** Public Sans, with Segoe UI and sans-serif fallbacks.
**Label/Mono Font:** IBM Plex Mono, with a monospace fallback, used for recording durations and the gallery counter.

Both families are self-hosted in `docs\assets\fonts` (Latin and Latin Extended subsets, SIL Open Font License files alongside), so no font request goes to a third party. The work drawings name the same Public Sans stack on their root, so their inline copies use the page's self-hosted face. The Agentic Platform slides use their own self-hosted families (Bricolage Grotesque, Instrument Sans and IBM Plex Mono) through `deck-fonts.css`.

**Character:** Humanist, direct, and generous at headline scale. Most labels stay in Public Sans; monospace is a selective annotation device, not the default for project names.

### Hierarchy
- **Display:** the `display` role sets the thesis at a 22ch measure, three lines at 1440px wide; `display-narrow` takes over at 720px and below, three lines at 390px and four at 320px. The sage emphasis on "stop for a human." is upright, not italic.
- **Headline:** the `headline` role sets the section heading "The ideas behind the work." (max 24ch); the contact close uses its own larger clamp (2.1rem to 3.3rem). There is no fixed mathematical type ratio.
- **Title:** the `title` role sets the work-card titles. `question-title` sets the three questions and the end card's line.
- **Body:** the `body` role carries prose, normally capped by the shared measure (70ch); the opening's lede is slightly larger (1.08rem).
- **Label:** the `label` role carries navigation and the work header's provenance and status lines. Other small captions are component-local, not additional scale steps.
- **Chip:** the `chip` role sets the status chips; CSS adds the uppercase.
- **Action:** the `action` role shares weight and leading across filled and text links; size inherits its context.
- **Annotation:** the `annotation` role sizes durations relative to their enclosing action and keeps them on one line.
- **Counter:** the `counter` role sets the gallery counter ("03 / 09") with tabular figures, so the controls never shift as the numbers change.

Heading tracking is role-specific: the thesis uses `display`, section headings use `headline`, work-card titles use `title`, and the questions use `question-title`. The work header's "Explore the work" is a compact 1.5rem (1.35rem at 720px and below). Card descriptions use 0.95rem with 1.55 leading, and scope lines 0.875rem. These are local component values, not a new global ramp. Headings balance their wraps and break a word only when it cannot fit (`overflow-wrap: break-word`). Card copy hyphenates automatically only at 720px and below, and then only words of at least eight letters, keeping four before and three after the break (`hyphenate-limit-chars: 8 4 3`); wider cards use manual hyphenation only. The contact heading hyphenates automatically, so its large words never break raw under 200% text. Card copy and actions can still break a long word rather than overflow under text enlargement. Labels inside the drawings follow their own scale in view-box units (see Work drawings).

**The Readable Annotation Rule.** Supporting text explains the evidence; keep it readable and subordinate without turning it into decorative microtype.

## Layout

The reusable grammar is a centered, generous reading shell with horizontal rules. The shell is `min(100% - 4rem, 74rem)`; paired columns remain in the archive groups (`0.7fr 1.3fr`, 3rem gap) and the contact close (`1.1fr 0.9fr`, 4rem gap). Repeated spacing includes 1rem text separations, 1.5rem column and list spacing, and 3.5–4rem major section breathing room. No separate named spacing scale is defined.

The homepage opens with the masthead: the 64px portrait beside the name above "AI Solution Engineer at Microsoft", and one row of links, Work · Ideas · Deck · Archive · Let's connect ↓. The opening (`#opening`) sets the headline "Agents that act for you, cite their sources, and stop for a human." with its sage emphasis, the supporting sentence, "Live now: DocWiki ↗ · Oz Radio ↗", and a "Let's connect ↗" button. A rule then opens the work wall (`#work`). Its header carries "Explore the work", the ink provenance line "Personal open-source samples, not Microsoft products.", the muted, unlinked "Oz Antenna · in development · not public", and, pushed to the right edge, the gallery controls, in a row that wraps when space runs short or text is enlarged. The shelf sits in the first screen: at 1440 × 900 the top of `#work` measures ≈351px, with three full cards and a ≈92px peek of the fourth; at 1366 × 657 both lead cards' Live chips and titles stay above the fold; at 390 × 844 the work heading (≈520px), the controls row, and the top of the first drawing (≈690px) are inside the first screen.

The shelf holds nine cards: DocWiki and Oz Radio first, at the same width as the rest, then voice agents for the full booking journey (Horizon Famille), agent access on behalf of the user (naming Salesforce and ServiceNow), Foundry Hosted Agents, agent memory, agentic software delivery, The Agentic Platform, and the end card, "Your workflow", which leads to the contact close. "The ideas behind the work." (`#ideas`) follows with the three questions as `#horizon`, `#identity`, and `#judgment`, then the native archive (`#archive`) and the graphite contact close (`#contact`). Empty alias spans keep earlier links working: `#flagships` in the work heading, and `#idea-work`, `#idea-identity`, and `#vision` inside the three questions.

The opening is a two-column grid while its container is wider than 56rem: the headline (max 22ch) and a 21.5rem column that stacks the lede, the proof line, and the button, with 0.5rem row and 2.5rem column gaps; the headline and the button share their bottom edge. The work wall spans the shell below it with no side gutters: the controls live in the header, so the track's edges are the shell's and nothing covers a drawing or a description. Cards share one width, `clamp(16.5rem, 27vw, 21.5rem)` (344px at 1280px and wider), with 1.25rem gaps, and the shelf always shows a peek of the next card rather than ending flush on a card edge. Directly under the track, as the last element of `#work`, one line leads to the first work page: "See Oz Radio take a spoken question, frame by frame →" (`p.topic-more`, 0.9rem, bold; its link is an inline block padded to a 44px-tall target and carries no `data-flagship`). It adds nothing above the cards. The three questions form a ruled three-column row below the gallery.

- **Opening container (max-width: 56rem):** a container query on `#opening` stacks the headline, lede, proof line, and button in one column. At default text size this applies to viewports up to about 960px; enlarged text triggers it on wider screens.
- **Intermediate (max-width: 1000px):** the three questions stack into ruled rows.
- **Two-card band (721px to 979px):** cards use `clamp(16.5rem, (100% - 1.25rem) / 2.35, 21.5rem)`, so two full cards and a peek of the third are visible; from 980px the shelf shows three full cards and a peek.
- **Short screens (min-width: 721px and max-height: 820px):** the masthead (4.5rem minimum height, 56px portrait), the opening's padding, and the work header's margin tighten, and covers switch to 16:9. A drawing keeps its whole view box, centred on the canvas ground of the wider frame.
- **Very short screens (min-width: 721px and max-height: 700px):** the opening's padding (1.25rem) and row gap, the work section's top padding, the work header's margin, and the card copy's gap and top padding tighten further, so at 1366 × 657 both lead cards' chips and titles stay inside the first screen. Only spacing changes; the masthead and opening markup stay as they are.
- **Narrow (max-width: 720px):** the shell's total horizontal inset becomes 2.5rem. The masthead stacks the 48px portrait and name above one row of five links spread across the width; below 380px the link gaps tighten, and the row wraps to two lines at 320px. The headline spans the full width, followed by the lede, the proof line, and the button. The gallery controls take their own right-aligned row directly above the track. The track runs full-bleed: it extends 1.25rem into each shell inset, with matching scroll padding, so cards align with the text column and the next card peeks. Cards are `min(82vw, 21.5rem)` with 12px gaps, keep 8:5 drawing frames, and snap to their start edge in the step and manual modes (`scroll-snap-type: x mandatory`).
- **Opening, work, then ideas:** the opening precedes the work wall, and the wall precedes the questions, at every width.
- **Without JavaScript:** a `<noscript>` style in the head turns the shelf into a wrapped grid (auto-fill columns of at least 18rem, one column at 720px and below) and removes the controls, so every card is fully visible when it receives focus. Visitors with JavaScript never receive that layout, so it causes them no layout shift.
- **Progressive density:** archive groups, the contact close, and the footer stack. Only the topic shelf intentionally scrolls horizontally; the page itself must reflow.

**Work pages** (`/work/<slug>/`) keep the shell and, with the shared CSS block, the homepage's 820px short-screen, 720px, and 380px rules for the shell inset, masthead, portrait, contact close, and footer. Their own layouts answer to container queries in rem, so enlarged text reaches the narrower arrangement on wider screens. The opening (`#opening`) is two columns while its container is wider than 56rem, as on the homepage: the title block and a drawing column of at most 30rem (`minmax(0, 1fr) minmax(0, 30rem)`, bottom-aligned, 2rem row and 3.5rem column gaps); below that the drawing follows the text at the same maximum width. The storyboard sets each frame above its caption below 40rem, beside it in ruled rows from 40rem to 66rem (a `min(40%, 330px)` frame column and a 2rem gap), and from 66rem in three columns of at most 330px spread across the shell, where each step spans two subgrid rows: although the captures are 571px and 582px tall, every frame box takes the row's height, so the outlines end together and the captions share one top edge. From 66rem the rail (the text sections and the closing actions) reuses those three columns: each heading in the first, its copy across the second and third. At 720px and below the title takes `display-narrow` and the lede 1rem; there and on short screens the opening's padding tightens.

## Elevation & Depth

The page chrome is flat. Rules, the canvas and graphite fields, and the soft-sage end-card panel establish hierarchy without a shadow scale. Topic cards and the portrait use one-pixel borders, not floating-panel effects. Depth inside an original artwork or public slide belongs to that image, not to the page's CSS elevation system; the work drawings themselves are flat line drawings, with no shadow, gradient, or perspective.

**The Flat Field Notes Rule.** Let rules, spacing, and tonal fields organize the page; let the work drawings carry visual variety.

### Topic-shelf motion

The work wall is the single authored motion feature. `docs\assets\topic-showcase.js` moves the native scroll position and decides when a drawing plays; CSS draws the plays (see Work drawings). It uses no library, no cloned cards, no jumping loop seam, and no analytics: neither the drift nor the plays send anything. The root carries `data-enhanced`, `data-mode`, and `data-motion`; the playing card carries `data-play`.

**Modes.** `drift` above 720px with motion allowed: the track glides at 20 CSS pixels per second and turns back at either end. `step` at 720px and below with motion allowed: one forward pass of snapped steps. `manual` under `prefers-reduced-motion: reduce`, at every width. Media-query changes switch the mode live, keep an explicit Pause, and restart the new mode's motion (a drift waits 1.2s first).

| State | Entered by | Drift or step | Arrival plays | Hover and focus replays | Motion button |
|---|---|---|---|---|---|
| `running` | the start, Resume | yes | yes, braking first | yes | "Pause motion" |
| `playing` | an arrival play (a sub-state of running) | stopped | this card | yes, interrupting | "Pause motion" |
| `hover` | a mouse or pen over the track | held | yes | yes | "Pause motion" |
| `browsing` | physical horizontal input, the arrows, the track's keys, keyboard focus in the shelf | no, until Resume | yes, for revealed cards | yes | "Resume motion" |
| `paused` | the Pause button | no | no; a play in progress snaps to its final frame | no | "Resume motion" |
| `idle` / `ended` | two desktop round trips without input / the end of the phone pass | no | no | yes | "Resume motion" |
| `suspended` | a hidden tab, or less than half the shelf in view; restores the previous state | no | no; a play in progress snaps | no | unchanged |
| `manual` | reduced motion | never | never | never | slot reserved, hidden |

**Arrival plays.** A card's drawing plays when its frame becomes fully visible inside both the track and the window (2px tolerance), computed from cached geometry and one intersection observer, never from per-frame layout reads. A cut card never plays. A play stops at once, snapping to its final frame, when its card stops being fully visible or the track is moved by hand or by a control; the settle gate then decides the next play. One drawing plays at a time: cards revealed together (at load, or when the drawings come fully back into the window) play one by one in reading order from a first-in, first-out queue, and a single later arrival takes one latest-wins slot; a card that arrived while the drawings were cut by the window still plays when they return, subject to its pass and cooldown. A hover or focus replay interrupts. **Settle gate:** a card revealed by any scroll other than the drift (arrows, keys, swipe, wheel, a phone step) waits until the scroll has been still for 150ms and its visibility has been re-checked; the counter and the live region use the same gate. **Brake, then play:** the drift brakes to a stop exactly where the next eligible card becomes fully visible (a 400ms ease-out, about 4px at 20px/s), the drawing plays, the shelf holds still for the play plus 0.6s, then it accelerates again over 800ms. The track never moves during a play.

**Timings.** The first play starts 1s after the shelf is at least half in view and the fonts are ready (the font wait is capped at 1s); sequential plays are 0.6s apart. The drift starts 1.2s after the last initial play and never earlier than 8s after load; a Pause and Resume during the initial plays keeps both rules and the remaining lead cards still play in order. It rests 3s at the end and 2s at the start before turning back. A card plays automatically at most once per pass (one direction) and never within 60s of its last play; while browsing, a card the visitor reveals again may play once that 60s cooldown has passed. A 400ms hover or keyboard-focus dwell on a card replays its drawing, never within 3s of that card's last play. A play that has not finished after 5.5s is ended. After two round trips without input (hovering the track counts as input) the desktop drift stops in `idle`. On phones the pass plays the snapped card, leaves 5s of reading time, then steps to the next card with native smooth scrolling, and ends on "Your workflow" (`ended`); a skipped play still leaves the reading time, and Resume at the end restarts the pass from the first card.

**Pause, browsing, and hover.** Pause stops the drift or step and every play and replay at once (a playing drawing snaps to its final frame) and survives tab switches and media-query changes until Resume. Browsing is detected from physical input only: a touch or pointer drag of more than 10px that is mostly horizontal, horizontal or Shift wheel input, the arrow buttons, ←/→/Home/End on the track, and keyboard focus entering the shelf. Scroll events never count, because the script's own scrolls and snap corrections carry a programmatic token, and a scroll the script did not make (find in page, a focus scroll) is adopted rather than fought. Browsing stops the drift or step until Resume, but cards it reveals still play after the settle gate, and queued plays, the load sequence included, still run for cards that stay fully visible: input before the first play never cancels it. Hover, by mouse or pen only, holds the drift or the phone step while the pointer is over the track and nothing more; a step resumes its reading time when the pointer leaves. Vertical page scrolling is never browsing; it only suspends the motion while less than half the shelf is in view. Pause, a mode change, and a suspension stop a scripted move in flight (a phone step, an arrow press) at once on the nearest card position, so no two cards are left half cut; manual input simply takes over.

**Arrows, keys, focus, and resizing.** Previous and Next step through slots computed from the real card positions plus the true end of the track, so a press never moves only a few pixels; ←/→ and Home/End on the focused track do the same. Moves are smooth when motion is allowed and instant under reduced motion. Keyboard focus on a card brings it fully into view without animation, and a focused card stays fully visible after a resize; otherwise resizing keeps the first visible card and its clipped fraction.

**Visibility.** Everything suspends while the tab is hidden or less than half the shelf is in view, and a drawing plays only while its frame is fully inside the window. On return the clocks and reading timers restart with no catch-up burst. Leaving the page stops every play, timer, and scroll in flight, and a page restored from the back/forward cache re-measures and starts clean. Geometry is cached: it is measured right after layout (the first measure waits for the first resize-observer callback, so starting the script forces no layout), when the fonts are ready, and on return from that cache, then reused by every frame. The animation-frame loop runs only while gliding or braking, with the frame delta capped at 64ms; there is no `will-change` or `content-visibility`.

**Reduced motion and no JavaScript.** Reduced motion is the `manual` shelf at every width, with the same layout and counter: no drift, steps, plays, or replays (the drawings show their final frames), instant arrows and keys. The Pause button keeps its slot, hidden and unfocusable (`visibility: hidden`), so a live preference change never reflows the controls, and the global reduced-motion rule also removes CSS animations and transitions. Without JavaScript the shelf is the wrapped grid described under Layout, with the controls removed and every drawing at its final frame. There is no autoplay video or audio, no entrance effect, and no animation gate hiding content: the meaning of every drawing is on screen before, during, and after a play.

## Shapes

Square-edged paper, straight separators, and rectangular actions are the prevailing form. One-pixel rules divide sections and rows; they are deliberate native editorial devices, not container chrome to remove. The portrait and the status chips are square too. There is no rounded-card or pill scale.

The gallery controls are 44px squares. The work drawings speak the same language: square nodes and a square token, orthogonal routes with butt caps, separate triangular arrowheads, and no rounded node or circular node; curves appear only inside small glyphs, such as a microphone.

The focus outline has a small local corner rounding (2px); this is a focus detail, not a surface-radius token. The favicon is an identity asset, not a component-shape precedent.

## Components

### Buttons and text links

Direct and confident. Filled actions are square anchor links using the `button-primary` and `button-light` variants. The shared action geometry uses a minimum height (44px), an inline arrow gap (0.55rem), and the frontmatter's padding. The primary variant carries the opening's "Let's connect ↗"; the light variant belongs on graphite; text links remain quieter and visibly underlined.

Primary hover changes to sage; light-action hover changes to paper. Ordinary links thicken their underline; topic cards underline their title and take a sage border on hover. The gallery's icon buttons are described under Work gallery controls. There are no application forms or loading spinners to infer; status chips are labels, not controls.

Keyboard focus on links, buttons, the gallery track, and the archive summary uses a 3px sage outline with a 5px offset. Inside the shelf the ring is drawn inward, because the track has no gutter to hold an outer ring: card links draw it 4px inside their border, and the track 3px inside its edge. Every link, button, and summary keeps a 0.75rem vertical scroll margin, and the page a 0.75rem scroll padding at the top and bottom (`scroll-padding-block`), so a focused element never lands flush against either edge of the viewport with its ring cut. Anchor targets (`[id]`) keep a 1.25rem top scroll margin, so with that padding they still land 2rem below the top of the window. Links inside the graphite contact field use inverse ink. The ring color follows the surrounding surface, not the link's text color: a white label on a dark button must not create a white ring on the light canvas. Sidecar snippets reproduce these surface-aware states; verify any new pairing in context.

### Navigation

A compact portrait, name and role, then five short links: Work · Ideas · Deck · Archive · Let's connect ↓. The short labels keep the row on one line on a 390px phone; "Deck" adds a visually hidden "(The Agentic Platform)" so its accessible name stays explicit, and the stronger "Let's connect ↓" leads to the contact close. Navigation links provide 44px minimum targets in both directions; the masthead is not sticky. On narrow screens the name sits above the row without a hamburger or script dependency. A focus-revealed skip link precedes the header.

### Opening and portrait

The masthead puts the person beside the name, and the opening states the thesis. The h1 reads "Agents that act for you, cite their sources, and stop for a human.", with "stop for a human." in upright sage. The portrait is the owner's own photograph in a `<picture>` inside the brand link: WebP with a JPEG fallback, both 296 × 296 with metadata stripped, shown as a square at 64 CSS px (56px on short screens, 48px on phones). It has a one-pixel rule border on a paper backing, empty alternative text because the visible name beside it already names the person, explicit width and height, and no lazy loading or fetch priority; the headline remains the largest contentful paint. The lede is one factual sentence: "I build and share enterprise agent patterns where business workflows, user identity, and human decisions meet." The muted proof line "Live now: DocWiki ↗ · Oz Radio ↗" sets two bold ink links padded to 46px-tall targets, and the primary "Let's connect ↗" button opens LinkedIn (`rel="me"`, with "on LinkedIn" in its accessible name). The role line stays factual; the opening adds no title, years, counts, or quotes.

### Status chips

A chip above each work title states what the card is: Live, Sample, Video 6:19, or Deck. The markup keeps sentence case; the `chip` role sets the size and tracking, and CSS adds the uppercase. Chips are square, with `0.1rem 0.45rem` padding and a one-pixel border. The neutral chip is sage text on paper with a rule border. The Live chip (`.topic-chip-live`) is warm text and border on warm-soft, and only DocWiki and Oz Radio, the two samples a visitor can use now, carry it. Chips replace hedges, not scope: each card keeps its claim-specific scope line. Chips sit inside the card link as labels, not filters or controls, and open its accessible name ("Live DocWiki: all your documents in one wiki"); the end card has none.

### Lead cards

DocWiki and Oz Radio lead the work wall as its first two cards (`#flagship-docwiki`, `#flagship-oz-radio`). They are ordinary topic cards, with the same width, anatomy, and hover, and they lead by position, by their Live chips, and by playing first at load, not by size: every card keeps one width so the shelf reads as one even sequence. Their titles pair name and outcome ("DocWiki: all your documents in one wiki", "Oz Radio: a presentation you can interrupt"); their scope lines keep the specific qualifiers ("Live sample wiki · fictional corpus · 37 sources · 854 evidence pages", "Live demo · AI avatar · capped daily"). DocWiki's description, its archive entry, and the README share one claim: all your documents in one wiki that staff can navigate and agents can query, cited to the page.

`data-flagship` sits on four links only: the two in the opening's proof line and the two lead-card links. The analytics beacon counts each activation as `flagship_click` with the product (`docwiki` or `oz-radio`) and the nearest id (`opening`, `flagship-docwiki`, or `flagship-oz-radio`), whether the link stays on this site or not. These are the "featured project links at the top of the home page" that the privacy notice describes.

### Topic cards and imagery

Each card is one linked visual, a status chip, a topic title, a concise description, and an explicit scope/format line. The card link takes its accessible name from the chip and title (`aria-labelledby`) and its description from the scope line (`aria-describedby`). Cards share height and align their scope lines; descriptions do not truncate. Every project card's visual is an original inline SVG drawing in the shared drawing frame (`.topic-image-drawing`, on the canvas ground); the homepage has no bitmap covers. Each drawing carries information, so each is its own image with a title and a description (see Work drawings). Frames are 8:5 at every width except short desktop screens, where they are 16:9 and the drawing keeps its whole view box instead of cropping labels.

The order is DocWiki (Live), Oz Radio (Live), voice booking (Video 6:19), agent access on behalf of the user (Sample), Foundry Hosted Agents (Sample), agent memory (Sample), agentic software delivery (Sample), The Agentic Platform (Deck), and the end card.

The preferred capability titles include "Agent access on behalf of the user",
"Foundry Hosted Agents", and "Voice agents for the full booking journey".
The voice example's description remains explicitly a recorded booking-change
scenario with mock systems, not a claim of new booking or payment capabilities.

The eight drawings, each with its one warm key moment:

| Card | What the drawing shows | Warm key moment |
|---|---|---|
| DocWiki | The claim "Export above the limit by more than 1 MW for more than 5 minutes will be reported." underlined line by line; its footnote 1 traced to "p. 1 · cited line" on the source page. | The "✓ quote verified" badge. |
| Oz Radio | An "AI avatar" presentation paused at "Slide 1 of 5" for a raised hand asking "What is the difference between a model and an agent?"; no face, and the final frame stays paused. | The citation: slides 2 and 3, and "From slides 2 and 3". |
| Voice booking | A faceless voice glyph; a token visits the dashed mock systems CRM, ERP, and Knowledge base, then the route "Outside its mandate" halts at a stop bar. | The "Teams approval" gate. |
| Agent access on behalf of the user | Alice's token stops at the Gateway, which exchanges it for one token per system; square MCP servers sit in front of ServiceNow and Salesforce. | "Last modified by Alice". |
| Foundry Hosted Agents | A request reaches the Terminal inside a "Per-session sandbox", a file lands in "$HOME", and "Turn 2" of the same session takes it to the Browser. | The Browser's check: a verification step, not a guaranteed result. |
| Agent memory | "Session" runs "end session", the lesson is written to "[[lessons]]", linked into "index.md", and read at the start of the next session: plain Markdown, not model training. | "Next session". |
| Agentic software delivery | "Issue", then "Plan approval" (passed), then a "Pull request" with its "Required checks"; the token waits before the last stop and nothing is merged. | "Human review". |
| The Agentic Platform | Slide 1 of the deck only: "Experiences" above "Every agent gets a computer" and "Shared capabilities". | The "One governance" frame, drawn last, as in the deck. |

The end card has no drawing and never plays. The eight drawings weigh 3.8–5.7KB each (about 37.5KB together) and are parsed with the page. They illustrate an idea; they are not small-screen reading copy or evidence of production validation.

### Work gallery controls

One cluster at the right edge of the work header, before the track in the DOM: Pause, Previous works, the counter, Next works, in a labelled group (`role="group"`, "Work gallery controls") with 8px gaps. At 720px and below the cluster takes its own right-aligned row directly above the track.

- **Buttons:** native, icon-only 44px squares with a one-pixel sage border on paper and ink icons; hover fills them with soft sage. The icons are 1.25em, so they grow with enlarged text, and hidden from assistive technology; each button names the track in `aria-controls`.
- **Pause:** its accessible name is "Pause motion", and "Resume motion" in the paused, browsing, idle, and ended states, when the pause bars swap to a play triangle; it has no `aria-pressed` and no visible text. Under reduced motion its slot stays reserved but hidden.
- **Previous works / Next works:** at either end of the track the arrow takes `aria-disabled="true"`, ignores presses, and keeps focus; it shows a rule border, a muted icon, and the canvas fill.
- **Counter:** "03 / 09" names the last fully visible card ("09 / 09" at the true end, the snapped card on phones), set in the `counter` role. The visible text is hidden from assistive technology, and a visually hidden twin reads "Works 1 to 3 of 9"; it is not live. When no card is complete, mid-gesture, the counter keeps its last value.
- **Live region:** one polite, atomic, visually hidden region speaks the counter's twin only after an arrow or key move settles, and "Motion paused" or "Motion resumed" on Pause and Resume. The drift and the plays are never announced.
- **Before and without the script:** until the script enhances the shelf the cluster is hidden but keeps its space; without JavaScript it is removed.

The track is a focusable region ("Scrollable portfolio topics"; the script adds `tabindex="0"`) holding a `role="list"` of cards, with overscroll contained. Its scrollbar is hidden; navigation is the arrows, swipe or trackpad, and the keyboard.

### Work drawings: the One Pen grammar

All eight drawings are drawn with one pen, and a new drawing must be too. Units below are view-box units.

- **Sheet:** a 640 × 400 view box on the canvas ground, an 8-unit grid, and 24-unit margins. The field spans x 24–616 and y 24–328; the bottom band (y 336–392) holds "Illustrative" at (24, 376), 32 units, weight 400, in muted ink, and, when the drawing has a key badge, that badge aligned right to x 616. Compositions read left to right and top to bottom: actor, mechanism, then the key moment.
- **Two layers:** the static **base** holds every label, node frame, connector, arrowhead, check mark, mock dash, and the warm-soft fill of the key moment, so the still drawing reads completely at any frame. The animated **emphasis** layer, painted after the base, holds 3–4-unit sage traces over connectors, sage arrowheads, 3-unit sage node outlines, the travelling token, light highlight fills painted under text, and the 4-unit warm outline or mark of the key moment. The static drawing is the final frame: base plus full emphasis.
- **Strokes:** neutral frames are 2-unit rules on paper and never carry meaning alone; meaningful nodes and routes are sage, neutral connectors 2-unit muted; mock systems are 2-unit sage dashes (`8 6`) in the base, never drawn; the key moment is 4-unit warm on warm-soft. Corners are square and routes orthogonal, with butt caps and separate 10-unit triangular arrowheads (no markers); labels keep at least 6 units of clearance from dark strokes and moving marks.
- **Token:** the signature 16-unit sage square travels along a connector or stamps at a hop (a request, an identity, a work item), always beside labels, never across them.
- **Type:** Public Sans. Primary labels are 36 units, weight 600–700, mostly in ink; secondary labels 32 units in ink, muted, or sage; nothing is smaller than 32 units. At most six text elements, "Illustrative" included (a verbatim multi-line quote counts as one). Frames are at least 1.25 times their label's width, so WCAG 1.4.12 text spacing never spills, and no `textLength` is used. Text is ink, muted, or sage only.
- **Motion vocabulary:** shared CSS pasted verbatim from the drawing toolkit between `/* wk:motion start */` and `/* wk:motion end */` in `index.html`, so it can be re-pasted and compared. Five classes, one per animated element (nest groups to combine): `wk-draw` (stroke-dashoffset; needs `pathLength="1"`), `wk-grow` (scale from `--sx`/`--sy` about `--o`), `wk-travel` (translate from `--dx`/`--dy`), `wk-stamp` (opacity and a 0.92 scale, shapes only), and `wk-fade` (opacity). Each element's inline `--t` (delay after the rewind) and `--d` (duration) time it. Every play opens with a 0.25s rewind (`--wk-rewind`), in which the emphasis retracts, and then redraws, so a replay never jumps to blank. Play and rewind are distinct keyframes with explicit endpoints; the curves are `cubic-bezier(0.65, 0, 0.35, 1)` to draw and grow, `(0.45, 0, 0.55, 1)` to travel, `(0.2, 0.8, 0.2, 1)` to stamp, `(0.2, 0, 0, 1)` to fade, and `(0.4, 0, 1, 1)` to rewind. Timing properties reset on every SVG descendant, so they never leak into nested groups, and an animated element never carries a `transform` attribute. Plays run only under `prefers-reduced-motion: no-preference` and only while the card carries `data-play`; removing it snaps the drawing to its final frame. Each card's text sits on its own opaque paper backdrop (`.topic-copy` takes the surface colour), so a play's compositing never changes the antialiasing of the card's title and description; only the playing drawing's own labels may briefly render in greyscale.
- **Budgets:** at most 5s per play including the rewind, the five-second bound of WCAG 2.2.2 (the eight run 4.15–4.8s); the first beat after a 0.3s hold; at most 18 animated elements; at most 8KB per file. The warm key covers at most about 6% of the canvas, with two documented exceptions where the verbatim wording or the deck's own shape needs more: the identity drawing's two-line "Last modified by Alice" badge (about 10%, kept on two lines so the 1.4.12 spacing test never runs it into "Illustrative") and the platform drawing's frame-shaped "One governance" key (about 8% plus its outline). It is present in the static frame, lands at 60–85% of the play, and leaves at most 1s of motion after it.
- **Contract:** each drawing is a file, `docs/assets/work/<slug>-cover.svg`, inlined in `index.html` identical to the file apart from a uniform indentation; a fix goes into the file and is then re-inlined. The root has the 640 × 400 view box, `role="img"`, `aria-labelledby` pointing to its own `<title>`, `aria-describedby` pointing to its `<desc>`, `focusable="false"`, and the Public Sans stack. Every id carries the drawing's prefix (`dw-cover-`, `ozr-cover-`, `voice-cover-`, `identity-cover-`, `foundry-cover-`, `memory-cover-`, `sdlc-cover-`, `platform-cover-`) and is unique on the page. The description starts "Illustrative drawing:" and quotes every label. No `<style>`, script, `foreignObject`, image, marker, or external reference; colors are inline styles from page tokens with hex fallbacks (`style="fill:var(--sage,#305b3b)"`). Every word is verbatim, in English, from a public source: the sample, its README or deck, or this site's own copy. Nothing shows a face: avatars and people are faceless glyphs or outlines.
- **Checks:** Phase 2 verified each drawing on Chromium, WebKit, and Firefox with the drawing toolkit's `render.py`: the contract lint; only stroke-dashoffset, transform, and opacity animate (read from the live keyframes); the 5s and element budgets; text pinned and readable at every 250ms frame, glyphs untouched and surroundings at least 4.5:1; the play starts and ends on the static frame; the rewind is visible; reduced motion means no animation; 1.4.12 spacing holds. `inline_svgs.py` verified the inline copies (identical to the files, ids unique page-wide, no bitmap covers). The toolkit lives outside this repository; a new or changed drawing must pass the same checks before it ships.

**The Pinned Meaning Rule.** Meaning lives in the static base. A drawing must read completely with motion off, mid-play, and at its final frame; motion only emphasizes what is already there.

**The Still Text Rule.** Text never animates and is never covered. Only stroke-dashoffset, transform, and opacity animate, never color, and no moving mark crosses a label.

**The One Warm Moment Rule.** Each drawing has exactly one warm group, its accountability moment (the check, the citation, the person, the stop); it lands late in the play and stays in the final frame.

### Image assets

| Asset under `docs/assets/` | Kind and source |
|----------------------------|-----------------|
| `portrait.webp`, `portrait.jpg` | The owner's own portrait, 296 x 296, metadata stripped. The masthead shows it beside the name at 64 CSS px (56 px on short screens, 48 px on phones). |
| `work/docwiki-cover.svg` | DocWiki drawing. The claim and its footnote come from the public [DocWiki sample wiki](https://docwiki.ozgurkarahan.com/) (fictional corpus); "quote verified" is the badge wording of the [DocWiki README](https://github.com/ozgurkarahan/docwiki); "p. 1 · cited line" follows its page-cited footnotes. |
| `work/oz-radio-cover.svg` | Oz Radio drawing. "Slide 1 of 5", the question, and "From slides 2 and 3" come from the [Oz Radio live demo](https://ozgurkarahan.com/oz-radio/); the raised hand illustrates the [README](https://github.com/ozgurkarahan/oz-radio)'s voice Q&A; "AI avatar" is the card's own wording. No face; the presentation stays paused. Also inlined, static, in the opening of `/work/oz-radio/`, and nested at 0.75 scale in its share image. |
| `work/voice-cover.svg` | Horizon Famille drawing; replaces the Phase 1 inline voice diagram. "CRM" and "ERP" come from the [Horizon Famille README](https://github.com/ozgurkarahan/horizon-famille) ("live (mock) CRM/ERP systems"); "Knowledge base", "Outside its mandate", and "Teams approval" from this page's own copy. Mock systems stay dashed, a consulted system is shaded rather than checked, and the drawing ends at the gate: no approval, discount, payment, or booking is shown. |
| `work/identity-cover.svg` | Agent access drawing. "Agent", "Gateway", and "Last modified by Alice" come from the public [Salesforce identity sample](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation) README and [Identity propagation, explained](https://ozgurkarahan.com/identity-propagation/); Alice is the sample's fictional user. Hops run Agent, Gateway, MCP server, system, with one exchanged token per system; no refused write is shown. |
| `work/foundry-cover.svg` | Foundry Hosted Agents drawing. "Per-session sandbox", "Terminal", "$HOME", "Turn 2", and "Browser" come from the [runtime's README and architecture](https://github.com/ozgurkarahan/foundry-openai-coding-agent). Turn 2 belongs to the same session; the check marks a verification step, not task success. |
| `work/memory-cover.svg` | Agent memory drawing. Every label comes from the [AI Agent Memory](https://github.com/ozgurkarahan/ai-agent-memory) README; generic page names, no private wiki content. |
| `work/sdlc-cover.svg` | Agentic software delivery drawing. The stops follow the public [Agentic SDLC lifecycle deck](https://ozgurkarahan.github.io/agentic-sdlc-demo/slides/agentic-sdlc-lifecycle.html) ("plan approval", "required checks", "human review"); a procedure, not results, and nothing is merged. |
| `work/platform-cover.svg` | The Agentic Platform drawing: the labels and glyphs of slide 1 of [The Agentic Platform](https://ozgurkarahan.com/agentic-platform/) deck, with no product names or dates; a conceptual presentation, not a deployed platform. |
| `topics/identity.webp` | Detail of the public [Salesforce identity architecture](https://raw.githubusercontent.com/ozgurkarahan/salesforce-meta-tool-identity-propagation/master/docs/diagrams/azure-architecture.png); identifying/deployment regions omitted. Used only by `/identity-propagation/`; no longer shown on the homepage. |
| `topics/runtime.webp`, `topics/memory.webp` (with `topics/memory.svg`), `topics/delivery.webp`, `topics/platform.webp` | The Phase 1 bitmap covers: a runtime-guide architecture excerpt, an original linked-Markdown illustration with its editable source, an Agentic SDLC presenter slide, and an Agentic Platform lifecycle slide. Retained on disk but no longer referenced by any page. |
| `social/home.svg`, `social/home-2026-10-19.png` | The homepage share image, 1200 x 627: name and role, the headline beside the portrait, and "Live now: DocWiki · Oz Radio". `home.svg` is the editable source, set in the self-hosted Public Sans; the PNG is its metadata-free export. |
| `social/oz-radio.svg`, `social/oz-radio-2026-10-20.png` | The `/work/oz-radio/` share image, 1200 x 627: name and role, the title "Oz Radio: a presentation you can interrupt" beside the drawing's final frame (`work/oz-radio-cover.svg` without its title and description, nested at 0.75 scale), and "Live demo · AI avatar · capped daily"; no portrait. `oz-radio.svg` is the editable source, set in the self-hosted Public Sans; the PNG is its metadata-free export. |
| `flagships/docwiki-evidence.webp` | Unretouched crop (page px 80,716–1180,871: the four instruction bullets) of the evidence-sidecar page image `src-867a6c78f5b5/p0001` from the public [DocWiki](https://github.com/ozgurkarahan/docwiki) fictional sample release (run 2026-10-18); lossless WebP 1100 x 155. Retained but no longer referenced by the homepage; kept for the planned DocWiki case page (Phase 3). |
| `flagships/oz-radio-1-presenting.webp`, `-2-question.webp`, `-3-answering.webp`, `-3-answering-660.webp` | Crops of one anonymous session of the public [Oz Radio](https://github.com/ozgurkarahan/oz-radio) live demo, 18 October 2026 (UTC), captured by a scripted Playwright run. The question was spoken by a synthetic test voice and transcribed by the app; the answer was generated live ("From slides 2 and 3"). The only additions are the baked "AI avatar / synthetic voice" chip and the resize to 330 px (frame 3 also 660 px). The presenter is an AI-generated photo avatar ("Sofia", confirmed by the owner) animated by Azure AI Speech. The `/work/oz-radio/` storyboard shows the three 330 px files, never cropped or upscaled; the 660 px frame 3 is retained but unused. |
| `horizon-approval.webp` | Retained legacy 548 x 183 crop of the [public approval image](https://raw.githubusercontent.com/ozgurkarahan/horizon-famille/master/slides/html/assets/public/manon-approval.png), crop box `(68, 429, 616, 612)` from 660 x 635 pixels. No longer used in the first card; its existing public asset path is preserved. |

The WebP and JPEG exports contain no EXIF/XMP/ICC metadata, and the share PNGs carry no text chunks. Provenance records the source and treatment; it does not invent license claims or turn a conceptual cover into a verified architecture.

### End card

The shelf ends on an invitation rather than a last project. "Your workflow" has no chip; its image area is a soft-sage panel with "Bring a workflow." and a large sage arrow, hidden from assistive technology, and its copy repeats the contact close's sentence. The card links to `#contact` ("Let's examine the boundaries ↓"), takes its accessible name from its title alone, and carries no `data-flagship`. It has no drawing and never plays. The desktop drift rests 3s at the end of the track before turning back, and the phone pass ends on it.

### The ideas section

"The ideas behind the work." (`#ideas`), introduced by "Three questions I bring to enterprise AI.", replaces the former question links, case studies, judgment field, idea list, and lab with one ruled three-column row. Each column is an article (`#horizon`, `#identity`, `#judgment`): an h3 whose sage tabular number (01–03, hidden from assistive technology) sits above the question; a bold stance in ink ("A task, not just an answer.", "The caller's identity matters.", "A capable agent also needs a stop line."); one muted paragraph; a plain list of bold links with generous vertical padding; and, where a boundary applies, a scope note under a rule. One-pixel vertical rules divide the columns; at 1000px and below they stack into ruled rows.

01 links the Horizon Famille call (with its 6m19s duration), presentation, and source, with the demonstration scope beneath. 02 links "Identity propagation, explained", the Customer 360 Assistant, and the article on identity in Salesforce meta-tools, with the evaluation boundaries beneath. 03 links the approval workflow, The Agentic Platform presentation, and its source. The Entra, Salesforce, and ServiceNow repositories, the Foundry limitations, and the DocWiki deep links live in the archive; memory and delivery remain on their cards and in the archive.

### Project archive

A native `details` / `summary` disclosure with a square, bordered plus/minus indicator, under a visually hidden h2, "Project archive", that names the section. The indicator changes with the native open state; it is decorative to assistive technology. Ruled category groups contain source links and prose. The DocWiki entry keeps its deep links (a cited claim, its evidence page, and how it works), and the Foundry entry links its limitations. The DocWiki and Oz Radio repository links add a visually hidden "on GitHub". Private entries use generic names and an inline “Private repository” label, not invented badges or exposed source slugs.

### Work pages

A work page explains one public sample at `/work/<slug>/`: what it does, dated evidence of it working, where it stops, and one lesson. `/work/oz-radio/` (`work\oz-radio\index.html`) is the first; the rules below are the template for the next. Like the homepage, each page opens with its own contract comment (thesis, world, story, first viewport, form). A work page is in Read mode: a flat, ruled page read in order from the opening to the contact close, with no gallery, no animation, and no script besides `telemetry.js` (its JSON-LD `TechArticle` is data). Visible copy never says "case study", which implies a client and outcomes; the links that lead to a work page say what it shows. Oz Radio's are the line under the shelf ("See Oz Radio take a spoken question, frame by frame →"), the archive's Oz Radio entry ("See it take a question, frame by frame."), and the README's Oz Radio line.

- **Chrome:** the homepage's skip link and masthead (the portrait beside the name, linking home; Work, Ideas, and Archive lead to the homepage's anchors, Deck to the presentation, and "Let's connect ↓" to the page's own `#contact`), and after the article the same graphite contact close and footer. Links to other pages of the site are absolute (`https://ozgurkarahan.com/…`); assets are relative (`../../docs/assets/…`).
- **Opening (`header#opening`):** the h1 names the sample and its outcome at the `display` scale (`display-narrow` at 720px and below), with the thesis phrase in upright sage ("you can interrupt"), kept on one line whenever it fits. The lede follows (1.08rem, muted), then a sage status line with the card's chip and qualifiers ("Live", "AI avatar · capped daily"), the primary action to the sample ("Try the live demo ↗"), and a text link to its source ("Source on GitHub ↗"). Beside them the card's drawing fills an 8:5 frame with a one-pixel rule on the canvas ground.
- **Drawing:** `docs/assets/work/<slug>-cover.svg`, inlined once and verbatim (identical to the file apart from a uniform indentation, with its ids, title, and description) and static: the page carries no motion CSS, so the drawing shows its final frame. A change goes into the file, then into every inline copy and the share image, which is rendered again.
- **Evidence (`#frames`, "One question, three frames"):** the first section, so on desktop its frames begin inside the first screen. One `figure` holds an ordered list (`role="list"`, because its markers are removed) of frame-and-caption steps, then a `figcaption` that dates and discloses the evidence: "Frames from one live demo session, 18 October 2026 (UTC). The question was spoken by a synthetic test voice; the presenter is an AI-generated photo avatar." Frames are never cropped or upscaled: the 330 px files only, without `srcset` or lazy loading, with explicit dimensions, at most 330 CSS px wide, and a one-pixel rule drawn as an outline so the bitmap is never resampled for a border. From 66rem each frame box takes the row's height (582px) with `object-fit: scale-down` and `object-position: top`, so every bitmap keeps its natural size (or shrinks whole, never cropped, if a smaller default font narrows the columns) and the 11px under the shorter first capture show `#f7f2e8`, that capture's own bottom-row color sampled from the bitmap: a frame-ground value, not a palette token. Each caption opens with its step number in sage Public Sans (800, tabular figures, hidden from assistive technology, which hears the ordered list). Quotes are verbatim, and a caption says which part of the record it quotes when its frame shows only part: frame 3 shows only the answer's first line, so its caption gives the answer's last sentence ("The answer ends: …"), checked against the session's capture log.
- **What it does (`#how`):** short paragraphs that stay within what the sample's README states, then its stack in muted text.
- **Boundaries (`#limits`, "Where it stops"):** a ruled list without bullets, one limit per row, including what the evidence does not show ("one session and one question, not a measure of answer quality") and ending on "Personal open-source sample, not a Microsoft product." Its rules run the full column like the section rules, while right padding keeps the text to the 70ch measure.
- **Lesson (`#lesson`):** a heading that states the lesson ("Let people interrupt") and one sentence at the `question-title` size, weight 600, at most 36ch.
- **Closing actions (`footer#next`):** the primary action and the source link again, with the same labels, then "All work →" to the homepage's `#work`.
- **Headings:** h2s at the `headline` scale, each section opened by a one-pixel rule. No eyebrow and no section numbers; the storyboard's step numbers are allowed because their order is the content.
- **Analytics:** the opening, each section, and the closing actions carry ids (`opening`, `frames`, `how`, `limits`, `lesson`, `next`, `contact`), so `telemetry.js` attributes an outbound click to the nearest one. A work page and the links to it carry no `data-flagship`; it stays on the homepage's four featured links.
- **Shared CSS:** the inline stylesheet opens with the rules shared with `index.html` (tokens, base, focus, skip link, visually hidden text, masthead with its 820px, 720px, and 380px rules, actions, contact close, footer, and reduced motion), copied verbatim between `/* site:shared start */` and `/* site:shared end */`; the page's own rules follow. Every rule in the block must appear verbatim in `index.html`, so a shared rule changes there first. Extract a shared stylesheet when a second work page exists or when the portrait masthead also reaches `/identity-propagation/` and `/privacy/`.
- **Head and publishing:** a canonical URL, `og:type` article, a JSON-LD `TechArticle` with its dates and source repository, and the page's own share image (see Contact and sharing). `sitemap.xml` lists the page, `pages-build-check.yml` requires it and its share files, and `link-check.yml` watches `work/**` and checks the page.

**The Dated Evidence Rule.** A work page shows what one dated session did, says how that evidence was made, and keeps where it stops beside it; it never presents one session as a measure of quality or a client outcome.

### Contact and sharing

The graphite close uses inverse text, a light LinkedIn action, and a quieter GitHub text link. The footer maintains the personal/community scope note and links to the privacy notice at `/privacy/`.

The page title and the Open Graph and Twitter titles carry the headline. `docs\assets\social\home.svg` is the editable source of the share image; `social\home-2026-10-19.png` is its 1200 × 627 export, and Open Graph (`og:image:height` 627) and the large-image social card use it, with the headline in its alternative text. The date in the file name versions the image. The earlier `profile-social.svg` and `profile-social.png` (1200 × 630) stay in place but are no longer referenced. The page uses JSON-LD, one progressive-enhancement gallery script (`docs\assets\topic-showcase.js`, vanilla, sending nothing), and `docs\assets\telemetry.js`, a small first-party analytics beacon: owner-only Azure Application Insights, no cookies, path-only URLs, and nothing sent when Global Privacy Control, Do Not Track or the site opt-out is set. It has no autoplay video or audio, third-party tracking, backend, animation library, or new framework.

Each work page has its own share image, on the homepage image's frame but without a portrait: `docs\assets\social\<slug>.svg` is the editable source, and `<slug>-<date>.png` its 1200 × 627 export with no metadata (only the IHDR, IDAT, and IEND chunks). It keeps `home.svg`'s name and role row, its sage rule at y 116 and line rule at y 517, a title in Public Sans 800 at 68px on the baselines 268, 341, and 414 with the last line in sage, and a bottom row with the card's scope line on the left and "ozgurkarahan.com" on the right. Where the homepage image has the portrait, the work drawing's final frame is nested at 0.75 scale (480 × 300 at x 656, y 167) inside a one-pixel line border, never stretched. The export is rendered with the self-hosted Public Sans through a page on the site's own origin, and a fresh render of the committed SVG must match the committed PNG pixel for pixel. `/work/oz-radio/` uses `social\oz-radio-2026-10-20.png` as `og:image` and `twitter:image`, with `og:image:width` 1200, `og:image:height` 627, `og:image:type` `image/png`, and alternative text on both; its Open Graph and Twitter titles omit the name, which its `<title>` keeps (" · Ozgur Karahan").

## Do's and Don'ts

### Do:
- **Do** preserve the Stone + Sage identity, keep the warm pair for accountability (Live status and each drawing's one key moment), and use the inverse palette on graphite.
- **Do** use semantic headings, visible focus, English image alternatives, and a motion-free reading path.
- **Do** keep authentic evidence, provenance, and project boundaries adjacent.
- **Do** show several topics before a flagship deep dive, and preserve manual browsing whenever automatic motion is paused or unavailable.
- **Do** retain native anchors, ruled lists, and disclosures where they already serve the content, and keep alias anchors when a section moves.
- **Do** let a chip state the format and keep each card's scope line for claim-specific qualifiers.
- **Do** verify text and focus contrast in context rather than treating a token or source snippet as proof of WCAG conformance.
- **Do** label synthetic presenters and illustrative drawings inside the image itself, not only in a caption.
- **Do** keep each drawing's meaning in its static base and let the emphasis layer only underline it; the still frame must read completely.
- **Do** play one drawing at a time, only once its frame is fully visible and the track has stopped, and let Pause, browsing, hover, focus, and a hidden tab take precedence over automatic motion.
- **Do** change a drawing in its `docs/assets/work/` file, then re-inline it and repeat the identity, id, and drawing checks.
- **Do** give a work page dated, disclosed evidence at its own size, a ruled list of where it stops, and a one-sentence lesson, beside the card's drawing inlined static and verbatim.

### Don't:
- **Don't** introduce GitHub-dark chrome, decorative neon, gradient text, or glass panels as a replacement identity.
- **Don't** use the warm pair for decoration, hover states, a project's color, or a second moment in the same drawing.
- **Don't** turn an observed page composition, local size, or single-component shadow into a universal design requirement.
- **Don't** replace real evidence with a fabricated approval screen or imply that separately scoped samples form one production system.
- **Don't** expose private repository slugs or identifying rows from source artifacts.
- **Don't** promote low-contrast pairings or synthesized sidecar ramps into approved accessibility standards.
- **Don't** publish anything about Oz Antenna beyond its name and status until its public publishing is enabled.
- **Don't** animate text, color, or layout in a drawing, or move a mark across a label; only stroke-dashoffset, transform, and opacity animate.
- **Don't** let a play exceed five seconds, start on a cut card, or run while the track moves, and don't replay a card automatically within 60 seconds of its last play, or more than once per pass while the shelf moves on its own.
- **Don't** treat scroll events as browsing, or let automatic motion move focus or the track under a keyboard user.
- **Don't** bring bitmap covers back to the work wall, or put faces, markers, `<style>` elements, scripts, or external references in its drawings.
- **Don't** call a work page a case study, or give it an eyebrow, section numbers, `data-flagship`, or a script other than the analytics beacon.
