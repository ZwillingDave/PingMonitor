import type { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">
      {children}
    </div>
  );
}