$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$SourceRoot = Join-Path $ProjectRoot 'OVERALL PROJECT DOCUMENTS\OVERALL PROJECT DOCUMENTS\CARESENSE COMMON'
$OutputRoot = Join-Path $ProjectRoot 'presentations-assets'
New-Item -ItemType Directory -Force -Path $OutputRoot | Out-Null

$powerPoint = New-Object -ComObject PowerPoint.Application
try {
  $decks = @(
    @{ Source = 'R26-DS-010-PP1-Presentation.pptx'; Output = 'R26-DS-010-PP1-Presentation.pdf' },
    @{ Source = 'R26-DS-010-PP2-Presentation- finalized.pptx'; Output = 'R26-DS-010-PP2-Presentation.pdf' }
  )
  foreach ($deck in $decks) {
    $source = Join-Path $SourceRoot $deck.Source
    $output = Join-Path $OutputRoot $deck.Output
    $presentation = $powerPoint.Presentations.Open($source, $true, $true, $false)
    try { $presentation.SaveAs($output, 32) } finally { $presentation.Close() }
  }
} finally {
  $powerPoint.Quit()
  [System.Runtime.InteropServices.Marshal]::ReleaseComObject($powerPoint) | Out-Null
}

Get-ChildItem -LiteralPath $OutputRoot -File | Select-Object Name, Length
