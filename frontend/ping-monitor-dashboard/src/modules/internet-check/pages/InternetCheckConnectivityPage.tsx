import PingChecksPanel from "../components/connectivity/PingChecksPanel";
import WebChecksPanel from "../components/connectivity/WebChecksPanel";
import DnsChecksPanel from "../components/connectivity/DnsChecksPanel";

export default function InternetCheckConnectivityPage() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <PingChecksPanel />
      <WebChecksPanel />
      <DnsChecksPanel />
    </section>
  );
}