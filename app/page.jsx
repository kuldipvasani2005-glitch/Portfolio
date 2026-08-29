import Image from "next/image";

const featuredProjects = [
  {
    name: "Mansoft",
    image: "/images/monsoft.png",
    description: "A polished digital product experience built for business growth and modern client engagement.",
  },
  {
    name: "Scrapex",
    image: "/images/logo-full.png",
    description: "A clean brand interface focused on smart operations, performance, and scalable workflows.",
  },
  {
    name: "Utara",
    image: "/images/akshardham.svg",
    description: "A strategic web presence designed to improve trust, storytelling, and conversion potential.",
  },
  {
    name: "Harmony",
    image: "/images/logo.svg",
    description: "An elegant identity and platform concept delivering a smoother customer journey and stronger presence.",
  },
];

export default function Home() {
  return (
    <section className="w-full !bg-transparent !shadow-none !border-0 p-0">
      <div className="min-h-[calc(100vh-110px)] flex items-center py-8 md:py-12">
        <div className="w-full max-w-7xl mx-auto grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="text-left">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-[var(--card-border)] bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[var(--secondary)] uppercase">
                Available for work
              </span>
              <span className="inline-flex items-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-xs font-medium text-[var(--text-muted)]">
                React.js • Next.js • Node.js • NestJS
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[5rem]">
              Kuldip Vasani
              <span className="block text-[var(--primary)]">Full-Stack Web Developer</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-muted)] md:text-xl">
              I am a passionate Full-Stack Web Developer specializing in React.js, Next.js, Node.js, NestJS, and PostgreSQL, building scalable, secure, and high-performance web applications from frontend to backend.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(92,71,255,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Book a project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-[var(--card-border)] bg-white/5 px-7 py-3.5 text-base font-semibold text-[var(--text-main)] transition-colors duration-200 hover:bg-white/10"
              >
                View portfolio
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-lg">
                <div className="text-2xl font-bold text-[var(--text-main)]">6+</div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">Years in design</div>
              </div>
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-lg">
                <div className="text-2xl font-bold text-[var(--text-main)]">42</div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">Projects done</div>
              </div>
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-lg">
                <div className="text-2xl font-bold text-[var(--text-main)]">96%</div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">Client satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-[var(--primary)]/25 via-[var(--secondary)]/15 to-[var(--accent)]/20 blur-3xl" />

            <div className="group relative flex h-[520px] w-[520px] max-w-full items-center justify-center rounded-[50%] border-[10px] border-white bg-[#f4f5f5] shadow-[0_40px_90px_rgba(70,40,120,0.45)] transition-transform duration-300 hover:scale-[1.01]">
              <div className="absolute inset-[16px] rounded-full bg-[#f4f5f5]" />

              <div className="relative z-10 h-[420px] w-[420px] overflow-hidden rounded-full bg-[#f3f2ef]">
                <Image
                  src="/my.png"
                  alt="Professional portfolio portrait"
                  width={520}
                  height={600}
                  className="h-full w-full scale-[1.04] object-cover object-center transition-transform duration-500 group-hover:scale-[1.12]"
                  priority
                />
              </div>

              <div className="absolute left-4 top-4 z-20 rounded-[22px] border border-white/15 bg-[#1f2430]/90 px-4 py-3 shadow-[0_18px_35px_rgba(15,23,42,0.25)] opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 backdrop-blur-md">
                <div className="text-[9px] uppercase tracking-[0.22em] text-[#d6d9e2]">Focus</div>
                <div className="mt-1 text-[1.5rem] font-black leading-[1.05] tracking-[-0.05em] text-white">Brand + Growth</div>
              </div>

              <div className="absolute -right-4 bottom-10 z-20 rounded-2xl border border-white/20 bg-slate-950/70 px-4 py-3 shadow-xl opacity-0 transition-all duration-500 ease-out delay-100 group-hover:opacity-100 backdrop-blur-md">
                <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)]">Available</div>
                <div className="mt-1 text-[1.4rem] font-black tracking-[-0.05em] text-white">Q4 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="w-full pt-6 pb-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--text-main)]"> projects</h2>
          </div>
          <a href="/projects" className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)]">
            See all →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="overflow-hidden rounded-[28px] border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-[22px] bg-[#f3f4f6]">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  width={560}
                  height={340}
                  className="h-full w-full object-contain p-5"
                />
              </div>

              <div className="px-2 pb-2 pt-5">
                <div className="text-3xl font-black tracking-[-0.04em] text-[var(--text-main)]">{project.name}</div>
                <div className="mt-3 text-base leading-7 text-[var(--text-muted)]">{project.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
