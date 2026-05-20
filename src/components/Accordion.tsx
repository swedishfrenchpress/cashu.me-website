import { type ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export function AccordionItem({ title, defaultOpen, children }: AccordionItemProps) {
  return (
    <details
      open={defaultOpen}
      className="group border-t border-border last:border-b py-5 md:py-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
        <span className="text-lg md:text-xl font-medium tracking-tight">
          {title}
        </span>
        <span
          aria-hidden
          className="relative h-4 w-4 shrink-0 text-foreground/70"
        >
          <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
          <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90 group-open:scale-y-0" />
        </span>
      </summary>
      <div className="pt-4 pr-10 text-muted leading-relaxed max-w-[65ch]">
        {children}
      </div>
    </details>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}
