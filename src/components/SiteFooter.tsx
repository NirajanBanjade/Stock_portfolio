import { person } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-panel">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="label-mono text-foreground">{person.logo}</p>
          <p className="label-mono text-muted-foreground">
            {person.ticker} · Open to Market · Long-Only Portfolio
          </p>
        </div>
        <p className="mt-6 max-w-3xl font-mono text-[11px] leading-relaxed text-muted-foreground">
  
        </p>
        <p className="label-mono mt-6 text-muted-foreground">
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
