import LivePingChart from "../../../components/charts/LivePingChart";
import InternetCheckOverview from "../components/InternetCheckOverview";
import PingTargetsCard from "../components/connectivity/PingTargetsCard";
import WebChecksCard from "../components/connectivity/WebChecksCard";
import DnsChecksCard from "../components/connectivity/DnsChecksCard";
import PerformancePanel from "../components/performance/PerformancePanel";
import RouterStatusCard from "../components/connectivity/RouterStatusCard";

export default function InternetCheckOverviewPage() {
  return (
    <>
      <InternetCheckOverview />

      <section className="mt-6">
        <LivePingChart />
      </section>

     <section className="mt-6 grid gap-6 xl:grid-cols-2">
        <RouterStatusCard />
        <PerformancePanel />
    </section>

    <section className="mt-6 grid gap-6 xl:grid-cols-3">
        <PingTargetsCard />
        <WebChecksCard />
        <DnsChecksCard />
    </section>
    </>
  );
}