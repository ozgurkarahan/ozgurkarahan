---
name: "Blueprint Field Notes"
description: "Ozgur Karahan's stone, sage, and graphite portfolio system, recorded from the built homepage."
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
typography:
  display:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(3.2rem, 5.8vw, 5.3rem)"
    fontWeight: 800
    lineHeight: 1.01
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(2.1rem, 3.2vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.3
  linked-title:
    fontFamily: "Public Sans, Segoe UI, sans-serif"
    fontSize: "clamp(1.25rem, 1.75vw, 1.55rem)"
    fontWeight: 600
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
  question-navigation:
    textColor: "{colors.ink}"
  topic-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
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

A working architecture brief: calm stone surfaces, deep green graphite, restrained sage, measured rules, and generous humanist type. The identity is clear, architectural, and human rather than dashboard-like or dependent on decorative technology imagery.

Public work previews and clearly editorial covers expose the breadth of the portfolio before individual case studies. A controlled, horizontal topic shelf is the opening's focal interaction. Flat editorial rows keep the deeper explanation, source links, and limitations together. Precision comes from hierarchy and readable descriptions, not simulated application chrome.

**Key Characteristics:**
- Stone and sage with a graphite inverse surface.
- Public Sans hierarchy with selective monospace durations.
- An image-led topic shelf, ruled editorial rows, and native disclosures.
- Separately scoped projects with adjacent descriptions and provenance.

This refresh records the inline stylesheet and markup in `index.html`. The frontmatter owns reusable tokens; `.impeccable\design.json` supplies rendering examples and extensions. Homepage-specific direction remains in `.impeccable\surfaces\index-html.md`; the composition described below is an observed application, not a template for every surface.

## Colors

Stone + Sage is one restrained accent family supported by green-tinted neutrals, not a multi-accent theme. Frontmatter values retain the stylesheet's canonical hex notation and custom-property names.

### Primary
- **Sage** (`sage`): thesis emphasis, question numbers and arrows, selected text links, primary-action hover, and focus outlines on light surfaces.
- **Soft Sage** (`sage-soft`): the human-judgment field, gallery-control hover, scrollbar track, and the voice-card image surround.
- **Light Signal** (`signal`): the light action on the graphite contact field, not a general-purpose text color.

### Neutral
- **Stone Canvas** (`canvas`): the page background, including the opening.
- **Paper Surface** (`surface`): topic cards, gallery controls, and light text on the primary action.
- **Green Ink** (`ink`): headings, body text, and the primary action's fill.
- **Muted Ink** (`muted`): supporting prose, captions, source formats, and boundaries on light surfaces.
- **Graphite** (`graphite`): the inverse contact field.
- **Inverse Ink / Inverse Muted** (`dark-ink`, `dark-muted`): primary and supporting text on graphite; inverse ink also supplies focus outlines on that surface.
- **Measured Rule** (`line`): section separators, list rules, and card/image borders; not a text color.

**The One Accent Family Rule.** Sage variants emphasize meaning and tonal structure; they do not assign a different brand color to each project.

One-off footer, favicon, and browser-theme colors are not additional palette tokens. Sidecar tonal ramps are synthesized swatch previews, not approved text/background combinations or an implemented color scale. WCAG 2.2 AA remains a requirement, not a blanket certification of every existing pairing.

## Typography

**Display and Body Font:** Public Sans, with Segoe UI and sans-serif fallbacks.
**Label/Mono Font:** IBM Plex Mono, with a monospace fallback, currently used for recording durations.

**Character:** Humanist, direct, and generous at headline scale. Most labels stay in Public Sans; monospace is a selective annotation device, not the default for project names.

### Hierarchy
- **Display:** the `display` role leads the thesis; measure is deliberately short (16ch). Sage emphasis is upright, not italic.
- **Headline:** the `headline` role is shared by case-study and judgment headings. Nearby section-heading clamps vary with available measure; there is no fixed mathematical type ratio.
- **Title:** the `title` role supports runtime and supporting-work notes. `linked-title` defines repeated editorial idea rows.
- **Body:** the `body` role carries prose, normally capped by the shared measure (70ch); introductory case copy is slightly larger.
- **Label:** the `label` role carries recurring navigation and source-format text. Other small captions are component-local, not additional scale steps.
- **Action:** the `action` role shares weight and leading across filled and text links; size inherits its context.
- **Annotation:** the `annotation` role sizes durations relative to their enclosing action and keeps them on one line.

Heading tracking is role-specific: the thesis uses `display`, major headings use `headline`, and repeated idea titles use `linked-title`. Question-link titles use a local compact treatment (-0.02em); this does not change the display token. Topic titles use 1.25rem with 1.2 leading, descriptions 0.95rem with 1.55 leading, and scope/status text 0.875rem. These are local component values, not a new global ramp. Headings balance their wraps; constrained headings, card copy, and actions can break long words rather than overflow under text enlargement.

**The Readable Annotation Rule.** Supporting text explains the evidence; keep it readable and subordinate without turning it into decorative microtype.

At the intermediate breakpoint, the display becomes `clamp(3rem, 6.1vw, 4.5rem)`. At the narrow breakpoint it becomes `clamp(2.65rem, 10.4vw, 4rem)` with a slightly looser line-height (1.04). Narrow case headings use 2.25rem; judgment, ideas, and lab headings use 2.2rem. Tracking remains unchanged by these breakpoints.

## Layout

The reusable grammar is a centered, generous reading shell with paired explanation/evidence columns and horizontal rules. The shell is `min(100% - 4rem, 74rem)`; narrative rows commonly pair `0.85fr 1.15fr` columns with a 4rem gap. Repeated spacing includes 1rem text separations, 1.5rem list/annotation spacing, and 3.5–4.5rem major section breathing room. No separate named spacing scale is defined.

The current homepage opens with the author and thesis, then a topic shelf ordered with voice/booking first and agent access on behalf of the user second, explicitly naming Salesforce and ServiceNow. Foundry Hosted Agents, memory, delivery, MCP integration, and platform ideas follow. Horizon remains one of seven cards, not an exclusive hero panel. The three architectural questions follow the shelf, leading into the existing case studies, human-judgment field, ideas, experiments, native archive, and graphite contact close.

The opening's proposition pair uses `1.32fr 0.85fr`. The gallery spans the shell below it, with 44px arrow gutters at its left and right and Pause/Resume above. Cards use `clamp(16.5rem, 27vw, 21.5rem)` capped at 100% of the padded list's available width. They have 1.25rem gaps and 8px edge padding to protect focus outlines. Side arrows do not cover images or descriptions. The three questions form a ruled three-column row below the gallery.

- **Intermediate (max-width: 1000px):** opening columns rebalance and recurring 4rem gaps tighten to 2.5rem where declared.
- **Narrow (max-width: 720px):** the shell's total horizontal inset becomes 2.5rem. The masthead and question row stack; navigation and gallery controls wrap when required. Narrative grids use zero-minimum single columns to support enlarged text.
- **Breadth first:** the topic shelf precedes the questions at every width. Narrow cards use `min(18rem, 100%)` with 1rem gaps. The arrow row extends 0.75rem into each shell inset and removes its gutter gaps to preserve card width.
- **Progressive density:** ideas place format text below titles; archive groups and the footer stack. Only the topic shelf intentionally scrolls horizontally; the page itself must reflow.

## Elevation & Depth

The page chrome is flat. Rules and the canvas / soft-sage / graphite fields establish hierarchy without a shadow scale. Topic cards use one-pixel borders, not floating-panel effects. Depth inside an original artwork or public slide belongs to that image, not to the page's CSS elevation system.

**The Flat Field Notes Rule.** Let rules, spacing, and tonal fields organize the page; let the topic images carry visual variety.

### Topic-shelf motion

The shelf is the single authored motion feature. `docs\assets\topic-showcase.js` moves the native scroll position at 22 CSS pixels per second, reverses at either boundary, and rests there for 1.6 seconds. It uses one animation-frame loop, no library, no cloned cards, and no jumping loop seam.

Automatic movement pauses on hover and card/track focus. Touch, horizontal wheel input, and previous/next actions make the pause persistent until Resume is selected. Focused links are brought fully into view without animation, including after resizing. The loop stops when the document is hidden or less than 20% of the gallery is visible.

Reduced motion disables automatic playback and uses immediate manual navigation. In the enhanced gallery the scrollbar is hidden; navigation uses the side arrows, swipe/trackpad, or keyboard. Without JavaScript, the linked cards and native scrollbar remain and unwired controls stay hidden. Manual arrows use browser-native smooth scrolling only when the preference permits it. There is no autoplay video, repeating entrance effect, or animation gate hiding content.

## Shapes

Square-edged paper, straight separators, and rectangular actions are the prevailing form. One-pixel rules divide sections and rows; they are deliberate native editorial devices, not container chrome to remove. There is no rounded-card or pill scale.

The focus outline has a small local corner rounding (2px); this is a focus detail, not a surface-radius token. The favicon is an identity asset, not a component-shape precedent.

## Components

### Buttons and text links

Direct and confident. Filled actions are square anchor links using the `button-primary` and `button-light` variants. The shared action geometry uses a minimum height (44px), an inline arrow gap (0.55rem), and the frontmatter's padding. The light variant belongs on graphite; text links remain quieter and visibly underlined.

Primary hover changes to sage; light-action hover changes to paper. Ordinary links thicken their underline; question, topic, and idea links underline their title on hover. Gallery controls are native buttons with 44px minimum targets, 0.875rem text, 600 weight, and 1.3 leading. They use paper/sage states and explicit disabled states at boundaries or when reduced motion disables playback. There are no application forms, loading spinners, or chips to infer.

Keyboard focus on links, buttons, the gallery viewport, and the archive summary uses a 3px sage outline with a 5px offset. Links inside the graphite contact field use inverse ink instead. The ring color follows the surrounding surface, not the link's text color: a white label on a dark button must not create a white ring on the light canvas. Sidecar snippets reproduce these surface-aware states; verify any new pairing in context.

### Navigation

A compact name and role, visible section anchors, and a stronger conversation link. Navigation links provide a 44px minimum height; the masthead is not sticky. On narrow screens the name sits above wrapping anchors without a hamburger or script dependency. The existing `#work` destination now opens the broader gallery. A focus-revealed skip link precedes the header.

### Question navigation and evidence rows

Numbered, ruled question links use tabular numerals, strong humanist titles, and text arrows. They point to the corresponding action, identity, and judgment anchors. Editorial case rows pair a short headline with prose and source actions; scope notes are separated by a rule, not hidden in a tooltip. Source lists and idea lists are lighter ruled variants, not equal project cards.

### Topic cards and imagery

Each card is one linked visual, a topic title, a concise description, and an explicit scope/format line. Cards share height and align their scope lines; descriptions do not truncate. Bitmap covers support the HTML narrative and use empty alternative text to avoid repeating it. The first card instead uses an inline SVG with an accessible title and description, because its four system connections add information. Desktop frames use 8:5; narrow frames use 16:9. The SVG preserves its full view box instead of cropping labels.

The preferred capability titles include "Agent access on behalf of the user",
"Foundry Hosted Agents", and "Voice agents for the full booking journey".
The voice example's description remains explicitly a recorded booking-change
scenario with mock systems, not a claim of new booking or payment capabilities.

The voice illustration is lightweight SVG directly in `index.html`: a microphone/voice-agent symbol connects by four arrows to CRM, ERP, a knowledge base, and Teams approval via Power Platform. The first three services are explicitly mocked and the graphic is labelled illustrative. It uses the page's existing palette and font, with no Excalidraw file, image-generation service, library, or additional animation.

The six 960 x 600 WebP covers total 249,228 bytes. Each is below 90 KB. The leading voice SVG is parsed with the page; the first bitmap (identity) loads eagerly with high priority and later bitmap cards load lazily. Original diagrams and presentation excerpts are previews, not small-screen reading copy or evidence of production validation.

| Asset under `docs/assets/` | Kind and source |
|----------------------------|-----------------|
| `topics/identity.webp` | Detail of the public [Salesforce identity architecture](https://raw.githubusercontent.com/ozgurkarahan/salesforce-meta-tool-identity-propagation/master/docs/diagrams/azure-architecture.png); identifying/deployment regions omitted. |
| `topics/runtime.webp` | Architecture excerpt from the [experimental runtime guide](https://ozgurkarahan.github.io/foundry-openai-coding-agent/#architecture), not a running application screen. |
| `topics/memory.webp` | Original editorial linked-Markdown illustration, grounded in [AI Agent Memory](https://github.com/ozgurkarahan/ai-agent-memory); editable `memory.svg` alongside it. No private wiki was used. |
| `topics/delivery.webp` | Public [Agentic SDLC presenter slide](https://ozgurkarahan.github.io/agentic-sdlc-demo/slides/agentic-sdlc-lifecycle.html#slide-9); procedures, not completion results. |
| `topics/mcp.webp` | Original editorial API/gateway illustration grounded in the [orders-API sample](https://github.com/ozgurkarahan/azure-apim-mcp-server); editable `mcp.svg` alongside it. |
| `topics/platform.webp` | Public [Agentic Platform lifecycle slide](https://ozgurkarahan.com/agentic-platform/#3); a strategy presentation, not a deployed platform screenshot. |
| Voice diagram in `index.html` | Original inline SVG showing four connections; illustrative and mock-qualified, not a deployed-architecture claim. |
| `horizon-approval.webp` | Retained legacy 548 x 183 crop of the [public approval image](https://raw.githubusercontent.com/ozgurkarahan/horizon-famille/master/slides/html/assets/public/manon-approval.png), crop box `(68, 429, 616, 612)` from 660 x 635 pixels. No longer used in the first card; its existing public asset path is preserved. |

The WebP exports contain no EXIF/XMP/ICC metadata. Provenance records the source and treatment; it does not invent license claims or turn a conceptual cover into a verified architecture.

### Project archive

A native `details` / `summary` disclosure with a square, bordered plus/minus indicator. The indicator changes with the native open state; it is decorative to assistive technology. Ruled category groups contain source links and prose. Private entries use generic names and an inline “Private repository” label, not invented badges or exposed source slugs.

### Contact and sharing

The graphite close uses inverse text, a light LinkedIn action, and a quieter GitHub text link. The footer maintains the personal/community scope note.

`docs\assets\profile-social.svg` is the editable authored share-card source (1200 × 630); `profile-social.png` is its exported image. Open Graph and the large-image social card use that export. The page uses JSON-LD and one small, progressive-enhancement gallery script. It has no autoplay media, tracking, backend, animation library, or new framework.

## Do's and Don'ts

### Do:
- **Do** preserve the Stone + Sage identity and use the inverse palette on graphite.
- **Do** use semantic headings, visible focus, English image alternatives, and a motion-free reading path.
- **Do** keep authentic evidence, provenance, and project boundaries adjacent.
- **Do** show several topics before a flagship deep dive, and preserve manual browsing whenever automatic motion is paused or unavailable.
- **Do** retain native anchors, ruled lists, and disclosures where they already serve the content.
- **Do** verify text and focus contrast in context rather than treating a token or source snippet as proof of WCAG conformance.

### Don't:
- **Don't** introduce GitHub-dark chrome, decorative neon, gradient text, or glass panels as a replacement identity.
- **Don't** turn an observed page composition, local size, or single-component shadow into a universal design requirement.
- **Don't** replace real evidence with a fabricated approval screen or imply that separately scoped samples form one production system.
- **Don't** expose private repository slugs or identifying rows from source artifacts.
- **Don't** promote low-contrast pairings or synthesized sidecar ramps into approved accessibility standards.
