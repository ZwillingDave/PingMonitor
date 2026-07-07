import { Settings } from "lucide-react";

export default function InternetCheckSettingsPage() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className="mb-3 flex items-center gap-3">
        <Settings className="text-blue-400" />
        <h2 className="text-xl font-semibold">Internet Check Settings</h2>
      </div>

      <p className="text-slate-400">
        Hier werden später Intervalle, Timeouts und Targets verwaltet.
      </p>
    </div>
  );
}