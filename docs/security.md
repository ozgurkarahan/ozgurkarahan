# 🔐 Security Projects

> Security-focused projects and identity patterns for enterprise API architectures.

[← Back to Profile](../README.md)

---

## <img src="https://cdn.simpleicons.org/letsencrypt/003A70" width="22" align="top"> secu-propagate-identity

[![Repo](https://img.shields.io/badge/GitHub-secu--propagate--identity-181717?style=flat-square&logo=github)](https://github.com/ozgurkarahan/secu-propagate-identity)

Demonstrates identity propagation patterns for securing API architectures. Covers how to flow user identity through API gateways, backend services, and downstream dependencies without breaking the security chain.

### Architecture

```
┌────────┐     ┌──────────────────┐     ┌─────────────────┐     ┌────────────┐
│  User  │ ──▶ │  API Management  │ ──▶ │ Backend Service │ ──▶ │ Downstream │
│        │     │  (Gateway)       │     │                 │     │  Service   │
└────────┘     └──────────────────┘     └─────────────────┘     └────────────┘
     │                  │                        │                      │
     └──── OAuth Token ─┴──── Identity Flow ─────┴──── Propagated ─────┘
```

### Key Patterns

| Pattern | Description |
|---------|-------------|
| 🔑 **End-to-end identity propagation** | Flow user identity through Azure API Management across all service layers |
| 🔄 **OAuth 2.0 token flow** | Token exchange and validation across service boundaries |
| 🏗️ **Secure delegation** | Delegation patterns for multi-tier architectures without credential sharing |

### Stack

![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![API Management](https://img.shields.io/badge/API_Management-FF6F00?style=flat-square&logo=microsoftazure&logoColor=white)
![OAuth 2.0](https://img.shields.io/badge/OAuth_2.0-EB5424?style=flat-square&logo=auth0&logoColor=white)
