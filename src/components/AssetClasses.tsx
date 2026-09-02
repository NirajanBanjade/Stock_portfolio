import { SectionHead, Chip } from "./SectionHead";
import { assetClasses, interestTags } from "@/data/portfolio";

export function AssetClasses() {
  return (
    <section id="assets" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead
          index="05"
          eyebrow="Asset Classes"
          title="Risk Factor Allocation"
          subtitle="Capital deployed across six instrument classes, weighted toward AI infrastructure and distributed systems."
        />

        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
          {assetClasses.map((a) => (
            <article key={a.tag} className="bg-panel p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-base leading-snug uppercase text-foreground">
                  {a.title}
                </h3>
                <span className="label-mono shrink-0 border border-bull/40 px-2 py-1 text-bull">
                  {a.tag}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {a.items.map((i) => (
                  <Chip key={i}>{i}</Chip>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {interestTags.map((t) => (
            <span
              key={t}
              className="label-mono rounded-full border border-bull/30 px-4 py-2 text-bull-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
