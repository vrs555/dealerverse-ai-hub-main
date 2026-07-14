import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — DealerVerse AI" },
      {
        name: "description",
        content:
          "Purpose-built solutions for General Managers, Sales, Finance, Accounts, PDI and Customer Care teams.",
      },
      { property: "og:title", content: "Solutions — DealerVerse AI" },
      {
        property: "og:description",
        content:
          "Whatever your role at the dealership, DealerVerse AI has a workflow tuned for you.",
      },
    ],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  { icon: "supervisor_account", title: "For General Managers", body: "Real-time visibility across every branch, department and deal.", bullets: ["Live KPI dashboards", "Predictive forecasting", "Fair-play audit trail"] },
  { icon: "sell", title: "For Sales", body: "Never lose a lead. Automate follow-ups and prioritize hot deals.", bullets: ["Lead scoring", "Deal timeline", "Commission tracker"] },
  { icon: "account_balance", title: "For Finance", body: "Fast-track loan processing and reduce approval turnaround.", bullets: ["Doc collection", "Loan status", "Auto reminders"] },
  { icon: "badge", title: "For Accounts", body: "Reconcile faster with automated invoicing and payment tracking.", bullets: ["Invoice queue", "Payment mapping", "Ledger sync"] },
  { icon: "assignment_turned_in", title: "For PDI", body: "Digitize checklists and slash pre-delivery inspection time.", bullets: ["Guided checklists", "Photo evidence", "Defect flags"] },
  { icon: "support_agent", title: "For Customer Care", body: "Delight customers with proactive updates and NPS tracking.", bullets: ["Auto updates", "Ticket routing", "NPS analytics"] },
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Solutions</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              A workflow tuned for every role at your dealership
            </h1>
            <p className="mt-4 text-base text-on-surface-variant">
              From the GM's chair to the PDI bay, DealerVerse AI turns every seat into a
              high-performance station.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-3xl border border-outline-variant bg-white p-8"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                  <Icon name={s.icon} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-on-surface">{s.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">{s.body}</p>
                <ul className="mt-6 space-y-2 border-t border-outline-variant/60 pt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-on-surface">
                      <Icon name="check_circle" size={16} filled className="text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
