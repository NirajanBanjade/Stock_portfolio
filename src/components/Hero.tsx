import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowDownRight, Briefcase } from "lucide-react";
import { heroStats, person } from "@/data/portfolio";

const CandlestickScene = lazy(() => import("./three/CandlestickScene"));

function useCanRender3D() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let webgl = false;
    try {
      const canvas = document.createElement("canvas");
      webgl = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      webgl = false;
    }
    setOk(webgl && !reduced);
  }, []);
  return ok;
}

export function Hero() {
  const canRender3D = useCanRender3D();

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0 grid-backdrop opacity-40" />
      <div className="absolute inset-0">
        {canRender3D ? (
          <Suspense fallback={null}>
            <CandlestickScene />
          </Suspense>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent lg:via-background/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />


      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col justify-center px-5 py-16">
        <p className="label-mono text-bull">{person.kicker}</p>

        <h1 className="mt-6 font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.86] tracking-tight uppercase">
          <span className="block text-outline">{person.headline[0]}</span>
          <span className="block text-foreground">{person.headline[1]}</span>
          <span className="block text-bull">{person.headline[2]}</span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
          {person.blurb}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#holdings"
            className="label-mono flex items-center gap-2 rounded bg-bull px-6 py-4 text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Holdings <ArrowDownRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="label-mono flex items-center gap-2 rounded border border-border bg-panel/70 px-6 py-4 text-foreground backdrop-blur transition-colors hover:border-bull/60 hover:text-bull"
          >
            <Briefcase className="size-4" /> Open a Position
          </a>
        </div>

        <dl className="mt-14 grid max-w-3xl grid-cols-2 border border-border bg-panel/70 backdrop-blur md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="border-r border-b border-border p-5 last:border-r-0">
              <dt className="font-mono text-2xl text-bull">{s.value}</dt>
              <dd className="label-mono mt-2 text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="label-mono absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground">
        Scroll to trade
      </p>
    </section>
  );
}
