import { SectionHead, Chip } from "./SectionHead";
import { positions } from "@/data/portfolio";

export function Positions() {
  return (
    <section id="trades" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead
          index="03"
          eyebrow="Trading History"
          title="Institutional Positions"
          subtitle="Executed trades in the volatile market. Entry dates, exit yields, and realized gains."
        />

        <div className="mt-12 space-y-6">
          {positions.map((p, i) => (
            <article key={p.role} className="panel">
              <p className="label-mono border-b border-border px-6 py-3 text-bull">
                Position {String(i + 1).padStart(2, "0")} — {p.entry}
              </p>
              <div className="grid gap-6 p-6 lg:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-display text-xl leading-snug uppercase text-foreground">
                    {p.role}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.org} <span className="text-border">·</span> {p.place}
                  </p>
                </div>
                <div className="border border-border bg-panel-2 px-5 py-3 text-right lg:min-w-40">
                  <p className="font-mono text-xl text-bull">{p.yield}</p>
                  <p className="label-mono mt-1 text-muted-foreground">Impact Yield</p>
                </div>
              </div>
              <ul className="space-y-3 px-6 pb-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-mono text-bull">+</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 border-t border-border px-6 py-4">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
