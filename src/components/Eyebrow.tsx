import { type HTMLAttributes, type ReactNode } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  n?: number;
  children: ReactNode;
}

export function Eyebrow({ n, children, className = "", ...rest }: EyebrowProps) {
  const num =
    typeof n === "number" ? String(n).padStart(3, "0") : undefined;
  return (
    <span
      className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted ${className}`}
      {...rest}
    >
      {num ? <span className="text-accent">[{num}]</span> : null}
      <span>{children}</span>
    </span>
  );
}
