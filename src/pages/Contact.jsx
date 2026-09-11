import { PageIntro, QuoteForm } from "@/components/sections";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ContactPage() {
  useDocumentTitle("Request a Quote — Pras Minerals");
  return (
    <>
      <PageIntro eyebrow="Contact & quotes" title="Need a custom solution?" description="Send your product, volume, and performance requirements. Our team will respond with the next practical step." />
      <section className="bg-brand-soft">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold">Talk to an industrial specialist</h2>
            <div className="mt-6 space-y-5 text-sm text-muted-foreground">
              <p><strong className="block text-foreground">Email</strong>prasmineralsexports@example.com</p>
              <p><strong className="block text-foreground">Office</strong>Kondapur, Hyderabad, Telangana, India</p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
