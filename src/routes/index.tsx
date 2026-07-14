import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DealerVerse AI — Enterprise SaaS for Modern Dealerships" },
      {
        name: "description",
        content:
          "Transform your dealership into an AI-powered high-performance team. Unify Sales, Finance, Accounts, PDI, and Delivery in a single workflow.",
      },
    ],
  }),
  component: HomePage,
});

const WORKFLOW = [
  { icon: "sell", label: "Sales" },
  { icon: "account_balance", label: "Finance" },
  { icon: "badge", label: "Accounts" },
  { icon: "assignment_turned_in", label: "PDI" },
  { icon: "local_shipping", label: "Delivery" },
];

const PROBLEMS = [
  { icon: "schedule", title: "Delivery Delays", body: "Vehicles sitting in stock for days because of registration lags and communication gaps." },
  { icon: "groups", title: "Poor Collaboration", body: "Siloed departments working on disconnected spreadsheets with zero real-time alignment." },
  { icon: "sentiment_dissatisfied", title: "Low Motivation", body: "High employee burnout and attrition due to repetitive manual tasks and lack of recognition." },
  { icon: "bar_chart", title: "No Visibility", body: "Managers guessing team performance instead of using data-driven insights." },
  { icon: "leak_add", title: "Workflow Bottlenecks", body: "Critical tasks stuck in waiting states without any automated escalation or alerts." },
  { icon: "touch_app", title: "Manual Tracking", body: "Wasted hours manually updating statuses and chasing phone calls for updates." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accent/60 to-transparent" />
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-secondary-container/60 px-4 py-1.5"
          >
            <Icon name="auto_awesome" size={16} filled className="text-primary" />
            <span className="text-xs font-medium text-on-secondary-container">
              New · Enterprise AI Fair Play Engine v2.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-on-surface md:text-6xl md:leading-[1.05]"
          >
            Transform your dealership into an{" "}
            <span className="italic text-primary">AI-powered</span> high performance team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-base text-on-surface-variant md:text-lg"
          >
            DealerVerse AI helps dealerships improve productivity, reduce delivery delays, and
            motivate employees through intelligent gamification and workflow optimization.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/30"
            >
              Request Free Demo
              <Icon name="arrow_forward" size={18} />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-2xl border border-outline-variant bg-surface-container-lowest px-7 py-3.5 text-sm font-bold text-on-surface transition-colors hover:bg-surface-container"
            >
              <Icon name="play_circle" size={18} />
              Watch Product Tour
            </Link>
          </div>

          {/* Workflow diagram */}
          <div className="relative mx-auto mt-20 max-w-5xl rounded-3xl border border-outline-variant/50 bg-surface-container p-8 shadow-2xl shadow-primary/5 md:p-12">
            <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
              {WORKFLOW.map((step, i) => (
                <Fragment key={step.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className={
                        i === WORKFLOW.length - 1
                          ? "grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30"
                          : "grid h-16 w-16 place-items-center rounded-full border-2 border-primary/20 bg-white text-primary shadow-md"
                      }
                    >
                      <Icon name={step.icon} size={i === WORKFLOW.length - 1 ? 34 : 28} />
                    </div>
                    <span className="text-sm font-bold text-on-surface">{step.label}</span>
                  </motion.div>
                  {i < WORKFLOW.length - 1 ? (
                    <div className="hidden h-1 flex-1 overflow-hidden rounded-full bg-outline-variant md:block">
                      <div className="h-full w-1/2 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent" />
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-outline-variant/40 bg-surface-container-low/60 py-12">
        <div className="mx-auto max-w-[1440px] px-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-on-surface-variant">
            Trusted by world-class automotive groups
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 opacity-70 md:gap-16">
            {["TOYOTA", "BMW", "HYUNDAI", "HONDA", "MERCEDES", "FORD"].map((brand) => (
              <span
                key={brand}
                className="text-lg font-black tracking-[0.15em] text-on-surface-variant"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-on-surface md:text-4xl">
              The friction in modern dealerships
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-on-surface-variant">
              Manual workflows and lack of visibility are costing you millions in lost efficiency
              and employee turnover.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-outline-variant p-8 transition-all hover:border-danger/60 hover:shadow-lg"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-danger/10 text-danger transition-transform group-hover:scale-110">
                  <Icon name={p.icon} />
                </div>
                <h3 className="text-lg font-bold text-on-surface">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions bento */}
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-on-surface md:text-4xl">
                A unified operating system for dealerships
              </h2>
              <p className="mt-3 text-sm text-on-surface-variant">
                DealerVerse AI synchronizes every department into a single high-output ecosystem.
              </p>
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-1 rounded-full bg-on-surface px-5 py-2.5 text-sm font-bold text-white hover:bg-on-surface-variant"
            >
              Explore all features <Icon name="arrow_forward" size={16} />
            </Link>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-1 gap-6 md:grid-cols-4">
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground md:col-span-2">
              <Icon name="rocket_launch" size={36} className="mb-6" />
              <h3 className="text-2xl font-bold">Mission Center</h3>
              <p className="mt-3 max-w-xs text-sm opacity-90">
                Track every vehicle journey from booking to driveway with precision timelines.
              </p>
              <Icon
                name="dashboard"
                size={200}
                filled
                className="absolute -bottom-8 -right-6 opacity-20"
              />
            </div>

            <div className="rounded-3xl border border-outline-variant bg-white p-6">
              <Icon name="balance" size={28} className="text-primary" />
              <h3 className="mt-6 text-base font-bold">AI Fair Play</h3>
              <p className="mt-1 text-xs text-on-surface-variant">
                Transparent workload balancing and unbiased performance measurement.
              </p>
            </div>

            <div className="rounded-3xl border border-outline-variant bg-white p-6">
              <Icon name="schema" size={28} className="text-primary" />
              <h3 className="mt-6 text-base font-bold">Dashboards</h3>
              <p className="mt-1 text-xs text-on-surface-variant">
                Dedicated views for Sales, Finance, Accounts, and Service teams.
              </p>
            </div>

            <div className="relative col-span-1 overflow-hidden rounded-3xl bg-tertiary p-6 text-white md:col-span-2">
              <Icon name="psychology" size={28} />
              <h3 className="mt-6 text-base font-bold">Predictive AI insights</h3>
              <p className="mt-1 text-xs opacity-90">
                Detect potential bottlenecks 48 hours before they happen using ML.
              </p>
            </div>

            <div className="rounded-3xl bg-secondary-container p-6">
              <Icon name="emoji_events" size={28} className="text-on-secondary-container" />
              <h3 className="mt-6 text-base font-bold">Leaderboards</h3>
              <p className="mt-1 text-xs text-on-surface-variant">
                Real-time performance rankings to spark healthy internal competition.
              </p>
            </div>

            <div className="rounded-3xl border border-outline-variant bg-white p-6">
              <Icon name="stars" size={28} className="text-primary" />
              <h3 className="mt-6 text-base font-bold">Achievements</h3>
              <p className="mt-1 text-xs text-on-surface-variant">
                Digital rewards and badges for top performers and process adherence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="overflow-hidden rounded-3xl bg-primary p-12 text-center text-primary-foreground shadow-2xl shadow-primary/20 md:p-16">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Ready to run a smarter dealership?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm opacity-90 md:text-base">
              Book a 30-minute demo with our team. See exactly how DealerVerse AI accelerates your
              workflows on your real data.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-primary hover:bg-white/90"
              >
                Request Demo <Icon name="arrow_forward" size={16} />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10"
              >
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
