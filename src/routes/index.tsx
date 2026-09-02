import { createFileRoute } from "@tanstack/react-router";
import { TickerTape } from "@/components/TickerTape";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { TagMarquee } from "@/components/TagMarquee";
import { Prospectus } from "@/components/Prospectus";
import { AcademicCapital } from "@/components/AcademicCapital";
import { Positions } from "@/components/Positions";
import { Holdings } from "@/components/Holdings";
import { AssetClasses } from "@/components/AssetClasses";
import { AltAssets } from "@/components/AltAssets";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Nirajan Banjade — Software Engineer & AI Systems Portfolio";
const description =
  "Trading-desk portfolio of Nirajan Banjade: RAG systems, LLM evaluation pipelines, and distributed infrastructure engineered at Oak Ridge National Laboratory.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <TickerTape />
      <SiteNav />
      <Hero />
      <TagMarquee />
      <Prospectus />
      <AcademicCapital />
      <Positions />
      <TagMarquee />
      <Holdings />
      <AssetClasses />
      <AltAssets />
      <Contact />
      <SiteFooter />
    </main>
  );
}
