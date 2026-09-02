import { FileText, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";
import { person } from "@/data/portfolio";

const links = [
  { label: "Home", href: "#home" },
  { label: "IPO", href: "#ipo" },
  { label: "Trades", href: "#trades" },
  { label: "Assets", href: "#assets" },
  { label: "Holdings", href: "#holdings" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-8 right-0 left-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded bg-bull text-primary-foreground">
            <TrendingUp className="size-4" />
          </span>
          <span className="label-mono text-sm tracking-[0.2em] text-foreground">{person.logo}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-mono text-muted-foreground transition-colors hover:text-bull"
            >
              {l.label}
            </a>
          ))}
          <a
            href={person.resume}
            target="_blank"
            rel="noreferrer"
            className="label-mono flex items-center gap-2 rounded border border-bull/50 px-3 py-2 text-bull transition-colors hover:bg-bull/10"
          >
            <FileText className="size-3.5" />
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border bg-panel md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="label-mono border-b border-border px-5 py-4 text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={person.resume}
            target="_blank"
            rel="noreferrer"
            className="label-mono px-5 py-4 text-bull"
          >
            Resume — Full filing (PDF)
          </a>
        </nav>
      )}
    </header>
  );
}
