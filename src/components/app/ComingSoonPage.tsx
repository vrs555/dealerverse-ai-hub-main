import { AppShell } from "@/components/app/AppShell";
import { Icon } from "@/components/Icon";

export function ComingSoonPage({
  title,
  subtitle,
  icon,
  blurb,
  bullets,
}: {
  title: string;
  subtitle?: string;
  icon: string;
  blurb: string;
  bullets: string[];
}) {
  return (
    <AppShell title={title} subtitle={subtitle}>
      <div className="rounded-3xl border border-outline-variant bg-white p-10">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-accent text-primary">
            <Icon name={icon} size={36} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">{title}</h2>
            <p className="mt-2 max-w-xl text-sm text-on-surface-variant">{blurb}</p>
          </div>
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            Coming soon
          </span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {bullets.map((b) => (
            <div
              key={b}
              className="rounded-2xl border border-outline-variant/70 bg-surface-container-low p-5"
            >
              <Icon name="check_circle" filled size={20} className="text-primary" />
              <p className="mt-3 text-sm font-semibold text-on-surface">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
