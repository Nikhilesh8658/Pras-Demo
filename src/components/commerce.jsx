import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Facebook, Image, Info, Instagram, Linkedin, Mail, MapPin, Menu, MessageCircle, Minus, Package, Phone, Plus, ShoppingCart, Trash2, Twitter, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, categories, categoryAccent } from "@/lib/catalog";
import logo from "@/assets/Pras_Logo.png";

const CommerceContext = createContext(null);

export function CommerceProvider({ children }) {
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [compare, setCompare] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const value = useMemo(() => ({ cart, wishlist, compare, cartOpen, setCartOpen, addToCart: (id, quantity = 1) => { setCart((old) => ({ ...old, [id]: (old[id] ?? 0) + quantity })); setCartOpen(true); }, updateCart: (id, quantity) => setCart((old) => { const next = { ...old }; if (quantity <= 0) delete next[id]; else next[id] = quantity; return next; }), toggleWishlist: (id) => setWishlist((old) => old.includes(id) ? old.filter((item) => item !== id) : [...old, id]), toggleCompare: (id) => setCompare((old) => old.includes(id) ? old.filter((item) => item !== id) : old.length < 3 ? [...old, id] : old) }), [cart, wishlist, compare, cartOpen]);
  return <CommerceContext.Provider value={value}>{children}<CartDrawer /></CommerceContext.Provider>;
}

export function useCommerce() { const value = useContext(CommerceContext); if (!value) throw new Error("CommerceProvider missing"); return value; }

// Client demo: navigation is temporarily frozen so the header can be shown without linking anywhere.
const NAV_FROZEN = true;
const freezeClick = (e) => { if (NAV_FROZEN) e.preventDefault(); };

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const [mega, setMega] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const links = [{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Our Team", to: "/team" }, { label: "Gallery", to: "/gallery" }];
  return <header className={`sticky top-0 z-50 border-b border-line bg-ground/95 backdrop-blur-md transition-shadow ${scrolled ? "shadow-soft" : ""}`}>
    <div className="container-page flex h-24 items-center justify-between gap-4">
      <Link to="/" onClick={freezeClick} className="group flex min-w-0 shrink-0 items-center gap-3"><img src={logo} alt="Pras Minerals" width={64} height={64} className="size-20 shrink-0 rounded-full object-contain drop-shadow-sm ring-1 ring-line transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-elevated group-hover:ring-brand/50" /><span className="min-w-0"><strong className="block truncate font-display text-xl transition-colors group-hover:text-brand">Pras Minerals</strong><small className="hidden text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:block">Mineral Exports</small></span></Link>
      <div className="flex items-center gap-8">
        <nav className="hidden items-center gap-6 xl:flex">{links.slice(0,1).map((l) => <NavLink key={l.to} {...l} />)}{links.slice(1,2).map((l) => <NavLink key={l.to} {...l} />)}<div onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)} className="relative"><Link to="/products" onClick={freezeClick} className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Products <ChevronDown className="size-3 transition-transform group-hover:rotate-180" /></Link>{mega && <MegaMenu />}</div>{links.slice(2).map((l) => <NavLink key={l.to} {...l} />)}</nav>
        <Button asChild size="lg" className="hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-elevated xl:inline-flex"><Link to="/contact" onClick={freezeClick}><MessageCircle className="size-4" /> Connect with us</Link></Button>
        <Button variant="ghost" size="icon" className="transition-transform hover:scale-110 xl:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">{mobileOpen ? <X /> : <Menu />}</Button>
      </div>
    </div>{mobileOpen && <div className="border-t border-line bg-card px-5 py-5 xl:hidden"><nav className="grid gap-1">{links.slice(0,2).map((l) => <NavLink key={l.to} {...l} />)}<NavLink label="Products" to="/products" />{links.slice(2).map((l) => <NavLink key={l.to} {...l} />)}</nav><Button asChild size="lg" className="mt-4 w-full transition-transform duration-200 hover:-translate-y-0.5"><Link to="/contact" onClick={freezeClick}><MessageCircle className="size-4" /> Connect with us</Link></Button></div>}</header>;
}

function NavLink({ label, to }) { return <RouterNavLink to={to} end={to === "/"} onClick={freezeClick} className={({ isActive }) => `block rounded-lg px-2 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{label}</RouterNavLink>; }
function MegaMenu() { return <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4"><div className="rounded-2xl border border-line bg-card p-6 shadow-elevated"><p className="eyebrow">Product category</p><div className="mt-3 grid grid-cols-2 gap-2">{categories.map((c) => <Link key={c.name} to={`/products?q=${encodeURIComponent(c.name)}`} onClick={freezeClick} className="rounded-xl p-3 transition-colors hover:bg-brand-soft"><strong className="block text-sm">{c.name}</strong><small className="text-muted-foreground">{c.count || "Custom"} solutions</small></Link>)}</div></div></div>; }

export function ProductCard({ product, list = false }) {
  const accent = categoryAccent[product.category] ?? "#41507a";
  return (
    <article className={`group overflow-hidden rounded-2xl border border-line bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated ${list ? "grid sm:grid-cols-[280px_1fr]" : ""}`} style={{ "--accent": accent }}>
      <Link to={`/products/${product.id}`} className="relative block overflow-hidden bg-ground">
        <img src={product.image} alt={product.name} width={900} height={720} loading="lazy" className={`w-full object-cover transition duration-500 ease-out group-hover:scale-110 ${list ? "h-full min-h-72" : "aspect-[4/4.4] sm:aspect-square"}`} />
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `linear-gradient(to top, color-mix(in oklab, var(--accent) 55%, transparent), transparent 60%)` }} />
        <span className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_0_3px_var(--accent)] transition-opacity duration-300 group-hover:opacity-70" />
        <span className="absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-bold uppercase text-brand">{product.category}</span>
      </Link>
      <div className="flex flex-col justify-center p-5">
        <p className="text-xs font-semibold text-muted-foreground">{product.model}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="mt-1 font-display text-lg font-semibold leading-snug transition-colors group-hover:text-[var(--accent)]">{product.name}</h3>
        </Link>
      </div>
    </article>
  );
}

function CartDrawer() { const { cart, cartOpen, setCartOpen, updateCart } = useCommerce(); const items = Object.entries(cart).map(([id, quantity]) => ({ product: products.find((p) => p.id === id), quantity })).filter((x) => Boolean(x.product)); const total = items.reduce((sum, x) => sum + (x.product.price ?? 0) * x.quantity, 0); return <><button aria-label="Close cart overlay" onClick={() => setCartOpen(false)} className={`fixed inset-0 z-[60] bg-overlay transition ${cartOpen ? "visible opacity-100" : "invisible opacity-0"}`} /><aside aria-label="Shopping cart" className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-card shadow-elevated transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}><div className="flex items-center justify-between border-b border-line p-5"><div><h2 className="font-display text-xl font-semibold">Your cart</h2><p className="text-xs text-muted-foreground">{items.length} product lines</p></div><Button variant="ghost" size="icon" onClick={() => setCartOpen(false)} aria-label="Close cart"><X /></Button></div><div className="flex-1 overflow-y-auto p-5">{items.length === 0 ? <div className="grid h-full place-items-center text-center"><div><ShoppingCart className="mx-auto size-8 text-muted-foreground" /><p className="mt-3 font-medium">Your cart is empty</p></div></div> : <div className="space-y-4">{items.map(({ product, quantity }) => <div key={product.id} className="grid grid-cols-[72px_1fr] gap-3 border-b border-line pb-4"><img src={product.image} alt="" className="size-[72px] rounded-lg object-cover" /><div><div className="flex justify-between gap-2"><div><strong className="text-sm">{product.name}</strong><p className="text-xs text-muted-foreground">{product.model}</p></div><Button variant="ghost" size="icon" onClick={() => updateCart(product.id, 0)} aria-label="Remove"><Trash2 /></Button></div><div className="mt-2 flex items-center justify-between"><div className="flex items-center rounded-lg border border-line"><Button variant="ghost" size="icon" onClick={() => updateCart(product.id, quantity - 1)} aria-label="Decrease"><Minus /></Button><span className="w-7 text-center text-sm">{quantity}</span><Button variant="ghost" size="icon" onClick={() => updateCart(product.id, quantity + 1)} aria-label="Increase"><Plus /></Button></div><strong>${((product.price ?? 0) * quantity).toFixed(2)}</strong></div></div></div>)}</div>}</div><div className="border-t border-line p-5"><div className="flex justify-between font-display text-lg font-semibold"><span>Subtotal</span><span>${total.toFixed(2)}</span></div><p className="mt-1 text-xs text-muted-foreground">Shipping and tax calculated at checkout.</p><Button className="mt-4 w-full" size="lg">Proceed to checkout <ArrowRight /></Button><Button variant="outline" className="mt-2 w-full" onClick={() => setCartOpen(false)}>Continue shopping</Button></div></aside></>; }

const FOOTER_SOCIAL = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

const FOOTER_COLUMNS = [
  { title: "Products", items: [
    { label: "Product Categories", to: "/products", icon: Package },
  ] },
  { title: "Company", items: [
    { label: "About Us", to: "/about", icon: Info },
    { label: "Our Team", to: "/team", icon: Users },
    { label: "Gallery", to: "/gallery", icon: Image },
    { label: "Contact", to: "/contact", icon: Phone },
  ] },
];

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_3fr]">
        <div>
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Pras Minerals" width={80} height={80} className="size-20 shrink-0 rounded-full object-cover ring-2 ring-ink-foreground/15" />
            <strong className="font-display text-2xl">Pras Minerals</strong>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/65">Manufacturer, supplier, and exporter of quality minerals for industries worldwide.</p>
          <div className="mt-6 space-y-2 text-sm text-ink-foreground/65">
            <a href="mailto:prasmineralsexports@example.com" className="flex items-center gap-2 transition-colors hover:text-ink-foreground">
              <Mail className="size-4 shrink-0" /> prasmineralsexports@example.com
            </a>
            <p className="flex items-center gap-2"><MapPin className="size-4 shrink-0" /> Kondapur, Hyderabad, Telangana, India</p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            {FOOTER_SOCIAL.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-ink-foreground/15 text-ink-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-brand-foreground hover:shadow-elevated"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:divide-x sm:divide-ink-foreground/10">
          {FOOTER_COLUMNS.map(({ title, items }, i) => (
            <div key={title} className={i > 0 ? "sm:pl-8" : ""}>
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-ink-foreground">
                <span className="h-4 w-1 rounded-full bg-brand" aria-hidden="true" />
                {title}
              </h3>
              <ul className="mt-4 space-y-1 text-sm">
                {items.map(({ label, to, icon: Icon }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="group -mx-2 flex items-center gap-3 rounded-lg px-2 py-2 transition-all duration-200 hover:translate-x-1 hover:bg-ink-foreground/5"
                    >
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink-foreground/5 text-ink-foreground/50 transition-colors duration-200 group-hover:bg-brand group-hover:text-brand-foreground">
                        <Icon className="size-4" />
                      </span>
                      <span className="text-ink-foreground/65 transition-colors duration-200 group-hover:text-ink-foreground">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-page flex flex-col justify-between gap-3 py-6 text-xs text-ink-foreground/50 sm:flex-row">
          <span>© 2026 Pras Minerals. All rights reserved.</span>
          <span>Privacy Policy · Terms & Conditions · Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
