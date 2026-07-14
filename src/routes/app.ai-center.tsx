import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/app/ComingSoonPage";

export const Route = createFileRoute("/app/ai-center")({
  head: () => ({ meta: [{ title: "AI Center — DealerVerse AI" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <ComingSoonPage
      title="AI Command Center"
      subtitle="Predictive insights and automation"
      icon="smart_toy"
      blurb="Configure agents, review predictions and audit every AI-driven action taken across your dealership."
      bullets={["Predictive alerts", "Agent workflows", "Model audit trail"]}
    />
  ),
});
