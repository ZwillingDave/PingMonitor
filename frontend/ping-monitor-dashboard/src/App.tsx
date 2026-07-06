import { useEffect, useState } from "react";
import { monitorConnection } from "./api/signalr";

type TargetResult = {
  name: string;
  address: string;
  type: string;
  status: string;
  latencyMs: number | null;
  statusCode: number | null;
};

type MonitorSnapshot = {
  timestamp: string;
  overallStatus: string;
  routerOk: boolean;
  routerLatencyMs: number | null;
  successfulPings: number;
  totalPings: number;
  successfulHttpChecks: number;
  totalHttpChecks: number;
  packetLossPercent: number;
  averageLatencyMs: number | null;
  minLatencyMs: number | null;
  maxLatencyMs: number | null;
  jitterMs: number | null;
  results: TargetResult[];
};

function App() {
  const [snapshot, setSnapshot] = useState<MonitorSnapshot | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    monitorConnection.on("MonitorUpdate", (data: MonitorSnapshot) => {
      setSnapshot(data);
    });

    monitorConnection
      .start()
      .then(() => setConnected(true))
      .catch(console.error);

    monitorConnection.onclose(() => setConnected(false));
    monitorConnection.onreconnected(() => setConnected(true));

    return () => {
      monitorConnection.off("MonitorUpdate");
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#0f172a", color: "white", padding: "32px", fontFamily: "Arial" }}>
      <h1>PingMonitor</h1>
      <p>SignalR: {connected ? "Connected" : "Disconnected"}</p>

      {!snapshot && <h2>Warte auf Live-Daten...</h2>}

      {snapshot && (
        <>
          <h2>Status: {snapshot.overallStatus}</h2>

          <p>Router: {snapshot.routerLatencyMs ?? "-"} ms</p>
          <p>Internet Pings: {snapshot.successfulPings} / {snapshot.totalPings}</p>
          <p>HTTP Checks: {snapshot.successfulHttpChecks} / {snapshot.totalHttpChecks}</p>
          <p>Packet Loss: {snapshot.packetLossPercent}%</p>
          <p>Ø Ping: {snapshot.averageLatencyMs ?? "-"} ms</p>
          <p>Jitter: {snapshot.jitterMs ?? "-"} ms</p>

          <table cellPadding="10" style={{ marginTop: 24, borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th align="left">Typ</th>
                <th align="left">Name</th>
                <th align="left">Status</th>
                <th align="left">Latenz</th>
                <th align="left">Code</th>
              </tr>
            </thead>
            <tbody>
              {snapshot.results.map((r) => (
                <tr key={`${r.type}-${r.address}`} style={{ borderTop: "1px solid #334155" }}>
                  <td>{r.type}</td>
                  <td>{r.name}</td>
                  <td>{r.status}</td>
                  <td>{r.latencyMs ?? "-"} ms</td>
                  <td>{r.statusCode ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </main>
  );
}

export default App;