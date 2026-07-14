import { Icon } from "@/components/Icon";

export function AppTopbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-outline-variant/60 bg-white/80 px-6 backdrop-blur">
      <div className="min-w-0">
        <h1 className="truncate text-lg font-black tracking-tight text-on-surface">{title}</h1>
        {subtitle ? (
          <p className="truncate text-xs text-on-surface-variant">{subtitle}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative hidden md:block">
          <Icon
            name="search"
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
          />
          <input
            type="search"
            placeholder="Search…"
            className="h-10 w-64 rounded-full border border-outline-variant bg-surface-container-low pl-10 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button
          type="button"
          className="relative grid h-10 w-10 place-items-center rounded-full text-on-surface-variant hover:bg-surface-container"
          aria-label="Notifications"
        >
          <Icon name="notifications" size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger ring-2 ring-white" />
        </button>
        <div className="ml-2 flex items-center gap-2 border-l border-outline-variant/60 pl-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
            RS
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold leading-tight text-on-surface">Rajesh Sharma</p>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">
              Branch Manager
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
