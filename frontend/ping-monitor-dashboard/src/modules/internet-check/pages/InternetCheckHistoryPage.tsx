import { BarChart3 } from "lucide-react";

export default function InternetCheckHistoryPage() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className="mb-3 flex items-center gap-3">
        <BarChart3 className="text-blue-400" />
        <h2 className="text-xl font-semibold">Internet Check History</h2>
      </div>

      <p className="text-slate-400">
        Dieser Bereich zeigt später Verlauf, Ausfälle und Statistiken.
      </p>
    </div>
  );
}