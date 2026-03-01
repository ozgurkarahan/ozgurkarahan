# 🔐 Security Projects

> Security-focused projects and identity patterns for enterprise API architectures.

[← Back to Profile](../README.md)

---

## <img src="https://cdn.simpleicons.org/letsencrypt/003A70" width="22" align="top"> secu-propagate-identity

[![Repo](https://img.shields.io/badge/GitHub-secu--propagate--identity-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/secu-propagate-identity)

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

