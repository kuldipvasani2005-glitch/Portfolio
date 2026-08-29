import Image from "next/image";

const projectHighlights = [
  "Building, floor, room, and bed-level allocation management",
  "Dormitory, AC, and non-AC room operations",
  "Guest registration, booking, and check-in/check-out tracking",
  "Room capacity and gender-based allocation rules",
  "Room assets, amenities, and availability management",
  "QR-based guest feedback and stay reporting",
];

export default function UtaraProject() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)] md:p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Project</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--text-main)] md:text-5xl">
              Utara
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
                src="/images/akshardham.svg"
                alt="Utara project preview"
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
                Complete Dormitory & Room Management System
              </h2>
            </div>

            <p className="text-base leading-8 text-[var(--text-muted)]">
              Utara is a complete dormitory, guest accommodation, and room-management platform designed to manage guests, rooms, buildings, floors, room types, bookings, allocations, assets, check-in/check-out, and feedback.
            </p>

            <div className="rounded-[24px] border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
              <h3 className="text-xl font-bold text-[var(--text-main)]">Main business flow</h3>
              <p className="mt-3 text-base leading-7 text-[var(--text-muted)]">
                Building → Floor → Room → Bed/Capacity → Guest
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
                Utara can therefore be described as a complete dormitory and accommodation management system for managing guests, buildings, floors, AC/non-AC rooms, dormitories, room capacity, bookings, gender-based allocation, assets, check-in/check-out, and QR-based guest feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
