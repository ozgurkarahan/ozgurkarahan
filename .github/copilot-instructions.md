# Copilot Instructions

Read these files for full context:

- `AGENT.md` — Project overview, architecture, key paths
- `AGENTS.md` — Workflow rules and conventions (auto-loaded)
- `~/projects/memory/agent-config/workflow.md` — Global workflow rules
- `~/projects/memory/agent-config/platform.md` — Platform preferences and domain knowledge index


## End-Session Workflow

When the user says "end session", "wrap up", or "done for today":

1. **Wiki compounding** — If significant lessons or patterns were discovered:
   - Update the project's wiki page at `wiki:projects/root` (resolve through Memory's `scripts/wiki_paths.py`)
   - Update relevant domain pages at Memory's resolved `domains` catalog (via `category_index_path`)
   - Add new glossary terms to `~/projects/memory/glossary.md`
   - Append to `~/projects/memory/log.md`
2. **Git check** — Run `git status` and warn about uncommitted changes.
3. **Summary** — Report what was updated.

## Copilot-Specific Tips

- Use `@workspace` to give Copilot full project context
- Pin important files in chat for persistent context
- Use Copilot Edits (Ctrl+Shift+I) for multi-file changes
- Run tests manually — Copilot cannot execute them
- When corrected, update the project's wiki page at `wiki:projects/root` (resolve through Memory's `scripts/wiki_paths.py`)
