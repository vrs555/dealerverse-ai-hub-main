import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [{ title: "Dashboard — DealerVerse AI" }, { name: "robots", content: "noindex" }],
  }),
  component: DashboardPage,
});

const KPIS = [
  { label: "Deliveries today", value: "42", trend: "+8%", icon: "local_shipping", positive: true },
  { label: "Active missions", value: "128", trend: "+3", icon: "assignment", positive: true },
  { label: "Avg TAT (hrs)", value: "18.4", trend: "-12%", icon: "schedule", positive: true },
  { label: "Fair Play score", value: "94", trend: "+2", icon: "balance", positive: true },
  { label: "NPS", value: "72", trend: "+5", icon: "sentiment_very_satisfied", positive: true },
  { label: "Open escalations", value: "6", trend: "+1", icon: "priority_high", positive: false },
];

const MISSIONS = [
  { vin: "4921-X", stage: "Finance", eta: "2h", status: "On schedule" },
  { vin: "3388-Q", stage: "PDI", eta: "5h", status: "At risk" },
  { vin: "5510-A", stage: "Delivery", eta: "1h", status: "On schedule" },
  { vin: "2201-Z", stage: "Accounts", eta: "6h", status: "On schedule" },
  { vin: "9982-K", stage: "Sales", eta: "12h", status: "Delayed" },
];

function DashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="Monday · Live from Central Branch">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">
            Good morning, Rajesh 👋
          </h2>
          <p className="text-sm text-on-surface-variant">
            Here's what's happening across your branch today.
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {KPIS.map((k) => (
            <div
              key={k.label}
              className="rounded-2xl border border-outline-variant bg-white p-4"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-primary">
                  <Icon name={k.icon} size={18} />
                </div>
                <span
                  className={
                    k.positive
                      ? "text-xs font-semibold text-success"
                      : "text-xs font-semibold text-danger"
                  }
                >
                  {k.trend}
                </span>
              </div>
              <p className="mt-4 text-2xl font-extrabold text-on-surface">{k.value}</p>
              <p className="mt-0.5 text-xs text-on-surface-variant">{k.label}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-outline-variant bg-white p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-on-surface">Live missions</h3>
              <button className="text-xs font-semibold text-primary hover:underline">
                View all
              </button>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-outline-variant/60">
              <table className="w-full text-sm">
                <thead className="bg-surface-container-low text-left text-xs uppercase tracking-wider text-on-surface-variant">
                  <tr>
                    <th className="px-4 py-3 font-semibold">VIN</th>
                    <th className="px-4 py-3 font-semibold">Stage</th>
                    <th className="px-4 py-3 font-semibold">ETA</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MISSIONS.map((m) => (
                    <tr key={m.vin} className="border-t border-outline-variant/60">
                      <td className="px-4 py-3 font-bold text-on-surface">VIN {m.vin}</td>
                      <td className="px-4 py-3 text-on-surface-variant">{m.stage}</td>
                      <td className="px-4 py-3 text-on-surface-variant">{m.eta}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={m.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-outline-variant bg-white p-6">
            <h3 className="text-base font-bold text-on-surface">Today's leaders</h3>
            <ul className="mt-4 space-y-3">
              {["Priya M.", "Arjun K.", "Neha R.", "Vikram S."].map((n, i) => (
                <li key={n} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-xs font-bold text-primary">
                    #{i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-on-surface">{n}</p>
                    <p className="text-xs text-on-surface-variant">
                      {Math.round(1200 - i * 130)} pts
                    </p>
                  </div>
                  <Icon
                    name={i === 0 ? "emoji_events" : "chevron_right"}
                    size={16}
                    className="text-on-surface-variant"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "On schedule": "bg-success/10 text-success",
    "At risk": "bg-warning/10 text-warning",
    Delayed: "bg-danger/10 text-danger",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${map[status] ?? ""}`}
    >
      {status}
    </span>
  );
}
