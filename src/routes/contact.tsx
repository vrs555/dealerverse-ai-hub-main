import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DealerVerse AI" },
      {
        name: "description",
        content:
          "Talk to sales or request a personalized demo of DealerVerse AI for your dealership group.",
      },
      { property: "og:title", content: "Contact — DealerVerse AI" },
      { property: "og:description", content: "Talk to sales or request a demo." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Let's rebuild your dealership together
            </h1>
            <p className="mt-4 text-sm text-on-surface-variant">
              Tell us a bit about your operation and one of our specialists will get back within
              one business day.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Email</p>
                  <p className="text-sm text-on-surface-variant">sales@dealerverse.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <Icon name="call" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">Phone</p>
                  <p className="text-sm text-on-surface-variant">+1 (415) 555-0134</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary">
                  <Icon name="location_on" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">HQ</p>
                  <p className="text-sm text-on-surface-variant">
                    350 Market Street, San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-outline-variant bg-white p-8 shadow-sm lg:col-span-3">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" placeholder="Jane Sharma" />
              <Field label="Work email" placeholder="jane@dealer.com" type="email" />
              <Field label="Company" placeholder="Metro Motors" />
              <Field label="Dealership size" placeholder="1–5 branches" />
            </div>
            <div className="mt-5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                What are you trying to solve?
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your workflow and where you're losing time…"
                className="mt-2 w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="button"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:shadow-2xl"
            >
              Request Demo <Icon name="arrow_forward" size={16} />
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
