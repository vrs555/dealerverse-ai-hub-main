import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/app/ComingSoonPage";

export const Route = createFileRoute("/app/mission-center")({
  head: () => ({ meta: [{ title: "Mission Center — DealerVerse AI" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <ComingSoonPage
      title="Mission Center"
      subtitle="Every deal, every stage, in real time"
      icon="assignment"
      blurb="Universal deal timeline from booking to driveway with automatic escalation and single-glance status for every vehicle in your pipeline."
      bullets={["Deal timelines", "Auto-escalation", "Stage SLA tracking"]}
    />
  ),
});
