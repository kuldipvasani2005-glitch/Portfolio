import Image from "next/image";

const projectHighlights = [
  "Guest arrival, registration, and visit tracking",
  "Vehicle registration, parking slot assignment, and exit tracking",
  "Temple guest management for groups, families, and individuals",
  "Parking availability monitoring and slot utilization reporting",
  "Visit history, arrival/departure logs, and guest record management",
  "Management dashboard and operational reporting for temple visitors",
];

export default function HarmonyProject() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)] md:p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Project</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--text-main)] md:text-5xl">
              Harmony
            </h1>
          </div>
          <a href="/projects" className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)]">
            ← Back to projects
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[28px] border border-[var(--card-border)] bg-[#f3f4f6] p-4">
            <div className="flex h-[220px] items-center justify-center overflow-hidden rounded-[22px] bg-white/70 md:h-[260px]">
              <Image
                src="/images/logo.svg"
                alt="Harmony project preview"
                width={500}
                height={500}
                className="h-[150px] w-auto object-contain md:h-[180px]"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Overview</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--text-main)]">
                Temple Guest, Parking & Visitor Management System
              </h2>
            </div>

            <p className="text-base leading-8 text-[var(--text-muted)]">
              Harmony is a temple guest and visitor-management platform designed to manage guest arrival, parking, registration, temple visit tracking, services, and guest departure in one centralized system.
            </p>

            <div className="rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
              <h3 className="text-xl font-bold text-[var(--text-main)]">Main business flow</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">
                Guest arrival → Parking → Registration → Guest management → Temple visit → Services/facilities → Departure → Parking exit
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[var(--text-main)]">Key features</h3>
              <ul className="mt-4 space-y-3">
                {projectHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-muted)]">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
              <h3 className="text-xl font-bold text-[var(--text-main)]">Overall description</h3>
              <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
                Harmony can therefore be described as a complete temple guest and visitor-management system combining guest registration, vehicle management, parking management, and temple-visit tracking into one centralized platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
