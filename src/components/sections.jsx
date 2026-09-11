import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Amphora, ArrowRight, Award, Box, ChevronLeft, ChevronRight, Cpu, Download, Factory, FileText, Fuel, GlassWater, Globe2, Headphones, Lightbulb, ShieldCheck, SlidersHorizontal, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import manufacturingImage from "@/assets/minerals/soapstone.jpg";
import aboutTeaserImage from "@/assets/mining/quarry-blasting.jpg";
import { categories, industries, products } from "@/lib/catalog";

const categoryImages = Object.fromEntries(products.map((p) => [p.category, p.image]));

const industryIcons = {
  "Glass Industry": GlassWater,
  "Ceramics & Potteries": Amphora,
  "Electronics Industry": Cpu,
  "Petroleum Industry": Fuel,
  "Ferro Silicon Industry": Factory,
};

const gallerySlides = products
  .filter((p) => p.featured)
  .map((p) => ({ image: p.image, label: p.name }))
  .concat(categories.map((c) => ({ image: categoryImages[c.name], label: c.name })))
  .filter((slide, i, arr) => arr.findIndex((s) => s.image === slide.image) === i);

export function PageIntro({ eyebrow, title, description }) { return <section className="border-b border-line bg-card"><div className="container-page py-5 sm:py-5"><p className="eyebrow text-brand">{eyebrow}</p><h1 className="mt-3 max-w-4xl font-display text-2xl font-semibold leading-tight sm:text-3xl">{title}</h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p></div></section>; }

export function AboutTeaser() { return <section className="border-y border-line bg-card"><div className="container-page section-pad"><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><img src={aboutTeaserImage} alt="Controlled rock blasting at a quarry site" width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card lg:order-2" /><div><p className="eyebrow text-brand">About Us</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-3xl">A decade of trusted mineral exports.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Pras Mineral Exports Pvt. Ltd. is a Hyderabad-based processor, supplier, and exporter of Potash Feldspar, Soda Feldspar, Quartz, and Soapstone, established in 2010. Our proximity to mines and the seaports of Krishnapatnam and Chennai gives us a strategic edge — easy access to raw material and lower operational costs we pass on to clients worldwide.</p><Button asChild className="mt-6"><Link to="/about">Learn more about us <ArrowRight /></Link></Button></div></div></div></section>; }

export function CategoryGrid() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const scrollByPage = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const atEnd = dir > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (atEnd) { el.scrollTo({ left: 0, behavior: "smooth" }); return; }
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scrollByPage(1), 3200);
    return () => clearInterval(id);
  }, [paused]);
  return (
    <section className="container-page section-pad">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-brand">Categories</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Explore our products</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <button onClick={() => scrollByPage(-1)} aria-label="Scroll categories left" className="grid size-10 place-items-center rounded-full border border-line text-foreground transition hover:border-brand/40 hover:bg-brand-soft"><ChevronLeft className="size-4" /></button>
            <button onClick={() => scrollByPage(1)} aria-label="Scroll categories right" className="grid size-10 place-items-center rounded-full border border-line text-foreground transition hover:border-brand/40 hover:bg-brand-soft"><ChevronRight className="size-4" /></button>
          </div>
          <Button asChild variant="ghost"><Link to="/products">View all <ArrowRight /></Link></Button>
        </div>
      </div>
      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {categories.map((category, index) => (
          <div key={category.name} className="w-64 shrink-0 snap-start sm:w-72 [perspective:1400px]">
            <Link to={`/products?q=${encodeURIComponent(category.name)}`} className="group block h-80 w-full">
              <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-card [backface-visibility:hidden]">
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-ground">
                    <img src={categoryImages[category.name]} alt="" width={360} height={248} loading="lazy" className="h-full w-full object-cover" />
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-card/95 px-2 py-0.5 text-[10px] font-bold text-brand">0{index + 1}</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-4">
                    <h3 className="font-display text-base font-semibold">{category.name}</h3>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand">View products <ArrowRight className="size-3.5" /></span>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center rounded-2xl bg-ink p-6 text-ink-foreground [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="eyebrow text-ink-foreground/50">{category.count || "Custom"} solutions</p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{category.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">View products <ArrowRight className="size-3.5" /></span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export function IndustriesSection() { return <section className="border-y border-line bg-ground"><div className="container-page section-pad"><p className="eyebrow text-brand">Applications</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Minerals that travel across industries.</h2><p className="mt-4 max-w-xl text-muted-foreground">From bulk export orders to specialized grades, our minerals are supplied for demanding industrial applications worldwide.</p><div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{industries.map((industry) => { const Icon = industryIcons[industry] ?? Box; return <div key={industry} className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-card p-5 text-center shadow-card transition hover:-translate-y-1 hover:border-brand/35 hover:shadow-elevated"><span className="grid size-12 place-items-center rounded-full bg-brand-soft text-brand transition group-hover:scale-110 group-hover:bg-brand group-hover:text-brand-foreground"><Icon className="size-5" /></span><span className="text-sm font-semibold">{industry}</span></div>; })}</div></div></section>; }

export function WhyUs() {
  const items = [
    [ShieldCheck, "Quality assurance", "Every batch is inspected and graded before it leaves our yard."],
    [Lightbulb, "Advanced technology", "Modern processing keeps particle size and purity consistent."],
    [Wrench, "Custom engineering", "Grades, mesh sizes, and packaging tailored to your line."],
    [Box, "Reliable supply", "Owned mines and steady stock keep orders on schedule."],
    [Globe2, "Global support", "Export documentation and logistics handled end to end."],
    [Award, "Certified quality", "GST-verified and compliant with industry norms."],
  ];
  return (
    <section className="bg-brand-soft">
      <div className="container-page section-pad">
        <div className="text-center">
          <p className="eyebrow text-brand">Why Pras Minerals</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Confidence at every stage</h2>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, title, description]) => (
            <div key={title} className="group bg-card p-7 transition hover:z-10 hover:-translate-y-1 hover:shadow-elevated">
              <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand transition duration-300 group-hover:rotate-6 group-hover:bg-brand group-hover:text-brand-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryTeaser() {
  const track = [...gallerySlides, ...gallerySlides];
  return (
    <section className="section-pad overflow-hidden">
      <div className="container-page text-center">
        <p className="eyebrow text-brand">Gallery</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">A closer look at our minerals</h2>
      </div>
      <div className="gallery-marquee relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="gallery-marquee-track flex w-max gap-5">
          {track.map((slide, i) => (
            <div key={`${slide.label}-${i}`} className="group relative aspect-[4/3] w-56 shrink-0 overflow-hidden rounded-2xl shadow-card sm:w-72">
              <img src={slide.image} alt={slide.label} width={600} height={450} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-ink-foreground">{slide.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container-page mt-9 flex justify-center">
        <Button asChild size="lg"><Link to="/gallery">Explore gallery <ArrowRight /></Link></Button>
      </div>
    </section>
  );
}

export function AboutBand() { return <section className="container-page section-pad"><div className="grid overflow-hidden rounded-3xl bg-ink text-ink-foreground lg:grid-cols-2"><img src={manufacturingImage} alt="Soapstone lump ready for export" width={1600} height={1100} loading="lazy" className="h-full min-h-96 w-full object-cover" /><div className="p-8 sm:p-12"><p className="eyebrow text-ink-foreground/50">Built for the long term</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Mining discipline. Global reach.</h2><p className="mt-4 leading-relaxed text-ink-foreground/65">Pras Minerals supports customers worldwide with reliable extraction, quality grading, and practical export support from Hyderabad, India.</p><div className="mt-9 grid grid-cols-2 gap-7">{[["15+","Years experience"],["GST","Verified supplier"],["7","Mineral categories"],["Global","Export inquiries"]].map(([value,label]) => <div key={label}><strong className="font-display text-2xl">{value}</strong><p className="mt-1 text-xs text-ink-foreground/55">{label}</p></div>)}</div><Button asChild variant="accent" className="mt-9"><Link to="/about">Learn more <ArrowRight /></Link></Button></div></div></section>; }

export function ResourcesGrid() { const data = [[FileText,"Datasheets"],[Download,"Product catalog"],[SlidersHorizontal,"Technical documentation"],[Lightbulb,"Application notes"],[Headphones,"FAQ & support"],[Download,"Downloads"]]; return <section className="border-y border-line bg-card"><div className="container-page section-pad"><p className="eyebrow text-brand">Technical resources</p><h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Information for better decisions</h2><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{data.map(([Icon,title]) => <Link key={title} to="/resources" className="group flex items-center gap-4 rounded-xl border border-line p-5 transition hover:border-brand/35 hover:bg-brand-soft"><span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon className="size-5" /></span><div><strong className="font-display">{title}</strong><p className="mt-1 text-xs text-muted-foreground">View and download <ArrowRight className="ml-1 inline size-3 transition group-hover:translate-x-1" /></p></div></Link>)}</div></div></section>; }

export function QuoteForm() { return <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 rounded-2xl border border-line bg-card p-6 shadow-card sm:grid-cols-2"><label className="text-sm font-medium">Name<input required className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></label><label className="text-sm font-medium">Company<input required className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></label><label className="text-sm font-medium">Email<input type="email" required className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></label><label className="text-sm font-medium">Phone<input type="tel" className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></label><label className="text-sm font-medium">Product<input className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></label><label className="text-sm font-medium">Quantity<input type="number" min="1" className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring" /></label><label className="text-sm font-medium sm:col-span-2">Requirements<textarea rows={5} className="mt-2 w-full rounded-lg border border-input bg-background p-3 outline-none focus:ring-2 focus:ring-ring" /></label><Button size="lg" className="sm:col-span-2">Submit request <ArrowRight /></Button></form>; }
