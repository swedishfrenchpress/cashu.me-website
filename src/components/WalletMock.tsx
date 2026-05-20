import { IndexMark } from "./IndexMark";

export function WalletMock() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-border">
      <div className="p-8 md:p-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Holdings
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            mint.minibits.cash
          </span>
        </div>
        <div className="mt-6">
          <div className="font-display font-medium tracking-[-0.035em] text-5xl md:text-6xl leading-[0.94]">
            42,128
            <span className="text-muted text-2xl md:text-3xl ml-2 align-[0.2em] font-normal">
              sat
            </span>
          </div>
          <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            ≈ $ 28.41
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-2 border-t border-border pt-6">
          <button
            type="button"
            className="border border-border py-3 text-sm tracking-tight hover:border-foreground transition-colors"
          >
            Receive
          </button>
          <button
            type="button"
            className="border border-border py-3 text-sm tracking-tight hover:border-foreground transition-colors"
          >
            Send
          </button>
          <button
            type="button"
            className="border border-border py-3 text-sm tracking-tight hover:border-foreground transition-colors"
          >
            Redeem
          </button>
        </div>
      </div>

      <div className="p-8 md:p-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Activity
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            local
          </span>
        </div>
        <ul className="mt-6 divide-y divide-border">
          {[
            { v: "+ 1,200", t: "received", w: "from invoice", at: "2m" },
            { v: "− 4,400", t: "sent", w: "to alex@getalby.com", at: "1h" },
            { v: "+ 21,000", t: "minted", w: "from minibits", at: "yest" },
          ].map((row, i) => (
            <li
              key={i}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <div className="min-w-0">
                <div className="font-display font-medium tracking-tight text-base">
                  <span className="tabular-nums">{row.v}</span>
                  <span className="text-muted font-normal ml-2 text-sm">
                    sat
                  </span>
                </div>
                <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted truncate">
                  {row.t} · {row.w}
                </div>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted shrink-0">
                {row.at}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-3">
          <IndexMark n={1} variant="inline" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Local, encrypted, exportable.
          </span>
        </div>
      </div>
    </div>
  );
}
