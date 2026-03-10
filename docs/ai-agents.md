# 🤖 AI Agents & Apps

> Detailed overview of AI agent and application projects.

[← Back to Profile](../README.md)

---

## 🚀 My Projects

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" width="22" align="top"> salesforce-meta-tool-identity-propagation

[![Repo](https://img.shields.io/badge/GitHub-salesforce--meta--tool--identity--propagation-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation)

A meta-tool MCP server for Salesforce that enables AI agents to manage and interact with Salesforce resources through natural language. Bridges Azure AI Foundry with Salesforce via the Model Context Protocol, with end-to-end identity propagation across cloud boundaries.

```
┌──────────────────┐     ┌────────────┐     ┌──────────────────┐
│ Azure AI Foundry │ ──▶ │ MCP Server │ ──▶ │    Salesforce    │
└──────────────────┘     └────────────┘     └──────────────────┘
```

**Stack:**
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![Salesforce](https://img.shields.io/badge/Salesforce-00A1E0?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMC4wMDYgNS40MTVhNC4xOTUgNC4xOTUgMCAwMTMuMDQ1LTEuMzA2YzEuNTYgMCAyLjk1NC45IDMuNjkgMi4yMDUuNjMtLjMgMS4zNS0uNDUgMi4xLS40NSAyLjg1IDAgNS4xNTkgMi4zNCA1LjE1OSA1LjIycy0yLjMxIDUuMjItNS4xNiA1LjIyYy0uNDUgMC0uODg0LS4wNi0xLjMwNS0uMTY1YTMuOTc1IDMuOTc1IDAgMDEtMy4zOSAxLjkwNWMtLjYgMC0xLjE3LS4xMzUtMS42OC0uMzc1YTQuNzkgNC43OSAwIDAxLTQuMiAyLjUyIDQuNzggNC43OCAwIDAxLTQuNTMtMy4yNyAzLjI3IDMuMjcgMCAwMS0uNTQuMDQ1Yy0xLjk1IDAtMy4xOTUtMS41OS0zLjE5NS0zLjM0NSAwLTEuMTcuNTg1LTIuMjM1IDEuNTE1LTIuODhhNC4yMTQgNC4yMTQgMCAwMS0uMzQ1LTEuNjY1YzAtMi4zMSAxLjg2LTQuMiA0LjE3LTQuMiAxLjAyIDAgMS45NS4zNzUgMi42Ny45OXoiLz48L3N2Zz4=&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-blueviolet?style=flat-square)

---

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" width="22" align="top"> propagate-id-entra

[![Repo](https://img.shields.io/badge/GitHub-propagate--id--entra-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/propagate-id-entra)

End-to-end identity propagation from browser through AI Foundry agents and APIM to backend APIs using Entra ID — no service accounts in the data path. A proof-of-concept showing how a user's Entra token flows from an MSAL.js SPA, through a FastAPI chat app, into an AI Foundry agent with MCP tools, through API Management, all the way to a backend API. Deployed with a single `azd up`.

```
┌──────────┐     ┌──────────┐     ┌─────────────────┐     ┌──────────┐     ┌────────────┐
│ Browser  │ ──▶ │ Chat App │ ──▶ │ Foundry Agent   │ ──▶ │   APIM   │ ──▶ │ Orders API │
│ MSAL.js  │     │ FastAPI  │     │ gpt-4o + MCP    │     │ JWT val. │     │  FastAPI   │
└──────────┘     └──────────┘     └─────────────────┘     └──────────┘     └────────────┘
       │                │                   │                    │                 │
       └─── Entra ID ───┴── access token ───┴── UserEntraToken ─┴── propagated ───┘
```

**Stack:**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![Entra ID](https://img.shields.io/badge/Entra_ID-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![API Management](https://img.shields.io/badge/API_Management-FF6F00?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-blueviolet?style=flat-square)
![Bicep](https://img.shields.io/badge/Bicep-FF7F50?style=flat-square)
![Container Apps](https://img.shields.io/badge/Container_Apps-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)

---

### <img src="https://cdn.simpleicons.org/anthropic/191919" width="22" align="top"> simple-order-agent

[![Repo](https://img.shields.io/badge/GitHub-simple--order--agent-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/simple-order-agent)

An order processing agent that demonstrates the integration of Claude SDK with MuleSoft MCP servers and the Agent-to-Agent (A2A) protocol. Shows how to build practical business agents with real API backends.

```
┌─────────────┐     ┌────────────┐     ┌───────────────┐     ┌──────────────────┐
│  Claude SDK  │ ──▶ │ MCP Client │ ──▶ │ MuleSoft APIs │ ──▶ │ Order Processing │
└─────────────┘     └────────────┘     └───────────────┘     └──────────────────┘
```

**Stack:**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Claude SDK](https://img.shields.io/badge/Claude_SDK-191919?style=flat-square&logo=anthropic&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-blueviolet?style=flat-square)
![A2A](https://img.shields.io/badge/A2A-orange?style=flat-square)

---

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" width="22" align="top"> azure-apim-mcp-server

[![Repo](https://img.shields.io/badge/GitHub-azure--apim--mcp--server-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/azure-apim-mcp-server)

An MCP server that exposes Azure API Management operations through the Model Context Protocol. Enables AI assistants to manage, query, and interact with APIM resources via natural language.

```
┌────────────┐     ┌────────────────┐     ┌──────────────────────────┐
│ MCP Server │ ──▶ │ Azure APIM SDK │ ──▶ │ API Management Service   │
└────────────┘     └────────────────┘     └──────────────────────────┘
```

**Stack:**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Azure APIM](https://img.shields.io/badge/Azure_APIM-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-blueviolet?style=flat-square)

---

## 🍴 Forks & Contributions

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" width="22" align="top"> get-started-with-ai-agents &nbsp;`modified`

[![Repo](https://img.shields.io/badge/GitHub-get--started--with--ai--agents-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/get-started-with-ai-agents)
[![Upstream](https://img.shields.io/badge/Upstream-Azure--Samples-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)](https://github.com/Azure-Samples/get-started-with-ai-agents)

Azure AI Foundry agents starter project. Forked from Azure-Samples with significant additions.

#### ✏️ My Modifications (11 commits ahead)

| Change | Details |
|--------|---------|
| 📄 `docs/ai-foundry-endpoint-and-a2a.md` | Comprehensive A2A & AI Foundry endpoint documentation — **1 400+ lines** |
| 📄 `CLAUDE.md` | Claude Code project instructions |
| 📝 `README.md` | Extended with additional documentation |
| ⚙️ `infra/main.bicep` | Customized Bicep infrastructure |
| ⚙️ `infra/main.parameters.json` | Updated deployment parameters |

**Stack:**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![Bicep](https://img.shields.io/badge/Bicep-FF7F50?style=flat-square)

---

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" width="22" align="top"> get-started-with-ai-chat &nbsp;`reference`

[![Repo](https://img.shields.io/badge/GitHub-get--started--with--ai--chat-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/get-started-with-ai-chat)
[![Upstream](https://img.shields.io/badge/Upstream-Azure--Samples-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)](https://github.com/Azure-Samples/get-started-with-ai-chat)

Azure AI Foundry chat application reference. Unmodified fork kept as a reference.

**Stack:**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![Bicep](https://img.shields.io/badge/Bicep-FF7F50?style=flat-square)

---

### <img src="https://img.shields.io/badge/MS-5E5E5E?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMyI+PHBhdGggZmlsbD0iI2YyNTAyMiIgZD0iTTAgMGgxMXYxMUgweiIvPjxwYXRoIGZpbGw9IiMwMGE0ZWYiIGQ9Ik0wIDEyaDExdjExSDB6Ii8+PHBhdGggZmlsbD0iIzdmYmEwMCIgZD0iTTEyIDBoMTF2MTFIMTJ6Ii8+PHBhdGggZmlsbD0iI2ZmYjkwMCIgZD0iTTEyIDEyaDExdjExSDEyeiIvPjwvc3ZnPg==&logoColor=white" height="22" align="top"> TechWorkshop-L300-AI-Apps-and-agents &nbsp;`reference`

[![Repo](https://img.shields.io/badge/GitHub-TechWorkshop--L300-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/TechWorkshop-L300-AI-Apps-and-agents)
[![Upstream](https://img.shields.io/badge/Upstream-Microsoft-5E5E5E?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMyI+PHBhdGggZmlsbD0iI2YyNTAyMiIgZD0iTTAgMGgxMXYxMUgweiIvPjxwYXRoIGZpbGw9IiMwMGE0ZWYiIGQ9Ik0wIDEyaDExdjExSDB6Ii8+PHBhdGggZmlsbD0iIzdmYmEwMCIgZD0iTTEyIDBoMTF2MTFIMTJ6Ii8+PHBhdGggZmlsbD0iI2ZmYjkwMCIgZD0iTTEyIDEyaDExdjExSDEyeiIvPjwvc3ZnPg==&logoColor=white)](https://github.com/microsoft/TechWorkshop-L300-AI-Apps-and-agents)

L300-level technical workshop covering the end-to-end lifecycle of building production AI applications and agents. Unmodified fork kept as workshop reference material.

**Stack:**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
