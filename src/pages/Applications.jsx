import { IndustriesSection, PageIntro, QuoteForm } from "@/components/sections";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ApplicationsPage() {
  useDocumentTitle("Industrial Applications — Pras Minerals");
  return (
    <>
      <PageIntro eyebrow="Applications" title="Technology that performs in the real world." description="Proven components and engineering support for regulated, high-cycle, and mission-critical environments." />
      <IndustriesSection />
      <div className="container-page grid gap-10 pb-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-brand">Start a project</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">Tell us what the application demands.</h2>
        </div>
        <QuoteForm />
      </div>
    </>
  );
}
