import Card from "../../../../components/common/Card";

export default function PingChecksPanel() {
  return (
    <Card>
      <h2 className="text-xl font-semibold">Ping Checks</h2>
      <p className="mt-1 text-sm text-slate-400">
        Router und ICMP-Ziele wie Google DNS, Cloudflare und Quad9.
      </p>
    </Card>
  );
}
