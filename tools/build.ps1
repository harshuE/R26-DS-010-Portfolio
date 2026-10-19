$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$OutputRoot = Join-Path $ProjectRoot 'dist'

if (Test-Path -LiteralPath $OutputRoot) {
  Remove-Item -LiteralPath $OutputRoot -Recurse -Force
}
New-Item -ItemType Directory -Path $OutputRoot | Out-Null

@('css','js','publications','presentations-assets','components') | ForEach-Object {
  Copy-Item -LiteralPath (Join-Path $ProjectRoot $_) -Destination $OutputRoot -Recurse
}
New-Item -ItemType Directory -Path (Join-Path $OutputRoot 'assets') | Out-Null
@('branding','images','videos') | ForEach-Object {
  Copy-Item -LiteralPath (Join-Path $ProjectRoot "assets\$_") -Destination (Join-Path $OutputRoot 'assets') -Recurse
}
Get-ChildItem -LiteralPath $ProjectRoot -Filter '*.html' -File | Copy-Item -Destination $OutputRoot

# Hard size budget: never ship raw PPTX sources, and drop superseded
# per-component interim PDFs (proposal / data-analysis-report) from the
# package now that the final thesis drafts and PP2 cover that content.
# Kept: the small literature master-sheet .xlsx files in 'supporting'.
Get-ChildItem -LiteralPath $OutputRoot -Recurse -Filter '*.pptx' -File | Remove-Item -Force
$SupportingRoot = Join-Path $OutputRoot 'publications\supporting'
if (Test-Path -LiteralPath $SupportingRoot) {
  Get-ChildItem -LiteralPath $SupportingRoot -Recurse -Filter '*.pdf' -File | Remove-Item -Force
}
$PP1Pdf = Join-Path $OutputRoot 'presentations-assets\R26-DS-010-PP1-Presentation.pdf'
if (Test-Path -LiteralPath $PP1Pdf) { Remove-Item -LiteralPath $PP1Pdf -Force }
$ProposalDeck = Join-Path $OutputRoot 'publications\Proposal-Presentation-R26-DS-010.pdf'
if (Test-Path -LiteralPath $ProposalDeck) { Remove-Item -LiteralPath $ProposalDeck -Force }
$TafPdf = Join-Path $OutputRoot 'publications\TAF-R26-DS-010-V2.pdf'
if (Test-Path -LiteralPath $TafPdf) { Remove-Item -LiteralPath $TafPdf -Force }
# Keep only the two videos actually used on the site (hero + context loop);
# drop any other stray video files to protect the 20 MB budget.
Get-ChildItem -LiteralPath (Join-Path $OutputRoot 'assets\videos') -Filter '*.mp4' -File -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -ne 'hero-loop.mp4' -and $_.Name -ne 'context-loop.mp4' } | Remove-Item -Force

$Bytes = (Get-ChildItem -LiteralPath $OutputRoot -Recurse -File | Measure-Object Length -Sum).Sum
$MiB = [math]::Round($Bytes / 1MB, 2)
Write-Host "Built static site at $OutputRoot ($MiB MiB)."
