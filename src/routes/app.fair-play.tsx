import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/app/ComingSoonPage";

export const Route = createFileRoute("/app/fair-play")({
  head: () => ({ meta: [{ title: "Fair Play — DealerVerse AI" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <ComingSoonPage
      title="Fair Play Center"
      subtitle="Unbiased workload and performance scoring"
      icon="gavel"
      blurb="Transparent scoring engine that balances workload across your team and surfaces the truest measures of performance."
      bullets={["Workload balancing", "Bias audits", "Appeal workflow"]}
    />
  ),
});
