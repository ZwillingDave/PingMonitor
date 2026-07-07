import { NavLink } from "react-router-dom";

import {
  BarChart3,
  Bell,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Gauge,
  Info,
  MonitorSmartphone,
  Network,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Gauge, to: "/dashboard" },
  { label: "Monitors", icon: Network, to: "/monitors" },
  { label: "Devices", icon: MonitorSmartphone, to: "/devices" },
  { label: "History", icon: BarChart3, to: "/history" },
  { label: "Alerts", icon: Bell, to: "/alerts" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "About", icon: Info, to: "/about" },
];

type Props = {
  expanded: boolean;
  onToggle: () => void;
};

export default function Sidebar({ expanded, onToggle }: Props) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen border-r border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all duration-300 ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <div className="flex h-full flex-col">
        {expanded ? (
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                <Clock3 size={22} />
              </div>

              <div>
                <h2 className="font-bold">MonitorHub</h2>
                <p className="text-xs text-slate-400">Monitoring</p>
              </div>
            </div>

            <button
              onClick={onToggle}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-blue-400"
              title="Sidebar einklappen"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        ) : (
          <div className="flex justify-center py-5">
            <button
              onClick={onToggle}
              className="rounded-xl p-3 text-slate-400 transition hover:bg-white/5 hover:text-blue-400"
              title="Sidebar ausklappen"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        )}

        <nav className="mt-4 flex flex-1 flex-col gap-2 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.to}
                title={!expanded ? item.label : undefined}
                className={({ isActive }) =>
                  `flex items-center rounded-xl py-3 transition ${
                    expanded ? "gap-4 px-4" : "justify-center px-0"
                  } ${
                    isActive
                      ? "bg-blue-500/15 text-blue-400"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={22} />
                {expanded && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          {expanded ? (
            <div>
              <p className="text-sm text-green-400">● Connected</p>
              <p className="mt-1 text-xs text-slate-500">Backend Online</p>
            </div>
          ) : (
            <div className="text-center text-green-400">●</div>
          )}
        </div>
      </div>
    </aside>
  );
}