import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";

type NavItem = { to: string; label: string; icon: string; exact?: boolean };

const PRIMARY: NavItem[] = [
  { to: "/app", label: "Dashboard", icon: "dashboard", exact: true },
  { to: "/app/mission-center", label: "Mission Center", icon: "assignment" },
  { to: "/app/departments", label: "Departments", icon: "business_center" },
  { to: "/app/analytics", label: "Analytics", icon: "analytics" },
  { to: "/app/ai-center", label: "AI Center", icon: "smart_toy" },
  { to: "/app/fair-play", label: "Fair Play", icon: "gavel" },
];

const SECONDARY: NavItem[] = [
  { to: "/app/notifications", label: "Notifications", icon: "notifications" },
  { to: "/app/admin", label: "Admin", icon: "admin_panel_settings" },
];

export function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-outline-variant bg-surface-container-lowest px-4 py-6 lg:flex">
      <Link to="/app" className="mb-8 flex items-center gap-2 px-2">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
          <Icon name="hub" size={22} filled />
        </span>
        <div>
          <p className="text-sm font-black tracking-tight text-primary">DealerVerse AI</p>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
            Enterprise
          </p>
        </div>
      </Link>

      <nav className="flex-1 space-y-1">
        {PRIMARY.map((item) => (
          <Link
            key={item.to}
            to={item.to as never}
            activeOptions={{ exact: item.exact ?? false }}
            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            activeProps={{
              className:
                "bg-accent text-on-brand-container font-semibold border-l-4 border-primary pl-2",
            }}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-6 border-t border-outline-variant/60 pt-4 space-y-1">
        {SECONDARY.map((item) => (
          <Link
            key={item.to}
            to={item.to as never}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            activeProps={{
              className: "bg-accent text-on-brand-container font-semibold",
            }}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
          </Link>
        ))}

        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-surface-container p-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
            RS
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-on-surface">Rajesh Sharma</p>
            <p className="truncate text-[10px] uppercase tracking-wider text-on-surface-variant">
              Branch Manager
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
