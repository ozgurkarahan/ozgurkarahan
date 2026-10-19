---
name: "Blueprint Field Notes"
description: "Ozgur Karahan's stone, sage, and graphite portfolio system with one warm status accent, recorded from the built homepage."
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
    padding: "0.55rem 0.75rem"
  project-archive:
    textColor: "{colors.ink}"
---

# Design System: Blueprint Field Notes

## Overview

**Creative North Star: "Blueprint Field Notes"**

A working architecture brief: calm stone surfaces, deep green graphite, restrained sage, measured rules, and generous humanist type, with one warm accent reserved for live status. The identity is clear, architectural, and human rather than dashboard-like or dependent on decorative technology imagery.

The person and the thesis open the page: a small square portrait beside the name in the masthead, then the headline, one factual sentence, and the two samples a visitor can use now. The moving work wall, the controlled horizontal topic shelf, follows inside the first screen as the index of the portfolio: DocWiki and Oz Radio lead it, and it ends on an invitation to bring a workflow. A status chip states what each card is, and each card keeps its own scope line, so qualifiers stay specific instead of repeating as hedges. One ruled three-column section then sets out the questions behind the work with their write-ups and source, before the archive and the graphite contact close. Precision comes from hierarchy and readable descriptions, not simulated application chrome.

**Key Characteristics:**
- Stone and sage with a graphite inverse surface; one warm pair marks Live status only.
- Public Sans hierarchy with selective monospace durations.
- A portrait beside the name, a thesis opening, an image-led work wall in the first screen, a ruled three-column question section, and native disclosures.
- Separately scoped projects with adjacent descriptions and provenance.

This refresh records the inline stylesheet and markup in `index.html`. The frontmatter owns reusable tokens; local, git-ignored `.impeccable\` sidecars may add rendering examples and extensions. Homepage-specific direction is the contract comment at the top of `index.html` (thesis, world, story, first viewport, form); the composition described below is an observed application, not a template for every surface.

## Colors

Stone + Sage is one restrained accent family supported by green-tinted neutrals, plus one warm status pair; it is not a multi-accent theme. Frontmatter values retain the stylesheet's canonical hex notation and custom-property names.

### Primary
- **Sage** (`sage`): thesis emphasis, question numbers, card scope lines, neutral chip text, gallery-control borders, the end-card arrow, primary-action hover, card hover borders, and focus outlines on light surfaces.
- **Soft Sage** (`sage-soft`): gallery-control hover, the scrollbar track, the end card's panel, and the emphasized fills inside the drawings.
- **Light Signal** (`signal`): the light action on the graphite contact field, not a general-purpose text color.

### Status
- **Warm** (`warm`): the text and border of the Live chip. It measures 6.45:1 on the canvas, 6.80:1 on paper, and 6.02:1 on its own fill.
- **Warm Soft** (`warm-soft`): the Live chip's fill.

### Neutral
- **Stone Canvas** (`canvas`): the page background, including the opening, and the ground of the three drawings.
- **Paper Surface** (`surface`): topic cards, neutral chips, gallery controls, the portrait's backing, and light text on the primary action.
- **Green Ink** (`ink`): headings, body text, the hero's live links, and the primary action's fill.
- **Muted Ink** (`muted`): supporting prose, card descriptions, the Oz Antenna status line, captions, and boundaries on light surfaces.
- **Graphite** (`graphite`): the inverse contact field.
- **Inverse Ink / Inverse Muted** (`dark-ink`, `dark-muted`): primary and supporting text on graphite; inverse ink also supplies focus outlines on that surface.
- **Measured Rule** (`line`): section separators, list rules, card/image borders, the portrait border, and the neutral chip border; not a text color.

**The One Accent Family Rule.** Sage is the one structural accent family: its variants emphasize meaning and tonal structure, and no project gets a color of its own. The warm pair is reserved strictly for Live status, and later for the key moment of an animation; it is never decoration, a hover state, or a per-project color.

One-off footer, favicon, and browser-theme colors are not additional palette tokens. Sidecar tonal ramps are synthesized swatch previews, not approved text/background combinations or an implemented color scale. WCAG 2.2 AA remains a requirement, not a blanket certification of every existing pairing.

## Typography

**Display and Body Font:** Public Sans, with Segoe UI and sans-serif fallbacks.
**Label/Mono Font:** IBM Plex Mono, with a monospace fallback, currently used for recording durations.

Both families are self-hosted in `docs\assets\fonts` (Latin and Latin Extended subsets, SIL Open Font License files alongside), so no font request goes to a third party. The Agentic Platform slides use their own self-hosted families (Bricolage Grotesque, Instrument Sans and IBM Plex Mono) through `deck-fonts.css`.

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

Heading tracking is role-specific: the thesis uses `display`, section headings use `headline`, work-card titles use `title`, and the questions use `question-title`. The work header's "Explore the work" is a compact 1.5rem (1.35rem at 720px and below). Card descriptions use 0.95rem with 1.55 leading, and scope and status text 0.875rem. These are local component values, not a new global ramp. Headings balance their wraps and break a word only when it cannot fit (`overflow-wrap: break-word`). Card copy hyphenates only words of ten or more characters (`hyphenate-limit-chars: 10 4 4`); card copy and actions can still break long words rather than overflow under text enlargement.

**The Readable Annotation Rule.** Supporting text explains the evidence; keep it readable and subordinate without turning it into decorative microtype.

## Layout

The reusable grammar is a centered, generous reading shell with horizontal rules. The shell is `min(100% - 4rem, 74rem)`; paired columns remain in the archive groups (`0.7fr 1.3fr`, 3rem gap) and the contact close (`1.1fr 0.9fr`, 4rem gap). Repeated spacing includes 1rem text separations, 1.5rem column and list spacing, and 3.5–4rem major section breathing room. No separate named spacing scale is defined.

The homepage opens with the masthead: the 64px portrait beside the name above "AI Solution Engineer at Microsoft", and one row of links, Work · Ideas · Deck · Archive · Let's connect ↓. The opening (`#opening`) sets the headline "Agents that act for you, cite their sources, and stop for a human." with its sage emphasis, the supporting sentence, "Live now: DocWiki ↗ · Oz Radio ↗", and a "Let's connect ↗" button. A rule then opens the work wall (`#work`). Its header carries "Explore the work", the ink provenance line "Personal open-source samples, not Microsoft products.", the muted, unlinked "Oz Antenna · in development · not public", and the Pause control, in a row that wraps when space runs short or text is enlarged. The shelf sits in the first screen: the top of `#work` measures ≈351px at 1440 × 900 and ≈319px at 1366 × 768 (short-screen rule), with both lead cards' Live chips and titles above the fold; at 390 × 844 it starts at ≈528px, directly after the opening, with the work heading and the first drawing in view.

The shelf holds nine cards: DocWiki and Oz Radio first, at the same width as the rest, then voice agents for the full booking journey (Horizon Famille), agent access on behalf of the user (naming Salesforce and ServiceNow), Foundry Hosted Agents, agent memory, agentic software delivery, The Agentic Platform, and the end card, "Your workflow", which leads to the contact close. "The ideas behind the work." (`#ideas`) follows with the three questions as `#horizon`, `#identity`, and `#judgment`, then the native archive (`#archive`) and the graphite contact close (`#contact`). Empty alias spans keep earlier links working: `#flagships` in the work heading, and `#idea-work`, `#idea-identity`, and `#vision` inside the three questions.

The opening is a two-column grid while its container is wider than 56rem: the headline (max 22ch) and a 21.5rem column that stacks the lede, the proof line, and the button, with 0.5rem row and 2.5rem column gaps; the headline and the button share their bottom edge. The gallery spans the shell below it, with 44px arrow gutters at its left and right and Pause/Resume in the header. Cards use `clamp(16.5rem, 27vw, 21.5rem)` capped at 100% of the padded list's available width. They have 1.25rem gaps and 8px edge padding to protect focus outlines. Side arrows do not cover images or descriptions. The three questions form a ruled three-column row below the gallery.

- **Opening container (max-width: 56rem):** a container query on `#opening` stacks the headline, lede, proof line, and button in one column. At default text size this applies to viewports up to about 960px; enlarged text triggers it on wider screens.
- **Intermediate (max-width: 1100px, 1000px):** at 1100px the work header puts the title and Pause on the first row and gives the provenance and Oz Antenna lines a row each. At 1000px the three questions stack into ruled rows.
- **Short screens (min-width: 721px and max-height: 820px):** the masthead (4.5rem minimum height, 56px portrait), the opening's padding, and the work header's margin tighten, and covers switch to 16:9.
- **Narrow (max-width: 720px):** the shell's total horizontal inset becomes 2.5rem. The masthead stacks the 48px portrait and name above one row of five links spread across the width; below 380px the link gaps tighten, and the row wraps to two lines at 320px. The headline spans the full width, followed by the lede, the proof line, and the button. Narrow cards use `min(18rem, 100%)` with 1rem gaps and 16:9 images. The arrow row extends 0.75rem into each shell inset and removes its gutter gaps to preserve card width.
- **Opening, work, then ideas:** the opening precedes the work wall, and the wall precedes the questions, at every width.
- **Progressive density:** archive groups, the contact close, and the footer stack. Only the topic shelf intentionally scrolls horizontally; the page itself must reflow.

## Elevation & Depth

The page chrome is flat. Rules, the canvas and graphite fields, and the soft-sage end-card panel establish hierarchy without a shadow scale. Topic cards and the portrait use one-pixel borders, not floating-panel effects. Depth inside an original artwork or public slide belongs to that image, not to the page's CSS elevation system.

**The Flat Field Notes Rule.** Let rules, spacing, and tonal fields organize the page; let the topic images carry visual variety.

### Topic-shelf motion

The shelf is the single authored motion feature. `docs\assets\topic-showcase.js` first holds the shelf still for 8 seconds after load (`startRest`), then moves the native scroll position at 22 CSS pixels per second, reverses at either boundary, and rests there for 1.6 seconds. It uses one animation-frame loop, no library, no cloned cards, and no jumping loop seam. The drawings themselves are static.

Automatic movement pauses on hover, card/track focus and arrow focus, so the drift never moves focus or the track under a keyboard user. Touch, horizontal wheel input, and previous/next actions make the pause persistent until Resume is selected. Previous/next step through card positions plus the true end of the track, so no press moves only a few pixels. When a focused arrow disables itself at a boundary, focus moves to the opposite arrow, or to the track when both are disabled. Focused links are brought fully into view without animation, including after resizing. The loop stops when the document is hidden or less than 20% of the gallery is visible.

Reduced motion disables automatic playback and uses immediate manual navigation. In the enhanced gallery the scrollbar is hidden; navigation uses the side arrows, swipe/trackpad, or keyboard. Without JavaScript, the linked cards and native scrollbar remain and unwired controls stay hidden. Manual arrows use browser-native smooth scrolling only when the preference permits it. There is no autoplay video, repeating entrance effect, or animation gate hiding content.

## Shapes

Square-edged paper, straight separators, and rectangular actions are the prevailing form. One-pixel rules divide sections and rows; they are deliberate native editorial devices, not container chrome to remove. The portrait and the status chips are square too. There is no rounded-card or pill scale.

The focus outline has a small local corner rounding (2px); this is a focus detail, not a surface-radius token. The favicon is an identity asset, not a component-shape precedent.

## Components

### Buttons and text links

Direct and confident. Filled actions are square anchor links using the `button-primary` and `button-light` variants. The shared action geometry uses a minimum height (44px), an inline arrow gap (0.55rem), and the frontmatter's padding. The primary variant carries the opening's "Let's connect ↗"; the light variant belongs on graphite; text links remain quieter and visibly underlined.

Primary hover changes to sage; light-action hover changes to paper. Ordinary links thicken their underline; topic cards underline their title and take a sage border on hover. Gallery controls are native buttons with 44px minimum targets, 0.875rem text, 600 weight, and 1.3 leading; Pause sits in a labelled group (`role="group"`, "Topic gallery controls"). They use paper/sage states and explicit disabled states at boundaries or when reduced motion disables playback. There are no application forms or loading spinners to infer; status chips are labels, not controls.

Keyboard focus on links, buttons, the gallery viewport, and the archive summary uses a 3px sage outline with a 5px offset; card links draw it 4px inside their border instead. Links inside the graphite contact field use inverse ink. The ring color follows the surrounding surface, not the link's text color: a white label on a dark button must not create a white ring on the light canvas. Sidecar snippets reproduce these surface-aware states; verify any new pairing in context.

### Navigation

A compact portrait, name and role, then five short links: Work · Ideas · Deck · Archive · Let's connect ↓. The short labels keep the row on one line on a 390px phone; "Deck" adds a visually hidden "(The Agentic Platform)" so its accessible name stays explicit, and the stronger "Let's connect ↓" leads to the contact close. Navigation links provide 44px minimum targets in both directions; the masthead is not sticky. On narrow screens the name sits above the row without a hamburger or script dependency. A focus-revealed skip link precedes the header.

### Opening and portrait

The masthead puts the person beside the name, and the opening states the thesis. The h1 reads "Agents that act for you, cite their sources, and stop for a human.", with "stop for a human." in upright sage. The portrait is the owner's own photograph in a `<picture>` inside the brand link: WebP with a JPEG fallback, both 296 × 296 with metadata stripped, shown as a square at 64 CSS px (56px on short screens, 48px on phones). It has a one-pixel rule border on a paper backing, empty alternative text because the visible name beside it already names the person, explicit width and height, and no lazy loading or fetch priority; the headline remains the largest contentful paint. The lede is one factual sentence: "I build and share enterprise agent patterns where business workflows, user identity, and human decisions meet." The muted proof line "Live now: DocWiki ↗ · Oz Radio ↗" sets two bold ink links padded to 46px-tall targets, and the primary "Let's connect ↗" button opens LinkedIn (`rel="me"`, with "on LinkedIn" in its accessible name). The role line stays factual; the opening adds no title, years, counts, or quotes.

### Status chips

A chip above each work title states what the card is: Live, Sample, Video 6:19, or Deck. The markup keeps sentence case; the `chip` role sets the size and tracking, and CSS adds the uppercase. Chips are square, with `0.1rem 0.45rem` padding and a one-pixel border. The neutral chip is sage text on paper with a rule border. The Live chip (`.topic-chip-live`) is warm text and border on warm-soft, and only DocWiki and Oz Radio, the two samples a visitor can use now, carry it. Chips replace hedges, not scope: each card keeps its claim-specific scope line. Chips sit inside the card link as labels, not filters or controls, and open its accessible name ("Live DocWiki: all your documents in one wiki"); the end card has none.

### Lead cards

DocWiki and Oz Radio lead the work wall as its first two cards (`#flagship-docwiki`, `#flagship-oz-radio`). They are ordinary topic cards, with the same width, anatomy, and hover, and they lead by position and their Live chips, not by size: previous/next steps by one uniform card width, so a wider lead card would break it. Their titles pair name and outcome ("DocWiki: all your documents in one wiki", "Oz Radio: a presentation you can interrupt"); their scope lines keep the specific qualifiers ("Live sample wiki · fictional corpus · 37 sources · 854 evidence pages", "Live demo · AI avatar · capped daily"). DocWiki's description, its archive entry, and the README share one claim: all your documents in one wiki that staff can navigate and agents can query, cited to the page.

`data-flagship` sits on four links only: the two in the opening's proof line and the two lead-card links. The analytics beacon counts each activation as `flagship_click` with the product (`docwiki` or `oz-radio`) and the nearest id (`opening`, `flagship-docwiki`, or `flagship-oz-radio`), whether the link stays on this site or not. These are the "featured project links at the top of the home page" that the privacy notice describes.

### Topic cards and imagery

Each card is one linked visual, a status chip, a topic title, a concise description, and an explicit scope/format line. The card link takes its accessible name from the chip and title (`aria-labelledby`) and its description from the scope line (`aria-describedby`). Cards share height and align their scope lines; descriptions do not truncate. Bitmap covers support the HTML narrative and use empty alternative text to avoid repeating it. Frames use 8:5 on desktop and 16:9 on phones and short screens. The SVG drawings preserve their full view box instead of cropping labels.

The order is DocWiki (Live), Oz Radio (Live), voice booking (Video 6:19), agent access on behalf of the user (Sample), Foundry Hosted Agents (Sample), agent memory (Sample), agentic software delivery (Sample), The Agentic Platform (Deck), and the end card.

The preferred capability titles include "Agent access on behalf of the user",
"Foundry Hosted Agents", and "Voice agents for the full booking journey".
The voice example's description remains explicitly a recorded booking-change
scenario with mock systems, not a claim of new booking or payment capabilities.

Three cards use inline SVG drawings instead of bitmaps, in the shared `.topic-image-drawing` frame on the stone canvas: DocWiki, Oz Radio, and voice booking. Each drawing carries information, so each has an accessible title and description. The DocWiki and Oz Radio drawings follow one contract, and new drawings should too: a 640 × 400 view box; `role="img"` with `aria-labelledby` pointing to its own `<title>` and `<desc>`; every id prefixed (`dw-cover-*`, `ozr-cover-*`) so inlined copies cannot collide; no `<style>` element, script, `foreignObject`, or external reference; colors as inline styles from page tokens with hex fallbacks (`fill:var(--sage,#305b3b)`); text of 32 units or more and at most six labels; a visible "Illustrative" label; and wording verbatim from the live samples. The DocWiki drawing traces the claim "Export above the limit by more than 1 MW for more than 5 minutes will be reported." through footnote 1 to the cited line on p. 1, marked "quote verified". The Oz Radio drawing pauses an AI avatar's presentation at slide 1 of 5 for a raised hand asking "What is the difference between a model and an agent?", answered "From slides 2 and 3"; it shows no face.

The voice illustration is lightweight SVG directly in `index.html`: a microphone/voice-agent symbol connects by four arrows to CRM, ERP, a knowledge base, and Teams approval. The first three boxes are dashed; the drawing's description and the card's scope line state that those services are mocked, and the graphic is labelled "Illustrative demo flow" (32 units). It predates the contract: its labels are 28 to 34 units. It uses the page's existing palette and font, with no Excalidraw file, image-generation service, library, or additional animation.

The drawings are static. The shelf rests for 8 seconds at load, then drifts at 22 px/s with 1.6-second rests at either end (see Topic-shelf motion).

The five 960 x 600 WebP covers total 223,810 bytes. Each is below 90 KB. The three drawings are parsed with the page; all five bitmap covers load lazily. Original diagrams and presentation excerpts are previews, not small-screen reading copy or evidence of production validation.

| Asset under `docs/assets/` | Kind and source |
|----------------------------|-----------------|
| `portrait.webp`, `portrait.jpg` | The owner's own portrait, 296 x 296, metadata stripped. The masthead shows it beside the name at 64 CSS px (56 px on short screens, 48 px on phones). |
| `work/docwiki-cover.svg`, `work/oz-radio-cover.svg` | Source drawings for the two lead cards, inlined verbatim in `index.html`; change both copies together. Original illustrative drawings whose wording comes from the public [DocWiki sample wiki](https://docwiki.ozgurkarahan.com/) and the [Oz Radio live demo](https://ozgurkarahan.com/oz-radio/). |
| `topics/identity.webp` | Detail of the public [Salesforce identity architecture](https://raw.githubusercontent.com/ozgurkarahan/salesforce-meta-tool-identity-propagation/master/docs/diagrams/azure-architecture.png); identifying/deployment regions omitted. |
| `topics/runtime.webp` | Architecture excerpt from the [experimental runtime guide](https://ozgurkarahan.github.io/foundry-openai-coding-agent/#architecture), not a running application screen. |
| `topics/memory.webp` | Original editorial linked-Markdown illustration, grounded in [AI Agent Memory](https://github.com/ozgurkarahan/ai-agent-memory); editable `memory.svg` alongside it. No private wiki was used. |
| `topics/delivery.webp` | Public [Agentic SDLC presenter slide](https://ozgurkarahan.github.io/agentic-sdlc-demo/slides/agentic-sdlc-lifecycle.html#slide-9); procedures, not completion results. |
| `topics/platform.webp` | Public [Agentic Platform lifecycle slide](https://ozgurkarahan.com/agentic-platform/#3); a strategy presentation, not a deployed platform screenshot. |
| `social/home.svg`, `social/home-2026-10-19.png` | The homepage share image, 1200 x 627: name and role, the headline beside the portrait, and "Live now: DocWiki · Oz Radio". `home.svg` is the editable source, set in the self-hosted Public Sans; the PNG is its metadata-free export. |
| `flagships/docwiki-evidence.webp` | Unretouched crop (page px 80,716–1180,871: the four instruction bullets) of the evidence-sidecar page image `src-867a6c78f5b5/p0001` from the public [DocWiki](https://github.com/ozgurkarahan/docwiki) fictional sample release (run 2026-10-18); lossless WebP 1100 x 155. Retained but no longer referenced by the homepage; kept for the planned DocWiki case page (Phase 3). |
| `flagships/oz-radio-1-presenting.webp`, `-2-question.webp`, `-3-answering.webp`, `-3-answering-660.webp` | Crops of one anonymous session of the public [Oz Radio](https://github.com/ozgurkarahan/oz-radio) live demo, 18 October 2026 (UTC), captured by a scripted Playwright run. The question was spoken by a synthetic test voice and transcribed by the app; the answer was generated live ("From slides 2 and 3"). The only additions are the baked "AI avatar / synthetic voice" chip and the resize to 330 px (frame 3 also 660 px for phones). The presenter is an AI-generated photo avatar ("Sofia", confirmed by the owner) animated by Azure AI Speech. Retained but no longer referenced by the homepage; kept for the planned Oz Radio case page (Phase 3). |
| Voice diagram in `index.html` | Original inline SVG showing four connections; illustrative and mock-qualified, not a deployed-architecture claim. |
| `horizon-approval.webp` | Retained legacy 548 x 183 crop of the [public approval image](https://raw.githubusercontent.com/ozgurkarahan/horizon-famille/master/slides/html/assets/public/manon-approval.png), crop box `(68, 429, 616, 612)` from 660 x 635 pixels. No longer used in the first card; its existing public asset path is preserved. |

The WebP and JPEG exports contain no EXIF/XMP/ICC metadata, and the share PNG carries no text chunks. Provenance records the source and treatment; it does not invent license claims or turn a conceptual cover into a verified architecture.

### End card

The shelf ends on an invitation rather than a last project. "Your workflow" has no chip; its image area is a soft-sage panel with "Bring a workflow." and a large sage arrow, hidden from assistive technology, and its copy repeats the contact close's sentence. The card links to `#contact` ("Let's examine the boundaries ↓"), takes its accessible name from its title alone, and carries no `data-flagship`. The drift rests on it before turning back.

### The ideas section

"The ideas behind the work." (`#ideas`), introduced by "Three questions I bring to enterprise AI.", replaces the former question links, case studies, judgment field, idea list, and lab with one ruled three-column row. Each column is an article (`#horizon`, `#identity`, `#judgment`): an h3 whose sage tabular number (01–03, hidden from assistive technology) sits above the question; a bold stance in ink ("A task, not just an answer.", "The caller's identity matters.", "A capable agent also needs a stop line."); one muted paragraph; a plain list of bold links with generous vertical padding; and, where a boundary applies, a scope note under a rule. One-pixel vertical rules divide the columns; at 1000px and below they stack into ruled rows.

01 links the Horizon Famille call (with its 6m19s duration), presentation, and source, with the demonstration scope beneath. 02 links "Identity propagation, explained", the Customer 360 Assistant, and the article on identity in Salesforce meta-tools, with the evaluation boundaries beneath. 03 links the approval workflow, The Agentic Platform presentation, and its source. The Entra, Salesforce, and ServiceNow repositories, the Foundry limitations, and the DocWiki deep links live in the archive; memory and delivery remain on their cards and in the archive.

### Project archive

A native `details` / `summary` disclosure with a square, bordered plus/minus indicator, under a visually hidden h2, "Project archive", that names the section. The indicator changes with the native open state; it is decorative to assistive technology. Ruled category groups contain source links and prose. The DocWiki entry keeps its deep links (a cited claim, its evidence page, and how it works), and the Foundry entry links its limitations. The DocWiki and Oz Radio repository links add a visually hidden "on GitHub". Private entries use generic names and an inline “Private repository” label, not invented badges or exposed source slugs.

### Contact and sharing

The graphite close uses inverse text, a light LinkedIn action, and a quieter GitHub text link. The footer maintains the personal/community scope note and links to the privacy notice at `/privacy/`.

The page title and the Open Graph and Twitter titles carry the headline. `docs\assets\social\home.svg` is the editable source of the share image; `social\home-2026-10-19.png` is its 1200 × 627 export, and Open Graph (`og:image:height` 627) and the large-image social card use it, with the headline in its alternative text. The date in the file name versions the image. The earlier `profile-social.svg` and `profile-social.png` (1200 × 630) stay in place but are no longer referenced. The page uses JSON-LD, one small progressive-enhancement gallery script, and `docs\assets\telemetry.js`, a small first-party analytics beacon: owner-only Azure Application Insights, no cookies, path-only URLs, and nothing sent when Global Privacy Control, Do Not Track or the site opt-out is set. It has no autoplay media, third-party tracking, backend, animation library, or new framework.

## Do's and Don'ts

### Do:
- **Do** preserve the Stone + Sage identity, keep the warm pair for Live status, and use the inverse palette on graphite.
- **Do** use semantic headings, visible focus, English image alternatives, and a motion-free reading path.
- **Do** keep authentic evidence, provenance, and project boundaries adjacent.
- **Do** show several topics before a flagship deep dive, and preserve manual browsing whenever automatic motion is paused or unavailable.
- **Do** retain native anchors, ruled lists, and disclosures where they already serve the content, and keep alias anchors when a section moves.
- **Do** let a chip state the format and keep each card's scope line for claim-specific qualifiers.
- **Do** verify text and focus contrast in context rather than treating a token or source snippet as proof of WCAG conformance.
- **Do** label synthetic presenters and illustrative drawings inside the image itself, not only in a caption.

### Don't:
- **Don't** introduce GitHub-dark chrome, decorative neon, gradient text, or glass panels as a replacement identity.
- **Don't** use the warm pair for decoration, hover states, or a project's color.
- **Don't** turn an observed page composition, local size, or single-component shadow into a universal design requirement.
- **Don't** replace real evidence with a fabricated approval screen or imply that separately scoped samples form one production system.
- **Don't** expose private repository slugs or identifying rows from source artifacts.
- **Don't** promote low-contrast pairings or synthesized sidecar ramps into approved accessibility standards.
- **Don't** publish anything about Oz Antenna beyond its name and status until its public publishing is enabled.
