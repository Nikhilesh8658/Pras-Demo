import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { reportLovableError } from "./lib/lovable-error-reporting";
import { CommerceProvider, SiteFooter, SiteHeader } from "@/components/commerce";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/products/Products";
import ProductDetailPage from "./pages/products/ProductDetail";
import AboutPage from "./pages/About";
import TeamPage from "./pages/Team";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";
import ApplicationsPage from "./pages/Applications";
import SolutionsPage from "./pages/Solutions";
import ResourcesPage from "./pages/Resources";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

class RootErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error(error);
    reportLovableError(error, { boundary: "root_error_boundary" });
  }

  reset = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
          <div className="max-w-md text-center">
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              This page didn't load
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Something went wrong on our end. You can try refreshing or head back home.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => {
                  this.reset();
                  window.location.reload();
                }}
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Try again
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Go home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<ProductDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/applications" element={<ApplicationsPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <RootErrorBoundary>
      <CommerceProvider>
        <SiteHeader />
        <AppRoutes />
        <SiteFooter />
      </CommerceProvider>
    </RootErrorBoundary>
  );
}
