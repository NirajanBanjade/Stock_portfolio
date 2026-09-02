import { SectionHead, Chip } from "./SectionHead";
import { education } from "@/data/portfolio";

export function AcademicCapital() {
  return (
    <section id="ipo" className="border-t border-border bg-panel/40">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead
          index="02"
          eyebrow="Initial Public Offering"
          title="Academic Capital"
          subtitle="Where the asset was first issued and priced."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="panel p-7">
            <p className="label-mono text-bull">{education.window}</p>
            <h3 className="mt-4 font-display text-2xl uppercase text-foreground">
              {education.school}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{education.degree}</p>

            <div className="mt-6 inline-flex items-baseline gap-3 border border-border bg-panel-2 px-5 py-4">
              <span className="font-mono text-3xl text-bull">{education.gpa}</span>
              <span className="label-mono text-muted-foreground">GPA / 4.0</span>
            </div>

            <p className="label-mono mt-8 text-foreground">Core Fundamentals</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>

            {/* <p className="label-mono mt-8 text-foreground">Dividend History</p>
            <ul className="mt-3 space-y-2">
              {education.dividends.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="font-mono text-bull">+</span>
                  {d}
                </li>
              ))}
            </ul> */}
          </div>

          <div className="panel">
            <p className="label-mono border-b border-border px-5 py-4 text-foreground">
              Credentials Ledger
            </p>
            <ol className="divide-y divide-border">
              {education.credentials.map((c, i) => (
                <li key={c} className="flex gap-4 px-5 py-4 text-sm text-muted-foreground">
                  <span className="label-mono text-bull-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
