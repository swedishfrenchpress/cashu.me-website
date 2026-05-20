import { type HTMLAttributes, type ReactNode } from "react";

interface BrowserChromeProps extends HTMLAttributes<HTMLDivElement> {
  url?: string;
  tone?: "dark" | "light";
  children?: ReactNode;
}

export function BrowserChrome({
  url = "cashu.me",
  tone = "dark",
  className = "",
  children,
  ...rest
}: BrowserChromeProps) {
  const surface =
    tone === "dark"
      ? "border-border bg-[color-mix(in_oklab,var(--bg)_90%,white_3%)]"
      : "border-border bg-[color-mix(in_oklab,var(--bg)_92%,black_3%)]";
  const barSurface =
    tone === "dark"
      ? "border-border bg-[color-mix(in_oklab,var(--bg)_88%,white_5%)]"
      : "border-border bg-[color-mix(in_oklab,var(--bg)_90%,black_3%)]";
  return (
    <div
      className={`relative w-full overflow-hidden border ${surface} ${className}`}
      {...rest}
    >
      <div
        className={`flex items-center gap-3 border-b px-4 py-3 ${barSurface}`}
      >
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="block h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="block h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="block h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="flex-1 rounded-full border border-border px-3 py-1 font-mono text-[11px] tracking-wide text-muted">
          <span className="text-muted/60">https://</span>
          <span className="text-foreground/80">{url}</span>
        </div>
        <span
          aria-hidden
          className="h-4 w-4 rounded-full border border-border"
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
