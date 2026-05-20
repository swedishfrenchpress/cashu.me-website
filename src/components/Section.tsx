import { type HTMLAttributes } from "react";

type Variant = "dark" | "light";
type Pad = "sm" | "md" | "lg" | "xl" | "flush";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant: Variant;
  /**
   * Vertical padding scale. Use to vary section heights for rhythm.
   * - sm: dense / supporting section
   * - md: standard
   * - lg: default
   * - xl: showcase / closing section
   * - flush: full-viewport heroes that own their own rhythm
   */
  pad?: Pad;
  /** @deprecated alias for pad="flush" */
  flush?: boolean;
}

const padBy: Record<Pad, string> = {
  sm: "py-14 md:py-20 lg:py-24",
  md: "py-20 md:py-28 lg:py-32",
  lg: "py-24 md:py-32 lg:py-40",
  xl: "py-28 md:py-40 lg:py-52",
  flush: "",
};

export function Section({
  variant,
  pad,
  flush = false,
  className = "",
  children,
  ...rest
}: SectionProps) {
  const resolved: Pad = flush ? "flush" : (pad ?? "lg");
  return (
    <section
      data-theme={variant}
      data-section
      className={`bg-background text-foreground ${padBy[resolved]} ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
