#Requires -Version 7.3
<#
.SYNOPSIS
    Saves GitHub traffic for the owner's public repositories before GitHub drops it.

.DESCRIPTION
    GitHub keeps repository traffic for 14 days only. Run this at least every two weeks.
    Steps:
      1. Lists the owner's public, non-fork repositories.
      2. Reads views, clones, popular referrers and popular paths for each one
         (needs push access, so run it as the owner with an authenticated gh CLI).
      3. Writes one JSON file per run to .traffic/ at the repository root
         (.traffic/<yyyy-MM-dd>.json; a second run on the same day adds the time).
      4. Prints a summary: views, unique visitors, clones and top referrers per repository,
         and whether ozgurkarahan.com appears as a referrer.

    .traffic/ is ignored by git: traffic data stays on this machine.

.PARAMETER Owner
    GitHub user whose public repositories are read.

.PARAMETER SiteDomain
    Referrer to look for in the summary.

.EXAMPLE
    ./scripts/capture-github-traffic.ps1
#>
param(
    [string]$Owner = 'ozgurkarahan',
    [string]$SiteDomain = 'ozgurkarahan.com'
)

$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true

$repoRoot = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $repoRoot '.traffic'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$stamp = Get-Date -Format 'yyyy-MM-dd'
$outFile = Join-Path $outDir "$stamp.json"
if (Test-Path $outFile) { $outFile = Join-Path $outDir "$stamp-$(Get-Date -Format 'HHmmss').json" }

Write-Host "[1/3] Public repositories of $Owner"
$repos = gh repo list $Owner --visibility public --source --limit 200 --json name | ConvertFrom-Json |
    ForEach-Object name | Sort-Object
Write-Host "Found $($repos.Count) non-fork public repositories"

Write-Host "`n[2/3] Traffic"
$endpoints = [ordered]@{
    views     = 'traffic/views'
    clones    = 'traffic/clones'
    referrers = 'traffic/popular/referrers'
    paths     = 'traffic/popular/paths'
}
$results = [ordered]@{}
foreach ($repo in $repos) {
    $entry = [ordered]@{}
    $errors = [System.Collections.Generic.List[string]]::new()
    foreach ($key in $endpoints.Keys) {
        try {
            $entry[$key] = gh api "repos/$Owner/$repo/$($endpoints[$key])" 2>$null | ConvertFrom-Json
        } catch {
            $entry[$key] = $null
            $errors.Add("$key failed: $($_.Exception.Message)")
        }
    }
    if ($errors.Count) { $entry['errors'] = $errors }
    $results[$repo] = $entry
    Write-Host "  $repo"
}

$snapshot = [ordered]@{
    capturedAt = (Get-Date).ToUniversalTime().ToString('o')
    owner      = $Owner
    note       = 'GitHub traffic API: daily views and clones for the last 14 days; referrers and paths are 14-day totals.'
    repos      = $results
}
$snapshot | ConvertTo-Json -Depth 10 | Set-Content -Path $outFile -Encoding utf8
Write-Host "Saved $outFile"

Write-Host "`n[3/3] Summary (last 14 days)"
$rows = foreach ($repo in $results.Keys) {
    $r = $results[$repo]
    $top = @($r.referrers) | Where-Object { $_ } | Sort-Object count -Descending | Select-Object -First 3 |
        ForEach-Object { "$($_.referrer) ($($_.count)/$($_.uniques))" }
    [pscustomobject]@{
        Repo          = $repo
        Views         = $r.views.count
        Uniques       = $r.views.uniques
        Clones        = $r.clones.count
        'Top referrers (views/uniques)' = $top -join ', '
    }
}
$rows | Sort-Object Views -Descending | Format-Table -AutoSize -Wrap | Out-String -Width 200 | Write-Host

$fromSite = foreach ($repo in $results.Keys) {
    @($results[$repo].referrers) | Where-Object { $_ -and $_.referrer -like "*$SiteDomain*" } |
        ForEach-Object { "$repo ($($_.count) views, $($_.uniques) unique)" }
}
if ($fromSite) {
    Write-Host "$SiteDomain as referrer: $($fromSite -join '; ')"
} else {
    Write-Host "$SiteDomain does not appear as a referrer for any repository in the last 14 days."
}
