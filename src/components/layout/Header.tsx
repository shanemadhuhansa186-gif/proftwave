import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems, siteConfig } from "../../config/site";
import { Logo } from "../Logo";
import { TelegramCta } from "../TelegramCta";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-pw-border/80 bg-pw-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          className="min-w-0 shrink"
          onClick={() => setOpen(false)}
        >
          <Logo markClassName="h-11 w-11" />
          <span className="sr-only">{siteConfig.name} home</span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-pw-card text-pw-text"
                    : "text-pw-muted hover:text-pw-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <TelegramCta variant="nav" label={siteConfig.telegram.public.shortCta} />
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-pw-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-pw-border bg-pw-bg px-4 py-4 lg:hidden"
        >
          <nav className="grid gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium ${
                    isActive ? "bg-pw-card text-pw-text" : "text-pw-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4">
            <TelegramCta className="w-full" label={siteConfig.telegram.public.shortCta} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
