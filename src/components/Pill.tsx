import { type AnchorHTMLAttributes, type ReactNode } from "react";

type Variant = "cta" | "outline" | "tag";
type Size = "sm" | "md";

interface PillBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type PillProps = PillBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href?: string;
  };

const sizes: Record<Size, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-4 py-2",
};

const variants: Record<Variant, string> = {
  cta: "bg-foreground text-background hover:bg-accent hover:text-accent-fg",
  outline: "border border-foreground/30 text-foreground hover:border-foreground",
  tag: "border border-border text-foreground/80 font-mono",
};

export function Pill({
  variant = "cta",
  size = "md",
  className = "",
  children,
  href,
  ...rest
}: PillProps) {
  const classes = `inline-flex items-center gap-2 rounded-full transition-colors duration-200 whitespace-nowrap ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return <span className={classes}>{children}</span>;
}
