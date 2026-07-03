"use client";

import { useEffect, useState } from "react";

/* ---------------- data ---------------- */

const projects = [
  {
    num: "01",
    title: "Finlo",
    subtitle: "Fintech budgeting app",
    tags: ["Mobile App", "UX Research", "UI Design"],
    description:
      "End-to-end design of a personal finance app that turns budgeting from a chore into a habit. Led research with 40+ users, mapped the money-anxiety journey, and designed a calm, glanceable interface.",
    metric: "+38% 90-day retention",
    gradient: "from-[#ff5c39] via-[#ff8f6b] to-[#ffd0a8]",
  },
  {
    num: "02",
    title: "Carely",
    subtitle: "Telehealth patient portal",
    tags: ["Web App", "Accessibility", "Design System"],
    description:
      "Redesigned a legacy patient portal used by 200k patients. Rebuilt the appointment and prescription flows around WCAG 2.2 AA, cutting support calls and making care reachable for everyone.",
    metric: "-41% support tickets",
    gradient: "from-[#3ec6ff] via-[#6b8cff] to-[#b39dff]",
  },
  {
    num: "03",
    title: "Shopstream",
    subtitle: "Live shopping platform",
    tags: ["E-commerce", "Interaction Design", "Prototyping"],
    description:
      "Designed a live-video shopping experience from zero to launch — real-time chat, one-tap checkout, and host tools. Prototyped in Figma and Framer, tested weekly, shipped in 12 weeks.",
    metric: "+24% checkout conversion",
    gradient: "from-[#ffd23e] via-[#ff9d3e] to-[#ff5c39]",
  },
  {
    num: "04",
    title: "Atlas HR",
    subtitle: "B2B SaaS design system",
    tags: ["Design System", "SaaS Dashboard", "Figma Library"],
    description:
      "Built a 120+ component design system for an HR analytics platform, unifying five inconsistent products into one language. Tokens, docs, and governance that let devs ship 2x faster.",
    metric: "120+ components, 5 products unified",
    gradient: "from-[#6bffb8] via-[#3ec6ff] to-[#2b6bff]",
  },
  {
    num: "05",
    title: "Wander",
    subtitle: "Travel planning app concept",
    tags: ["Brand Identity", "Product Design", "Motion"],
    description:
      "A concept app that plans trips around moods, not checklists. Owned everything from brand identity and motion language to the swipe-to-itinerary interaction that made it feel like play.",
    metric: "Featured on design showcases",
    gradient: "from-[#ff6bcb] via-[#b39dff] to-[#3ec6ff]",
  },
];

const strengths = [
  {
    num: "01",
    title: "Research that digs deeper",
    body: "I start with people, not pixels. Interviews, usability tests and journey maps that uncover what users actually need — not what they say they want.",
  },
  {
    num: "02",
    title: "Systems thinking",
    body: "Every screen I design belongs to a system. Tokens, components and patterns that scale gracefully instead of collapsing under their own weight.",
  },
  {
    num: "03",
    title: "Prototype early, test often",
    body: "Ideas earn their place. I build interactive prototypes fast and put them in front of real users before a single line of code is written.",
  },
  {
    num: "04",
    title: "Fluent with developers",
    body: "I speak flexbox and API constraints. Handoffs are conversations, not PDF dumps — so what ships looks like what was designed.",
  },
  {
    num: "05",
    title: "Motion with meaning",
    body: "Animation isn't decoration. I use motion to explain hierarchy, guide attention and give products a personality users remember.",
  },
  {
    num: "06",
    title: "Business-aware design",
    body: "Beautiful is not enough. Every design decision I make maps to a metric — retention, conversion, support load — so design earns its seat at the table.",
  },
];

const tools = [
  "Figma", "Framer", "Protopie", "Webflow", "Adobe CC", "Blender",
  "Maze", "Notion", "Miro", "After Effects", "Lottie", "Spline",
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
          I&apos;m Dhwani Patel, a product &amp; UI/UX designer. Let&apos;s make
          something unforgettable instead.
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
            They come from understanding people — their habits, fears and the
            jobs they hire your product to do.
          </p>
          <p className="reveal reveal-delay-2 text-xl leading-relaxed text-ink/70">
            Product success requires a shift in how teams think about design:
            from decoration at the end, to strategy from the start. That&apos;s
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
            <article
              key={p.num}
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
              </div>
            </article>
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
              Product &amp; UI/UX Designer
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
