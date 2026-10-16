import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileStickyCta } from "./MobileStickyCta";

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (hash) {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname, hash]);

  return (
    <div className="pw-grid min-h-dvh overflow-x-clip bg-pw-bg text-pw-text">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-pw-cyan focus:px-3 focus:py-2 focus:text-pw-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
