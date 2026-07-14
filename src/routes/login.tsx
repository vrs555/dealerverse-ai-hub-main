import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — DealerVerse AI" },
      { name: "description", content: "Sign in to your DealerVerse AI workspace." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-background lg:grid-cols-2">
      {/* Left illustration panel */}
      <div className="relative hidden overflow-hidden bg-primary p-12 text-primary-foreground lg:flex lg:flex-col lg:justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15">
            <Icon name="hub" size={20} filled />
          </span>
          <span className="text-lg font-black tracking-tight">DealerVerse AI</span>
        </Link>
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold leading-tight">
            Run a smarter,<br /> more motivated dealership.
          </h2>
          <p className="mt-4 max-w-sm text-sm opacity-80">
            The intelligent operating system trusted by world-class automotive groups to accelerate
            every deal.
          </p>
        </div>
        <div className="text-xs opacity-70">
          © {new Date().getFullYear()} DealerVerse AI. Enterprise SaaS.
        </div>
        <Icon
          name="hub"
          size={520}
          filled
          className="pointer-events-none absolute -right-40 -bottom-40 opacity-10"
        />
      </div>

      {/* Right form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="mb-8 flex items-center gap-2 lg:hidden">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Icon name="hub" size={20} filled />
            </span>
            <span className="text-lg font-black tracking-tight text-primary">DealerVerse AI</span>
          </Link>

          <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">Welcome back</h1>
          <p className="mt-2 text-sm text-on-surface-variant">
            Sign in to your workspace to continue.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Work email
              </label>
              <input
                type="email"
                placeholder="you@dealer.com"
                className="mt-2 w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-primary hover:underline">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <Link
              to="/app"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:shadow-2xl"
            >
              Sign in <Icon name="arrow_forward" size={16} />
            </Link>

            <div className="flex items-center gap-3 text-xs text-on-surface-variant">
              <div className="h-px flex-1 bg-outline-variant" />
              or
              <div className="h-px flex-1 bg-outline-variant" />
            </div>

            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-outline-variant bg-white px-6 py-3 text-sm font-bold text-on-surface hover:bg-surface-container"
            >
              <Icon name="key" size={16} />
              Continue with SSO
            </button>
          </div>

          <p className="mt-8 text-center text-xs text-on-surface-variant">
            New to DealerVerse AI?{" "}
            <Link to="/contact" className="font-semibold text-primary hover:underline">
              Request access
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
