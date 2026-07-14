import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/app/ComingSoonPage";

export const Route = createFileRoute("/app/departments")({
  head: () => ({ meta: [{ title: "Departments — DealerVerse AI" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <ComingSoonPage
      title="Departments"
      subtitle="Sales · Finance · Accounts · PDI · Customer Care"
      icon="business_center"
      blurb="Purpose-built dashboards for every team at your dealership. Switch context in a click while staying on the same source of truth."
      bullets={["Team dashboards", "Cross-team handoffs", "Role-based KPIs"]}
    />
  ),
});
