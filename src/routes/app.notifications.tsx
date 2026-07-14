import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/app/ComingSoonPage";

export const Route = createFileRoute("/app/notifications")({
  head: () => ({ meta: [{ title: "Notifications — DealerVerse AI" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <ComingSoonPage
      title="Notifications"
      subtitle="Every important signal, in one place"
      icon="notifications"
      blurb="See every alert, mention and escalation routed to you or your team. Snooze, assign or resolve without leaving the page."
      bullets={["Smart routing", "Snooze & assign", "Digest email"]}
    />
  ),
});
