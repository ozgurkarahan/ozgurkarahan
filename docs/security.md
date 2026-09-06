# Identity and security

[Back to profile](../README.md)

## Identity propagation for AI agents

These projects explore a business requirement: connecting an agent's access to enterprise systems with the identity of the person making the request. They examine Entra ID, Foundry, API Management, and downstream APIs without treating a demonstration as evidence of production security.

| Project | Scope | Authoritative project documentation |
|---------|-------|-------------------------------------|
| Entra ID identity propagation | Proof of concept exploring caller identity from a browser through a Foundry agent and APIM to a backend API. | [Repository and README](https://github.com/ozgurkarahan/propagate-id-entra) |
| Salesforce MCP meta-tool | Sample implementation exploring cross-cloud caller identity for agent access to Salesforce through MCP and APIM. | [Repository and README](https://github.com/ozgurkarahan/salesforce-meta-tool-identity-propagation) |
| ServiceNow MCP meta-tool | Sample implementation exploring per-user identity for agent access to ServiceNow through MCP and APIM. | [Repository and README](https://github.com/ozgurkarahan/snow-meta-tool) |

The linked repositories are the source for current authentication flows, policies, configuration, and deployment prerequisites. This guide intentionally does not duplicate token-exchange diagrams or make guarantees about authorization, audit coverage, credential handling, or deployment behavior.

## Evaluation boundaries

These are a proof of concept and sample implementations, **not audited production guarantees**. Before adapting a sample, review its identity mapping, token validation, permissions, secrets handling, logging, and failure behavior against your own requirements. Do not assume that propagation of an identity alone establishes appropriate authorization.

For a separate demonstration of human approval in a business workflow, see [Horizon Famille](https://github.com/ozgurkarahan/horizon-famille), which uses mock business systems and Power Platform approval in Teams. For broader project context, see [AI agents and apps](ai-agents.md).
