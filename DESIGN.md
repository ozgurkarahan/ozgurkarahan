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
  evidence-sheet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "1.4rem 1.6rem"
  project-archive:
    textColor: "{colors.ink}"
---

# Design System: Blueprint Field Notes

## Overview

**Creative North Star: "Blueprint Field Notes"**

A working architecture brief: calm stone surfaces, deep green graphite, restrained sage, measured rules, and generous humanist type. The identity is clear, architectural, and human rather than dashboard-like or dependent on decorative technology imagery.

Authentic work artifacts carry the evidence. Flat editorial rows keep explanation, source links, and limitations together; a paper-like approval sheet adds a deliberately local material accent. Precision comes from hierarchy and readable annotations, not from simulated application chrome.

**Key Characteristics:**
- Stone and sage with a graphite inverse surface.
- Public Sans hierarchy with selective monospace durations.
- Ruled editorial rows, generous spacing, and native disclosures.
- Authentic evidence with adjacent scope and provenance.

This refresh records the inline stylesheet and markup in `index.html`. The frontmatter owns reusable tokens; `.impeccable\design.json` supplies rendering examples and extensions. Homepage-specific direction remains in `.impeccable\surfaces\index-html.md`; the composition described below is an observed application, not a template for every surface.

## Colors

Stone + Sage is one restrained accent family supported by green-tinted neutrals, not a multi-accent theme. Frontmatter values retain the stylesheet's canonical hex notation and custom-property names.

### Primary
- **Sage** (`sage`): thesis emphasis, question numbers and arrows, selected text links, primary-action hover, and focus outlines on light surfaces.
- **Soft Sage** (`sage-soft`): the human-judgment field and the approval sheet's solid offset backing.
- **Light Signal** (`signal`): the light action on the graphite contact field, not a general-purpose text color.

### Neutral
- **Stone Canvas** (`canvas`): the page background, including the opening.
- **Paper Surface** (`surface`): the approval sheet and light text on the primary action.
- **Green Ink** (`ink`): headings, body text, and the primary action's fill.
- **Muted Ink** (`muted`): supporting prose, captions, source formats, and boundaries on light surfaces.
- **Graphite** (`graphite`): the inverse contact field.
- **Inverse Ink / Inverse Muted** (`dark-ink`, `dark-muted`): primary and supporting text on graphite; inverse ink also supplies focus outlines on that surface.
- **Measured Rule** (`line`): section separators, list rules, and the approval-sheet border; not a text color.

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

Heading tracking is role-specific: the thesis uses `display`, major headings use `headline`, and repeated idea titles use `linked-title`. Question-link titles use a local compact treatment (-0.02em); this does not change the display token. Headings balance their wraps; paragraphs use pretty wrapping.

**The Readable Annotation Rule.** Supporting text explains the evidence; keep it readable and subordinate without turning it into decorative microtype.

At the intermediate breakpoint, the display becomes `clamp(3rem, 6.1vw, 4.5rem)`. At the narrow breakpoint it becomes `clamp(2.65rem, 10.4vw, 4rem)` with a slightly looser line-height (1.04). Narrow case headings use 2.25rem; judgment, ideas, and lab headings use 2.2rem. Tracking remains unchanged by these breakpoints.

## Layout

The reusable grammar is a centered, generous reading shell with paired explanation/evidence columns and horizontal rules. The shell is `min(100% - 4rem, 74rem)`; narrative rows commonly pair `0.85fr 1.15fr` columns with a 4rem gap. Repeated spacing includes 1rem text separations, 1.5rem list/annotation spacing, and 3.5–4.5rem major section breathing room. No separate named spacing scale is defined.

The current homepage is a three-question dossier: author and thesis; action, authority, and human-decision questions with approval evidence; action and identity case rows; a soft-sage human-judgment field; ruled ideas including the Agentic Platform presentation; supporting experiments; native archive; graphite contact close. The Horizon case row stays on the canvas. The presentation is an idea-row destination, not a standalone feature.

The opening's proposition pair uses `1.32fr 0.85fr`; the lower pair uses `0.9fr 1.1fr`, with questions on the left and proof on the right. The approval artifact and its recording action are a single proof group.

- **Intermediate (max-width: 1000px):** opening columns rebalance, the lower pair becomes equal-width, and recurring 4rem gaps tighten to 2.5rem where declared. The recording action stacks.
- **Narrow (max-width: 720px):** the shell's total horizontal inset becomes 2.5rem. The masthead stacks but keeps its visible anchor navigation. Introductory and narrative columns become single-column.
- **Proof first:** on narrow screens, the approval artifact and recording action precede question navigation. This matches the proof-before-questions source order; desktop placement is done by grid areas, not duplicated content.
- **Progressive density:** ideas place format text below their titles; archive groups and the footer stack. Actions and metadata wrap rather than requiring a horizontal scroller.

## Elevation & Depth

The system is flat by default. Rules and the canvas / soft-sage / graphite fields establish hierarchy without a generic shadow scale. The approval sheet alone uses a hard, unblurred sage offset to suggest a second sheet, not floating application chrome.

### Shadow Vocabulary
- **Approval-sheet backing:** the base declaration is `8px 12px 0 var(--sage-soft)`. The narrow-screen base is `5px 8px 0 var(--sage-soft)`. These are local material treatments, not general card-elevation tokens.

**The Flat Field Notes Rule.** Let rules, spacing, and tonal fields organize content; reserve the paper offset for the authentic evidence sheet.

The sheet's single `paper-settle` entrance runs only under `prefers-reduced-motion: no-preference` (800ms, using `--ease-out`: `cubic-bezier(0.22, 1, 0.36, 1)`). It moves from 5px below rest while its backing grows from `3px 5px` to the base desktop offset. Because the animation fills forwards, that endpoint also overrides the narrow base shadow when motion is allowed; the narrow base remains visible with reduced motion.

There is no repeating flow animation, fade-in gate, or animated hover transition. Under `prefers-reduced-motion: reduce`, scrolling becomes immediate and all animation and transition declarations are disabled. Evidence and text remain visible without motion.

## Shapes

Square-edged paper, straight separators, and rectangular actions are the prevailing form. One-pixel rules divide sections and rows; they are deliberate native editorial devices, not container chrome to remove. There is no rounded-card or pill scale.

The focus outline has a small local corner rounding (2px); this is a focus detail, not a surface-radius token. The favicon is an identity asset, not a component-shape precedent.

## Components

### Buttons and text links

Direct and confident. Filled actions are square anchor links using the `button-primary` and `button-light` variants. The shared action geometry uses a minimum height (44px), an inline arrow gap (0.55rem), and the frontmatter's padding. The light variant belongs on graphite; text links remain quieter and visibly underlined.

Primary hover changes to sage; light-action hover changes to paper. Ordinary links thicken their underline; question and idea links underline their title on hover. There are no separate application-button, loading, disabled, input, or chip components to infer.

Keyboard focus on links and the archive summary uses a 3px sage outline with a 5px offset. Links inside the graphite contact field use inverse ink instead. The ring color follows the surrounding surface, not the link's text color: a white label on a dark button must not create a white ring on the light canvas. Sidecar snippets reproduce these surface-aware states; verify any new pairing in context.

### Navigation

A compact name and role, visible section anchors, and a stronger conversation link. Navigation links provide a 44px minimum height; the masthead is not sticky. On narrow screens the name sits above the anchor row without a hamburger or script dependency. A focus-revealed skip link precedes the header.

### Question navigation and evidence rows

Numbered, ruled question links use tabular numerals, strong humanist titles, and text arrows. They point to the corresponding action, identity, and judgment anchors. Editorial case rows pair a short headline with prose and source actions; scope notes are separated by a rule, not hidden in a tooltip. Source lists and idea lists are lighter ruled variants, not equal project cards.

### Approval sheet

A real work artifact on white paper: caption, image, and mock-data disclosure, bordered by the shared rule and backed by the local paper offset. At both narrower breakpoints the padding becomes 1.1rem. The recording action stays outside the figure but inside the proof group, accompanied by language/subtitle information.

**Provenance:** `docs\assets\horizon-approval.webp` (548 × 183) derives from the published [Horizon approval screenshot](https://raw.githubusercontent.com/ozgurkarahan/horizon-famille/master/slides/html/assets/public/manon-approval.png) (660 × 635), using source-pixel crop box `(68, 429, 616, 612)`. The crop excludes client, case, and order rows while retaining the rationale and approval buttons. The page supplies English alt text and explicitly labels business systems and data as mocks. This records provenance only, not a third-party license claim.

The sidecar renders a frame-and-disclosure excerpt without recreating the approval UI or embedding its image.

### Project archive

A native `details` / `summary` disclosure with a square, bordered plus/minus indicator. The indicator changes with the native open state; it is decorative to assistive technology. Ruled category groups contain source links and prose. Private entries use generic names and an inline “Private repository” label, not invented badges or exposed source slugs.

### Contact and sharing

The graphite close uses inverse text, a light LinkedIn action, and a quieter GitHub text link. The footer maintains the personal/community scope note.

`docs\assets\profile-social.svg` is the editable authored share-card source (1200 × 630); `profile-social.png` is its exported image. Open Graph and the large-image social card use that export. The page has no autoplay, application JavaScript, tracking, or new framework; its sole script is JSON-LD metadata.

## Do's and Don'ts

### Do:
- **Do** preserve the Stone + Sage identity and use the inverse palette on graphite.
- **Do** use semantic headings, visible focus, English image alternatives, and a motion-free reading path.
- **Do** keep authentic evidence, provenance, and project boundaries adjacent.
- **Do** retain native anchors, ruled lists, and disclosures where they already serve the content.
- **Do** verify text and focus contrast in context rather than treating a token or source snippet as proof of WCAG conformance.

### Don't:
- **Don't** introduce GitHub-dark chrome, decorative neon, gradient text, or glass panels as a replacement identity.
- **Don't** turn an observed page composition, local size, or single-component shadow into a universal design requirement.
- **Don't** replace real evidence with a fabricated approval screen or imply that separately scoped samples form one production system.
- **Don't** expose private repository slugs or identifying rows from source artifacts.
- **Don't** promote low-contrast pairings or synthesized sidecar ramps into approved accessibility standards.
