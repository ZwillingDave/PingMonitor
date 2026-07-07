import RouterStatusCard from "../components/connectivity/RouterStatusCard";
import PingTargetsCard from "../components/connectivity/PingTargetsCard";
import WebChecksCard from "../components/connectivity/WebChecksCard";
import DnsChecksCard from "../components/connectivity/DnsChecksCard";

export default function InternetCheckConnectivityPage() {
  return (
    <div className="space-y-6">
      <RouterStatusCard />

      <section className="grid gap-6 xl:grid-cols-3">
        <PingTargetsCard />
        <WebChecksCard />
        <DnsChecksCard />
      </section>
    </div>
  );
}