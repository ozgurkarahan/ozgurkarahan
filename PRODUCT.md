# Product Definition

## Purpose

`ozgurkarahan.com` is Özgür Karahan's professional portfolio. It positions him as an enterprise AI and cloud architect who can connect strategy, platform engineering, and production delivery.

The homepage should turn selected public work, safely redacted private work, and presentations into evidence of capability rather than presenting them as a repository catalog.

## Audience

### Primary

Enterprise clients and technical decision-makers assessing credibility, relevance, and delivery capability within the first ten seconds.

### Secondary

- Microsoft leadership, peers, and technical partners
- Recruiters and career stakeholders
- AI engineering and open-source practitioners

## Desired Outcomes

A visitor should quickly understand:

1. What Özgür does and the enterprise problems he solves
2. Why his experience is credible
3. Which flagship work best demonstrates that capability
4. How to explore a presentation, inspect selected source, or make contact

## Brand

- Register: brand / portfolio
- Personality: clear, architectural, premium
- Voice: precise, confident, pragmatic, and human
- Visual intent: structured like a high-end architecture or advisory dossier, with strong hierarchy and selective technical visuals

### Anti-Reference

The site must not resemble a developer profile, an enlarged GitHub README, or a generic repository directory. It should also avoid stereotypical AI visuals such as neon gradients, decorative glass panels, and dashboard-like chrome.

## Accessibility

- Target WCAG 2.2 AA
- Support `prefers-reduced-motion`
- Preserve visible focus states and semantic navigation
- Maintain readable type sizes, contrast, and line lengths across breakpoints

## Content and Privacy Constraints

- The site is a static GitHub Pages surface served through `ozgurkarahan.com`
- Private repository names and client identities must not be published
- Use the approved generic labels:
  - `Enterprise Document RAG`
  - `AI Agent Project Template`
- Exception: Oz Antenna, a private side project, may be named on the homepage only as "In development · not public", with no link, image, description, date or counts, until its public publishing is enabled
- The public Agentic Platform presentation lives at `/agentic-platform/`
- Public projects may link to their repositories; private work should communicate capability without implying public source access
- Audience measurement is owner-only and cookie-free: `docs/assets/telemetry.js` sends page paths, referring domains, UTM tags, outbound clicks and deck slide views to Azure Application Insights (90-day retention). It honours Global Privacy Control, Do Not Track and the opt-out on `/privacy/`, which must describe any change to what is collected
- Fonts and scripts are served from the site itself; the analytics beacon is the only third-party request

## Success Criteria

- The positioning and primary value are understandable within ten seconds
- One or two flagship projects clearly dominate the page hierarchy
- The page provides an obvious route to the Agentic Platform presentation and professional contact
- The visual system is recognizably personal without borrowing GitHub's interface language
- The page remains fast, responsive, and accessible without requiring a frontend framework
