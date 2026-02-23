# 🔀 MuleSoft & Integration

> MuleSoft projects, cross-organization patterns, and CI/CD automation.

[← Back to Profile](../README.md)

---

## <img src="https://cdn.simpleicons.org/mulesoft/00A1DF" width="22" align="top"> mule-vs-ms

[![Repo](https://img.shields.io/badge/GitHub-mule--vs--ms-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/mule-vs-ms)

A structured, factual comparison between MuleSoft and Microsoft across four pillars — built with Pandoc into publication-ready DOCX. Aimed at CTOs, solution architects, and technical leads.

### Comparison Pillars

| Pillar | What's Covered |
|--------|----------------|
| 🤖 **AI Capabilities** | Agent building, RAG, guardrails, LLM integration |
| 🔌 **API Management** | Gateway, policies, developer portals, AI-specific features |
| 💰 **Pricing** | Tier breakdowns, cost scenarios, hidden costs |
| 🏗️ **Deployment** | Cloud, hybrid, on-prem, government, compliance |

**Stack:**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![MuleSoft](https://img.shields.io/badge/MuleSoft-00A1DF?style=flat-square&logo=mulesoft&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![Pandoc](https://img.shields.io/badge/Pandoc-4B6587?style=flat-square)

---

## <img src="https://cdn.simpleicons.org/mulesoft/00A1DF" width="22" align="top"> Mulesoft-Api-Manager-CI-CD-Postman

[![Repo](https://img.shields.io/badge/GitHub-Mulesoft--Api--Manager--CI--CD--Postman-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/Mulesoft-Api-Manager-CI-CD-Postman)

A Postman collection that automates the full lifecycle of deploying an API proxy on MuleSoft Anypoint Platform — no UI required.

### Automation Pipeline

```
┌──────────────┐     ┌──────────────┐     ┌─────────────────┐     ┌──────────────┐
│    Import     │ ──▶ │   Create API  │ ──▶ │  Deploy Proxy   │ ──▶ │  Configure   │
│   Swagger to  │     │   in API      │     │  to Runtime     │     │  SLA Tiers   │
│   Exchange    │     │   Manager     │     │  Manager        │     │  & Policies  │
└──────────────┘     └──────────────┘     └─────────────────┘     └──────────────┘
```

### What Gets Automated

| Step | Description |
|------|-------------|
| 📥 Import | Swagger → Anypoint Exchange |
| 🔧 Create | API instance in API Manager from Exchange |
| 🚀 Deploy | API proxy to Runtime Manager |
| 📊 SLA Tiers | Free & Premium tiers configured |
| 🛡️ Policies | Rate Limiting (SLA-based) + JWT Validation |
| 🏷️ Tagging | API tagging for organization |
| 📈 Monitoring | Activate monitoring & API Visualiser |

**Stack:**
![MuleSoft](https://img.shields.io/badge/MuleSoft-00A1DF?style=flat-square&logo=mulesoft&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![Anypoint](https://img.shields.io/badge/Anypoint_Platform-00A1DF?style=flat-square)

---

## <img src="https://cdn.simpleicons.org/mulesoft/00A1DF" width="22" align="top"> mule-cross-org-collaboration

[![Repo](https://img.shields.io/badge/GitHub-mule--cross--org--collaboration-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/mule-cross-org-collaboration)

A Mule 4 API implementing cross-organization synchronization of contacts and opportunities. Uses JWT certificates and JKS keystores for secure inter-org communication across multiple Anypoint orgs.

### Architecture

```
┌──────────────────┐           ┌──────────────────┐
│  CevaDemoOrg     │◄── JWT ──►│  CmaDemoOrg      │
│  (JKS keystore)  │           │  (JKS keystore)  │
└────────┬─────────┘           └────────┬─────────┘
         │                              │
         └──────────┬───────────────────┘
                    ▼
          ┌─────────────────┐
          │  Cross-Org Sync │
          │  (RAML API)     │
          │                 │
          │  • Contacts     │
          │  • Opportunities│
          └─────────────────┘
                    ▲
         ┌──────────┴───────────────────┐
         │                              │
┌────────┴─────────┐           ┌────────┴─────────┐
│ OrgCverhaestDemo │◄── JWT ──►│ OrgSapIntegration│
│  (JKS keystore)  │           │  (JKS keystore)  │
└──────────────────┘           └──────────────────┘
```

**Stack:**
![MuleSoft](https://img.shields.io/badge/MuleSoft-00A1DF?style=flat-square&logo=mulesoft&logoColor=white)
![RAML](https://img.shields.io/badge/RAML-00A1DF?style=flat-square)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Mule 4](https://img.shields.io/badge/Mule_4-00A1DF?style=flat-square)

---

## <img src="https://cdn.simpleicons.org/mulesoft/00A1DF" width="22" align="top"> cross-org-tool-api

[![Repo](https://img.shields.io/badge/GitHub-cross--org--tool--api-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/cross-org-tool-api)

A lightweight Mule 4 utility API for cross-organization tooling. Provides supporting capabilities for the cross-org collaboration ecosystem.

**Stack:**
![MuleSoft](https://img.shields.io/badge/MuleSoft-00A1DF?style=flat-square&logo=mulesoft&logoColor=white)
![Mule 4](https://img.shields.io/badge/Mule_4-00A1DF?style=flat-square)

---

## 🎤 Related Demos

### <img src="https://cdn.simpleicons.org/fastapi/009688" width="22" align="top"> fintech-transactions-demo

[![Repo](https://img.shields.io/badge/GitHub-fintech--transactions--demo-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/fintech-transactions-demo)

A FastAPI transaction service built for the FinTechCo Claude Code presentation. Provides REST endpoints for transaction management — list, filter, and summary statistics.

### Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /health` | Health check |
| `GET /transactions` | List & filter transactions |
| `GET /transactions/{id}` | Single transaction by ID |
| `GET /transactions/summary` | Aggregated statistics |

Supports filters by user, date range, type (payment, transfer, deposit, withdrawal, refund), and status.

**Stack:**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-2C3E50?style=flat-square)

---

### <img src="https://cdn.simpleicons.org/anthropic/191919" width="22" align="top"> FinTechCo

[![Repo](https://img.shields.io/badge/GitHub-FinTechCo-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/FinTechCo)

Preparation materials for presenting Claude Code to FinTechCo leadership (CTO, Head of Digital Transformation, CDO). Includes a 12-slide, 30-minute presentation structure with live coding demos.

**Stack:**
![Claude Code](https://img.shields.io/badge/Claude_Code-191919?style=flat-square&logo=anthropic&logoColor=white)
