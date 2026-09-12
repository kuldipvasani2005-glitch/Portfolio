import Image from "next/image";

const projectHighlights = [
  "Laptop sales & purchase management",
  "Computer accessories and components tracking",
  "Inventory, stock, and serial number control",
  "Customer, supplier, and invoice management",
  "Service and after-sales support tracking",
  "Payment status, reports, and business analytics",
];

export default function MansoftProject() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)] md:p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Project</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--text-main)] md:text-5xl">
              Mansoft
            </h1>
          </div>
          <a href="/projects" className="text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)]">
            ← Back to projects
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[28px] border border-[var(--card-border)] bg-[#f3f4f6] p-4">
            <div className="flex h-[220px] items-center justify-center overflow-hidden rounded-[22px] bg-white/60 md:h-[260px]">
              <Image
                src="/images/monsoft.png"
                alt="Mansoft project preview"
                width={700}
                height={520}
                className="h-full w-full object-contain p-4"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Overview</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--text-main)]">
                IT Hardware & Accessories Business Management System
              </h2>
            </div>

            <p className="text-base leading-8 text-[var(--text-muted)]">
              Mansoft is an IT hardware and electronics business management platform designed for managing the complete lifecycle of laptops, computers, electronic devices, accessories, sales, purchases, inventory, customers, suppliers, services, and after-sales activities.
            </p>

            <a
              href="https://pos.mannsofts.com/auth/sign-in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
            >
              Visit live project -&gt;
            </a>

            <div className="rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
              <h3 className="text-xl font-bold text-[var(--text-main)]">Main business flow</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">
                Purchase → Inventory → Sales → Customer → Service → Payment → Reports
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
                Mansoft can therefore be described as an end-to-end IT hardware and accessories business management platform that handles product purchases, inventory, sales, customers, suppliers, invoices, payments, services, warranties, and operational reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
