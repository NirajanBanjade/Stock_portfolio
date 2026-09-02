import { tickers } from "@/data/portfolio";

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {tickers.map((t) => (
        <div
          key={t.symbol}
          className="flex items-center gap-2 border-r border-border px-6 py-2 whitespace-nowrap"
        >
          <span className="label-mono text-foreground">{t.symbol}</span>
          <span className="label-mono text-muted-foreground">{t.name}</span>
          <span className="label-mono text-foreground">{t.price}</span>
          <span className="label-mono text-bull">↗ +0.00%</span>
        </div>
      ))}
    </div>
  );
}

export function TickerTape() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-8 items-center overflow-hidden border-b border-border bg-panel">
      <div className="z-10 flex h-8 shrink-0 items-center gap-2 border-r border-border bg-accent px-3">
        <span className="size-1.5 rounded-full bg-bull" />
        <span className="label-mono text-bull">Market Open</span>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div className="marquee-track flex w-max" style={{ animationDuration: "60s" }}>
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
}
