import { Activity } from "lucide-react";

type Props = {
  connected: boolean;
};

export default function DashboardHeader({ connected }: Props) {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Activity className="h-9 w-9 text-blue-400" />
        <div>
          <h1 className="text-4xl font-bold">PingMonitor</h1>
          <p className="text-slate-400">
            Real-Time Network Monitoring
          </p>
        </div>
      </div>

      <div
        className={`rounded-xl px-4 py-2 font-semibold ${
          connected
            ? "bg-green-500/20 text-green-400"
            : "bg-red-500/20 text-red-400"
        }`}
      >
        {connected ? "● Connected" : "● Disconnected"}
      </div>
    </header>
  );
}