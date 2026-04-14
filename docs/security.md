# 🔐 Security Projects

> Security-focused projects and identity patterns for enterprise API architectures.

[← Back to Profile](../README.md)

---

## <img src="https://cdn.simpleicons.org/letsencrypt/003A70" width="22" align="top"> salesforce-meta-tool-identity-propagation

[![Repo](https://img.shields.io/badge/GitHub-salesforce--meta--tool--identity--propagation-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation)

Cross-cloud identity propagation from Azure to Salesforce, built on a meta-tool MCP server architecture. The caller's Azure identity flows from AI Foundry through API Management into Salesforce without breaking the security chain — no service accounts, no credential sharing. The meta-tool MCP layer lets AI agents manage Salesforce resources while the identity propagation ensures every hop carries the original caller's context.

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

![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![API Management](https://img.shields.io/badge/API_Management-FF6F00?style=flat-square&logo=microsoftazure&logoColor=white)
![Salesforce](https://img.shields.io/badge/Salesforce-00A1E0?style=flat-square&logo=salesforce&logoColor=white)
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
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![API Management](https://img.shields.io/badge/API_Management-FF6F00?style=flat-square&logo=microsoftazure&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-blueviolet?style=flat-square)
![Bicep](https://img.shields.io/badge/Bicep-FF7F50?style=flat-square)
![Container Apps](https://img.shields.io/badge/Container_Apps-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)

---

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" width="22" align="top"> snow-meta-tool

[![Repo](https://img.shields.io/badge/GitHub-snow--meta--tool-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/snow-meta-tool)

ServiceNow MCP meta-tool with per-user identity propagation via JWT Bearer OBO flow through Azure APIM. The APIM policy validates the Azure AD token, extracts the user email, builds an RS256 JWT Bearer assertion, and exchanges it at ServiceNow's `oauth_token.do` for a user-scoped access token. Every API call runs with that user's permissions and appears in the ServiceNow audit log under their name — no service accounts.

### Architecture

```
                          Azure AD
                            │
                            │ Bearer token (user identity)
                            ▼
                    ┌───────────────┐
                    │  Azure APIM   │  ── Validate → Extract email → Build JWT
                    │  OBO Policy   │     → Exchange at SN → Cache per user
                    └───────┬───────┘
                            │
                            ▼
                ┌────────────────────────┐
                │  servicenow-mcp        │
                │  FastMCP + 3 tools     │
                └────────┬───────────────┘
                         │ ServiceNow Table API (per-user Bearer token)
                         ▼
                ┌──────────────────┐
                │  ServiceNow      │
                └──────────────────┘
```

### Key Patterns

| Pattern | Description |
|---------|-------------|
| **JWT Bearer OBO exchange** | APIM builds RS256 JWT assertion with `sub=user_email`, exchanges at ServiceNow for user-scoped token |
| **Per-user token caching** | APIM caches ServiceNow tokens per user for 25 min (5-min safety margin) |
| **RFC 9728 PRM** | `/.well-known/oauth-protected-resource` endpoint advertises Azure AD as authorization server |
| **No service account** | ServiceNow rejects JWT Bearer for admin users by design — enforces least privilege |

### Stack

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Azure AI Foundry](https://img.shields.io/badge/Azure_AI_Foundry-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![ServiceNow](https://img.shields.io/badge/ServiceNow-6DB33F?style=flat-square&logo=servicenow&logoColor=white)
![API Management](https://img.shields.io/badge/API_Management-FF6F00?style=flat-square&logo=microsoftazure&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-blueviolet?style=flat-square)
![Bicep](https://img.shields.io/badge/Bicep-FF7F50?style=flat-square)

