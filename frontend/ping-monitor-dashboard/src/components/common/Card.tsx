import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}