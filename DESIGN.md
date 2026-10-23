---
name: "Five Building Blocks"
description: "Ozgur Karahan's personal-brand system: the five building blocks of enterprise agents as the structure of every page and drawing, indigo ink on cool paper, one amber accent reserved for the point."
colors:
  canvas: "#f8f8fb"
  surface: "#ffffff"
  ink: "#191a2c"
  muted: "#535568"
  line: "#d9dae4"
  brand: "#2f2a6b"
  brand-soft: "#eeeffe"
  brand-mid: "#5e5cb3"
  accent: "#b8791a"
  accent-text: "#905c16"
  accent-soft: "#fef2dd"
  deep: "#181737"
  on-deep: "#f2f3f9"
  on-deep-muted: "#c7c9de"
  cta: "#ecb259"
  on-cta: "#191a2c"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 4.6vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  display-narrow:
    fontFamily: "Bricolage Grotesque, Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 9vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  layer-name:
    fontFamily: "Bricolage Grotesque, Public Sans, Segoe UI, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  stance:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.4
  title:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  action:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontWeight: 700
    lineHeight: 1.4
  kicker:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "0.1em"
  chip:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.06em"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-deep}"
    typography: "{typography.action}"
    padding: "0.8rem 1.15rem"
    rounded: "8px"
  button-light:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.on-cta}"
    typography: "{typography.action}"
    padding: "0.8rem 1.15rem"
    rounded: "8px"
  arch-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "10px"
  arch-row-hover:
    backgroundColor: "{colors.brand-soft}"
  arch-governance:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-text}"
    rounded: "10px"
  layer-kicker:
    textColor: "{colors.brand}"
    typography: "{typography.kicker}"
  layer-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "6px"
  topic-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "12px"
  topic-drawing:
    backgroundColor: "{colors.canvas}"
  topic-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand}"
    typography: "{typography.chip}"
    padding: "0.1rem 0.5rem"
    rounded: "6px"
  topic-chip-live:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-text}"
  contact-field:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.on-deep}"
---

# Design System: Five Building Blocks

## Overview

**North star: the five building blocks of enterprise agents are the brand.**

| # | Block | Kind | Kicker | Claim | Anchor |
|---|---|---|---|---|---|
| 01 | Voice | Layer | The new channel | People speak to agents, even developers to their coding agents (Oz Radio, an AI presenter for any deck; Horizon Famille) | `#voice` (hidden legacy anchors `#engagement`, `#horizon`, `#idea-work`) |
| 02 | Distribution | Layer | Where users are | Build once, publish to Teams and Microsoft 365 Copilot (Customer 360 card, distribution cover) | `#distribution` |
| 03 | Context | Layer | Workflows and data | MCP servers for workflows and data, knowledge bases, RAG over company documents (DocWiki, Agent memory, ServiceNow/Salesforce meta-tools, Simple Order Agent, private Enterprise Document RAG) | `#context` |
| 04 | Identity | Vertical | From the voice to the system | Not a layer: the user's identity runs through all of them to the system of record, which applies its own authN/authZ (identity-propagation article, Customer 360 source, Entra flow) | `#identity` |
| 05 | Governance | Vertical | Across every layer | Not a layer either: every agent, tool and skill needs an owner and a rule, at every layer; isolated compute per session (Foundry hosted agent, Agentic Platform deck, approval workflow) | `#governance` |

Positioning: *Models matter. What surrounds them decides whether agents get used.* The lede is first person ("They are what I build and test, in the open"); an aside says cost control and the value per token are not covered yet. The blocks are the hero architecture, the homepage navigation, the section order, the "you are here" marker on every article, and the content of the social images. Channels named are Teams and Microsoft 365 Copilot only; Claude and Slack are deliberately not named as channels. Indigo ink carries the structure; one amber accent marks **the point**, the single thing a drawing or page wants you to see. Page-level intent lives in the contract comment at the top of each page.

## Why indigo and amber

An October 2026 peer audit of practitioner sites and AI vendor brands mapped the OKLCH hue wheel. 240–268 is a blue wall (Azure, Salesforce, DeepMind, most personal sites); since the author works at Microsoft, mid-blue reads as Azure. 290–330 is the AI-purple cliché; 25–55 is Anthropic and Mistral; monochrome reads as OpenAI. Indigo at hue 282 is a narrow free gap, 31° past Azure at half the violet gradient's chroma, so at low lightness it reads as ink. A muted amber (chroma about 0.12) stays clear of the high-chroma vendor ambers and keeps the blue-and-amber logic of the Build deck.

**Guardrails:** brand hue 276–288; never below about 270 (Microsoft navy); never chroma above about 0.15 or a light brand over large areas (AI purple); no gradients.

## Colors

OKLCH is the source of truth; hex is the rendered sRGB and the fallback. Every page declares these custom properties in `:root`, sets `color-scheme: light dark`, and redefines them under `@media (prefers-color-scheme: dark)`. `theme-color` is `#f8f8fb` / `#0f0f19`.

| Token | Light | OKLCH | Dark | OKLCH | Role |
|---|---|---|---|---|---|
| `--canvas` | `#f8f8fb` | 0.98 0.004 282 | `#0f0f19` | 0.175 0.02 282 | Page and drawing ground |
| `--surface` | `#ffffff` | 1 0 0 | `#171825` | 0.215 0.025 282 | Cards, architecture rows, chips, nodes |
| `--ink` | `#191a2c` | 0.225 0.035 282 | `#ebecf4` | 0.945 0.01 282 | Text, primary strokes, person glyph |
| `--muted` | `#535568` | 0.455 0.032 282 | `#b4b6c7` | 0.78 0.025 282 | Secondary text, flow lines |
| `--line` | `#d9dae4` | 0.89 0.014 282 | `#353647` | 0.34 0.03 282 | Rules, borders, empty marker bars; never text |
| `--brand` | `#2f2a6b` | 0.331 0.109 282 | `#a7a9ef` | 0.76 0.1 282 | Agents, kickers, numbers, current block, scope lines |
| `--brand-soft` | `#eeeffe` | 0.955 0.02 282 | `#23233e` | 0.27 0.05 282 | Agent fill, architecture row hover |
| `--brand-mid` | `#5e5cb3` | 0.52 0.135 282 | `#8d8ee0` | 0.68 0.12 282 | Focus rings, the identity thread and ticks, tokens in drawings |
| `--accent` | `#b8791a` | 0.627 0.127 71 | `#e7ab54` | 0.78 0.125 74 | **The point**: marks only, never small text |
| `--accent-text` | `#905c16` | 0.52 0.105 68 | `#eab35f` | 0.8 0.12 76 | Amber text (Live chip) |
| `--accent-soft` | `#fef2dd` | 0.965 0.03 80 | `#3c2a13` | 0.3 0.045 70 | Fill under the point, Live chip, governance band |
| `--deep` | `#181737` | 0.225 0.06 282 | `#070715` | 0.14 0.03 282 | Contact field |
| `--on-deep` / `--on-deep-muted` | `#f2f3f9` / `#c7c9de` | 0.965 0.008 282 / 0.84 0.03 282 | same | | Text on deep |
| `--cta` / `--on-cta` | `#ecb259` / `#191a2c` | 0.8 0.125 76 / 0.225 0.035 282 | same | | Primary action on dark grounds |

**The one amber rule.** Amber marks the point and nothing else: exactly one point per drawing (in the hero, the governance band), the Live status (chip and dot) of the one thing a visitor can use now, and the primary action (`--cta`) on dark grounds. Never decoration, hover, a project's colour or a second highlight.

**The dark-mode point rule.** In dark mode `--brand` and `--accent` are close in luminance (colour-blind gaps 0.02–0.08, against 0.17–0.23 in light). So the point is **always also marked by stroke weight (4 against 2) or by shape**, never by colour alone, in both modes.

**The CTA label rule.** The label on `--cta` is always `--on-cta` (#191a2c), in both modes. Dark-mode `--ink` on `--cta` is 1.61:1; `tokens.py` reports that pair and exits 1 on purpose, because the pair is never used.

### Contrast results

From `tokens.py`, WCAG 2.x ratio (APCA Lc for the closest calls). All pass.

| Pair | Need | Light | Dark |
|---|---|---|---|
| ink on canvas / surface / brand-soft | 7 | 16.22 / 17.19 / 15.04 | 16.16 / 14.94 / 12.94 |
| muted on canvas / surface | 4.5 | 6.92 / 7.33 | 9.46 / 8.75 |
| brand on canvas / surface / brand-soft | 4.5 | 11.88 / 12.59 / 11.02 | 8.68 / 8.03 / 6.95 |
| accent-text on surface / accent-soft | 4.5 | 5.65 / 5.10 (Lc 70.9) | 9.27 / 7.25 |
| accent (mark) on surface | 3 | 3.63 | 8.63 |
| brand-mid (focus) on surface | 3 | 5.74 | 5.93 (Lc 44.4) |
| line on surface | 1.2 | 1.39 | 1.49 |
| on-deep / on-deep-muted on deep | 7 / 4.5 | 15.60 / 10.54 | 18.01 / 12.16 |
| on-cta on cta | 4.5 | 9.06 | 9.06 |
| brand vs accent luminance gap, protan / deutan / tritan | | 0.168 / 0.228 / 0.200 | 0.028 / 0.076 / 0.022 (low: see the point rule) |

Verify any new pairing in context.

## Typography

Three self-hosted families (SIL OFL 1.1, Latin and Latin Extended subsets, `docs/assets/fonts/fonts.css`; no third-party request). The homepage preloads Public Sans and Bricolage Grotesque.

- **Bricolage Grotesque** (variable 200–800, set at 700): h1, h2, block names, the masthead name, social headlines. Tracking −0.03em on h1/h2, −0.02em on names.
- **Public Sans** (400–800): all reading text, card titles (h3), stance, actions, navigation, diagram labels.
- **IBM Plex Mono** (400, 500): labels and numbers only: block numbers, kickers, chips, tags, the "Go deeper" heading, the eyebrow, "Illustrative" captions. Uppercase and tracked when it labels; never body copy or project names.

Roles are in the frontmatter. Locally: the contact h2 uses clamp(2.1rem, 3.4vw, 3.2rem); the lede is 1.1rem muted (1rem at ≤720px); card descriptions 0.95rem; scope lines 0.85rem/600; navigation 0.9rem. Body is capped at `--measure` (68ch), the h1 at 15ch (18ch at ≤1000px). Headings balance their wraps; paragraphs use `text-wrap: pretty`. Emphasis in a heading is upright `--brand`, not italic.

## Layout and responsive rules

- **Shell:** `min(100% - 4rem, 74rem)`, centred; at ≤720px `min(100% - 2rem, 74rem)`, a 16px gutter. No horizontal page scroll at any width down to 320px or at 200% text.
- **Masthead** (not sticky, bottom rule, min height 5.5rem): a 60px portrait (8px radius, line border) beside the name and "AI Solution Engineer at Microsoft"; nav *Building blocks · Deck · GitHub · Let's connect ↓*.
- **Opening:** two columns (`1.05fr / 1fr`, 3rem gap): eyebrow, h1, a muted lede, a first-person second lede (ink, 600), the aside (0.9rem muted, 3px `--line` left rule), primary button and the live link; the architecture on the right.
- **Blocks:** each `section.layer.shell` (ids `#voice`, `#distribution`, `#context`, `#identity`, `#governance`, in that order; heading ids `layer-1-title`…`layer-5-title`) is `0.85fr / 1.6fr` (gap 2.5rem 3.5rem, 4rem padding, bottom rule). `.layer-head` is sticky at `top: 1.5rem`; `.layer-evidence` holds a two-column `.work-grid` (1.25rem gap) and "Go deeper". With one card, `data-single` puts the card and the link list side by side.
- **≤1000px:** opening and blocks become one column; the block head is no longer sticky; block padding 3.25rem.
- **≤720px:** 16px gutter; the masthead stacks (48px portrait, nav spread full width); h1 `display-narrow`; the architecture narrows (`--rail` 2.6rem, `--gap` 0.5rem), rows drop their icons, names 1.1rem, vertical labels 1rem; grids, link lists and `data-single` go to one column; block padding 2.75rem; contact and footer stack.
- **≤380px:** nav gaps 0.5rem, so the four nav links keep one row.
- **Scrolling:** `[id]` scroll margin 1.25rem; `scroll-padding-block: 0.75rem`; interactive elements 0.75rem scroll margin, so a focus ring is never cut.

**Shapes and depth.** Rounded, never pills: 4px focus ring, 6px chips and tags, 8px buttons, portrait and diagram nodes, 10px architecture rows and rails, 12px cards. One-pixel rules organise the page; no shadow scale (the live dot's 4px `--accent-soft` halo is the only one). Drawings are flat.

## Components

**The architecture (`nav.arch#stack`).** The signature diagram and the page navigation: an architecture, not a list. Caption "One request, from a voice to the system of record"; then `.arch-grid`, three columns (`var(--rail) 1fr var(--rail)`, row gap 0.6rem, column gap `--gap`; `.arch` sets `--rail: 3.25rem; --gap: 0.75rem`).
- **Three layers** a request goes down, each an `a.arch-row` (≥4.5rem, 10px radius, line border, surface): mono number, a 1.6rem line icon in `--brand`, the Bricolage name and a muted detail. 01 Voice (mic, "People speak, the agent listens"), 02 Distribution (screen, "Teams · Microsoft 365 Copilot"), 03 Context ("Workflows and data · MCP · RAG"). Hover: `--brand` border, `--brand-soft` fill.
- **Systems of record**, a fourth row that is not a link: dashed border on canvas, a mono label and chips (Salesforce, ServiceNow, SAP, Dynamics). The request ends there.
- **Two verticals cross every layer** (rows 1–4). Left, 04 Identity (`.arch-identity`): a 3px `--brand-mid` thread from the voice row down to the systems row, ending in an arrow, under a vertical label on canvas. Right, 05 Governance (`.arch-gov`): a band with a 2px `--accent` border on `--accent-soft`, vertical label "Governance · agents, tools, skills" in `--accent-text`; hover turns it surface. Labels are `writing-mode: vertical-rl`, Bricolage 1.1rem; hover underlines them.
- **Ticks:** each row has a 2px `--brand-mid` tick out to the identity thread (`::before`) and a 2px `--accent` tick into the governance band (`::after`): every layer touches both verticals.
- **Motion (one shot, CSS only):** the rows stack in (0.5s rise and fade, staggered 0.12s), the identity thread draws down (`scaleY` from the top, 0.8s from 0.5s), the ticks and the arrow fade in, the governance band fades in (0.6s from 0.9s); then one request travels: an `.arch-pulse` dot (13px `--brand-mid`, 4px `--brand-soft` halo) moves down the identity thread (1.7s from 1.5s) while each row's border turns `--brand-mid` in turn (`arch-hit`, 0.4s apart, systems row last). Hovering the diagram replays the request (`arch-travel-again`, `arch-hit-again`). It never loops. Under reduced motion the pulse is hidden and the diagram is the final frame.

**Why the governance band is amber.** It echoes the deck's "One governance" frame, and it is the hero's single amber point: the claim that governance holds across every layer. The Live dot beside the button is a status mark, not a second point. Identity stays indigo (the thread colour), so the band keeps the weight-or-shape rule: a bordered band against a 3px line.

**Block head (`.layer-head`).** The **kicker** ("01 · The new channel": number and kicker, mono, `--brand`) led by the block marker; the h2 (the block name); the **stance** (one bold sentence); the **why** (muted paragraph; for Identity and Governance it opens by saying they are not layers but run through all of them); `.layer-tags`, the systems the block touches (mono 0.75rem, muted, bordered), `aria-label="Building blocks"`.

**Block marker ("you are here").** Five 5px bars (`<i>` ×5) in a 1.75rem column, 3px apart (`.layer-marker[data-layer="n"]`, n = 1..5, the block numbers 01 Voice to 05 Governance): bar *n* is `--brand`, the rest `--line`. `aria-hidden`; the kicker text carries the meaning. On every block section and every article.

**Work card (`li.topic-card`).** One link (`.topic-card-link`: 12px radius, line border, surface) with an 8:5 `.topic-image` on canvas holding the inline drawing, then `.topic-copy` on its own opaque surface (keeps text antialiasing stable while a drawing plays): chip, h3 title, muted description, and the scope line pushed to the bottom (`--brand`) ending in ↗ (off-site) or → (on-site). Accessible name from chip + title (`aria-labelledby`), description from the scope line (`aria-describedby`). Hover: `--brand` border, underlined title. Descriptions never truncate.

**Current cards.** 01 Voice: *Oz Radio: an AI presenter for any deck* (Live; an avatar presents a deck live and answers spoken questions, and turns a deck into a narrated video or a two-host podcast, in more than ten languages; scope "Live demo · present, narrate, podcast · capped daily") and Horizon Famille. 02 Distribution: Customer 360 (single card). 03 Context: two cards, *DocWiki: every answer cited to the page* first (Sample, cover `docs/assets/work/docwiki-cover.svg`, scope "Open-source sample · fictional corpus · MCP"), then *Agent memory*; its Go deeper list ends with "How DocWiki works" (the DocWiki README: Foundry agents, MCP and Agent Skills on Azure Container Apps). 04 Identity: the identity-propagation article (single card). 05 Governance: A computer per agent, The Agentic Platform.

**Status chips.** Mono uppercase (via CSS; markup in sentence case): *Live*, *Sample*, *Video m:ss*, *Deck*. Neutral: `--brand` on surface, line border. Live (`.topic-chip-live`): `--accent-text` on `--accent-soft`, `--accent` border, only on what a visitor can use now (today: Oz Radio). **Chips replace hedges, not scope.**

**Go deeper (`.layer-more`).** After a rule: a mono "Go deeper" h3, a two-column `.more-list` of bold ≥44px links each with a one-line muted note, and an optional `.layer-scope` note with a bold ink lead ("Demonstration scope."). Private work is `.private-name` text, never a slug.

**Buttons and links.** 8px-radius anchors, ≥44px tall, arrow after a 0.55rem gap. Primary: `--brand` / `--on-deep`, hover `--ink`; in dark mode `--cta` / `--on-cta`, hover `--on-deep`. `.button-light` on the deep field: `--cta` / `--on-cta`. Text links are underlined (0.08em, 0.14em on hover). "Live now: Oz Radio ↗" is led by the amber live dot.

**Further reading and contact.** `nav.further`: a row of ≥44px links ending with the unlinked "Oz Antenna · in development · not public". The contact field (`--deep`): the h2 "Bring a workflow. Let's map its building blocks.", `.button-light` to LinkedIn, a GitHub text link; focus rings there use `--cta`. The footer keeps the scope note and the privacy link.

**Accessibility baseline.** Skip link first. Focus: 3px `--brand-mid` outline, 5px offset (3px on cards), 4px radius; the ring follows the ground, not the label. Targets ≥44×44px. Headings in order; English alternative text; decorative glyphs `aria-hidden`; visually hidden text completes short labels ("Deck (The Agentic Platform)", "on LinkedIn").

**Analytics.** `data-flagship="oz-radio"` only on the opening's live link and the Oz Radio card (the privacy notice's "featured project links").

## Diagram grammar

Every drawing (work covers, article diagrams, social images) follows this grammar.

- **One drawing = one claim**, stated in the SVG `<title>`. At most 5 nodes and about 6 text elements. Covers use `viewBox="0 0 640 400"` with a background rect `var(--canvas)`; read left to right, top to bottom: actor, mechanism, point.
- **Colour:** every value is a CSS variable with the light hex as fallback, as an inline style: `style="fill:var(--brand-soft,#eeeffe);stroke:var(--brand,#2f2a6b)"`. Never a bare hex (social sources excepted, see below).
- **Nodes, all `rx="8"`** (no square nodes, no pills):
  - system / surface / tool: fill `--surface`, stroke `--line`, width 2;
  - the agent (the actor): fill `--brand-soft`, stroke `--brand`, width 2;
  - person: head circle r=10 plus a shoulders arc, stroke `--ink`, width 2, no face;
  - mock or illustrative system: as a system, `stroke-dasharray="8 6"`.
- **Flow:** right-angle routes, stroke `--muted` width 2, small filled triangle arrowheads in `--muted` (paths, not markers). A request or identity token travelling is a circle r=7 filled `--brand-mid`, beside labels, never across them.
- **The point:** exactly one per drawing, stroke `--accent` width 4, optionally on an `--accent-soft` fill. Nothing else is amber. It must also differ by weight or shape.
- **Labels:** Public Sans 28–34 units, never below 26 in a 640 view box; 600 for node names, 500 secondary; `--ink` or `--muted`. The one exception is the caption "Illustrative" bottom-left (IBM Plex Mono 22, `--muted`), required whenever the drawing is not a real capture. Frames are at least 1.25× their label width (WCAG 1.4.12 spacing); no `textLength`. Words are verbatim, in English, from a public source.
- **File contract:** `docs/assets/work/<slug>-cover.svg`, inlined verbatim (indentation aside); fix the file, then every inline copy and any social image nesting it. Root: `role="img"`, `aria-labelledby` its `<title>`, `aria-describedby` its `<desc>` (starting "Illustrative drawing:" and quoting every label), `focusable="false"`, `font-family="Public Sans, Segoe UI, sans-serif"`; ids prefixed `<slug>-cover-`, unique on the page. No `<style>`, script, `foreignObject`, image, marker or external reference.
- **Motion (homepage only):** the static SVG is the final frame and carries the whole meaning; only emphasis marks drawn over it animate, and text never moves or is covered. Use only the shared classes between `/* wk:motion start */` and `/* wk:motion end */` in `index.html`: `wk-draw` (stroke-dashoffset; needs `pathLength="1"`), `wk-grow` (scale from `--sx`/`--sy` about `--o`), `wk-travel` (translate from `--dx`/`--dy`), `wk-stamp` (opacity and 0.92 scale), `wk-fade` (opacity), timed by inline `--t` (delay after the 0.25s rewind) and `--d`. No `transform` attribute on an animated element. Budgets: ≤5s per play including the rewind, ≤18 animated elements, ≤8KB per file; the point lands at 60–85% of the play.

**Existing drawings.** The eight covers in `docs/assets/work/` (oz-radio, voice, distribution, docwiki, memory, identity, foundry, platform; distribution shows one agent published to Teams and Microsoft 365 Copilot inside an amber "Where people work" frame; docwiki traces a wiki "Claim" with footnote 1 to the amber "Cited line" on "Source, page 1", with a "Quote verified" badge) and the identity diagrams in `docs/assets/diagrams/` (wide 1280x560 and a 600x1000 phone variant, swapped at 720px) follow this grammar. The wide identity diagram has six nodes: a hop sequence may exceed five when every hop is the claim. The standalone files are the sources; `index.html`, `work/oz-radio/index.html` and `identity-propagation/index.html` inline them so the page tokens and dark mode apply.

### Drawing checklist

- [ ] One claim in `<title>`; ≤5 nodes.
- [ ] Exactly one amber point, also marked by 4-unit weight or shape.
- [ ] Reads in grayscale: actor, flow and point still distinct.
- [ ] Point identifiable under protan, deutan and tritan simulation, in light and dark.
- [ ] Labels ≥26 units (28–34 normal), "Illustrative" at 22; text spacing never overflows a frame.
- [ ] Only `var(--token,#lighthex)` colours; every corner `rx="8"`.
- [ ] Faceless persons, dashed mocks, "Illustrative" unless a real capture; labels verbatim and quoted in `<desc>`.
- [ ] Contract ids and forbidden elements checked; still frame complete; motion budgets met; nothing moves under reduced motion.

## Motion

`docs/assets/work-play.js` (vanilla, sends nothing) plays a card's drawing once when its frame is ≥98% in view (one IntersectionObserver, then unobserved) and replays it when a mouse pointer enters the card, by re-setting `data-play` on the `li`. Under `prefers-reduced-motion: reduce` nothing plays, and a global rule removes all animations and transitions. Interface motion is limited to 0.15s border and background transitions and smooth anchor scrolling, plus the hero architecture's one-shot entrance and request travel (see the architecture component; CSS only, hover replays, never loops). No carousel or auto-scrolling shelf, no autoplay media, no other entrance effects; without JavaScript every drawing is already complete.

## Voice and copy

- **Three depths per block.** The stance is for everyone; the why is the reasoning for strategists; the cards, "Go deeper" links and source are for builders. Stopping at any depth leaves the reader with something true.
- **Plain, precise English.** Name the mechanism; no hype; no invented titles, counts or quotes.
- **Scope lines stay specific** ("Live demo · present, narrate, podcast · capped daily", "Recorded demo · mock systems · French, English subtitles", "Open-source sample · fictional corpus · MCP"). Chips replace hedges, never scope. Where a boundary matters, a scope note says it and links the limitations.
- **No Microsoft-product implication.** This is personal work and community samples. Product names (Teams, Copilot, Foundry, Entra) appear as systems a block touches, not as endorsements or roadmaps. The footer and every work page say "not Microsoft products". Never "case study".
- **Honest evidence.** Mocks are labelled mock; AI avatars and synthetic voices are labelled inside the image; captures are dated. Oz Antenna gets its name and status only.
- **No stereotypical AI visuals:** no robots, brains, glowing meshes, sparkles, neon, glass, gradient text or purple gradients. The building blocks and the grammar are the imagery.

## Work pages and articles

A work page (`/work/<slug>/`, first `work/oz-radio/index.html`) explains one public sample: what it does, dated evidence, where it stops, one lesson. Articles (`/identity-propagation/`) share its chrome.

- **Block kicker, required:** above the h1, `<a class="layer-kicker" href="https://ozgurkarahan.com/#<block-id>">` with the five-bar marker filled at that block, "0n · <Block>" ("01 · Voice" on Oz Radio, "04 · Identity" on identity propagation), and visually hidden ", the <ordinal> of five building blocks for enterprise agents"; an inline-flex ≥44px target, underlined on hover. Make sure the page's marker CSS covers its own block.
- **Shared CSS:** the stylesheet opens with the rules shared with `index.html` (tokens in both modes, base, focus, skip link, masthead, actions, contact, footer, reduced motion) between `/* site:shared start */` and `/* site:shared end */`; change them in `index.html` first.
- The drawing is inlined once, static. Evidence is dated and disclosed, never cropped or upscaled. A ruled "Where it stops" list ends on "Personal open-source sample, not a Microsoft product." No script but `telemetry.js`; no `data-flagship`.
- Head: canonical URL, `og:type` article, JSON-LD `TechArticle`, own share image; listed in `sitemap.xml`.

## The deck

The Agentic Platform (`agentic-platform/`, eight slides) uses the same palette under deck names, light only; its viewer shell is dark (`--bg:#070715`, bars `#181737`). Fonts: `docs/assets/fonts/deck-fonts.css` (Bricolage Grotesque 400/600/800, Public Sans, IBM Plex Mono).

| Deck (`slides/slide_0n.html :root`) | Value | Site token |
|---|---|---|
| `--node` / `--paper` | `#f8f8fb` / `#FFFFFF` | `--canvas` / `--surface` |
| `--ink`, `--muted`, `--line` | `#191a2c`, `#535568`, `#d9dae4` | same |
| `--brand`, `--brand-mid`, `--brand-soft` | `#2f2a6b`, `#5e5cb3`, `#eeeffe` | same |
| `--amber`, `--amber-text`, `--amber-soft` | `#b8791a`, `#905c16`, `#fef2dd` | `--accent`, `--accent-text`, `--accent-soft` |
| `--bg` | `#eef0f6` | deck only: slide ground |
| `--brand-line` / `--amber-line` | `#ccceeb` / `#ecc98a` | deck only: borders of tinted nodes |
| `--sand` | `#acaece` | deck only: inactive marks |

The amber rule and the diagram grammar apply to slides. Change a token on the site first, then in all eight slides.

## Social images

- `docs/assets/social/<name>.svg` renders to `docs/assets/social/<name>-YYYY-MM-DD.png` at **1200×627**; a new render gets a new date. `docs/assets/profile-social.svg` renders to `profile-social.png` at **1200×630** (GitHub social preview). PNGs carry no metadata.
- On a new date, update `og:image` and `twitter:image` (width 1200, height 627, type image/png, alt text) and remove the superseded PNG.
- Render in Chromium on the site's origin with `fonts.css` loaded and `document.fonts.ready` awaited.
- **Home layout** (`home.svg`): canvas, a 10px `--brand` top bar, a mono name line, the Bricolage headline with its emphasis in `--brand`, a muted sub-line and the mono URL; on the right the hero architecture redrawn: three layers (01 Voice, 02 Distribution, 03 Context) over a dashed "Systems of record" row, crossed by the 04 Identity thread (`--brand-mid`, ending in an arrow) on the left and the amber 05 Governance band on the right, the image's one point. A work page's image shows the card title, scope line and drawing (final frame, 0.75 scale) instead; an article's (`identity-propagation.svg`) leads with its block kicker ("04 · IDENTITY").
- Sources may use bare light hex (they render once, in light mode), but each value must equal a light token.

## How to add a work card to a block

1. **Choose one block** (01 Voice, 02 Distribution, 03 Context, 04 Identity or 05 Governance), where the card's claim lives; mention it in another block's "Go deeper" if relevant.
2. **Draw** `docs/assets/work/<slug>-cover.svg` under the grammar and pass the checklist in both modes.
3. **Copy an existing `li.topic-card`** into that block's `.work-grid`: `data-work="<slug>"`; ids `card-<slug>-chip`, `-title`, `-scope` referenced by `aria-labelledby` / `aria-describedby`; the SVG inlined in `.topic-image`.
4. **Write:** a chip (*Live* only if usable now; else *Sample*, *Video m:ss*, *Deck*), a title naming the thing and its outcome, one descriptive sentence, a specific scope line ending ↗ or →.
5. **Layout:** one card means `data-single` on `.layer-evidence`; two or more, remove it.
6. **Go deeper:** add the source or write-up with a one-line note, and a `.layer-scope` note if a boundary applies.
7. **Check** at 1440, 1000, 720, 390 and 320px, at 200% text, in dark mode, with reduced motion and by keyboard. `work-play.js` picks up `wk-*` marks automatically.
8. **A work page** for it gets the same block's kicker and five-bar marker, its own social image, and a "Go deeper" link.

## Packaged as a skill

The brand is packaged for reuse outside this site as the **`ozgur-brand`** skill in the memory repository (`~/projects/memory/skills/ozgur-brand/`, canonical procedure `.github/instructions/ozgur-brand.instructions.md`; Claude Code and GitHub Copilot discover it through `~/.claude/skills`, `~/.copilot/skills` and `~/.github/skills`). It carries `brand.css` (tokens, fonts, brand header, kicker, marker, buttons, chips, footer), the architecture component, a social-image template with `make_social.py` and `render.py`, and `tokens.py`, with recipes for GitHub Pages sites, READMEs, web apps, social images and diagrams; slides go to `build-presentation` with the `stack` theme. This file stays the source of truth: when a token, rule or block changes here, update the skill's `references/brand.md`, `assets/brand.css` and `scripts/tokens.py` in the same change.
