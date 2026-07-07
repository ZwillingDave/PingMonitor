import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export type ModuleNavItem = {
  label: string;
  to: string;
  icon: LucideIcon;
};

type Props = {
  items: ModuleNavItem[];
};

export default function ModuleSidebar({ items }: Props) {
  return (
    <aside className="w-64 shrink-0 rounded-2xl border border-white/10 bg-slate-900/60 p-3">
      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/monitors/internet"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-blue-500/15 text-blue-400"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}