import { CheckCircle2, Clock3, TriangleAlert } from "lucide-react";
import Card from "../common/Card";

const events = [
  {
    time: "19:13",
    title: "Verbindung stabil",
    description: "Alle Targets antworten normal.",
    type: "success",
    icon: CheckCircle2,
  },
  {
    time: "19:12",
    title: "Kurze Latenzspitze",
    description: "Google DNS kurzzeitig bei 82 ms.",
    type: "warning",
    icon: TriangleAlert,
  },
  {
    time: "19:04",
    title: "Monitoring gestartet",
    description: "Backend verbunden und Live-Daten aktiv.",
    type: "info",
    icon: Clock3,
  },
];

export default function TimelineCard() {
  return (
    <Card>
      <div className="mb-5">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <p className="mt-1 text-sm text-slate-400">
          Letzte Ereignisse
        </p>
      </div>

      <div className="relative space-y-5">
        <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-white/10" />

        {events.map((event) => {
          const Icon = event.icon;

          const colorClass =
            event.type === "success"
              ? "bg-green-400/10 text-green-400"
              : event.type === "warning"
              ? "bg-yellow-400/10 text-yellow-400"
              : "bg-blue-400/10 text-blue-400";

          return (
            <div key={`${event.time}-${event.title}`} className="relative flex gap-4">
              <div
                className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colorClass}`}
              >
                <Icon size={19} />
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">{event.title}</h3>
                  <span className="text-xs text-slate-500">{event.time}</span>
                </div>

                <p className="mt-1 text-sm text-slate-400">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}