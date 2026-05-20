import { Container } from "./Container";

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Wallet",
    links: [
      { label: "Open cashu.me", href: "https://wallet.cashu.me" },
      { label: "Install", href: "#install" },
      { label: "Source", href: "https://github.com/cashubtc/cashu.me" },
    ],
  },
  {
    title: "Protocol",
    links: [
      { label: "Specification", href: "https://github.com/cashubtc/nuts" },
      { label: "Mints", href: "#mints" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/cashubtc" },
      { label: "Docs", href: "https://docs.cashu.space" },
      { label: "Built for", href: "#built-for" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      data-theme="dark"
      data-section
      className="bg-background text-foreground border-t border-border"
    >
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                aria-hidden
                className="inline-flex h-7 w-7 items-center justify-center rounded-sm border border-foreground/60 font-mono text-xs"
              >
                C
              </span>
              <span className="font-display font-medium tracking-tight text-lg">
                cashu.me
              </span>
            </div>
            <p className="text-muted max-w-sm leading-relaxed">
              Open-source ecash on the Cashu protocol. Mints custody the
              bitcoin. You hold blinded bearer tokens, redeemable to any
              Lightning address.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-4">
                  {g.title}
                </div>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between text-xs text-muted font-mono">
          <span>cashu.me · open protocol · free software · MIT</span>
          <span>
            <span className="text-accent">[</span>
            v0.4
            <span className="text-accent">]</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
