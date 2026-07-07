import { RadioTower, Plus } from "lucide-react";
import Card from "../../../../components/common/Card";

const checks = [
  { name: "Google Resolver", address: "8.8.8.8", status: "Ready" },
  { name: "Cloudflare Resolver", address: "1.1.1.1", status: "Ready" },
  { name: "Quad9 Resolver", address: "9.9.9.9", status: "Ready" },
];

export default function DnsChecksCard() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">DNS Checks</h2>
          <p className="mt-1 text-sm text-slate-400">Resolver & Namensauflösung</p>
        </div>

        <button className="rounded-xl bg-blue-500/15 p-2 text-blue-400 hover:bg-blue-500/25">
          <Plus size={18} />
        </button>
      </div>

      <div className="space-y-3">
        {checks.map((check) => (
          <div
            key={check.address}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 p-4 opacity-70"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-400/10 p-2 text-blue-400">
                <RadioTower size={18} />
              </div>

              <div>
                <p className="font-semibold">{check.name}</p>
                <p className="text-sm text-slate-500">{check.address}</p>
              </div>
            </div>

            <p className="text-sm text-blue-400">{check.status}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}