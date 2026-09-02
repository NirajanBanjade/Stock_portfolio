import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { person, prospectus } from "@/data/portfolio";

export function Prospectus() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24">
      <SectionHead
        index="01"
        eyebrow="Market Order"
        title="The Prospectus"
        subtitle="Early-stage asset. High conviction. Still compounding."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <div className="panel h-max">
          <img
            src={person.portrait}
            alt={`${person.name} portrait`}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover grayscale-[15%]"
          />
          <div className="flex items-end justify-between border-t border-border p-4">
            <div>
              <p className="label-mono text-muted-foreground">Listed Asset</p>
              <p className="mt-1 font-mono text-sm text-foreground">{person.name}</p>
            </div>
            <p className="label-mono text-bull">
              {person.ticker} +391.00
            </p>
          </div>
        </div>

        <div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {prospectus.map((p) => (
              <article key={p.n} className="bg-panel p-6">
                <p className="label-mono text-bull">{p.n}</p>
                <h3 className="mt-4 font-display text-lg uppercase text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="panel mt-8">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <p className="label-mono text-foreground">Direct Desk Lines</p>
              <span className="label-mono flex items-center gap-2 text-bull">
                <span className="size-1.5 rounded-full bg-bull" /> Live
              </span>
            </div>
            <dl className="grid gap-px bg-border sm:grid-cols-3">
              <div className="bg-panel p-5">
                <dt className="label-mono flex items-center gap-2 text-muted-foreground">
                  <Mail className="size-3.5" /> Email
                </dt>
                <dd className="mt-2 font-mono text-xs break-all text-foreground">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </dd>
              </div>
              <div className="bg-panel p-5">
                <dt className="label-mono flex items-center gap-2 text-muted-foreground">
                  <Phone className="size-3.5" /> Phone
                </dt>
                <dd className="mt-2 font-mono text-xs text-foreground">
                  <a href={`tel:${person.phone}`}>{person.phone}</a>
                </dd>
              </div>
              <div className="bg-panel p-5">
                <dt className="label-mono flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-3.5" /> Base
                </dt>
                <dd className="mt-2 font-mono text-xs text-foreground">{person.base}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
