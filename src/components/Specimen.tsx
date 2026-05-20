import { type HTMLAttributes, type ReactNode } from "react";
import { IndexMark } from "./IndexMark";

interface SpecimenProps extends HTMLAttributes<HTMLElement> {
  n: number;
  label: string;
  caption?: string;
  children: ReactNode;
}

export function Specimen({
  n,
  label,
  caption,
  className = "",
  children,
  ...rest
}: SpecimenProps) {
  return (
    <figure
      className={`relative border border-border bg-[color-mix(in_oklab,var(--bg)_94%,var(--fg)_3%)] p-6 md:p-8 ${className}`}
      {...rest}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <IndexMark n={n} variant="inline" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {label}
          </span>
        </div>
        {caption ? (
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {caption}
          </span>
        ) : null}
      </div>
      <div className="mt-6">{children}</div>
    </figure>
  );
}
