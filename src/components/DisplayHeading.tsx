import { type HTMLAttributes, type ElementType } from "react";

type Level = 1 | 2 | 3;

interface DisplayHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  as?: ElementType;
}

const sizeByLevel: Record<Level, string> = {
  1: "text-display-1",
  2: "text-display-2",
  3: "text-display-3",
};

export function DisplayHeading({
  level = 1,
  as,
  className = "",
  children,
  ...rest
}: DisplayHeadingProps) {
  const Tag: ElementType = as ?? (`h${level}` as ElementType);
  return (
    <Tag
      className={`display font-display font-medium tracking-[-0.035em] leading-[0.94] ${sizeByLevel[level]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
