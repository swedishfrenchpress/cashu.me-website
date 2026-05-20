import { type HTMLAttributes } from "react";

export function Container({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`max-w-[1400px] mx-auto px-6 md:px-10 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
