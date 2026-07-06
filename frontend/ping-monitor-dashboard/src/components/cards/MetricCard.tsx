import type { ReactNode } from "react";
import Card from "../common/Card";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  status?: "good" | "warning" | "danger";
};

export default function MetricCard({ title, value, subtitle, icon, status = "good" }: Props) {
  const statusClass =
    status === "good"
      ? "text-green-400 bg-green-400/10"
      : status === "warning"
      ? "text-yellow-400 bg-yellow-400/10"
      : "text-red-400 bg-red-400/10";

  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h3 className="mt-3 text-3xl font-bold">{value}</h3>
          <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
        </div>

        <div className={`rounded-xl p-3 ${statusClass}`}>{icon}</div>
      </div>
    </Card>
  );
}