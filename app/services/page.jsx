const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end website and web app development using React.js, Next.js, Node.js, NestJS, and PostgreSQL for robust, business-ready digital products.",
  },
  {
    title: "Frontend Development",
    description: "Responsive and high-performance user interfaces with modern UI architecture, reusable components, accessibility, and SEO-friendly frontend experiences.",
  },
  {
    title: "Backend & API Development",
    description: "Secure REST API development, authentication, business logic, and scalable server-side architecture for production systems and client platforms.",
  },
  {
    title: "Database Design & Optimization",
    description: "PostgreSQL schema design, data modeling, optimized queries, and efficient database structure planning for growing business applications.",
  },
  {
    title: "Business Dashboard & Portal Development",
    description: "Custom admin panels, reporting dashboards, CRM workflows, and operational portals designed to simplify internal and client-side processes.",
  },
  {
    title: "Website Maintenance & Support",
    description: "Performance tuning, feature upgrades, code fixes, and ongoing support to keep websites reliable, modern, and business-ready.",
  },
  {
    title: "Custom Web Applications",
    description: "Tailored applications for inventory, management, e-commerce, service systems, and digital business workflows built around your real operational needs.",
  },
  {
    title: "UI/UX Implementation",
    description: "Turning design concepts into polished interfaces with clear structure, consistent UX patterns, and responsive behavior across devices.",
  },
  {
    title: "Product & MVP Development",
    description: "Helping startups and businesses build MVPs and early-stage products with scalable architecture and efficient feature delivery.",
  },
];

export default function Services() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">Services</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--text-main)] md:text-6xl">
            Digital solutions built for business growth.
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[28px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-lg font-black text-white">
                {service.title.charAt(0)}
              </div>

              <h2 className="text-2xl font-black tracking-[-0.03em] text-[var(--text-main)]">
                {service.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
