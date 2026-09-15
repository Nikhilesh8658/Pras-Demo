import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/catalog";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { freezeClick } from "@/components/commerce";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [zoom, setZoom] = useState(false);

  useDocumentTitle(product ? `${product.name} — Pras Minerals` : "Product unavailable — Pras Minerals");

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <main>
      <div className="container-page py-8">
        <p className="text-sm text-muted-foreground">
          <Link to="/products" onClick={freezeClick}>Products</Link> / {product.category} / {product.model}
        </p>
        <div className="mt-7 grid gap-10 lg:grid-cols-2">
          <div>
            <button onClick={() => setZoom(!zoom)} className="relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-card">
              <img src={product.image} alt={product.name} width={1200} height={900} className={`aspect-[4/3] w-full object-cover transition duration-500 ${zoom ? "scale-150" : ""}`} />
              <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-card shadow-card">
                <Search className="size-4" />
              </span>
            </button>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((n) => (
                <button key={n} className="overflow-hidden rounded-lg border border-line bg-card">
                  <img src={product.image} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:py-4">
            <p className="eyebrow text-brand">{product.category}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">{product.name}</h1>
            <p className="mt-2 font-semibold text-muted-foreground">Model {product.model}</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{product.description} Designed for reliable integration, documented performance, and long operating life.</p>
            <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {product.specs.map((spec) => (
                <div key={spec} className="bg-card p-4 text-center text-sm font-semibold">
                  {spec}
                </div>
              ))}
            </div>
            <div className="mt-7 font-display text-2xl font-semibold">Pricing on request</div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact" onClick={freezeClick}>Request quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
