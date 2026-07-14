import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/app/ComingSoonPage";

export const Route = createFileRoute("/app/analytics")({
  head: () => ({ meta: [{ title: "Analytics — DealerVerse AI" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <ComingSoonPage
      title="Analytics"
      subtitle="Enterprise-grade reporting across every branch"
      icon="analytics"
      blurb="Slice and dice your operational data across time, branch, brand and department. Export to CSV or push to your BI stack."
      bullets={["Real-time metrics", "Custom dashboards", "Scheduled reports"]}
    />
  ),
});
