# AGENT.md — Project Instructions

## What This Repo Is

This is `ozgurkarahan/ozgurkarahan` — a GitHub profile hub repository. The README.md is automatically rendered on the GitHub profile page. This is **not** a code project; it is a curated index of projects and resources.

## Repo Structure

```
README.md                  — Main hub displayed on GitHub profile
AGENT.md                   — Project instructions (public)
.gitignore                 — Standard gitignore
LICENSE                    — MIT license
docs/
  ai-agents.md             — Detailed AI agent project docs
  learning-resources.md    — Curated AI learning resources
  security.md              — Security-focused project docs
```

## How to Add a New Project

1. Pick the correct category table in `README.md` (AI Agents & Apps, MCP Servers, Learning & Tutorials, or Security).
2. Add a new row following the existing format:
   ```
   | [repo-name](https://github.com/ozgurkarahan/repo-name) | Short description | Tech1, Tech2 |
   ```
3. If the project needs a detailed write-up, add it to the appropriate `docs/*.md` file.
4. Keep descriptions concise — one sentence max in the table.

## Formatting Conventions

- **Tables**: Use Markdown tables for project listings. Columns: Project (link), Description, Stack.
- **Badges**: Use shields.io flat style: `https://img.shields.io/badge/Label-Color?style=flat&logo=name&logoColor=white`
- **Links**: Always use full URLs to GitHub repos: `https://github.com/ozgurkarahan/repo-name`
- **Headings**: H1 for name, H2 for sections, H3 for sub-categories.
- **Tone**: Professional, concise. No emojis.

## Important Notes

- Keep the README clean and scannable — it is the profile landing page.
- Do not add files outside of `docs/` unless there is a strong reason.
- All project links point to `https://github.com/ozgurkarahan/`.
