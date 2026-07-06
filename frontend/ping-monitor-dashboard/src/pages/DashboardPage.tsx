import { Activity, Globe, Home, Network, Radio, Zap } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import MetricCard from "../components/cards/MetricCard";
import Card from "../components/common/Card";

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

      <section className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
        <Card>
          <h2 className="text-xl font-semibold">Live Ping Verlauf</h2>
          <div className="mt-6 flex h-72 items-center justify-center rounded-xl border border-dashed border-slate-700 text-slate-500">
            Chart Placeholder
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Timeline</h2>
          <div className="mt-6 space-y-4 text-sm">
            <p className="text-green-400">● 19:04 Verbindung stabil</p>
            <p className="text-yellow-400">● 19:12 kurze Latenzspitze</p>
            <p className="text-green-400">● 19:13 wieder normal</p>
          </div>
        </Card>
      </section>

      <section className="mt-6">
        <Card>
          <h2 className="text-xl font-semibold">Targets</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-700">
            <table className="w-full text-left">
              <thead className="bg-slate-800/80 text-slate-400">
                <tr>
                  <th className="p-4">Typ</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Latenz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ROUTER", "Fritz!Box", "OK", "0.8 ms"],
                  ["PING", "Google DNS", "OK", "18 ms"],
                  ["PING", "Cloudflare", "OK", "16 ms"],
                  ["PING", "Quad9", "OK", "19 ms"],
                  ["HTTP", "Google", "OK", "220 ms"],
                ].map((row) => (
                  <tr className="border-t border-slate-800" key={row.join("-")}>
                    {row.map((cell) => (
                      <td className="p-4" key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </DashboardLayout>
  );
}