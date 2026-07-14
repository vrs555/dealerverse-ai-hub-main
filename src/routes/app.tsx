import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — DealerVerse AI" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <Outlet />,
});
