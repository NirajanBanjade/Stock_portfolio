import { marqueeTags } from "@/data/portfolio";

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeTags.map((t) => (
        <span key={t} className="label-mono flex items-center gap-6 px-6 text-muted-foreground">
          {t}
          <span className="text-bull">+</span>
        </span>
      ))}
    </div>
  );
}

export function TagMarquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-panel py-4">
      <div className="marquee-track flex w-max" style={{ animationDuration: "45s" }}>
        <Row />
        <Row />
      </div>
    </div>
  );
}
