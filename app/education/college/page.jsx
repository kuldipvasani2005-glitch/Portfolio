import Image from "next/image";
import Link from "next/link";

export default function CollegeEducation() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[var(--secondary)] hover:text-[var(--accent)]">
          &lt;- Back to home
        </Link>

        <div className="mt-8 rounded-[30px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white">
                <Image src="/images/Svp_logo.jpg" alt="Shri Shambhubhai V. Patel College logo" width={64} height={64} className="h-full w-full object-contain p-1" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">College education</p>
                <h1 className="mt-2 text-3xl font-black text-[var(--text-main)] md:text-5xl">Shri Shambhubhai V. Patel College</h1>
              </div>
            </div>
            <span className="rounded-full border border-[var(--card-border)] px-4 py-2 text-sm font-semibold text-[var(--secondary)]">2023 - 2026</span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">Qualification</p>
              <p className="mt-2 text-xl font-bold text-[var(--text-main)]">Bachelor of Computer Applications</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">Academic focus</p>
              <p className="mt-2 text-xl font-bold text-[var(--text-main)]">Computer applications and full-stack web development</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">CGPA</p>
              <p className="mt-2 text-xl font-bold text-[var(--text-main)]">8.0 / 10</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">Address</p>
              <p className="mt-2 text-xl font-bold text-[var(--text-main)]">Shri Shambhubhai V. Patel College, Surat, Gujarat, India</p>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--card-border)] pt-8">
            <h2 className="text-2xl font-black text-[var(--text-main)]">About this stage</h2>
            <p className="mt-4 leading-8 text-[var(--text-muted)]">My Bachelor of Computer Applications studies at Shri Shambhubhai V. Patel College gave me a practical understanding of how software systems are planned, designed, developed, and maintained.</p>
            <p className="mt-4 leading-8 text-[var(--text-muted)]">I strengthened my skills in programming, database design, web technologies, software engineering, and networking while working on practical projects. This academic experience prepared me to build modern full-stack applications with clean interfaces and dependable backend systems.</p>
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--card-border)] bg-white/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">Subjects studied</p>
            <p className="mt-2 leading-7 text-[var(--text-muted)]">Programming, database management, web development, software engineering, and networking.</p>
          </div>
        </div>
      </div>
    </section>
  );
}