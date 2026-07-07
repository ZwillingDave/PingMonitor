import { Router } from "lucide-react";
import Card from "../../../../components/common/Card";

export default function RouterStatusCard() {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">Router</p>
          <h2 className="mt-3 text-2xl font-bold">Fritz!Box</h2>
          <p className="mt-1 text-sm text-slate-500">192.168.178.1</p>
        </div>

        <div className="rounded-xl bg-green-400/10 p-3 text-green-400">
          <Router size={24} />
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <p className="text-4xl font-bold">0.8 ms</p>
          <p className="mt-1 text-sm text-green-400">● Online</p>
        </div>

        <button className="rounded-xl bg-white/5 px-4 py-2 text-sm text-slate-300 hover:bg-white/10">
          Details
        </button>
      </div>
    </Card>
  );
}