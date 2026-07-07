import { Activity, Globe, Home, Network, Radio, Zap } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MetricCard from "../components/cards/MetricCard";
import Card from "../components/common/Card";
import LivePingChart from "../components/charts/LivePingChart";
import TargetsCard from "../components/dashboard/TargetsCard";
import TimelineCard from "../components/dashboard/TimelineCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader connected={true} />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
        <MetricCard title="Router" value="0.8 ms" subtitle="Fritz!Box erreichbar" icon={<Home />} />
        <MetricCard title="Internet" value="3 / 3" subtitle="ICMP Ziele online" icon={<Network />} />
        <MetricCard title="HTTP" value="3 / 3" subtitle="Web Checks OK" icon={<Globe />} />
        <MetricCard title="Packet Loss" value="0%" subtitle="Keine Verluste" icon={<Radio />} />
        <MetricCard title="Ø Ping" value="18 ms" subtitle="Stabile Verbindung" icon={<Activity />} />
        <MetricCard title="Jitter" value="2 ms" subtitle="Sehr ruhig" icon={<Zap />} />
      </section>

      <section className="mt-6">
        <LivePingChart />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <TargetsCard />
        <TimelineCard />
      </section>
    </DashboardLayout>
  );
}