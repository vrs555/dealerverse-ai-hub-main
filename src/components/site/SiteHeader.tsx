import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/features", label: "Features" },
  { to: "/solutions", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav border-b border-outline-variant/40">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Icon name="hub" size={20} filled />
          </span>
          <span className="text-lg font-black tracking-tight text-primary">DealerVerse AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:text-primary sm:inline-flex"
          >
            Login
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            Request Demo
            <Icon name="arrow_forward" size={16} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-on-surface hover:bg-surface-container md:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-outline-variant/40 bg-surface-container-lowest md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col p-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-container"
              activeProps={{ className: "text-primary bg-accent" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-on-surface-variant hover:bg-surface-container"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
