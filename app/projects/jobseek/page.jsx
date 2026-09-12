import Image from "next/image";
import Link from "next/link";

const features = [
  "Job search, filtering, and saved opportunity workflows",
  "Candidate profiles, applications, and application status tracking",
  "Employer job posting and applicant management",
  "Interview scheduling and recruitment pipeline visibility",
  "Skill-based matching and notification-ready architecture",
];

export default function JobSeekProject() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)] md:p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Project</p><h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--text-main)] md:text-5xl">JobSeek</h1></div>
          <Link href="/projects" className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)]">&lt;- Back to projects</Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[28px] border border-[var(--card-border)] bg-[#f3f4f6] p-4"><div className="flex h-[220px] items-center justify-center overflow-hidden rounded-[22px] bg-transparent md:h-[260px]"><Image src="/images/jobseek.png" alt="JobSeek project preview" width={700} height={520} className="h-full w-full object-contain mix-blend-multiply" priority /></div></div>
          <div className="space-y-6">
            <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Overview</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--text-main)]">Candidate & Recruitment Management Platform</h2></div>
            <p className="text-base leading-8 text-[var(--text-muted)]">JobSeek is a dummy portfolio concept for a recruitment platform that brings candidates, employers, job discovery, and hiring workflows into one clear digital experience.</p>
            <div className="rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5"><h3 className="text-xl font-bold text-[var(--text-main)]">Main business flow</h3><p className="mt-3 text-base leading-7 text-[var(--text-muted)]">Profile → Search → Apply → Review → Interview → Hire</p></div>
            <div><h3 className="text-xl font-bold text-[var(--text-main)]">Key features</h3><ul className="mt-4 space-y-3">{features.map((item) => <li key={item} className="flex items-start gap-3 text-base leading-7 text-[var(--text-muted)]"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" /><span>{item}</span></li>)}</ul></div>
          </div>
        </div>
      </div>
    </section>
  );
}