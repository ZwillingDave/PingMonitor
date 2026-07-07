import { Globe, MoreVertical, Network, Router } from "lucide-react";
import Card from "../common/Card";

const targets = [
  {
    name: "Fritz!Box",
    address: "192.168.178.1",
    type: "ROUTER",
    latency: "0.8 ms",
    status: "OK",
    icon: Router,
  },
  {
    name: "Google DNS",
    address: "8.8.8.8",
    type: "ICMP",
    latency: "18 ms",
    status: "OK",
    icon: Network,
  },
  {
    name: "Cloudflare DNS",
    address: "1.1.1.1",
    type: "ICMP",
    latency: "16 ms",
    status: "OK",
    icon: Network,
  },
  {
    name: "Quad9",
    address: "9.9.9.9",
    type: "ICMP",
    latency: "21 ms",
    status: "OK",
    icon: Network,
  },
  {
    name: "Google HTTP",
    address: "https://www.google.com",
    type: "HTTP",
    latency: "220 ms",
    status: "OK",
    icon: Globe,
  },
];

export default function TargetsCard() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Targets</h2>
          <p className="mt-1 text-sm text-slate-400">
            Aktuell überwachte Ziele
          </p>
        </div>

        <button className="rounded-xl bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/25">
          + Target
        </button>
      </div>

      <div className="space-y-3">
        {targets.map((target) => {
          const Icon = target.icon;

          return (
            <div
              key={target.name}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition hover:border-blue-400/30 hover:bg-slate-900/70"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <Icon size={21} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(34,197,94,.8)]" />
                    <h3 className="font-semibold">{target.name}</h3>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {target.type} · {target.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="text-right">
                  <p className="font-semibold text-slate-100">{target.latency}</p>
                  <p className="text-xs text-slate-500">{target.status}</p>
                </div>

                <button className="rounded-lg p-2 text-slate-500 opacity-60 transition hover:bg-white/5 hover:text-slate-200 group-hover:opacity-100">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}