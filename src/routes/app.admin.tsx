import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/app/ComingSoonPage";

export const Route = createFileRoute("/app/admin")({
  head: () => ({ meta: [{ title: "Admin — DealerVerse AI" }, { name: "robots", content: "noindex" }] }),
  component: () => (
    <ComingSoonPage
      title="Admin"
      subtitle="Users · Roles · Branches · Integrations"
      icon="admin_panel_settings"
      blurb="Manage users, permissions and integrations across your dealership group with granular controls and a full audit trail."
      bullets={["RBAC", "SSO / SAML", "Audit log"]}
    />
  ),
});
