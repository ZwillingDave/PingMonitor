import { Globe, Plus } from "lucide-react";
import Card from "../../../../components/common/Card";

const checks = [
  { name: "Google", url: "https://www.google.com", latency: "220 ms" },
  { name: "Cloudflare", url: "https://www.cloudflare.com", latency: "95 ms" },
  { name: "Microsoft", url: "https://www.microsoft.com", latency: "33 ms" },
];

export default function WebChecksCard() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Web Checks</h2>
          <p className="mt-1 text-sm text-slate-400">HTTP/HTTPS</p>
        </div>

        <button className="rounded-xl bg-blue-500/15 p-2 text-blue-400 hover:bg-blue-500/25">
          <Plus size={18} />
        </button>
      </div>

      <div className="space-y-3">
        {checks.map((check) => (
          <div
            key={check.url}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-400/10 p-2 text-green-400">
                <Globe size={18} />
              </div>

              <div>
                <p className="font-semibold">{check.name}</p>
                <p className="max-w-[260px] truncate text-sm text-slate-500">
                  {check.url}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">{check.latency}</p>
              <p className="text-xs text-green-400">200 OK</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}