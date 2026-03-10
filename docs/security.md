# 🔐 Security Projects

> Security-focused projects and identity patterns for enterprise API architectures.

[← Back to Profile](../README.md)

---

## <img src="https://cdn.simpleicons.org/letsencrypt/003A70" width="22" align="top"> salesforce-meta-tool-identity-propagation

[![Repo](https://img.shields.io/badge/GitHub-salesforce--meta--tool--identity--propagation-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation)

Testing end-to-end identity propagation from Azure AI Foundry through Azure API Management all the way to Salesforce. The goal is to maintain user identity across cloud boundaries without breaking the security chain — ensuring the original caller's context flows through every hop.

### Architecture

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐     ┌──────────────┐
│  Azure AI        │ ──▶ │  Azure API       │ ──▶ │  Backend         │ ──▶ │  Salesforce  │
│  Foundry         │     │  Management      │     │  Services        │     │              │
└──────────────────┘     └──────────────────┘     └──────────────────┘     └──────────────┘
         │                        │                        │                       │
         └───── OAuth Token ──────┴──── Identity Flow ─────┴──── Propagated ──────┘
```

### Key Patterns

| Pattern | Description |
|---------|-------------|
| 🔑 **End-to-end identity propagation** | Flow user identity from Azure AI Foundry through API Management to Salesforce |
| 🔄 **OAuth 2.0 token flow** | Token exchange and validation across Azure and Salesforce boundaries |
| 🏗️ **Secure delegation** | Delegation patterns for multi-tier, multi-cloud architectures without credential sharing |
| ☁️ **Cross-cloud identity** | Bridging Azure AD and Salesforce identity providers in a single chain |

### Stack

![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![API Management](https://img.shields.io/badge/API_Management-FF6F00?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![Salesforce](https://img.shields.io/badge/Salesforce-00A1E0?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMC4wMDYgNS40MTVhNC4xOTUgNC4xOTUgMCAwMTMuMDQ1LTEuMzA2YzEuNTYgMCAyLjk1NC45IDMuNjkgMi4yMDUuNjMtLjMgMS4zNS0uNDUgMi4xLS40NSAyLjg1IDAgNS4xNTkgMi4zNCA1LjE1OSA1LjIycy0yLjMxIDUuMjItNS4xNiA1LjIyYy0uNDUgMC0uODg0LS4wNi0xLjMwNS0uMTY1YTMuOTc1IDMuOTc1IDAgMDEtMy4zOSAxLjkwNWMtLjYgMC0xLjE3LS4xMzUtMS42OC0uMzc1YTQuNzkgNC43OSAwIDAxLTQuMiAyLjUyIDQuNzggNC43OCAwIDAxLTQuNTMtMy4yNyAzLjI3IDMuMjcgMCAwMS0uNTQuMDQ1Yy0xLjk1IDAtMy4xOTUtMS41OS0zLjE5NS0zLjM0NSAwLTEuMTcuNTg1LTIuMjM1IDEuNTE1LTIuODhhNC4yMTQgNC4yMTQgMCAwMS0uMzQ1LTEuNjY1YzAtMi4zMSAxLjg2LTQuMiA0LjE3LTQuMiAxLjAyIDAgMS45NS4zNzUgMi42Ny45OXoiLz48L3N2Zz4=&logoColor=white)
![OAuth 2.0](https://img.shields.io/badge/OAuth_2.0-EB5424?style=flat-square&logo=auth0&logoColor=white)

---

## <img src="https://cdn.simpleicons.org/letsencrypt/003A70" width="22" align="top"> propagate-id-entra

[![Repo](https://img.shields.io/badge/GitHub-propagate--id--entra-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/propagate-id-entra)

End-to-end Entra ID identity propagation from browser through AI Foundry agents and APIM to backend APIs. The user's Entra token flows from an MSAL.js SPA, through a FastAPI chat app, into an AI Foundry agent via UserEntraToken passthrough, through API Management JWT validation, all the way to a backend Orders API — with zero service accounts in the data path. Deployed with a single `azd up`.

### Architecture

```
┌──────────┐     ┌──────────┐     ┌─────────────────┐     ┌──────────┐     ┌────────────┐
│ Browser  │ ──▶ │ Chat App │ ──▶ │ Foundry Agent   │ ──▶ │   APIM   │ ──▶ │ Orders API │
│ MSAL.js  │     │ FastAPI  │     │ gpt-4o + MCP    │     │ JWT val. │     │  FastAPI   │
└──────────┘     └──────────┘     └─────────────────┘     └──────────┘     └────────────┘
       │                │                   │                    │                 │
       └─── Entra ID ───┴── access token ───┴── UserEntraToken ─┴── propagated ───┘
```

### Key Patterns

| Pattern | Description |
|---------|-------------|
| **Entra ID token passthrough** | User's delegated token flows through every hop via UserEntraToken connection |
| **JWT validation at APIM** | API Management validates audience, issuer, and signature before forwarding |
| **Zero service accounts** | No client credentials, no consent prompts, no client secrets in the data path |
| **Managed Identity for AI Gateway** | Service-to-service calls to Azure OpenAI use managed identity (separate from user flow) |
| **azd up deployment** | Single command provisions 13 Bicep modules, builds containers on ACR, creates Entra app registration and Foundry agent |

### Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Entra ID](https://img.shields.io/badge/Entra_ID-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![API Management](https://img.shields.io/badge/API_Management-FF6F00?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCI+PHBhdGggZD0iTTI4Ljk4IDUuNjEgMCAzMi4xOWgxMC40M0wzLjkgNTIuMzloMDkuNjlsMjAuODEtMjguODVINS44N0wyOC45OCA1LjYxem03LjA0IDIuMjYtMTAuNiAyNi45MiAyMC4wNCAyMy42SDU4TDM2LjAyIDcuODd6IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-blueviolet?style=flat-square)
![Bicep](https://img.shields.io/badge/Bicep-FF7F50?style=flat-square)
![Container Apps](https://img.shields.io/badge/Container_Apps-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)

