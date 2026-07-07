import { Activity, Globe, Network, Radio, Router, Zap } from "lucide-react";
import MetricCard from "../../../components/cards/MetricCard";

export default function InternetCheckOverview() {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      <MetricCard title="Router" value="0.8 ms" subtitle="Gateway erreichbar" icon={<Router />} />
      <MetricCard title="Ping Checks" value="4 / 4" subtitle="Alle Ping-Ziele OK" icon={<Network />} />
      <MetricCard title="Web Checks" value="3 / 3" subtitle="Webseiten erreichbar" icon={<Globe />} />
      <MetricCard title="DNS Checks" value="Ready" subtitle="Noch nicht aktiv" icon={<Radio />} />
      <MetricCard title="Avg Latency" value="18 ms" subtitle="Stabile" icon={<Activity />} />
      <MetricCard title="Jitter" value="2 ms" subtitle="Sehr ruhig" icon={<Zap />} />
    </section>
  );
}
