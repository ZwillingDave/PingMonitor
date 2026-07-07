$files = @{
  "src\modules\internet-check\components\InternetCheckHeader.tsx" = @"
export default function InternetCheckHeader() {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">Internet Check</h1>
      <p className="mt-2 text-slate-400">
        Überwacht Router, Ping Checks, Web Checks, DNS Checks und Performance.
      </p>
    </div>
  );
}
"@

  "src\modules\internet-check\components\InternetCheckNav.tsx" = @"
const items = [""Overview"", ""Connectivity"", ""Performance"", ""Settings""];

export default function InternetCheckNav() {
  return (
    <div className="mb-6 flex gap-2 rounded-2xl border border-white/10 bg-slate-900/60 p-2">
      {items.map((item, index) => (
        <button
          key={item}
          className={`rounded-xl px-4 py-2 text-sm transition ${
            index === 0
              ? ""bg-blue-500/15 text-blue-400""
              : ""text-slate-400 hover:bg-white/5 hover:text-white""
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
"@

  "src\modules\internet-check\components\InternetCheckOverview.tsx" = @"
import { Activity, Globe, Network, Radio, Router, Zap } from ""lucide-react"";
import MetricCard from ""../../../components/cards/MetricCard"";

export default function InternetCheckOverview() {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
      <MetricCard title="Router" value="0.8 ms" subtitle="Gateway erreichbar" icon={<Router />} />
      <MetricCard title="Ping Checks" value="4 / 4" subtitle="Alle Ping-Ziele OK" icon={<Network />} />
      <MetricCard title="Web Checks" value="3 / 3" subtitle="Webseiten erreichbar" icon={<Globe />} />
      <MetricCard title="DNS Checks" value="Ready" subtitle="Noch nicht aktiv" icon={<Radio />} />
      <MetricCard title="Ø Latency" value="18 ms" subtitle="Stabile Verbindung" icon={<Activity />} />
      <MetricCard title="Jitter" value="2 ms" subtitle="Sehr ruhig" icon={<Zap />} />
    </section>
  );
}
"@

  "src\modules\internet-check\components\connectivity\PingChecksPanel.tsx" = @"
import Card from ""../../../../components/common/Card"";

export default function PingChecksPanel() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Ping Checks</h2>
      <p className="mt-1 text-sm text-slate-400">
        Router und ICMP-Ziele wie Google DNS, Cloudflare und Quad9.
      </p>
    </Card>
  );
}
"@

  "src\modules\internet-check\components\connectivity\WebChecksPanel.tsx" = @"
import Card from ""../../../../components/common/Card"";

export default function WebChecksPanel() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Web Checks</h2>
      <p className="mt-1 text-sm text-slate-400">
        Prüft Webseiten und HTTP/HTTPS-Erreichbarkeit.
      </p>
    </Card>
  );
}
"@

  "src\modules\internet-check\components\connectivity\DnsChecksPanel.tsx" = @"
import Card from ""../../../../components/common/Card"";

export default function DnsChecksPanel() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">DNS Checks</h2>
      <p className="mt-1 text-sm text-slate-400">
        Später: DNS-Auflösung, Resolver-Latenz und Fehlererkennung.
      </p>
    </Card>
  );
}
"@

  "src\modules\internet-check\components\performance\PerformancePanel.tsx" = @"
import Card from ""../../../../components/common/Card"";

export default function PerformancePanel() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Performance</h2>
      <p className="mt-1 text-sm text-slate-400">
        Latenz, Paketverlust, Jitter und später Speedtest.
      </p>
    </Card>
  );
}
"@
}

foreach ($file in $files.Keys) {
  $folder = Split-Path $file

  if (!(Test-Path $folder)) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
  }

  $files[$file] | Set-Content $file -Encoding UTF8
  Write-Host "Datei erstellt: $file"
}

Write-Host "Internet-Check-Komponenten wurden erstellt." -ForegroundColor Green