"use client";

import Image from "next/image";
import { useState } from "react";

const contactInfo = [
  { label: "Phone", value: "+91 9427931932", href: "tel:+919427931932" },
  { label: "Email", value: "kuldipvasani2005@gmail.com", href: "mailto:kuldipvasani2005@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/kuldip-vasani-b331a4312", href: "https://www.linkedin.com/in/kuldip-vasani-b331a4312" },
  { label: "Location", value: "Surat, Gujarat, India" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(form.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `New portfolio inquiry\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Subject: ${form.subject}\n\n` +
        `Message:\n${form.message}`
    );

    window.location.href = `mailto:kuldipvasani2005@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your email app is opening with the full sender details included.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="w-full py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--secondary)]">Contact</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[var(--text-main)] md:text-6xl">
            Let’s build something great together.
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] md:p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[var(--primary)] bg-white">
                <Image
                  src="/my.png"
                  alt="Kuldip Vasani"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">Profile</p>
                <h2 className="text-2xl font-black text-[var(--text-main)] md:text-3xl">Kuldip Vasani</h2>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="border-b border-[var(--card-border)] pb-3 last:border-b-0 last:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--secondary)]">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-1 block text-base font-medium text-[var(--text-main)] transition-colors hover:text-[var(--primary)]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-medium text-[var(--text-main)]">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--secondary)]">Send a message</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[var(--text-main)]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-[var(--card-border)] bg-[#f5f7fa] px-4 py-3 text-[var(--text-main)] outline-none transition focus:border-[var(--primary)]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[var(--text-main)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-[var(--card-border)] bg-[#f5f7fa] px-4 py-3 text-[var(--text-main)] outline-none transition focus:border-[var(--primary)]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[var(--text-main)]">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full rounded-2xl border border-[var(--card-border)] bg-[#f5f7fa] px-4 py-3 text-[var(--text-main)] outline-none transition focus:border-[var(--primary)]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[var(--text-main)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-2xl border border-[var(--card-border)] bg-[#f5f7fa] px-4 py-3 text-[var(--text-main)] outline-none transition focus:border-[var(--primary)]"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3 text-base font-semibold text-white shadow-[0_18px_40px_rgba(92,71,255,0.4)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Send Message
                </button>

                {status ? <p className="text-sm text-[var(--secondary)]">{status}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
