import { SectionHead } from "./SectionHead";
import { altAssets } from "@/data/portfolio";

export function AltAssets() {
  return (
    <section id="alt" className="border-t border-border bg-panel/40">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead
          index="06"
          eyebrow="Alternative Assets"
          title="Non-Correlated Alpha"
          subtitle="Positions held outside the terminal. Zero correlation to shipping software — positive expected joy."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {altAssets.map((a) => (
            <article key={a.title} className="panel p-6">
              <p className="label-mono text-bull">{a.badge}</p>
              <h3 className="mt-4 font-display text-lg leading-snug uppercase text-foreground">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
