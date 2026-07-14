import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — DealerVerse AI" },
      {
        name: "description",
        content:
          "Explore Mission Center, AI Fair Play, Department Dashboards, Predictive Insights, Leaderboards, and more.",
      },
      { property: "og:title", content: "Features — DealerVerse AI" },
      {
        property: "og:description",
        content:
          "Every capability you need to run a modern, high-performance dealership on a single platform.",
      },
    ],
  }),
  component: FeaturesPage,
});

const FEATURES = [
  { icon: "rocket_launch", title: "Mission Center", body: "Universal timeline for every deal — from booking to delivery — with auto-escalation." },
  { icon: "balance", title: "AI Fair Play", body: "Unbiased workload balancing and transparent performance measurement across every role." },
  { icon: "schema", title: "Department Dashboards", body: "Purpose-built views for Sales, Finance, Accounts, PDI and Service teams." },
  { icon: "psychology", title: "Predictive AI Insights", body: "Detect bottlenecks 48 hours before they happen using machine learning." },
  { icon: "emoji_events", title: "Leaderboards", body: "Real-time performance rankings that spark healthy internal competition." },
  { icon: "stars", title: "Quests & Achievements", body: "Digital rewards for top performers and adherence to process." },
  { icon: "notifications_active", title: "Smart Notifications", body: "Contextual alerts routed to the right person at the right moment." },
  { icon: "shield_person", title: "Enterprise Security", body: "SOC 2 Type II, ISO 27001, GDPR ready — with granular RBAC out of the box." },
  { icon: "hub", title: "Open Integrations", body: "Plug into your DMS, CRM, telephony and finance tooling in minutes." },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Features</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Every capability you need to run a modern dealership
            </h1>
            <p className="mt-4 text-base text-on-surface-variant">
              One platform that replaces spreadsheets, group chats, and disconnected tooling with a
              single high-performance workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border border-outline-variant bg-white p-8 transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary transition-transform group-hover:scale-110">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-on-surface">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
