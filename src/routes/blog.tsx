import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Icon } from "@/components/Icon";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DealerVerse AI" },
      {
        name: "description",
        content:
          "Insights, playbooks and product updates for modern dealership operators. Written by the DealerVerse AI team.",
      },
      { property: "og:title", content: "Blog — DealerVerse AI" },
      { property: "og:description", content: "Insights and playbooks for dealership operators." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { tag: "Product", title: "Introducing AI Fair Play v2.0", excerpt: "How we rebuilt our workload engine to eliminate bias and reward true performance.", date: "Nov 12, 2026", read: "6 min read" },
  { tag: "Playbook", title: "Cutting delivery TAT by 42% in 90 days", excerpt: "The exact rollout plan a top-10 automotive group used to slash time-to-driveway.", date: "Nov 05, 2026", read: "9 min read" },
  { tag: "Insights", title: "The hidden cost of siloed dealership tooling", excerpt: "Why disconnected DMS, CRM and finance stacks quietly bleed millions in lost productivity.", date: "Oct 21, 2026", read: "5 min read" },
  { tag: "Engineering", title: "Building a real-time Mission Center", excerpt: "A peek under the hood of the event-sourced backbone powering deal timelines.", date: "Oct 10, 2026", read: "8 min read" },
  { tag: "Customer Story", title: "How Metro Motors motivated 340 employees", excerpt: "Leaderboards, quests and honest scoreboards turned attrition into retention.", date: "Sep 27, 2026", read: "7 min read" },
  { tag: "Security", title: "SOC 2 Type II — one year in", excerpt: "What we learned running a continuous compliance program at DealerVerse AI.", date: "Sep 12, 2026", read: "4 min read" },
];

function BlogPage() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Blog</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Insights, playbooks and product updates
            </h1>
            <p className="mt-4 text-base text-on-surface-variant">
              Written by the team building DealerVerse AI — for the operators using it.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-outline-variant bg-white transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-accent via-secondary-container to-surface-container" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-on-surface group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-on-surface-variant">{p.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-on-surface-variant">
                    <span>{p.date}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="schedule" size={14} />
                      {p.read}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
