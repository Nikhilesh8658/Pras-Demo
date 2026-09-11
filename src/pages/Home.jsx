import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import openPitMine from "@/assets/mining/open-pit-mine.jpg";
import quarryExcavation from "@/assets/mining/quarry-excavation.jpg";
import quarryLoading from "@/assets/mining/quarry-loading.jpg";
import mineTerrain from "@/assets/mining/mine-terrain.jpg";
import { AboutTeaser, CategoryGrid, GalleryTeaser, IndustriesSection, QuoteForm, WhyUs } from "@/components/sections";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const heroSlides = [
  { image: openPitMine, label: "Open-pit mineral extraction" },
  { image: quarryExcavation, label: "Quarry excavation" },
  { image: quarryLoading, label: "Loading for dispatch" },
  { image: mineTerrain, label: "Mine site operations" },
];

function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 4500);
    return () => clearInterval(id);
  }, []);
  const prev = () => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setActive((i) => (i + 1) % heroSlides.length);
  return (
    <section className="relative h-[460px] w-full overflow-hidden sm:h-[520px]">
      {heroSlides.map((slide, i) => (
        <div key={slide.label} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}>
          <img src={slide.image} alt={slide.label} width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" />
        </div>
      ))}
      <div className="container-page relative z-10 flex h-full flex-col justify-center">
        <span className="w-fit rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-ink-foreground ring-1 ring-white/25 backdrop-blur">Trusted mineral exporter · Hyderabad, India</span>
        <h1 className="mt-5 font-display text-4xl font-semibold text-ink-foreground sm:text-4xl">Quality minerals, delivered worldwide.</h1>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="/products">Explore products <ArrowRight /></a></Button>
          <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-ink-foreground hover:bg-white/10"><a href="/contact">Request a quote</a></Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-8 border-t border-white/15 pt-6">
          <div><strong className="font-display text-xl text-ink-foreground">15+ yrs</strong><p className="mt-1 text-xs text-ink-foreground/70">Industry experience</p></div>
          <div><strong className="font-display text-xl text-ink-foreground">GST</strong><p className="mt-1 text-xs text-ink-foreground/70">Verified supplier</p></div>
          <div><strong className="font-display text-xl text-ink-foreground">Global</strong><p className="mt-1 text-xs text-ink-foreground/70">Export inquiries welcome</p></div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3 sm:bottom-10 sm:right-10">
        <span className="font-display text-sm text-ink-foreground"><strong>{String(active + 1).padStart(2, "0")}</strong> / {String(heroSlides.length).padStart(2, "0")}</span>
        <button onClick={prev} aria-label="Previous slide" className="grid size-9 place-items-center rounded-full border border-white/30 text-ink-foreground transition hover:bg-white/10"><ChevronLeft className="size-4" /></button>
        <button onClick={next} aria-label="Next slide" className="grid size-9 place-items-center rounded-full border border-white/30 text-ink-foreground transition hover:bg-white/10"><ChevronRight className="size-4" /></button>
      </div>
    </section>
  );
}

export default function HomePage() {
  useDocumentTitle("Pras Minerals — Quartz & Feldspar Exporters");
  return (
    <main><HeroSlider /><AboutTeaser /><CategoryGrid /><IndustriesSection /><WhyUs /><GalleryTeaser /><section className="bg-brand-soft"><div className="container-page section-pad"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow text-brand">Request a quote</p><h2 className="mt-3 font-display text-4xl font-semibold">Need a custom solution?</h2><p className="mt-4 text-muted-foreground">Contact our team for custom requirements, bulk orders, technical specifications, or project pricing.</p></div><QuoteForm /></div></div></section></main>
  );
}
