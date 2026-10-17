#Requires -Version 7.3
<#
.SYNOPSIS
    Creates or updates the Azure analytics backend for https://ozgurkarahan.com/.

.DESCRIPTION
    Idempotent. Steps:
      1. Creates the tagged resource group (kept even if a later step fails).
      2. Validates the Bicep template (including Azure Policy) and shows a what-if preview.
      3. Deploys infra/main.bicep (workspace, Application Insights, delete lock).
      4. Sets the Application Insights daily cap, keeps the cap-reached email on, and
         verifies that both daily caps equal the requested value.

    Daily caps are soft limits: Azure can overshoot them and extra ingestion is billed.
    Kill switch if the public ingestion key is abused:
      az monitor app-insights component update --app <name> -g <group> --ingestion-access Disabled

.PARAMETER SubscriptionId
    Subscription to deploy into. Passed at run time so it is not committed.

.PARAMETER WhatIfOnly
    Stop after validation and the what-if preview.

.EXAMPLE
    ./scripts/deploy-telemetry.ps1 -SubscriptionId <subscription-id> -WhatIfOnly
#>
param(
    [Parameter(Mandatory)][string]$SubscriptionId,
    [string]$Location = 'swedencentral',
    [string]$ResourceGroup = 'rg-ozgurkarahan-com-prod',
    [double]$DailyCapGb = 0.1,
    [switch]$WhatIfOnly
)

$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true

$repoRoot = Split-Path -Parent $PSScriptRoot
$template = Join-Path $repoRoot 'infra/main.bicep'
$parametersFile = Join-Path $repoRoot 'infra/main.parameters.json'
$parameters = (Get-Content $parametersFile -Raw | ConvertFrom-Json).parameters
$tagArgs = $parameters.tags.value.PSObject.Properties | ForEach-Object { "$($_.Name)=$($_.Value)" }
$appName = $parameters.appInsightsName.value
$workspaceName = $parameters.workspaceName.value

az account set --subscription $SubscriptionId
Write-Host "Subscription:   $(az account show --query name -o tsv) ($SubscriptionId)"
Write-Host "Resource group: $ResourceGroup ($Location)"

Write-Host "`n[1/4] Resource group"
az group create --name $ResourceGroup --location $Location --tags @tagArgs --output none

Write-Host "`n[2/4] Validate and preview"
az deployment group validate --resource-group $ResourceGroup --template-file $template --parameters "@$parametersFile" --output none
az deployment group what-if --resource-group $ResourceGroup --template-file $template --parameters "@$parametersFile"
if ($WhatIfOnly) { return }

Write-Host "`n[3/4] Deploy"
az deployment group create --resource-group $ResourceGroup --name ozgurkarahan-com-analytics `
    --template-file $template --parameters "@$parametersFile" --output none

Write-Host "`n[4/4] Daily caps"
az monitor app-insights component billing update --app $appName --resource-group $ResourceGroup `
    --cap $DailyCapGb --stop false --output none
$appCap = [double](az monitor app-insights component billing show --app $appName --resource-group $ResourceGroup --query dataVolumeCap.cap -o tsv)
$workspaceCap = [double](az monitor log-analytics workspace show --workspace-name $workspaceName --resource-group $ResourceGroup --query workspaceCapping.dailyQuotaGb -o tsv)
if ([math]::Abs($appCap - $DailyCapGb) -gt 1e-6 -or [math]::Abs($workspaceCap - $DailyCapGb) -gt 1e-6) {
    throw "Daily caps differ from $DailyCapGb GB: Application Insights $appCap GB, workspace $workspaceCap GB."
}
Write-Host "Daily caps: Application Insights $appCap GB, workspace $workspaceCap GB"
Write-Host "Done. Read the browser connection string with:"
Write-Host "  az monitor app-insights component show --app $appName -g $ResourceGroup --query connectionString -o tsv"
