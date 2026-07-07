import Card from "../../../../components/common/Card";

export default function PerformancePanel() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Performance</h2>
      <p className="mt-1 text-sm text-slate-400">
        Latenz, Paketverlust, Jitter und spÃ¤ter Speedtest.
      </p>
    </Card>
  );
}
