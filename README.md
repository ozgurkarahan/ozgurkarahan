# Ozgur Karahan

**AI Solution Engineer at Microsoft**

**Useful agents need more than a model.**

I build and share enterprise agent patterns where business workflows, user identity, and human decisions meet.

[Explore the work and ideas](https://ozgurkarahan.com/) · [Connect on LinkedIn](https://www.linkedin.com/in/karahanozgur/)

## Three questions behind the work

| Question | What I explore |
|----------|----------------|
| What can it change? | A concrete business action, not just a conversational answer. |
| Whose authority does it use? | Caller identity and authorization across system boundaries. |
| When should a person decide? | An explicit mandate, escalation condition, and human handoff. |

These are design questions, not a claim that the separate projects below form one production system.

## See the evidence

### Horizon Famille — a request becomes an action

A real recorded phone call reaches a Foundry voice agent through Voice Live and Azure Communication Services. The agent checks a booking, quotes a change before acting, and routes a discount outside its mandate to a human in Teams through Power Platform.

[Watch the demonstration — French, English subtitles, 6m19s](https://ozgurkarahan.github.io/horizon-famille/) · [Source](https://github.com/ozgurkarahan/horizon-famille) · [Presentation and additional resources](docs/ai-agents.md#horizon-famille)

**Scope:** mock CRM, ERP, and knowledge-base systems, not live Dynamics or SAP integrations. This is a demonstration, not a production service or a public phone line to try.

### Identity propagation — keep the caller in the picture

Separate implementations explore caller identity through Entra ID, Foundry, APIM, and downstream systems. Propagating an identity does not, by itself, establish appropriate authorization.

[Customer 360 project page](https://ozgurkarahan.com/customer-360/) · [Entra ID proof of concept](https://github.com/ozgurkarahan/propagate-id-entra) · [Salesforce sample](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation) · [ServiceNow sample](https://github.com/ozgurkarahan/snow-meta-tool) · [Evaluation boundaries](docs/security.md)

The Entra project is a proof of concept; Salesforce and ServiceNow are sample implementations, not audited production guarantees.

### Foundry hosted coding agent — inspect the runtime

An experimental community sample combining the OpenAI Agents SDK, a terminal, persistent workspace, browser verification, and scoped Azure access.

[Project overview](https://ozgurkarahan.github.io/foundry-openai-coding-agent/) · [Source and walkthrough](https://github.com/ozgurkarahan/foundry-openai-coding-agent) · [Architecture](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/ARCHITECTURE.md) · [Limitations](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/docs/limitations.md)

Not an official Microsoft product or reference implementation, not production-ready, and no SLA or bundled infrastructure provisioning.

## Explore the approach

- **[The Agentic Platform](https://ozgurkarahan.com/agentic-platform/)** — an interactive presentation connecting how agents are built, deployed, operated, and governed.
- **[Identity propagation: the architecture story](https://www.linkedin.com/pulse/from-theory-production-salesforce-meta-tools-identity-ozgur-karahan-ch30e/)** — the reasoning behind the Salesforce meta-tool and identity flow.
- **[AI Agent Memory](https://github.com/ozgurkarahan/ai-agent-memory)** — a local Markdown wiki for coding-agent knowledge across projects and sessions, not a customer-data memory solution.
- **[Agentic SDLC Demo](https://github.com/ozgurkarahan/agentic-sdlc-demo)** — a presenter-led delivery demo and harness. Its README documents current setup and status; this is not a claim of a complete, verified workflow. [Presentation](https://ozgurkarahan.github.io/agentic-sdlc-demo/slides/agentic-sdlc-lifecycle.html) · [Companion repository](https://github.com/ozgurkarahan/agentic-sdlc-demo-live).

<details>
<summary>Other projects, presentations, and private work</summary>

| Project | Focus |
|---------|-------|
| [Simple Order Agent](https://github.com/ozgurkarahan/simple-order-agent) | Order-processing example using Claude SDK, MuleSoft MCP, and A2A. |
| [Azure SRE Agent for Synapse](https://github.com/ozgurkarahan/azure-sre-agent-synapse-poc) | Proof-of-concept scaffold for investigating Synapse observability scenarios. |
| [Anthropic Academy](https://github.com/ozgurkarahan/anthropic-academy) | Worked learning examples. |
| [The Agentic Platform](https://ozgurkarahan.com/agentic-platform/) | A presentation exploring the shift from AI assistance to agent platforms. [Source](https://github.com/ozgurkarahan/ozgurkarahan/tree/master/agentic-platform). |
| Enterprise Document RAG | Private work. |
| AI Agent Project Template | Private work. |

</details>

## Further reading

[AI agents and apps](docs/ai-agents.md) · [Identity and security](docs/security.md) · [Learning resources](docs/learning-resources.md)

## Connect and contribute

For architecture discussions, speaking opportunities, and professional connections, [find me on LinkedIn](https://www.linkedin.com/in/karahanozgur/). To reproduce a sample, report a limitation, or propose an integration, start with its repository and contribution guidance.
