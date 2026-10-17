// Owner-only web analytics backend for https://ozgurkarahan.com/ (a static GitHub Pages site).
//
// Deploy with scripts/deploy-telemetry.ps1: it creates the tagged resource group first,
// validates and previews this template, deploys it, then sets and verifies the
// Application Insights daily cap (not a property of Microsoft.Insights/components).
//
// Security and privacy decisions:
// - Local (key) authentication stays enabled on Application Insights on purpose: anonymous
//   browsers cannot use Microsoft Entra ID, so the browser beacon must use the public
//   connection string. Anyone could therefore send fake telemetry; the daily caps and the
//   kill switch (set publicNetworkAccessForIngestion to Disabled) limit the impact.
// - IP masking stays at the default: the IP is used for geolocation and not stored.
// - 90-day retention, well inside the 25 months that CNIL guidance allows for audience
//   measurement.

targetScope = 'resourceGroup'

@description('Azure region for all resources. Defaults to the resource group region.')
param location string = resourceGroup().location

@description('Log Analytics workspace name.')
param workspaceName string

@description('Application Insights component name.')
param appInsightsName string

@description('Retention for the analytics data, in days.')
@minValue(30)
@maxValue(730)
param retentionInDays int = 90

@description('Workspace daily ingestion cap in GB, as a string because Bicep has no decimal literals. This is a soft limit that Azure can overshoot.')
param dailyQuotaGb string = '0.1'

@description('Tags applied to every resource.')
param tags object

resource workspace 'Microsoft.OperationalInsights/workspaces@2025-02-01' = {
  name: workspaceName
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: retentionInDays
    workspaceCapping: {
      // The schema types this as int; json() passes the decimal value through.
      dailyQuotaGb: json(dailyQuotaGb)
    }
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  kind: 'web'
  tags: tags
  properties: {
    Application_Type: 'web'
    Flow_Type: 'Bluefield'
    Request_Source: 'rest'
    WorkspaceResourceId: workspace.id
    IngestionMode: 'LogAnalytics'
    DisableIpMasking: false
    // Required for anonymous browser ingestion; see the header comment.
    DisableLocalAuth: false
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

// Production data: block accidental deletion of the resource group and its resources.
// Updates are still allowed. To delete or replace a resource: remove the lock, make the
// change, then redeploy to recreate it.
resource deleteLock 'Microsoft.Authorization/locks@2020-05-01' = {
  name: 'do-not-delete'
  properties: {
    level: 'CanNotDelete'
    notes: 'Production analytics for ozgurkarahan.com. Remove only for a change that needs deletion, then redeploy.'
  }
}

output workspaceName string = workspace.name
output appInsightsName string = appInsights.name
