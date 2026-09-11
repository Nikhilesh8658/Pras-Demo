import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Grid2X2, List, Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/commerce";
import { categories, products } from "@/lib/catalog";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ProductsPage() {
  useDocumentTitle("Mineral Product Catalog — Pras Minerals");
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(q);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [list, setList] = useState(false);
  const [filters, setFilters] = useState(false);
  const visible = useMemo(() => {
    const result = products.filter(
      (p) =>
        (!query || `${p.name} ${p.model} ${p.category}`.toLowerCase().includes(query.toLowerCase())) &&
        (category === "All" || p.category === category),
    );
    return [...result].sort((a, b) =>
      sort === "low"
        ? (a.price ?? 99999) - (b.price ?? 99999)
        : sort === "high"
          ? (b.price ?? 0) - (a.price ?? 0)
          : a.name.localeCompare(b.name),
    );
  }, [query, category, sort]);

  const Filters = () => (
    <div>
      <h3 className="font-display font-semibold">Categories</h3>
      <div className="mt-3 space-y-2">
        {["All", ...categories.map((c) => c.name)].map((c) => (
          <label key={c} className="flex cursor-pointer items-center gap-2 text-sm">
            <input type="radio" name="category" checked={category === c} onChange={() => setCategory(c)} /> {c}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="container-page py-10">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <Filters />
          </aside>
          <main>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearchParams(query ? { q: query } : {});
                }}
                className="flex min-w-0 rounded-xl border border-line bg-card"
              >
                <Search className="ml-3 size-4 self-center text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, model, or specification"
                  className="h-11 min-w-0 flex-1 bg-transparent px-3 outline-none"
                />
              </form>
              <Button variant="outline" className="lg:hidden" onClick={() => setFilters(true)}>
                <SlidersHorizontal /> Filters
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">{visible.length}</strong> products
              </p>
              <div className="flex items-center gap-2">
                <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-9 rounded-lg border border-line bg-card px-3 text-sm">
                  <option value="featured">Sort: Featured</option>
                  <option value="low">Price: Low to high</option>
                  <option value="high">Price: High to low</option>
                </select>
                <Button variant={!list ? "secondary" : "ghost"} size="icon" onClick={() => setList(false)} aria-label="Grid view">
                  <Grid2X2 />
                </Button>
                <Button variant={list ? "secondary" : "ghost"} size="icon" onClick={() => setList(true)} aria-label="List view">
                  <List />
                </Button>
              </div>
            </div>
            <div className={`mt-6 grid gap-5 ${list ? "grid-cols-1" : "md:grid-cols-2 xl:grid-cols-3"}`}>
              {visible.map((p) => (
                <ProductCard key={p.id} product={p} list={list} />
              ))}
            </div>
            <div className="mt-10 flex justify-center gap-2">
              {[1, 2, 3].map((n) => (
                <Button key={n} variant={n === 1 ? "ink" : "outline"} size="icon">
                  {n}
                </Button>
              ))}
            </div>
          </main>
        </div>
      </div>
      {filters && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button aria-label="Close filters" className="absolute inset-0 bg-overlay" onClick={() => setFilters(false)} />
          <aside className="absolute right-0 top-0 h-full w-[min(88vw,360px)] overflow-y-auto bg-card p-6">
            <div className="mb-6 flex justify-between">
              <h2 className="font-display text-xl font-semibold">Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setFilters(false)}>
                <X />
              </Button>
            </div>
            <Filters />
          </aside>
        </div>
      )}
    </>
  );
}
