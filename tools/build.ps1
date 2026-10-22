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

$Bytes = (Get-ChildItem -LiteralPath $OutputRoot -Recurse -File | Measure-Object Length -Sum).Sum
$MiB = [math]::Round($Bytes / 1MB, 2)
Write-Host "Built static site at $OutputRoot ($MiB MiB)."
