# Design System — Blueprint Field Notes

## Direction

Blueprint Field Notes presents the portfolio as a working architecture brief: calm stone surfaces, deep graphite, restrained sage, visible systems thinking, and precise annotations. It should feel authored by an enterprise AI architect rather than generated from a developer-profile template.

The visual scene is a technical executive reviewing the page in a bright meeting room before deciding whether to involve Ozgur in an enterprise AI platform initiative.

## Color Strategy

Use a restrained Stone + Sage palette. The hero is a low-chroma near-white rather than a saturated color field. Deep green graphite anchors the architecture visual and closing action, while quiet sage provides the only accent.

```css
--canvas: oklch(0.98 0.006 145);
--surface: oklch(1 0 0);
--ink: oklch(0.22 0.02 145);
--muted: oklch(0.43 0.025 145);
--line: oklch(0.87 0.015 145);
--sage: oklch(0.4 0.07 150);
--graphite: oklch(0.27 0.025 145);
--hero-bg: oklch(0.965 0.012 145);
--dark-ink: oklch(0.97 0.006 145);
--dark-muted: oklch(0.84 0.02 145);
--signal: oklch(0.79 0.07 135);
```

Body ink and muted text exceed WCAG AA against the canvas. Text on graphite surfaces ranges from 9.2:1 to 15.8:1.

## Typography

- Primary: a clear humanist sans for navigation, body copy, headings, and actions
- Annotation: a contrasting monospace for architecture labels, repository names, and compact metadata
- Hero ceiling: 5.3rem on large screens
- Display tracking: no tighter than `-0.035em`
- Body copy: 65–72ch maximum
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for prose

## Layout

- Maximum content width: 1180px
- Desktop hero: asymmetric 7/5 split between proposition and architecture visual
- Body sections use varied editorial structures rather than repeated cards
- Selected case studies use horizontal narrative rows
- The complete project index lives in a native `details` disclosure
- Mobile reorders content into a single narrative while preserving the architecture visual

## Components

### Navigation

Compact name mark, section anchors, and one conversation action. No dashboard chrome or sticky glass treatment.

### Hero

Low-chroma stone field with a subtle blueprint grid, enterprise proposition, two calls to action, and a graphite semantic SVG showing identity context flowing through an agent platform to enterprise systems.

### Selected Work

Three case studies framed as problem, architectural move, and resulting capability. Technology labels support the story rather than replacing it.

### Vision Feature

The Agentic Platform deck is a major strategic proof point near the top of the page, not an item in the repository archive.

### Project Archive

Compact border-separated rows. Public projects link to source; private projects carry a visible `Private repository` badge and never expose source slugs or client identities.

### Contact Close

Close on deep green graphite with a direct LinkedIn action and a quieter GitHub route.

## Motion

- Animate only the architecture flow line and small directional details
- Keep content fully visible without animation
- Use an ease-out-quart curve for interaction transitions
- Disable decorative motion under `prefers-reduced-motion: reduce`

## Accessibility

- WCAG 2.2 AA baseline
- Semantic landmarks and heading order
- Skip link
- `:focus-visible` treatment on links, buttons, and `summary`
- Minimum 44px action targets where practical
- SVG title and description for the architecture visual
- Long repository names must wrap without overflow

## Anti-Patterns

- No GitHub-dark visual language or saturated blue background
- No equal card grid
- No gradient text, glassmorphism, or decorative neon
- No tiny uppercase eyebrow on every section
- No arbitrary metrics or claims
- No private repository names or client identities
