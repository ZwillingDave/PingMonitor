import type { PropsWithChildren } from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: PropsWithChildren) {

  const [expanded, setExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">

      <Sidebar
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

      <main
        className={`
          transition-all duration-300
          ${expanded ? "ml-64" : "ml-20"}
        `}
      >
        <div className="mx-auto max-w-[1800px] p-8">
          {children}
        </div>
      </main>

    </div>
  );
}