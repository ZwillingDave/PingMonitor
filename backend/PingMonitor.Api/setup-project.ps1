# Projektpfad
$ProjectRoot = Get-Location

# Ordner, die erstellt werden sollen
$Folders = @(
    "Data",
    "DTOs",
    "Hubs",
    "Interfaces",
    "Models",
    "Services",
    "Utils"
)

foreach ($Folder in $Folders) {

    $FolderPath = Join-Path $ProjectRoot $Folder

    # Ordner erstellen
    if (!(Test-Path $FolderPath)) {
        New-Item -ItemType Directory -Path $FolderPath | Out-Null
        Write-Host "Ordner erstellt: $Folder"
    }

    # Placeholder.cs erstellen
    $PlaceholderFile = Join-Path $FolderPath "Placeholder.cs"

    if (!(Test-Path $PlaceholderFile)) {

        $Namespace = "PingMonitor.Api.$Folder"

        @"
namespace $Namespace;

public sealed class Placeholder
{
}
"@ | Set-Content -Path $PlaceholderFile -Encoding UTF8

        Write-Host "Placeholder erstellt: $Folder\Placeholder.cs"
    }
}

Write-Host ""
Write-Host "Projektstruktur erfolgreich erstellt." -ForegroundColor Green