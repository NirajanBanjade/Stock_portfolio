import { useState } from "react";
import { Mail, Phone, Linkedin, Github, FileText } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { person } from "@/data/portfolio";

const lines = [
  {
    icon: Mail,
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
  },
  { icon: Phone, label: "Phone", value: person.phone, href: `tel:${person.phone}` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on the exchange",
    href: person.linkedin,
  },
  { icon: Github, label: "GitHub", value: "Audit the source", href: person.github },
  { icon: FileText, label: "Resume", value: "Full filing (PDF)", href: person.resume },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Order Ticket — ${name || "New enquiry"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "mt-2 w-full border border-border bg-panel-2 px-4 py-3 font-mono text-sm text-foreground outline-none focus:border-bull/60";

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <SectionHead
          index="07"
          eyebrow="Investor Relations"
          title="Open a Position"
          subtitle="Direct desk communication. Fill the order ticket and it routes straight to my inbox."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="panel divide-y divide-border">
            {lines.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 px-5 py-5 transition-colors hover:bg-panel-2"
              >
                <l.icon className="size-4 text-bull" />
                <span className="label-mono w-20 text-muted-foreground">{l.label}</span>
                <span className="font-mono text-xs break-all text-foreground">{l.value}</span>
              </a>
            ))}
          </div>

          <form onSubmit={submit} className="panel p-6">
            <p className="label-mono text-bull">Order Ticket — Limit: None</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="label-mono text-muted-foreground">Name</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={field}
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block">
                <span className="label-mono text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={field}
                  placeholder="you@fund.com"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="label-mono text-muted-foreground">Message</span>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={field}
                placeholder="Position size, thesis, timeline…"
              />
            </label>
            <button
              type="submit"
              className="label-mono mt-6 w-full rounded bg-bull px-6 py-4 text-primary-foreground transition-opacity hover:opacity-90"
            >
              Execute Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
