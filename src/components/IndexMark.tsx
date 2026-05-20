import { type HTMLAttributes } from "react";

interface IndexMarkProps extends HTMLAttributes<HTMLSpanElement> {
  n: number;
  /** "inline" for small leading marks; "block" for large floating marks (à la `[2]` in feature grids). */
  variant?: "inline" | "block";
}

export function IndexMark({
  n,
  variant = "inline",
  className = "",
  ...rest
}: IndexMarkProps) {
  const sizing =
    variant === "block"
      ? "text-3xl md:text-4xl text-accent"
      : "text-sm text-muted";
  return (
    <span
      aria-hidden="true"
      className={`font-mono tabular-nums ${sizing} ${className}`}
      {...rest}
    >
      [{n}]
    </span>
  );
}
