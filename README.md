# Ozgur Karahan

**AI Solution Engineer at Microsoft**

I help connect AI capabilities to business workflows: improving service experiences, integrating enterprise systems, and exploring how agents can act with appropriate identity and human oversight.

[Website](https://ozgurkarahan.com/) · [LinkedIn](https://www.linkedin.com/in/karahanozgur/)

## Featured work

### Horizon Famille: redesigning the service experience

A customer-service demonstration connecting a real phone call to a Foundry voice agent through Voice Live and Azure Communication Services. The scenario uses **mock CRM, ERP, and knowledge-base systems**, with Power Platform routing a decision to a human approver in Teams.

The business question: how can an agent help resolve a customer request while leaving decisions outside its mandate to a person?

[Watch the recorded call — French, English subtitles, 6m19s](https://ozgurkarahan.github.io/horizon-famille/) · [Slides](https://ozgurkarahan.github.io/horizon-famille/slides.html) · [PDF](https://ozgurkarahan.github.io/horizon-famille/slides.pdf) · [Code](https://github.com/ozgurkarahan/horizon-famille)

This is a demonstration, not a production service or a public phone line to try.

### Identity propagation: connecting agent actions to the user

A series exploring how AI agents can access enterprise systems with the caller's identity through Entra ID, Foundry, and API Management. The Entra project is a proof of concept; the Salesforce and ServiceNow projects are sample implementations, not audited production guarantees.

[Entra ID proof of concept](https://github.com/ozgurkarahan/propagate-id-entra) · [Salesforce sample](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation) · [ServiceNow sample](https://github.com/ozgurkarahan/snow-meta-tool) · [Identity guide](docs/security.md)

### Foundry hosted coding agent: exploring agent-assisted delivery

An experimental community sample exploring a hosted coding agent on Foundry. It connects the discussion about agent platforms to implementation choices and limitations.

[Project overview](https://ozgurkarahan.github.io/foundry-openai-coding-agent/) · [Presentation](https://ozgurkarahan.github.io/foundry-openai-coding-agent/deck/) · [Video](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/docs/deck/agentic-platform-deck.mp4) · [Code](https://github.com/ozgurkarahan/foundry-openai-coding-agent)

Not an official Microsoft product or reference implementation, and not production-ready. See the [architecture](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/ARCHITECTURE.md) and [limitations](https://github.com/ozgurkarahan/foundry-openai-coding-agent/blob/main/docs/limitations.md).

## Supporting patterns

- **[AI Agent Memory](https://github.com/ozgurkarahan/ai-agent-memory)** — a reusable local Markdown wiki pattern for coding-agent project knowledge, not a customer-data solution.
- **[Agentic SDLC Demo](https://github.com/ozgurkarahan/agentic-sdlc-demo)** — a presenter-led demo and harness for exploring AI-assisted software delivery. Consult the [README for setup and current status](https://github.com/ozgurkarahan/agentic-sdlc-demo#readme); this is not a claim of a complete, verified workflow. [Slides](https://ozgurkarahan.github.io/agentic-sdlc-demo/slides/agentic-sdlc-lifecycle.html) · [Companion validation repository](https://github.com/ozgurkarahan/agentic-sdlc-demo-live).

<details>
<summary>Other projects, presentations, and private work</summary>

| Project | Focus |
|---------|-------|
| [Azure APIM MCP Server](https://github.com/ozgurkarahan/azure-apim-mcp-server) | Exposes a business orders REST API as MCP through APIM's native gateway; Python, FastAPI, PostgreSQL, and Bicep. |
| [Simple Order Agent](https://github.com/ozgurkarahan/simple-order-agent) | Order-processing example using Claude SDK, MuleSoft MCP, and A2A. |
| [AI Avatar Presenter](https://github.com/ozgurkarahan/ai-avatar-presenter) | Avatar-led slide presentation and interactive Q&A. |
| [Azure SRE Agent for Synapse](https://github.com/ozgurkarahan/azure-sre-agent-synapse-poc) | Proof-of-concept scaffold for investigating Synapse observability scenarios. |
| [Anthropic Academy](https://github.com/ozgurkarahan/anthropic-academy) | Worked learning examples. |
| [The Agentic Platform](https://ozgurkarahan.com/agentic-platform/) | A presentation exploring the shift from AI assistance to agent platforms. [Source](https://github.com/ozgurkarahan/ozgurkarahan/tree/master/agentic-platform). |
| Enterprise Document RAG | Private work. |
| AI Agent Project Template | Private work. |

</details>

<details>
<summary>Modified and reference forks, with upstream attribution</summary>

These projects originate with the upstream authors linked below.

| Fork | Upstream | Purpose |
|------|----------|---------|
| [Get Started with AI Agents](https://github.com/ozgurkarahan/get-started-with-ai-agents) | [Azure-Samples](https://github.com/Azure-Samples/get-started-with-ai-agents) | Modified fork with endpoint/A2A documentation and infrastructure customizations. |
| [Get Started with AI Chat](https://github.com/ozgurkarahan/get-started-with-ai-chat) | [Azure-Samples](https://github.com/Azure-Samples/get-started-with-ai-chat) | Chat application reference. |
| [Voice Live API Sales Coach](https://github.com/ozgurkarahan/voicelive-api-salescoach) | [Azure-Samples](https://github.com/Azure-Samples/voicelive-api-salescoach) | Voice-training reference. |
| [L300 AI Apps and Agents Workshop](https://github.com/ozgurkarahan/TechWorkshop-L300-AI-Apps-and-agents) | [Microsoft](https://github.com/microsoft/TechWorkshop-L300-AI-Apps-and-agents) | Workshop reference. |
| [Interactive Prompt Engineering Tutorial](https://github.com/ozgurkarahan/prompt-eng-interactive-tutorial) | [Anthropic](https://github.com/anthropics/prompt-eng-interactive-tutorial) | Learning reference. |
| [Karpathy Autoresearch](https://github.com/ozgurkarahan/karpathy-autoresearch) | [karpathy](https://github.com/karpathy/autoresearch) | Autonomous research reference. |

</details>

## Further reading

[AI agents and apps](docs/ai-agents.md) · [Identity and security](docs/security.md) · [Learning resources](docs/learning-resources.md)
