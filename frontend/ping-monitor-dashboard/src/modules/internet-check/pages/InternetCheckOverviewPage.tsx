import LivePingChart from "../../../components/charts/LivePingChart";
import InternetCheckOverview from "../components/InternetCheckOverview";
import PingChecksPanel from "../components/connectivity/PingChecksPanel";
import WebChecksPanel from "../components/connectivity/WebChecksPanel";
import DnsChecksPanel from "../components/connectivity/DnsChecksPanel";
import PerformancePanel from "../components/performance/PerformancePanel";

export default function InternetCheckOverviewPage() {
  return (
    <>
      <InternetCheckOverview />

      <section className="mt-6">
        <LivePingChart />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-3">
        <PingChecksPanel />
        <WebChecksPanel />
        <DnsChecksPanel />
      </section>

      <section className="mt-6">
        <PerformancePanel />
      </section>
    </>
  );
}