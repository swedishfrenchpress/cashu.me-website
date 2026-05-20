import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { DisplayHeading } from "@/components/DisplayHeading";
import { IndexMark } from "@/components/IndexMark";
import { Pill } from "@/components/Pill";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Specimen } from "@/components/Specimen";
import { BrowserChrome } from "@/components/BrowserChrome";
import { WalletMock } from "@/components/WalletMock";
import { AccordionItem, Accordion } from "@/components/Accordion";

const WALLET_URL = "https://wallet.cashu.me";
const SPEC_URL = "https://github.com/cashubtc/nuts";
const REPO_URL = "https://github.com/cashubtc/cashu.me";
const DOCS_URL = "https://docs.cashu.space";

const pillars = [
  {
    title: "Private",
    body: (
      <>
        Mints see blinded tokens, not who holds them. No accounts, no logins,
        no balance tied to a name. Privacy is structural, not a policy that can
        change.
      </>
    ),
    specimen: (
      <Specimen n={1} label="Blinded token" caption="cashu v4 · base64url">
        <code className="block font-mono text-[12.5px] md:text-sm leading-[1.5] tracking-tight text-foreground/85 break-all">
          cashuBpGFteCJodHRwczovL21pbnQubWluaWJpdHMuY2FzaC9CaXRjb2luLkdpdGh1Yj9pbml0YWdYIIqJYdJ4kV9_w4QXvKEM2dDeOyEZIflwzS_QJ1
        </code>
        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              issued
            </div>
            <div className="mt-1 font-display font-medium tracking-tight text-base">
              by a mint
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              holder
            </div>
            <div className="mt-1 font-display font-medium tracking-tight text-base">
              not known
            </div>
          </div>
        </div>
      </Specimen>
    ),
  },
  {
    title: "Instant",
    body: (
      <>
        Settled over Lightning. Sends finish in seconds, not minutes. Fees are
        usually a sat or two. No chargebacks, no holds, no reconciliation
        windows.
      </>
    ),
    specimen: (
      <Specimen n={2} label="Lightning settle" caption="bolt-11 · payment">
        <div className="font-mono text-[12.5px] md:text-sm leading-[1.5] tracking-tight text-foreground/85 break-all">
          lnbc1u1pj0qz4npp5dq7t9...
          <span className="text-muted">·payment_hash·</span>
          a3f1e9c2
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              settled
            </div>
            <div className="mt-1 font-display font-medium tracking-tight text-base tabular-nums">
              2.4 s
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              fee
            </div>
            <div className="mt-1 font-display font-medium tracking-tight text-base tabular-nums">
              1 sat
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              final
            </div>
            <div className="mt-1 font-display font-medium tracking-tight text-base">
              yes
            </div>
          </div>
        </div>
      </Specimen>
    ),
  },
  {
    title: "Exitable",
    body: (
      <>
        Mints custody the bitcoin. You hold bearer tokens, redeemable to any
        Lightning address. Withdraw the whole balance to a wallet you control.
        No permission, no notice, no exit fee.
      </>
    ),
    specimen: (
      <Specimen n={3} label="Redeem" caption="any · lightning · address">
        <div className="flex items-baseline gap-3 font-display font-medium tracking-[-0.035em] text-2xl md:text-[28px] leading-[1.05] break-all">
          <span aria-hidden className="text-accent text-3xl md:text-4xl">
            →
          </span>
          <span>alex@getalby.com</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              amount
            </div>
            <div className="mt-1 font-display font-medium tracking-tight text-base tabular-nums">
              42,128 sat
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              permission
            </div>
            <div className="mt-1 font-display font-medium tracking-tight text-base">
              none required
            </div>
          </div>
        </div>
      </Specimen>
    ),
  },
];

const audience = [
  {
    title: "The Nostr-native.",
    body: (
      <>
        Zap with bearer tokens, not with a balance in someone else&rsquo;s
        ledger. Nut zaps land in any compatible Cashu wallet, redeemable to
        Lightning whenever you like.
      </>
    ),
  },
  {
    title: "The micro-spender.",
    body: (
      <>
        Tipping a podcast, paying for an article, sat-streaming a creator. The
        unit economics of a custodial Lightning balance break at one sat. Cashu
        does not.
      </>
    ),
  },
  {
    title: "The privacy-minded.",
    body: (
      <>
        A Lightning address ties every receive to a single identity. A Cashu
        balance does not. Receive into a mint, redeem from anywhere, hold the
        tokens between.
      </>
    ),
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is this custodial?",
    a: (
      <>
        Yes. The mint holds the underlying bitcoin. What you hold is bearer
        tokens redeemable to any Lightning address at any time. The mint
        cannot freeze your withdrawal address, but it can go offline. Treat
        every mint the way you would treat a custodian.
      </>
    ),
  },
  {
    q: "What if a mint disappears?",
    a: (
      <>
        You lose the tokens minted there. The protocol does not solve this.
        Mitigate by choosing mints with known operators, holding small amounts
        per mint, and redeeming regularly to a Lightning wallet you control.
      </>
    ),
  },
  {
    q: "How is this different from Wallet of Satoshi?",
    a: (
      <>
        Wallet of Satoshi holds a balance in a database tied to your account
        and can rate-limit, suspend, or geofence you. A Cashu mint holds
        bitcoin but issues you blinded bearer tokens. You can swap to another
        mint, send tokens peer-to-peer, or withdraw to any Lightning address,
        without permission.
      </>
    ),
  },
  {
    q: "Can I back it up?",
    a: (
      <>
        Yes. cashu.me exports your tokens and mint settings as an encrypted
        backup. Restore by importing on any device. Tokens are bearer
        instruments: possession of the backup means possession of the funds.
        Store accordingly.
      </>
    ),
  },
  {
    q: "Where can I read the protocol?",
    a: (
      <>
        The spec lives at{" "}
        <a className="text-link" href={SPEC_URL}>
          github.com/cashubtc/nuts
        </a>
        . It is a set of NUTs (Notation, Usage, Terminology) that any mint or
        wallet implements. cashu.me is one wallet among many possible.
      </>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Section
          variant="dark"
          flush
          id="hero"
          className="relative min-h-screen flex flex-col"
        >
          <Container className="flex-1 flex flex-col justify-between pt-28 md:pt-32 pb-14 md:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-4 md:gap-8">
              <Eyebrow n={1}>Cashu protocol</Eyebrow>
              <div className="hidden md:block h-px bg-border mt-3" />
            </div>

            <div className="mt-14 md:mt-24">
              <DisplayHeading level={1} className="max-w-[18ch]">
                Bearer cash
                <br />
                for the web.
              </DisplayHeading>

              <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8">
                <p className="text-muted text-lead leading-[1.4] max-w-[52ch]">
                  Open-source ecash on the Cashu protocol. Mints custody the
                  bitcoin. You hold blinded bearer tokens, redeemable to any
                  Lightning address, anytime, without permission.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Pill href="#install" variant="cta" size="md">
                    Open wallet →
                  </Pill>
                  <Pill href={SPEC_URL} variant="outline" size="md">
                    Read the spec
                  </Pill>
                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-6">
              {[
                { k: "protocol", v: "Cashu · v1" },
                { k: "implementations", v: "8+ wallets" },
                { k: "underlying", v: "Bitcoin · LN" },
                { k: "license", v: "MIT · open" },
              ].map((r) => (
                <div key={r.k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {r.k}
                  </div>
                  <div className="mt-1 font-display font-medium tracking-tight text-base md:text-lg">
                    {r.v}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="light" id="pillars" pad="md">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-start">
              <div>
                <Eyebrow n={2}>What&rsquo;s different</Eyebrow>
                <DisplayHeading level={2} className="mt-6">
                  Not a balance.
                  <br />
                  A bearer instrument.
                </DisplayHeading>
                <p className="mt-6 max-w-[48ch] text-muted text-lead leading-[1.4]">
                  Three properties that separate ecash from a row in someone
                  else&rsquo;s database.
                </p>

                <div className="mt-12 md:mt-16 space-y-10 max-w-md">
                  {pillars.map((p, i) => (
                    <div
                      key={p.title}
                      className="border-t border-border pt-5"
                    >
                      <IndexMark n={i + 1} variant="block" />
                      <h3 className="mt-3 text-2xl font-display font-medium tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-muted leading-relaxed max-w-[52ch]">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block min-h-[760px]">
                <div className="absolute right-0 top-0 w-[78%]">
                  {pillars[0].specimen}
                </div>
                <div className="absolute left-0 top-[35%] w-[88%]">
                  {pillars[1].specimen}
                </div>
                <div className="absolute right-[6%] bottom-0 w-[82%]">
                  {pillars[2].specimen}
                </div>
              </div>

              <div className="lg:hidden grid grid-cols-1 gap-6">
                {pillars[0].specimen}
                {pillars[1].specimen}
                {pillars[2].specimen}
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="dark" id="wallet" pad="lg">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-12 lg:gap-20 items-start">
              <div>
                <Eyebrow n={3}>cashu.me wallet</Eyebrow>
                <DisplayHeading level={2} className="mt-6">
                  Open it.
                  <br />
                  Hold it.
                  <br />
                  Send it.
                </DisplayHeading>
                <p className="mt-6 text-muted text-lead leading-[1.4] max-w-[44ch]">
                  cashu.me runs in any modern browser. Install it to your home
                  screen and it runs offline as a standalone app. Tokens stay
                  on the device, encrypted with your password.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Pill href={WALLET_URL} variant="cta" size="md">
                    Open wallet →
                  </Pill>
                  <Pill href={DOCS_URL} variant="outline" size="md">
                    Read the docs
                  </Pill>
                </div>

                <ul className="mt-10 space-y-3 max-w-[40ch]">
                  {[
                    "Installable PWA, no app store.",
                    "Local encrypted storage, exportable backup.",
                    "Multi-mint, swap between operators in one tap.",
                    "Nostr-aware, supports nut zaps.",
                  ].map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mt-1.5 shrink-0 w-7">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <span className="text-foreground/85">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <BrowserChrome url="wallet.cashu.me" tone="dark">
                  <WalletMock />
                </BrowserChrome>
                <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  <span>illustrative · mock data</span>
                  <a
                    href={REPO_URL}
                    className="text-link text-foreground/80"
                  >
                    source on github
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="light" id="mints" pad="md">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
              <div>
                <Eyebrow n={4}>Mints</Eyebrow>
                <DisplayHeading level={2} className="mt-6">
                  Who holds
                  <br />
                  the bitcoin.
                </DisplayHeading>
                <p className="mt-6 max-w-[48ch] text-muted text-lead leading-[1.4]">
                  A mint is the custodian. It accepts a Lightning deposit and
                  issues you blinded tokens. It accepts those tokens back and
                  pays out over Lightning.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    h: "It does not know who you are.",
                    b: "Cashu uses blinded signatures. The mint signs tokens it cannot link to a holder. The tokens circulate independent of any account.",
                  },
                  {
                    h: "It does see the bitcoin.",
                    b: "The bitcoin sits in the mint's wallet between mint and redemption. If a mint disappears, the tokens minted there are gone. This is the trade.",
                  },
                  {
                    h: "You are not locked in.",
                    b: "Swap between mints with a single Lightning hop. Most wallets, including cashu.me, support holding tokens from multiple mints at once.",
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="border-t border-border pt-5 max-w-[62ch]"
                  >
                    <IndexMark n={i + 1} variant="block" />
                    <h3 className="mt-3 text-2xl font-display font-medium tracking-tight">
                      {row.h}
                    </h3>
                    <p className="mt-3 text-muted leading-relaxed">{row.b}</p>
                  </div>
                ))}

                <div className="border-t border-border pt-6 text-sm text-muted max-w-[62ch]">
                  Public mint directories list operators, jurisdictions, and
                  uptime. Start with one you have reason to trust. Move when
                  you stop trusting it.
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="dark" id="built-for" pad="md">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-end mb-14 md:mb-20">
              <Eyebrow n={5}>Built for</Eyebrow>
              <DisplayHeading level={2}>
                Cash for the
                <br />
                small payment.
              </DisplayHeading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {audience.map((a, i) => (
                <div
                  key={a.title}
                  className="border-t border-border pt-5 max-w-[42ch]"
                >
                  <IndexMark n={i + 1} variant="block" />
                  <h3 className="mt-3 text-2xl md:text-3xl font-display font-medium tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section variant="light" id="faq" pad="md">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
              <div>
                <Eyebrow n={6}>Questions</Eyebrow>
                <DisplayHeading level={2} className="mt-6">
                  Things
                  <br />
                  to know.
                </DisplayHeading>
                <p className="mt-6 text-muted text-lead leading-[1.4] max-w-[44ch]">
                  Bearer instruments are high-stakes. Read these before you
                  put real money in.
                </p>
              </div>

              <div>
                <Accordion>
                  {faqs.map((f, i) => (
                    <AccordionItem
                      key={i}
                      title={f.q}
                      defaultOpen={i === 0}
                    >
                      {f.a}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="dark" id="install" pad="xl">
          <Container>
            <div className="max-w-[20ch]">
              <Eyebrow n={7}>Install</Eyebrow>
            </div>
            <DisplayHeading level={1} className="mt-8 max-w-[14ch]">
              Take it
              <br />
              with you.
            </DisplayHeading>

            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
              <p className="text-muted text-lead leading-[1.4] max-w-[52ch]">
                Browser PWA, no app store. Installs in one tap on iOS, Android,
                and desktop. Source on GitHub, MIT-licensed, audited as part of
                the broader Cashu protocol work.
              </p>
              <div className="flex flex-wrap gap-3">
                <Pill href={WALLET_URL} variant="cta" size="md">
                  Open cashu.me →
                </Pill>
                <Pill href={REPO_URL} variant="outline" size="md">
                  View source
                </Pill>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
              {[
                { k: "install", v: "PWA, one tap" },
                { k: "platforms", v: "iOS · Android · web" },
                { k: "code", v: "MIT, on GitHub" },
                { k: "data", v: "local, encrypted" },
              ].map((r) => (
                <div key={r.k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {r.k}
                  </div>
                  <div className="mt-1 font-display font-medium tracking-tight text-base md:text-lg">
                    {r.v}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
