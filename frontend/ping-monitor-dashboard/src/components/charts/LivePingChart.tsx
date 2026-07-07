import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Card from "../common/Card";

const data = [
  { time: "19:00", router: 1, google: 18, cloudflare: 15, quad9: 21 },
  { time: "19:01", router: 1, google: 17, cloudflare: 16, quad9: 20 },
  { time: "19:02", router: 2, google: 22, cloudflare: 18, quad9: 24 },
  { time: "19:03", router: 1, google: 19, cloudflare: 15, quad9: 23 },
  { time: "19:04", router: 1, google: 16, cloudflare: 14, quad9: 19 },
  { time: "19:05", router: 2, google: 20, cloudflare: 16, quad9: 22 },
  { time: "19:06", router: 1, google: 18, cloudflare: 15, quad9: 21 },
];

export default function LivePingChart() {
  return (
    <Card>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Live Ping Verlauf</h2>
          <p className="mt-1 text-sm text-slate-400">
            Latenz der letzten Minuten in Millisekunden
          </p>
        </div>

        <div className="flex gap-3 text-xs text-slate-400">
          <span className="text-blue-400">● Router</span>
          <span className="text-green-400">● Google</span>
          <span className="text-cyan-400">● Cloudflare</span>
          <span className="text-purple-400">● Quad9</span>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="googleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="cloudflareGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.35} />

            <XAxis
              dataKey="time"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
              unit=" ms"
            />

            <Tooltip
              contentStyle={{
                background: "#020617",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "14px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="google"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#googleGradient)"
              name="Google DNS"
            />

            <Area
              type="monotone"
              dataKey="cloudflare"
              stroke="#06b6d4"
              strokeWidth={3}
              fill="url(#cloudflareGradient)"
              name="Cloudflare"
            />

            <Area
              type="monotone"
              dataKey="quad9"
              stroke="#a855f7"
              strokeWidth={2}
              fill="transparent"
              name="Quad9"
            />

            <Area
              type="monotone"
              dataKey="router"
              stroke="#60a5fa"
              strokeWidth={2}
              fill="transparent"
              name="Router"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}