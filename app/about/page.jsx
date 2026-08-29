const profileStats = [
  { label: "Experience", value: "1+ Years" },
  { label: "Role", value: "Full-Stack" },
  { label: "Focus", value: "React / Next" },
  { label: "Location", value: "Surat, Gujarat" },
];

const skillList = [
  "React.js",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Git",
  "REST APIs",
  "Database Design",
];

const timeline = [
  {
    year: "February 2026 - Present",
    title: "Full Stack Developer (NextJS & NestJS)",
    company: "Clonza Infotech",
    text: "Working on modern full-stack solutions using NestJS, Next.js, and PostgreSQL with a focus on scalable, secure, and business-ready web applications.",
  },
  {
    year: "January 2026 - February 2026",
    title: "Full Stack Developer",
    company: "Creative Design & Multimedia Institute",
    text: "Built and supported web development work focused on functional interfaces and practical application development.",
  },
  {
    year: "July 2023 - April 2026",
    title: "Bachelor of Computer Applications",
    company: "Shri Shambhubhai V. Patel College of Computer Science & Business Management",
    text: "Focused on Information Technology and computer application fundamentals, developing a strong technical and problem-solving foundation.",
  },
];

const personalInfo = [
  { label: "Name", value: "Kuldip Vasani" },
  { label: "Role", value: "Full-Stack Web Developer" },
  { label: "Email", value: "kuldipvasani2005@gmail.com" },
  { label: "Phone", value: "+91 9427931932" },
  { label: "LinkedIn", value: "linkedin.com/in/kuldip-vasani-b331a4312", href: "https://www.linkedin.com/in/kuldip-vasani-b331a4312" },
  { label: "Location", value: "Surat, Gujarat, India" },
];

export default function About() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">About Me</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--text-main)] md:text-6xl">
            Full-Stack Web Developer
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[30px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-xl font-black text-white">
                KV
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">Profile</p>
                <h2 className="text-2xl font-black text-[var(--text-main)] md:text-3xl">Kuldip Vasani</h2>
              </div>
            </div>

            <p className="text-base leading-8 text-[var(--text-muted)] md:text-lg">
              I am a passionate and motivated Full-Stack Web Developer with hands-on experience in building modern, scalable, and high-performance web applications using React.js, Next.js, Node.js, NestJS, and PostgreSQL.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--text-muted)] md:text-lg">
              I enjoy developing end-to-end solutions that combine clean frontend experiences with secure and efficient backend systems. On the frontend, I work with React.js and Next.js to create responsive, dynamic, and SEO-friendly applications, with a focus on reusable components, performance optimization, and smooth user experience across devices.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--text-muted)] md:text-lg">
              On the backend, I build secure and scalable RESTful APIs using Node.js and NestJS, following structured architecture, validation, authentication, and error handling practices to ensure maintainable and production-ready applications. I use PostgreSQL for relational database design, schema management, and optimized queries.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {profileStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[var(--card-border)] bg-[#f5f7fa] p-4 text-center">
                  <div className="text-2xl font-black text-[var(--text-main)]">{stat.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--secondary)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Quick Info</p>
              <div className="mt-5 space-y-4">
                {personalInfo.map((item) => (
                  <div key={item.label} className="border-b border-[var(--card-border)] pb-3 last:border-b-0 last:pb-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block text-base font-medium text-[var(--primary)] underline decoration-[var(--primary)]/50 underline-offset-4 transition-colors hover:text-[var(--accent)]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-[var(--text-main)]">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-[var(--card-border)] pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Top Skills</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="rounded-full border border-[var(--card-border)] bg-[#f5f7fa] px-3 py-2 text-sm font-medium text-[var(--text-main)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-1">
          <div className="rounded-[30px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Experience</p>
            <div className="mt-6 space-y-5">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-[var(--primary)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--secondary)]">{item.year}</p>
                  <h3 className="mt-1 text-xl font-bold text-[var(--text-main)]">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--secondary)]">{item.company}</p>
                  <p className="mt-2 text-base leading-7 text-[var(--text-muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
