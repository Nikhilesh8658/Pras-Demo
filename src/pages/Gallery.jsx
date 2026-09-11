import { PageIntro } from "@/components/sections";
import { products } from "@/lib/catalog";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function GalleryPage() {
  useDocumentTitle("Gallery — Pras Minerals");
  return (
    <>
      <PageIntro eyebrow="Gallery" title="A closer look at our minerals." description="" />
      <section className="container-page section-pad">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative aspect-square overflow-hidden rounded-2xl border border-line bg-ground shadow-card">
              <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-ink-foreground">{product.name}</p>
                <p className="text-xs text-ink-foreground/70">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
