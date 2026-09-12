import Image from "next/image";
import Link from "next/link";

const projectItems = [
  {
    name: "Mansoft",
    image: "/images/monsoft.png",
    description: "A business-focused digital product experience created to increase efficiency, trust, and visibility.",
    href: "/projects/mansoft",
  },
  {
    name: "Scrapex",
    image: "/images/logo-full.png",
    description: "A modern brand and operations platform designed to showcase services and convert interested leads.",
    href: "/projects/scrapex",
  },
  {
    name: "Utara",
    image: "/images/akshardham.svg",
    description: "A premium, storytelling-driven website concept crafted for a polished professional identity.",
    href: "/projects/utara",
  },
  {
    name: "Harmony",
    image: "/images/logo.svg",
    description: "A refined creative platform emphasizing balance, clarity, and strong visual storytelling for users.",
    href: "/projects/harmony",
  },
  {
    name: "JobSeek",
    image: "/images/jobseek.png",
    description: "A focused recruitment platform concept connecting candidates with relevant opportunities and hiring teams.",
    href: "/projects/jobseek",
  },
  {
    name: "Bank",
    image: "/images/k2f.png",
    description: "A clean banking dashboard concept for account insights, transactions, transfers, and financial planning.",
    href: "/projects/bank",
  },
];

export default function Projects() {
  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-zinc-900 dark:text-white md:text-6xl">
          Projects
        </h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
        {projectItems.map((project) => (
          <Link key={project.name} href={project.href} className="block w-full max-w-[520px]">
            <article className="h-full overflow-hidden rounded-[28px] border border-[var(--card-border)] bg-[var(--card-bg)] p-4 shadow-[0_18px_36px_rgba(15,23,42,0.04)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(15,23,42,0.08)]">
              <div className="flex h-[240px] items-center justify-center overflow-hidden rounded-[22px] bg-[#f3f4f6]">
                <Image
                  src={project.image}
                  alt={`${project.name} project image`}
                  width={420}
                  height={260}
                  className="h-full w-full object-contain p-4 mix-blend-multiply"
                />
              </div>

              <div className="mt-5 px-2 pb-2">
                <h2 className="text-[2rem] font-bold leading-none text-[var(--text-main)]">{project.name}</h2>
                <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">{project.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
