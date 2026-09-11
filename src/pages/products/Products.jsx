import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/commerce";
import { categories, categoryAccent, products } from "@/lib/catalog";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ProductsPage() {
  useDocumentTitle("Mineral Product Catalog — Pras Minerals");
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const initialSelected = useMemo(() => (q && categories.some((c) => c.name === q) ? q : null), [q]);
  const [query, setQuery] = useState(q && !categories.some((c) => c.name === q) ? q : "");
  const [selected, setSelected] = useState(initialSelected);
  const [filters, setFilters] = useState(false);

  const toggleCategory = (name) => setSelected((old) => (old === name ? null : name));

  const visible = useMemo(() => {
    return products
      .filter(
        (p) =>
          (!query || `${p.name} ${p.model} ${p.category}`.toLowerCase().includes(query.toLowerCase())) &&
          (!selected || selected === p.category),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query, selected]);

  const Filters = () => (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold">Categories</h3>
        {selected && (
          <button onClick={() => setSelected(null)} className="text-xs font-semibold text-brand hover:underline">
            Clear
          </button>
        )}
      </div>
      <div className="mt-4 max-h-[420px] space-y-1.5 overflow-y-auto pr-1">
        {categories.map((c) => {
          const checked = selected === c.name;
          const accent = categoryAccent[c.name] ?? "#41507a";
          return (
            <button
              key={c.name}
              type="button"
              onClick={() => toggleCategory(c.name)}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition ${checked ? "border-transparent bg-brand-soft shadow-sm" : "border-line bg-card hover:border-brand/40 hover:bg-brand-soft/50"}`}
            >
              <span
                className="size-2 shrink-0 rounded-full transition"
                style={{ backgroundColor: checked ? accent : "transparent", boxShadow: checked ? "none" : `inset 0 0 0 2px ${accent}` }}
              />
              <span className="min-w-0 flex-1 text-left">
                <span className={`block truncate font-medium ${checked ? "text-brand" : ""}`}>{c.name}</span>
              </span>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${checked ? "bg-card text-brand" : "bg-ground text-muted-foreground"}`}>{c.count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <div className="container-page py-10">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-line bg-card p-5 shadow-card">
              <Filters />
            </div>
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
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">{visible.length}</strong> products
              </p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visible.map((p) => (
                <ProductCard key={p.id} product={p} />
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
