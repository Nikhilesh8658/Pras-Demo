import { AboutBand, PageIntro, QuoteForm, WhyUs } from "@/components/sections";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function SolutionsPage() {
  useDocumentTitle("Industrial Engineering Solutions — Pras Minerals");
  return (
    <>
      <PageIntro eyebrow="Solutions" title="From specification to reliable supply." description="Custom engineering, qualified production, and lifecycle support built around your technical and commercial requirements." />
      <WhyUs />
      <AboutBand />
      <div className="container-page grid gap-10 pb-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-brand">Custom engineering</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">Share a drawing. Get a practical path forward.</h2>
        </div>
        <QuoteForm />
      </div>
    </>
  );
}
