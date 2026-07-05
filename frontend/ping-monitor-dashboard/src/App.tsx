import { useEffect, useState } from "react";
import connection from "./api/signalr";

type MonitorSnapshot = {
    timestamp: string;
    status: string;
    routerLatencyMs: number;
    averageLatencyMs: number;
    packetLossPercent: number;
    jitterMs: number;
};

function App() {

    const [data, setData] = useState<MonitorSnapshot>();

    useEffect(() => {

        connection.on("MonitorUpdate", (snapshot: MonitorSnapshot) => {
            setData(snapshot);
        });

        connection.start();

    }, []);

    return (

        <div style={{ padding: 30, color: "white", background: "#111", minHeight: "100vh" }}>

            <h1>PingMonitor</h1>

            {!data && <h2>Warte auf Daten...</h2>}

            {data && (
                <>
                    <h2>Status: {data.status}</h2>

                    <p>Router: {data.routerLatencyMs} ms</p>

                    <p>Durchschnitt: {data.averageLatencyMs} ms</p>

                    <p>Jitter: {data.jitterMs} ms</p>

                    <p>Packet Loss: {data.packetLossPercent}%</p>

                    <p>{data.timestamp}</p>
                </>
            )}

        </div>

    );

}

export default App;