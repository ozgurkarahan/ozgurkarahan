# CLAUDE.md — Project Instructions

## What This Repo Is

This is `ozgurkarahan/ozgurkarahan` — a GitHub profile hub repository. The README.md is automatically rendered on the GitHub profile page. This is **not** a code project; it is a curated index of projects and resources.

## Repo Structure

```
README.md                  — Main hub displayed on GitHub profile
CLAUDE.md                  — These instructions
.gitignore                 — Standard gitignore
LICENSE                    — MIT license
docs/
  ai-agents.md             — Detailed AI agent project docs
  mulesoft.md              — MuleSoft & integration project docs
  learning-resources.md    — Curated AI learning resources
  security.md              — Security-focused project docs
```

## How to Add a New Project

1. Pick the correct category in `README.md` (AI Agents & MCP, MuleSoft & Integration, Demos & Presentations, Learning & Security, or Forks).
2. Add a new HTML table row following the existing format (icon + repo link + description + badges).
3. If the project needs a detailed write-up, add it to the appropriate `docs/*.md` file.
4. Keep descriptions concise — one sentence max in the table.

## Formatting Conventions

- **Project cards**: Use HTML `<table>` with icon column (simpleicons.org, 40px) + content column (link, description, badges).
- **Badges**: Use shields.io `flat-square` for inline badges, `for-the-badge` for the tech stack section.
- **Icons**: Use `https://cdn.simpleicons.org/{brand}/{color}` for project icons.
- **Links**: Always use full URLs to GitHub repos: `https://github.com/ozgurkarahan/repo-name`
- **Headings**: H1 for name, H2 for sections, H3 for sub-categories.
- **Tone**: Professional, concise. Use emojis for section headers only (🤖 🔀 📚 🔐 🍴 🛠️ etc.).

## Important Notes

- Keep the README clean and scannable — it is the profile landing page.
- Do not add files outside of `docs/` unless there is a strong reason.
- All project links point to `https://github.com/ozgurkarahan/`.
