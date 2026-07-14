import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/solutions", label: "Solutions" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/contact", label: "Contact" },
      { to: "/login", label: "Login" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant/50 bg-surface-container-low">
      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Icon name="hub" size={20} filled />
              </span>
              <span className="text-lg font-black tracking-tight text-primary">
                DealerVerse AI
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-on-surface-variant">
              The intelligent operating system for modern automotive dealerships. Unify Sales,
              Finance, Accounts, PDI, and Delivery in one high-performance workflow.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-outline-variant/50 pt-6 text-xs text-on-surface-variant sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DealerVerse AI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Icon name="verified" size={14} />
            SOC 2 Type II · ISO 27001 · GDPR Ready
          </p>
        </div>
      </div>
    </footer>
  );
}
