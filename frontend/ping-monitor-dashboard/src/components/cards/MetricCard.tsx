import type { ReactNode } from "react";
import Card from "../common/Card";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  status?: "good" | "warning" | "danger";
};

export default function MetricCard({
  title,
  value,
  subtitle,
  icon,
  status = "good",
}: Props) {
  const statusClass =
    status === "good"
      ? "text-green-400 bg-green-400/10"
      : status === "warning"
      ? "text-yellow-400 bg-yellow-400/10"
      : "text-red-400 bg-red-400/10";

  return (
    <Card className="h-full">
      <div className="flex h-full flex-col">

        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            {title}
          </p>
          <div
            className={`flex h-3 w-3 items-center min-w-[50px] min-h-[50px] justify-center rounded-xl ${statusClass}`}
          >
            {icon}
          </div>

        </div>

        {/* Content */}
        <div className="mt-8">
          <h3 className="whitespace-nowrap text-2xl font-bold leading-none tracking-tight text-white">
            {value}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            {subtitle}
          </p>
        </div>

      </div>
    </Card>
  );
}