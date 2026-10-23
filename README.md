# Ozgur Karahan

**AI Solution Engineer at Microsoft**

**Models matter. What surrounds them decides whether agents get used.**

A better model arrives every few weeks, and that matters. But in real enterprise projects, an agent succeeds or fails on everything around it: people talking to it, finding it in Teams or Copilot, reaching the company's workflows and data, acting as the person who asked, and staying under rules everyone can see. Those five topics are what I build and test, in the open. (Cost control and the value of each token are coming fast too; I don't cover them yet.)

[See how they fit together](https://ozgurkarahan.com/#stack) · [Connect on LinkedIn](https://www.linkedin.com/in/karahanozgur/)

## Five building blocks around the model

A request goes down three layers, voice, distribution and context, to the systems of record. Identity and governance cross every layer.

| Block | The idea | Evidence |
|-------|----------|----------|
| **01 Voice**: the new channel | Voice is becoming the way we talk to agents; even developers now speak to their coding agents. | [Oz Radio](https://ozgurkarahan.com/work/oz-radio/) (present any deck live, narrated videos, two-host podcasts, 10+ languages), [Horizon Famille](https://ozgurkarahan.github.io/horizon-famille/) |
| **02 Distribution**: where users are | Build the agent once and publish it where people work: Teams and Microsoft 365 Copilot. | [Customer 360](https://ozgurkarahan.com/customer-360/) |
| **03 Context**: workflows and data | MCP servers for workflows and data, knowledge bases, and RAG over company documents. | [DocWiki](https://github.com/ozgurkarahan/docwiki), [ServiceNow meta-tool](https://github.com/ozgurkarahan/snow-meta-tool), [AI Agent Memory](https://github.com/ozgurkarahan/ai-agent-memory), [Simple Order Agent](https://github.com/ozgurkarahan/simple-order-agent) |
| **04 Identity**: from the voice to the system | The user's identity travels through every layer to Salesforce or ServiceNow, which apply their own authentication and authorization. | [Identity propagation, explained](https://ozgurkarahan.com/identity-propagation/), [Entra identity flow](https://github.com/ozgurkarahan/propagate-id-entra) |
| **05 Governance**: across every layer | Every agent, tool and skill has an owner and a rule; agents that code or browse get their own isolated compute. | [Foundry hosted coding agent](https://ozgurkarahan.github.io/foundry-openai-coding-agent/), [The Agentic Platform](https://ozgurkarahan.com/agentic-platform/) |

The building blocks are a way to read the work, not a claim that the separate projects below form one production system.

## See the evidence

### Horizon Famille — a request becomes an action

A real recorded phone call reaches a Foundry voice agent through Voice Live and Azure Communication Services. The agent checks a booking, quotes a change before acting, and routes a discount outside its mandate to a human in Teams through Power Platform.

[Watch the demonstration — French, English subtitles, 6m19s](https://ozgurkarahan.github.io/horizon-famille/) · [Source](https://github.com/ozgurkarahan/horizon-famille) · [Presentation and additional resources](docs/ai-agents.md#horizon-famille)

**Scope:** mock CRM, ERP, and knowledge-base systems, not live Dynamics or SAP integrations. This is a demonstration, not a production service or a public phone line to try.

### Identity propagation — keep the caller in the picture

Separate implementations explore caller identity through Entra ID, Foundry, APIM, and downstream systems. Propagating an identity does not, by itself, establish appropriate authorization.

[Identity propagation, explained](https://ozgurkarahan.com/identity-propagation/) · [Customer 360 project page](https://ozgurkarahan.com/customer-360/) · [Entra ID proof of concept](https://github.com/ozgurkarahan/propagate-id-entra) · [Salesforce sample](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation) · [ServiceNow sample](https://github.com/ozgurkarahan/snow-meta-tool) · [Evaluation boundaries](docs/security.md)

The Entra project is a proof of concept; Salesforce and ServiceNow are sample implementations, not audited production guarantees.

### Foundry hosted coding agent — inspect the runtime

An experimental community sample combining the OpenAI Agents SDK, a terminal, persistent workspace, browser verification, and scoped Azure access.

[Project overview](https://ozgurkarahan.github.io/foundry-openai-coding-agent/) · [Source and walkthrough](https://github.com/ozgurkarahan/foundry-openai-coding-agent) · [Architecture](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/ARCHITECTURE.md) · [Limitations](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/docs/limitations.md)

Not an official Microsoft product or reference implementation, not production-ready, and no SLA or bundled infrastructure provisioning.

## Explore the approach

- **[The Agentic Platform](https://ozgurkarahan.com/agentic-platform/)** — an interactive presentation connecting how agents are built, deployed, operated, and governed.
- **[Oz Radio](https://github.com/ozgurkarahan/oz-radio)** (formerly DeckFM) — AI avatars that present, narrate and podcast your decks, built on Azure AI Speech (Voice Live and batch avatar) and Azure OpenAI. [Try the live demo](https://ozgurkarahan.com/oz-radio/): time-boxed, with voice questions, capped daily. [See it take a question, frame by frame](https://ozgurkarahan.com/work/oz-radio/). A personal open-source sample, not a Microsoft product.
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
