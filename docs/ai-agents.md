# AI agents and apps

[Back to profile](../README.md)

Selected demonstrations and reusable patterns for connecting agents to business workflows. Linked repositories are the source for architecture, prerequisites, setup, and current limitations.

## Featured demonstrations

### Horizon Famille

A voice-agent customer-service scenario using a Foundry agent, Azure AI Voice Live, and Azure Communication Services. The agent checks a booking, quotes a change before acting, and routes a discount request beyond its authority to a human in Teams through Power Platform. The phone call is real; CRM, ERP, and knowledge-base services are **mocks**, not live Dynamics or SAP integrations. The published material is a recording and presentation, not a live public service.

[Repository and setup](https://github.com/ozgurkarahan/horizon-famille) · [Recorded call — French, English subtitles, 6m19s](https://ozgurkarahan.github.io/horizon-famille/) · [Slides](https://ozgurkarahan.github.io/horizon-famille/slides.html) · [PDF](https://ozgurkarahan.github.io/horizon-famille/slides.pdf)

### Foundry hosted coding agent

An **experimental community sample**, not an official Microsoft product or reference implementation and not production-ready. Use the main-branch documentation to understand the hosted coding-agent approach and its constraints before evaluating it.

[Repository](https://github.com/ozgurkarahan/foundry-openai-coding-agent) · [Architecture](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/ARCHITECTURE.md) · [Limitations](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/docs/limitations.md)

[Project overview](https://ozgurkarahan.github.io/foundry-openai-coding-agent/) · [Presentation](https://ozgurkarahan.github.io/foundry-openai-coding-agent/deck/) · [Video](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/docs/deck/agentic-platform-deck.mp4)

### Identity propagation series

The [Entra ID proof of concept](https://github.com/ozgurkarahan/propagate-id-entra), [Salesforce sample](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation), and [ServiceNow sample](https://github.com/ozgurkarahan/snow-meta-tool) explore caller identity across agent and enterprise-system boundaries. They are not audited production guarantees. See the [identity and security guide](security.md) for scope and source links.

## Supporting patterns

| Project | Scope and source |
|---------|------------------|
| [AI Agent Memory](https://github.com/ozgurkarahan/ai-agent-memory) | Reusable local Markdown wiki pattern for coding-agent project knowledge; not a customer-data solution. Consult the repository for workflow conventions. |
| [Agentic SDLC Demo](https://github.com/ozgurkarahan/agentic-sdlc-demo) | Presenter-led demo and harness for AI-assisted software delivery. The [README](https://github.com/ozgurkarahan/agentic-sdlc-demo#readme) is the source for setup and current status, not evidence that the full workflow is complete or verified. |

SDLC resources: [Slides](https://ozgurkarahan.github.io/agentic-sdlc-demo/slides/agentic-sdlc-lifecycle.html) · [Companion validation repository](https://github.com/ozgurkarahan/agentic-sdlc-demo-live).

## Other applications and integration samples

| Project | Focus |
|---------|-------|
| [Azure APIM MCP Server](https://github.com/ozgurkarahan/azure-apim-mcp-server) | Exposes a business orders REST API as MCP through APIM's native gateway, using Python, FastAPI, PostgreSQL, and Bicep. It is not a natural-language APIM administration tool. |
| [Simple Order Agent](https://github.com/ozgurkarahan/simple-order-agent) | Order-processing example using Claude SDK, MuleSoft MCP, and A2A. |
| [AI Avatar Presenter](https://github.com/ozgurkarahan/ai-avatar-presenter) | Avatar-led slide narration and interactive Q&A. |
| [Azure SRE Agent for Synapse](https://github.com/ozgurkarahan/azure-sre-agent-synapse-poc) | Proof-of-concept infrastructure and investigation scaffold for Synapse observability. |

## Forks and learning references

The [profile's collapsed fork catalogue](../README.md) preserves upstream attribution and distinguishes the modified Azure-Samples AI Agents fork from reference material. See [learning resources](learning-resources.md) for additional tutorials.
