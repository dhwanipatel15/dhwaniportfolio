"use client";

import { useEffect, useState } from "react";

/* ---------------- data ---------------- */

const projects = [
  {
    num: "01",
    title: "Transcript Integration",
    subtitle: "Education & talent platform feature",
    tags: ["B2B SaaS", "UX Flows", "Information Architecture"],
    description:
      "Designed the end-to-end experience for integrating academic transcripts into a talent and education platform — mapping complex data into clean, scannable flows that work for both administrators and candidates.",
    metric: "Shipped at Marcus Evans",
    link: "https://www.figma.com/design/MwKb6W5LmhnuDWpxNPuyId/Transcript-Integration?m=auto&t=JLUnlQvSc8dNijpT-1",
    gradient: "from-[#ff5c39] via-[#ff8f6b] to-[#ffd0a8]",
  },
  {
    num: "02",
    title: "BMT",
    subtitle: "Internal B2B SaaS product",
    tags: ["SaaS Dashboard", "Product Thinking", "UI Design"],
    description:
      "Owned the design of an internal business management tool from requirements to developer handoff — translating stakeholder needs across APAC, the UK and Europe into a clear, efficient interface.",
    metric: "1 of 9 products shipped in a year",
    link: "https://www.figma.com/design/NYOofmgdc55KfUp3TREy3Q/BMT?m=auto&t=JLUnlQvSc8dNijpT-1",
    gradient: "from-[#3ec6ff] via-[#6b8cff] to-[#b39dff]",
  },
  {
    num: "03",
    title: "Tata Finance",
    subtitle: "Fintech app design",
    tags: ["Fintech", "Mobile & Web", "Prototyping"],
    description:
      "Designed flows and responsive UI for a consumer finance experience — simplifying dense financial products into interfaces that build trust, from onboarding through transactions.",
    metric: "Research → prototype → handoff",
    link: "https://www.figma.com/design/svhOB0IcKVIEdgIlpjKLDQ/Tata-Finance--Copy-?node-id=328-7372&t=B0R4cc0HPLVYEveo-1",
    gradient: "from-[#ffd23e] via-[#ff9d3e] to-[#ff5c39]",
  },
  {
    num: "04",
    title: "Marcus Evans Design System",
    subtitle: "Scalable component library",
    tags: ["Design System", "Figma Library", "Dev Handoff"],
    description:
      "Built a scalable design system powering 9 SaaS products — tokens, components and documentation that improved UI consistency, sped up design production and made developer handoffs smoother.",
    metric: "Powers 9 shipped products",
    link: null,
    gradient: "from-[#6bffb8] via-[#3ec6ff] to-[#2b6bff]",
  },
  {
    num: "05",
    title: "Events Platform Suite",
    subtitle: "B2B & B2C events SaaS",
    tags: ["Events", "B2B/B2C", "Global Rollout"],
    description:
      "Designed event management and attendee experiences across internal and external products — partnering with senior leadership and cross-functional teams to support global product rollouts.",
    metric: "Rolled out across 3 regions",
    link: null,
    gradient: "from-[#ff6bcb] via-[#b39dff] to-[#3ec6ff]",
  },
];

const strengths = [
  {
    num: "01",
    title: "Ship, don't just concept",
    body: "13 software products designed and shipped in 1.5 years — across SaaS, events, talent, education, AI, fintech, cybersecurity and fraud management.",
  },
  {
    num: "02",
    title: "Systems thinking",
    body: "I built a scalable design system that improved UI consistency, sped up design production and made developer handoffs smoother across an entire product suite.",
  },
  {
    num: "03",
    title: "Quick adaptor",
    body: "New domain, new constraints, new stakeholders — I get up to speed fast. From fraud management to events platforms, I've learned that curiosity beats familiarity.",
  },
  {
    num: "04",
    title: "Fluent with developers",
    body: "I collaborate with developers on information architecture, user flows and feature prioritisation — so what ships looks like what was designed.",
  },
  {
    num: "05",
    title: "Executive communication",
    body: "9+ executive-level presentations and product documentation that supported decision-making, stakeholder alignment and roadmap communication.",
  },
  {
    num: "06",
    title: "Craft compounds",
    body: "My approach is grounded in one belief: consistent obsession with quality compounds faster than talent alone.",
  },
];

const tools = [
  "Figma", "Framer", "FigJam", "Illustrator", "Photoshop", "InDesign",
  "Notion", "Canva", "Veo 3", "Claude", "Gemini", "Google Sheets",
];

/* ---------------- hooks ---------------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- components ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Approach", "#approach"],
    ["Work", "#work"],
    ["Why Me", "#why"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md py-3 shadow-lg shadow-black/20" : "py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-xl font-bold tracking-tight">
          dhwani<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-cream/80 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-accent">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn-pill rounded-full border border-cream/40 px-5 py-2 text-sm font-medium"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const words1 = ["Boring", "design", "is"];
  const words2 = ["everywhere."];
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="blob left-[10%] top-[15%] h-[38vw] w-[38vw] bg-accent/70" />
      <div
        className="blob right-[8%] bottom-[12%] h-[30vw] w-[30vw] bg-[#2b6bff]/60"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob left-[45%] top-[55%] h-[22vw] w-[22vw] bg-[#ff6bcb]/40"
        style={{ animationDelay: "-12s" }}
      />

      <h1 className="relative z-10 text-[13vw] font-bold leading-[0.95] tracking-tighter md:text-[9vw]">
        {words1.map((w, i) => (
          <span key={w} className="hero-word mr-[0.22em]">
            <span style={{ animationDelay: `${0.1 + i * 0.12}s` }}>{w}</span>
          </span>
        ))}
        <br />
        {words2.map((w, i) => (
          <span key={w} className="hero-word text-accent">
            <span style={{ animationDelay: `${0.5 + i * 0.12}s` }}>{w}</span>
          </span>
        ))}
      </h1>
      <p className="hero-word relative z-10 mt-8 max-w-xl text-lg text-cream/70 md:text-xl">
        <span style={{ animationDelay: "0.8s" }}>
          I&apos;m Dhwani Patel, a product designer in Mumbai — 13 products
          shipped in 1.5 years. Let&apos;s make something unforgettable
          instead.
        </span>
      </p>
      <a
        href="#work"
        className="btn-pill relative z-10 mt-10 rounded-full border border-cream/40 px-8 py-4 font-medium"
      >
        See my work ↓
      </a>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-cream/40">
        scroll
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section id="about" className="relative bg-cream px-6 py-32 text-ink">
      <div className="mx-auto max-w-5xl">
        <h2 className="reveal text-5xl font-bold tracking-tight md:text-7xl">
          Forget about templates!
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="reveal reveal-delay-1 text-xl leading-relaxed text-ink/70">
            Great products don&apos;t come from UI kits and trend-chasing alone.
            In 1.5 years I&apos;ve designed and shipped 13 software products
            across SaaS, events, talent, education, AI, fintech, cybersecurity
            and fraud management.
          </p>
          <p className="reveal reveal-delay-2 text-xl leading-relaxed text-ink/70">
            What made them work wasn&apos;t decoration at the end — it was
            product thinking from the start: UX flows, design systems,
            stakeholder collaboration and craft-driven execution. That&apos;s
            where I come in.
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          <div className="reveal rounded-3xl bg-ink p-10 text-cream">
            <h3 className="text-3xl font-bold">Failing with trends</h3>
            <p className="mt-4 text-cream/60">
              Chasing dribbble-shots, shipping redesigns nobody asked for,
              measuring success in likes instead of outcomes.
            </p>
          </div>
          <div className="reveal reveal-delay-1 rounded-3xl bg-accent p-10 text-ink">
            <h3 className="text-3xl font-bold">Succeeding with intent</h3>
            <p className="mt-4 text-ink/70">
              Research-backed decisions, systems that scale, and interfaces that
              quietly move the metrics that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const pillars = [
    {
      title: "Outcomes",
      lead: "Understand the goal. Design the impact.",
      body: "I pair with product and engineering to articulate what success looks like before opening Figma — then design toward it.",
    },
    {
      title: "Signals",
      lead: "See the data. Act with intent.",
      body: "Usability tests, analytics and support tickets are my compass. Design decisions get made on evidence, not opinions.",
    },
    {
      title: "Teams",
      lead: "Make collaboration work.",
      body: "Design happens with people, not for them. Workshops, crits and pairing keep everyone building the same product.",
    },
  ];
  return (
    <section id="approach" className="bg-ink px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="reveal text-sm uppercase tracking-[0.3em] text-accent">
          My approach
        </p>
        <h2 className="reveal mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          Simplicity is the strategy
        </h2>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className={`reveal reveal-delay-${i}`}>
              <div className="h-px w-full bg-cream/20" />
              <h3 className="mt-6 text-2xl font-bold text-accent">{p.title}</h3>
              <p className="mt-3 font-semibold">{p.lead}</p>
              <p className="mt-3 text-cream/60">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="bg-ink-2 px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="reveal text-sm uppercase tracking-[0.3em] text-accent">
            Why me
          </p>
          <h2 className="reveal sticky top-32 mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            I make design personal.
          </h2>
          <p className="reveal reveal-delay-1 mt-6 text-cream/60">
            I don&apos;t do design the way others do. I practice what I preach.
            Every day. Here&apos;s how.
          </p>
        </div>
        <div>
          {strengths.map((s) => (
            <div key={s.num} className="why-row reveal py-8">
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-sm text-accent">{s.num}</span>
                <div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 max-w-xl text-cream/60">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...tools, ...tools];
  return (
    <section className="overflow-hidden border-y border-cream/10 bg-ink py-10">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="mx-8 whitespace-nowrap text-3xl font-bold text-cream/30 transition-colors hover:text-accent md:text-4xl"
          >
            {t} <span className="mx-6 text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-ink px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="reveal text-sm uppercase tracking-[0.3em] text-accent">
          Case studies
        </p>
        <h2 className="reveal mt-4 text-5xl font-bold tracking-tight md:text-7xl">
          Selected work<span className="text-accent">.</span>
        </h2>
        <p className="reveal reveal-delay-1 mt-6 max-w-xl text-cream/60">
          Five projects. Five different problems. One obsession: designing
          things people actually want to use.
        </p>

        <div className="mt-24 flex flex-col gap-28">
          {projects.map((p, i) => (
            <a
              key={p.num}
              href={p.link ?? "#contact"}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              className={`project-card reveal group grid cursor-pointer items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-3xl">
                <div
                  className={`project-thumb flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${p.gradient}`}
                >
                  <span className="text-outline select-none text-[8rem] font-bold md:text-[10rem]">
                    {p.num}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cream/20 px-4 py-1 text-xs uppercase tracking-wider text-cream/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-4xl font-bold md:text-5xl">
                  {p.title}
                  <span className="project-arrow ml-3 inline-block text-accent">
                    ↗
                  </span>
                </h3>
                <p className="mt-1 text-lg text-accent">{p.subtitle}</p>
                <p className="mt-5 text-cream/60">{p.description}</p>
                <p className="mt-6 font-mono text-sm text-cream/80">
                  → {p.metric}
                </p>
                {p.link && (
                  <p className="mt-3 font-mono text-xs text-accent/80">
                    View in Figma ↗
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-accent px-6 py-40 text-ink"
    >
      <div className="blob left-[20%] top-[10%] h-[30vw] w-[30vw] bg-[#ffd23e]/60" />
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="reveal text-5xl font-bold tracking-tight md:text-8xl">
          Be the change your product needs.
        </h2>
        <p className="reveal reveal-delay-1 mx-auto mt-8 max-w-xl text-lg text-ink/70">
          Have a product that deserves better design? Let&apos;s talk about how
          we can fix the fragile in your interface.
        </p>
        <a
          href="mailto:dhwanip@marcusevans.com"
          className="reveal reveal-delay-2 mt-12 inline-block rounded-full bg-ink px-10 py-5 text-lg font-medium text-cream transition-transform duration-300 hover:scale-105"
        >
          Let&apos;s talk →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="reveal text-4xl font-bold tracking-tight md:text-6xl">
          Let&apos;s fix the fragile
          <br />
          in your interface<span className="text-accent">.</span>
        </h2>
        <div className="mt-16 flex flex-col justify-between gap-10 border-t border-cream/10 pt-10 md:flex-row">
          <div>
            <p className="text-xl font-bold">
              dhwani<span className="text-accent">.</span>
            </p>
            <p className="mt-2 text-sm text-cream/50">
              Product Designer — Mumbai, India
            </p>
          </div>
          <ul className="flex flex-wrap gap-6 text-sm text-cream/60">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Approach", "#approach"],
              ["Work", "#work"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6 text-sm text-cream/60">
            <li>
              <a
                href="https://www.linkedin.com/"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/"
                className="transition-colors hover:text-accent"
              >
                Dribbble
              </a>
            </li>
            <li>
              <a
                href="https://x.com/"
                className="transition-colors hover:text-accent"
              >
                X.com
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-10 text-xs text-cream/30">
          © {new Date().getFullYear()} Dhwani Patel. Designed with intent.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- page ---------------- */

export default function Home() {
  useReveal();
  return (
    <main className="w-full">
      <Nav />
      <Hero />
      <Statement />
      <Approach />
      <Why />
      <Marquee />
      <Work />
      <CTA />
      <Footer />
    </main>
  );
}
