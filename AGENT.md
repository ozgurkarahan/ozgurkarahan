# AGENT.md — Project Instructions

## What This Repo Is

This is `ozgurkarahan/ozgurkarahan`, which serves two purposes:

1. **GitHub profile** — `README.md` is rendered on the GitHub profile page.
2. **Portfolio website** — the repo is the source of `https://ozgurkarahan.com/`, a static site built by GitHub Pages (Jekyll) from `master`.

It also holds a small Azure backend for owner-only site analytics. There is no application code or build step beyond the Pages build.

`PRODUCT.md` defines the site's purpose, audience, and desired outcomes. `DESIGN.md` defines its design system ("Five Building Blocks": voice, identity, context, governance, distribution as the site structure; indigo and amber tokens; the diagram grammar). Read both before changing the homepage or adding a page.

## Repo Structure

```
README.md                    — GitHub profile page
index.html                   — Site homepage
identity-propagation/        — Identity propagation write-up page
work/oz-radio/               — Oz Radio work page
agentic-platform/            — "The Agentic Platform" presentation
  index.html                 —   Presentation shell
  slides/slide_01..08.html   —   One file per slide
privacy/                     — Privacy notice for the site analytics
oz-radio/                    — Redirect to the Oz Radio live demo (Azure Container Apps)
deckfm/                      — Legacy redirect to /oz-radio/ (DeckFM was renamed Oz Radio)
customer-360/                — Redirect to the Salesforce identity propagation project page
docs/
  ai-agents.md               — AI agent project write-ups (also published as /docs/ai-agents.html)
  security.md                — Identity and security project write-ups
  learning-resources.md      — Curated AI learning resources
  assets/
    telemetry.js             — Analytics beacon, loaded by every top-level page
    work-play.js             — Plays each homepage work drawing once it is fully in view
    fonts/                   — Self-hosted woff2 fonts and OFL licenses
      fonts.css              —   Site pages
      deck-fonts.css         —   Agentic Platform slides
    work/                    — Work card cover drawings (SVG)
    flagships/               — Screenshots for the Oz Radio work page
    social/                  — Social preview images (SVG source + dated PNG)
    portrait.{webp,jpg}      — Masthead portrait
CNAME, robots.txt, sitemap.xml
_config.yml                  — Jekyll settings, including the exclude list
infra/
  main.bicep                 — Log Analytics workspace + Application Insights for analytics
  main.parameters.json
  analytics-queries.kql      — Queries for reading the analytics
scripts/
  deploy-telemetry.ps1       — Deploys infra/ and sets the daily caps
PRODUCT.md, DESIGN.md        — Product definition and design system (not published)
AGENT.md, AGENTS.md, CLAUDE.md, .github/copilot-instructions.md — Agent instructions (not published)
.github/workflows/
  link-check.yml             — Lychee link check on push, PR, and weekly
  pages-build-check.yml      — Builds the site on PRs and checks published files and links
```

## Publishing Rules

- Everything not listed in the `_config.yml` `exclude` list is published. Repository-only files (agent instructions, `PRODUCT.md`, `DESIGN.md`, `infra/`, `scripts/`) must stay excluded; `pages-build-check.yml` fails the PR if any of them is published.
- The custom `exclude` list replaces Jekyll's defaults, so keep the default entries when editing it.
- Use self-hosted fonts from `docs/assets/fonts/`, not Google Fonts.

## How to Add a Page

1. Create `<page>/index.html`, following the existing pages: `fonts.css`, `telemetry.js`, and a canonical URL (plus Open Graph tags if the page should be shared).
2. Add it to `sitemap.xml` if it should be indexed (redirect pages use `noindex` and stay out of the sitemap).
3. Add it to the `required` list in `pages-build-check.yml` and to the `paths` and file arguments in `link-check.yml`.
4. To rename a page, keep the old path as a `noindex` redirect page (see `deckfm/`) so existing links keep working.

## How to Add a Project to the README

1. Put flagship work under "See the evidence" (H3 per project, links line, then a **Scope** caveat) or "Explore the approach" (one bullet).
2. Put smaller or private work in the "Other projects" table (columns: Project, Focus).
3. If the project needs a longer write-up, add it to the matching `docs/*.md` file.
4. State scope and limitations honestly: demos, samples, and proofs of concept must not read as production systems or Microsoft products.

## Formatting Conventions

- **Links**: Use full URLs to GitHub repos (`https://github.com/ozgurkarahan/repo-name`) and to site pages (`https://ozgurkarahan.com/...`).
- **Headings**: H1 for name, H2 for sections, H3 for individual projects.
- **Tone**: Professional, concise. No emojis.

## Analytics

- `infra/main.bicep` is deployed with `scripts/deploy-telemetry.ps1 -SubscriptionId <id>` (use `-WhatIfOnly` to preview). Never commit the subscription ID.
- The Application Insights instrumentation key and ingestion endpoint in `telemetry.js` are public by design; daily caps and the ingestion kill switch documented in the script limit abuse.
- Any change to what is collected must be reflected in `privacy/index.html`.
