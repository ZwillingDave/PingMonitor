import LivePingChart from "../../../components/charts/LivePingChart";
import PerformancePanel from "../components/performance/PerformancePanel";

export default function InternetCheckPerformancePage() {
  return (
    <div className="space-y-6">
      <LivePingChart />
      <PerformancePanel />
    </div>
  );
}