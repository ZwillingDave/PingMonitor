import { Globe, MonitorCog } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../components/common/Card";

export default function MonitorsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Monitors</h1>
      <p className="mt-2 text-slate-400">
        Verwalte deine Monitoring-Module.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-400">
              <Globe size={28} />
            </div>

            <div>
              <h2 className="text-xl font-semibold">Internet Check</h2>
              <p className="mt-2 text-sm text-slate-400">
                Überwacht Ping Checks, Web Checks, DNS Checks und später Speedtests.
              </p>

              <Link
                to="/monitors/internet"
                className="mt-5 inline-block rounded-xl bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500/25"
              >
                Öffnen
              </Link>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start gap-4 opacity-60">
            <div className="rounded-2xl bg-slate-500/15 p-3 text-slate-400">
              <MonitorCog size={28} />
            </div>

            <div>
              <h2 className="text-xl font-semibold">System Monitor</h2>
              <p className="mt-2 text-sm text-slate-400">
                CPU, RAM, Festplatten und Temperaturen.
              </p>

              <span className="mt-5 inline-block rounded-xl bg-slate-500/15 px-4 py-2 text-sm text-slate-400">
                Coming soon
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}