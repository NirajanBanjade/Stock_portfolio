export function SectionHead({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border-b border-border pb-8">
      <p className="label-mono text-bull">
        {index} / {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight uppercase text-foreground">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-mono rounded border border-border bg-panel-2 px-2.5 py-1.5 text-muted-foreground">
      {children}
    </span>
  );
}
