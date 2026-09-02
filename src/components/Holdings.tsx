import { ExternalLink } from "lucide-react";
import { SectionHead, Chip } from "./SectionHead";
import { holdings } from "@/data/portfolio";

export function Holdings() {
  return (
    <section id="holdings" className="border-t border-border bg-panel/40">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead
          index="04"
          eyebrow="Portfolio Holdings"
          title="High-Conviction Assets"
          subtitle="Some of the many past held positions. Diversified across edge security, ML infrastructure, streaming data, and full-stack products."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {holdings.map((h) => (
            <article key={h.symbol} className="flex flex-col panel">
              <p className="label-mono border-b border-border px-6 py-3 text-muted-foreground">
                <span className="text-bull">{h.symbol}</span> · Asset Class: Software
              </p>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl uppercase text-foreground">{h.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{h.sub}</p>
                </div>
                <p className="font-mono text-lg text-bull">{h.yield}</p>
              </div>
              <p className="px-6 text-sm leading-relaxed text-muted-foreground">{h.summary}</p>
              <ul className="mt-5 space-y-2.5 px-6">
                {h.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-mono text-bull">+</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 px-6">
                {h.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              <div className="mt-auto border-t border-border px-6 py-4">
                {h.href ? (
                  <a
                    href={h.href}
                    target="_blank"
                    rel="noreferrer"
                    className="label-mono inline-flex items-center gap-2 text-bull hover:underline"
                  >
                    View Prospectus (Code) <ExternalLink className="size-3.5" />
                  </a>
                ) : (
                  <span className="label-mono text-muted-foreground">
                    {h.note ?? "Private Placement — Not Yet Listed"}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
