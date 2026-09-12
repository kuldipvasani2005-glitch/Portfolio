import Image from "next/image";
import Link from "next/link";

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
  {
    name: "JobSeek",
    image: "/images/jobseek.png",
    description: "A recruitment platform concept built around clearer job discovery and candidate workflows.",
  },
  {
    name: "Bank",
    image: "/images/k2f.png",
    description: "A finance dashboard concept focused on simple account visibility and everyday banking actions.",
  },
];

const educationDetails = [
  {
    level: "School",
    years: "2011 - 2023",
    institution: "Shree Gadhpur Vidhyalay",
    qualification: "Higher Secondary Education",
    detail: "Built a strong foundation in mathematics, science, communication, and computer fundamentals.",
    logo: "/images/Gadhpur_logo.jpg",
    href: "/education/school",
  },
  {
    level: "College",
    years: "2023 - 2026",
    institution: "Shri Shambhubhai V. Patel College",
    qualification: "Bachelor of Computer Applications",
    detail: "Focused on software development, database design, web technologies, and practical application building.",
    logo: "/images/Svp_logo.jpg",
    cgpa: "8.0 / 10",
    href: "/education/college",
  },
];

export default function Home() {
  return (
    <section className="w-full !bg-transparent !shadow-none !border-0 p-0">
      <div className="min-h-[calc(100vh-110px)] flex items-center py-8 md:py-12">
        <div className="w-full min-w-0 max-w-7xl mx-auto grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="min-w-0 max-w-full text-left">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex max-w-full items-center rounded-full border border-[var(--card-border)] bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[var(--secondary)] uppercase">
                Available for work
              </span>
              <span className="inline-flex min-w-0 max-w-full items-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-xs font-medium text-[var(--text-muted)] break-words">
                React.js • Next.js • Node.js • NestJS
              </span>
            </div>

            <h1 className="max-w-full text-4xl font-black leading-[1.02] tracking-[-0.05em] break-words sm:max-w-xl sm:text-5xl md:text-6xl lg:text-[5rem]">
              Kuldip Vasani
              <span className="block text-[var(--primary)]">Full-Stack Web Developer</span>
            </h1>

            <p className="mt-6 max-w-full text-lg leading-8 text-[var(--text-muted)] break-words md:max-w-xl md:text-xl">
              I am a passionate Full-Stack Web Developer specializing in React.js, Next.js, Node.js, NestJS, and PostgreSQL, building scalable, secure, and high-performance web applications from frontend to backend.
            </p>

            <div className="hero-actions mt-8 flex max-w-full flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex max-w-full items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(92,71,255,0.45)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Book a project
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[var(--card-border)] bg-white/5 px-7 py-3.5 text-base font-semibold text-[var(--text-main)] transition-colors duration-200 hover:bg-white/10"
              >
                View portfolio
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-full border border-[var(--primary)] px-7 py-3.5 text-base font-semibold text-[var(--primary)] transition-colors duration-200 hover:bg-[var(--primary)] hover:text-white"
              >
                View resume
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-lg">
                <div className="text-2xl font-bold text-[var(--text-main)]">1+</div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">Years in design</div>
              </div>
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-lg">
                <div className="text-2xl font-bold text-[var(--text-main)]">4</div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">Projects done</div>
              </div>
              <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-lg">
                <div className="text-2xl font-bold text-[var(--text-main)]">60%</div>
                <div className="mt-1 text-sm text-[var(--text-muted)]">Client satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative flex min-w-0 max-w-full justify-center lg:justify-end">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-[var(--primary)]/25 via-[var(--secondary)]/15 to-[var(--accent)]/20 blur-3xl" />

            <div className="group relative flex h-[min(520px,85vw)] w-[min(520px,85vw)] max-w-full items-center justify-center rounded-[50%] border-[10px] border-white bg-[#f4f5f5] shadow-[0_40px_90px_rgba(70,40,120,0.45)] transition-transform duration-300 hover:scale-[1.01]">
              <div className="absolute inset-[16px] rounded-full bg-[#f4f5f5]" />

              <div className="relative z-10 h-[80%] w-[80%] overflow-hidden rounded-full bg-[#f3f2ef]">
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
                  className="h-full w-full object-contain p-5 mix-blend-multiply"
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

      <div className="w-full border-t border-[var(--card-border)] py-12 md:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Academic journey</p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--text-main)] md:text-4xl">School to software development</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--text-muted)]">
            A sample overview of the academic path behind my technical foundation and curiosity for building on the web.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {educationDetails.map((education) => (
            <Link
              key={education.level}
              href={education.href}
              className="group rounded-[28px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={education.logo}
                    alt={`${education.institution} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
                <span className="rounded-full border border-[var(--card-border)] px-3 py-1 text-xs font-semibold text-[var(--secondary)]">
                  {education.years}
                </span>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">{education.level}</p>
              <h3 className="mt-2 text-2xl font-black text-[var(--text-main)]">{education.qualification}</h3>
              <p className="mt-2 font-semibold text-[var(--primary)]">{education.institution}</p>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">{education.detail}</p>
              {education.cgpa && <p className="mt-4 text-sm font-bold text-[var(--secondary)]">CGPA: {education.cgpa}</p>}
              <span className="mt-5 inline-flex text-sm font-semibold text-[var(--secondary)] transition-colors group-hover:text-[var(--accent)]">
                Open full details -&gt;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
