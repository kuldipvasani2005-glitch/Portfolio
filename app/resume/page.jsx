"use client";

import Link from "next/link";

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "NestJS",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "REST APIs",
  "HTML5 / CSS3",
  "Git",
];

const experience = [
  {
    period: "February 2026 - Present",
    role: "Full Stack Developer",
    company: "Clonza Infotech",
    description: "Build modern full-stack solutions with Next.js, NestJS, and PostgreSQL. Work across responsive frontend experiences, secure APIs, database workflows, validation, authentication, and production-ready business features.",
  },
  {
    period: "January 2026 - February 2026",
    role: "Full Stack Developer",
    company: "Creative Design & Multimedia Institute",
    description: "Supported practical web development work by creating functional interfaces, reusable components, and application features with a focus on clarity, responsiveness, and maintainable code.",
  },
];

const projects = [
  "Mansoft - IT hardware and accessories business management platform",
  "ScrapEX - Scrap marketplace, ordering, and auction platform",
  "Utara - Dormitory, guest accommodation, and room management system",
  "Harmony - Temple guest, parking, and visitor management system",
];

export default function Resume() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="resume-sheet mx-auto max-w-5xl rounded-[30px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-10">
        <div className="print-hidden mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold text-[var(--secondary)] hover:text-[var(--accent)]">
            &lt;- Back to portfolio
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
          >
            Print / Save as PDF
          </button>
        </div>

        <header className="resume-header border-b-2 border-[var(--primary)] pb-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--secondary)]">Resume</p>
              <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--text-main)] md:text-6xl">Kuldip Vasani</h1>
              <p className="mt-3 text-xl font-bold text-[var(--primary)]">Full-Stack Web Developer</p>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-muted)]">
            Motivated Full-Stack Web Developer experienced in building responsive frontend applications, secure backend APIs, database systems, and practical business platforms from concept to delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[var(--text-muted)]">
            <a href="mailto:kuldipvasani2005@gmail.com" className="hover:text-[var(--primary)]">kuldipvasani2005@gmail.com</a>
            <a href="tel:+919427931932" className="hover:text-[var(--primary)]">+91 9427931932</a>
            <span>Surat, Gujarat, India</span>
            <a href="https://www.linkedin.com/in/kuldip-vasani-b331a4312" target="_blank" rel="noreferrer" className="hover:text-[var(--primary)]">LinkedIn</a>
          </div>
        </header>

        <div className="resume-columns mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-10 lg:border-r lg:border-dashed lg:border-[var(--card-border)] lg:pr-10">
            <section className="resume-section m-0 !rounded-none !bg-transparent !p-0 !shadow-none">
              <h2 className="resume-section-title text-2xl font-black text-[var(--text-main)]">Professional experience</h2>
              <div className="mt-6 space-y-7">
                {experience.map((item) => (
                  <article key={item.company} className="border-l-2 border-[var(--primary)] pl-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">{item.period}</p>
                    <h3 className="mt-2 text-xl font-bold text-[var(--text-main)]">{item.role}</h3>
                    <p className="mt-1 font-semibold text-[var(--primary)]">{item.company}</p>
                    <p className="mt-3 leading-7 text-[var(--text-muted)]">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section m-0 !rounded-none !bg-transparent !p-0 !shadow-none">
              <h2 className="resume-section-title text-2xl font-black text-[var(--text-main)]">Selected projects</h2>
              <ul className="mt-5 space-y-3">
                {projects.map((project) => (
                  <li key={project} className="flex gap-3 leading-7 text-[var(--text-muted)]">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="resume-section m-0 !rounded-none !bg-transparent !p-0 !shadow-none">
              <h2 className="resume-section-title text-2xl font-black text-[var(--text-main)]">Technical skills</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-[var(--card-border)] px-3 py-2 text-sm font-medium text-[var(--text-main)]">{skill}</span>
                ))}
              </div>
            </section>

            <section className="resume-section m-0 !rounded-none !bg-transparent !p-0 !shadow-none">
              <h2 className="resume-section-title text-2xl font-black text-[var(--text-main)]">Education</h2>
              <div className="mt-5 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">2023 - 2026</p>
                  <h3 className="mt-2 font-bold text-[var(--text-main)]">Bachelor of Computer Applications</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">Shri Shambhubhai V. Patel College, Surat, Gujarat</p>
                  <p className="mt-2 text-sm font-bold text-[var(--secondary)]">CGPA: 8.0 / 10</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">2011 - 2023</p>
                  <h3 className="mt-2 font-bold text-[var(--text-main)]">Higher Secondary Education</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">Shree Gadhpur Vidhyalay, Gadhpur, Gujarat</p>
                </div>
              </div>
            </section>

            <section className="resume-section m-0 !rounded-none !bg-transparent !p-0 !shadow-none">
              <h2 className="resume-section-title text-2xl font-black text-[var(--text-main)]">Strengths</h2>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">Problem solving, clean UI implementation, API design, database modeling, responsive development, teamwork, and continuous learning.</p>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}