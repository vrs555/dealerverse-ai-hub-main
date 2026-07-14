import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DealerVerse AI" },
      {
        name: "description",
        content:
          "Simple, transparent pricing for dealerships of every size. Start with Growth, scale to Enterprise.",
      },
      { property: "og:title", content: "Pricing — DealerVerse AI" },
      { property: "og:description", content: "Simple, transparent pricing. No hidden fees." },
    ],
  }),
  component: PricingPage,
});

const TIERS = [
  {
    name: "Starter",
    price: "$0",
    per: "for 14 days",
    tagline: "Kick the tires with your team",
    highlight: false,
    features: ["Up to 5 users", "Mission Center basics", "Community support"],
  },
  {
    name: "Growth",
    price: "$499",
    per: "per branch / month",
    tagline: "Best for single-branch dealerships",
    highlight: true,
    features: [
      "Unlimited users",
      "All department dashboards",
      "AI Fair Play engine",
      "Leaderboards & quests",
      "Email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "annual contract",
    tagline: "For multi-brand automotive groups",
    highlight: false,
    features: [
      "Everything in Growth",
      "SSO / SAML",
      "Advanced RBAC & audit",
      "Dedicated CSM",
      "99.99% SLA",
    ],
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Pricing</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Simple pricing that scales with your dealership
            </h1>
            <p className="mt-4 text-base text-on-surface-variant">
              Try DealerVerse AI free for 14 days. No credit card required.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={cn(
                  "flex flex-col rounded-3xl border p-8 transition-all",
                  t.highlight
                    ? "border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/25 md:-translate-y-4"
                    : "border-outline-variant bg-white",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className={cn("text-xl font-bold", t.highlight ? "" : "text-on-surface")}>
                    {t.name}
                  </h3>
                  {t.highlight ? (
                    <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      Most popular
                    </span>
                  ) : null}
                </div>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    t.highlight ? "opacity-90" : "text-on-surface-variant",
                  )}
                >
                  {t.tagline}
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold">{t.price}</span>
                  <span
                    className={cn(
                      "text-sm",
                      t.highlight ? "opacity-80" : "text-on-surface-variant",
                    )}
                  >
                    {t.per}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Icon
                        name="check_circle"
                        size={16}
                        filled
                        className={t.highlight ? "text-white" : "text-primary"}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={cn(
                    "mt-10 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-bold transition-all",
                    t.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-on-surface text-white hover:bg-on-surface-variant",
                  )}
                >
                  {t.name === "Enterprise" ? "Talk to sales" : "Start free trial"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
