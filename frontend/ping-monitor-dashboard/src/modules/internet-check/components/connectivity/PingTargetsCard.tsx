import { Network, Plus } from "lucide-react";
import Card from "../../../../components/common/Card";

const targets = [
  { name: "Google DNS", address: "8.8.8.8", latency: "18 ms" },
  { name: "Cloudflare DNS", address: "1.1.1.1", latency: "16 ms" },
  { name: "Quad9", address: "9.9.9.9", latency: "21 ms" },
];

export default function PingTargetsCard() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Ping Checks</h2>
          <p className="mt-1 text-sm text-slate-400">ICMP-Ziele</p>
        </div>

        <button className="rounded-xl bg-blue-500/15 p-2 text-blue-400 hover:bg-blue-500/25">
          <Plus size={18} />
        </button>
      </div>

      <div className="space-y-3">
        {targets.map((target) => (
          <div
            key={target.address}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-400/10 p-2 text-green-400">
                <Network size={18} />
              </div>

              <div>
                <p className="font-semibold">{target.name}</p>
                <p className="text-sm text-slate-500">{target.address}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">{target.latency}</p>
              <p className="text-xs text-green-400">OK</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}