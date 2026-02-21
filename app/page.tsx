import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  ShieldCheck,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    name: "Plumbing",
    icon: Wrench,
    short:
      "Leaks, taps, blockages, fittings — quick fixes with clean finishing.",
    bullets: ["Leak repair", "Tap & mixer install", "Drain cleaning", "Bathroom fittings"],
    href: "/book?service=Plumbing",
  },
  {
    name: "Electrician",
    icon: Zap,
    short:
      "Switches, fans, lights, MCBs — safe work with proper testing.",
    bullets: ["Switch & socket", "Fan installation", "Light wiring", "MCB & fuse issues"],
    href: "/book?service=Electrician",
  },
  {
    name: "AC Repair",
    icon: Snowflake,
    short:
      "Cooling issues, gas check, service — fast diagnosis & resolution.",
    bullets: ["Not cooling", "Gas check", "Service & cleaning", "Noise / water leak"],
    href: "/book?service=AC%20Repair",
  },
];

const TRUST = [
  {
    title: "Verified Professionals",
    desc: "KYC + skill checks before onboarding. Only quality-first technicians.",
    icon: BadgeCheck,
  },
  {
    title: "Transparent Pricing",
    desc: "Clear scope and pricing. No surprise add-ons without approval.",
    icon: ShieldCheck,
  },
  {
    title: "On-time & Updates",
    desc: "Booking confirmation + updates on WhatsApp/SMS (pre-launch roadmap).",
    icon: Clock,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">QuickFix Local</div>
              <div className="text-xs text-slate-500">Noida • Pre-launch</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
            >
              Book a service
            </Link>
            <Link
              href="#services"
              className="hidden items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 md:inline-flex"
            >
              View services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-200 blur-3xl" />
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              We’re building Noida’s trusted home service network
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Fast, verified home services —
              <span className="text-indigo-600"> right at your doorstep.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Starting with the 3 most demanded categories:{" "}
              <span className="font-medium text-slate-800">
                Plumbing, Electrician, AC Repair
              </span>
              . Simple booking, transparent pricing, and real-time updates.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Book a service <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                About QuickFix
              </a>
            </div>

            {/* Small stats */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs text-slate-500">Launch city</div>
                <div className="mt-1 text-sm font-semibold">Noida</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs text-slate-500">Model</div>
                <div className="mt-1 text-sm font-semibold">Verified pros</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs text-slate-500">Status</div>
                <div className="mt-1 text-sm font-semibold">Pre-launch</div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              What you’ll get on Day 1
            </div>

            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <BadgeCheck className="h-5 w-5 text-emerald-600" />
                Verified professionals (KYC + skill checks)
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                Transparent pricing (no surprise charges)
              </li>
              <li className="flex gap-2">
                <Clock className="h-5 w-5 text-emerald-600" />
                Clean work & punctual arrival
              </li>
              <li className="flex gap-2">
                <BadgeCheck className="h-5 w-5 text-emerald-600" />
                Booking + updates on WhatsApp/SMS
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <div className="text-xs font-semibold text-slate-700">Popular today</div>
              <div className="mt-3 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">AC Repair</div>
                    <div className="text-xs text-slate-600">
                      Cooling issue • Gas check • Service
                    </div>
                  </div>
                  <Link href="/book?service=AC%20Repair" className="text-xs font-semibold text-indigo-600 hover:underline">
                    Book
                  </Link>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">Plumbing</div>
                    <div className="text-xs text-slate-600">
                      Leak • Tap • Bathroom
                    </div>
                  </div>
                  <Link href="/book?service=Plumbing" className="text-xs font-semibold text-indigo-600 hover:underline">
                    Book
                  </Link>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">Electrician</div>
                    <div className="text-xs text-slate-600">
                      Switch • Fan • Light
                    </div>
                  </div>
                  <Link href="/book?service=Electrician" className="text-xs font-semibold text-indigo-600 hover:underline">
                    Book
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              *Pre-launch note: timings, pricing and service areas will expand after pilot.
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Our 3 Services (Noida)
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                We’re starting focused. Clear scope, quality checks, and fast resolution —
                so Day 1 experience feels premium.
              </p>
            </div>
            <Link
              href="/book"
              className="hidden rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 md:inline-flex"
            >
              Book now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-slate-100 p-3">
                      <Icon className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{s.name}</div>
                      <div className="text-xs text-slate-500">Noida • Pre-launch</div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-600">{s.short}</p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href={s.href}
                      className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:underline"
                    >
                      Book {s.name} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <span className="text-xs text-slate-500">Response within hours*</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About / Trust */}
      <section id="about" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                About QuickFix Local
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                QuickFix Local is a Noida-first home service platform built for one thing:
                <span className="font-medium text-slate-900"> reliability.</span>  
                We’re launching with fewer categories on purpose — to deliver consistent quality,
                punctual arrival, and clean finishing.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Our plan is simple: build trust locally, standardize operations, then scale
                category-by-category and sector-by-sector across NCR.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
                >
                  Get early access <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  Book a service
                </Link>
              </div>

              <div className="mt-3 text-xs text-slate-500">
                *Early access form helps us prioritize service areas & staffing.
              </div>
            </div>

            <div className="grid gap-4">
              {TRUST.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-2xl bg-slate-100 p-3">
                        <Icon className="h-5 w-5 text-slate-900" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{t.title}</div>
                        <div className="mt-1 text-sm text-slate-600">{t.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">Where we are right now</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Website + booking flow ready (pilot mode)
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Building verified pro network in Noida
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    Pricing SOP + service checklists finalizing
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    WhatsApp/SMS updates integration (next milestone)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">Are you live in Noida right now?</div>
              <p className="mt-2 text-sm text-slate-600">
                We’re in pre-launch pilot. You can submit a booking request and we’ll
                confirm availability based on slots and pro coverage.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">How do you verify professionals?</div>
              <p className="mt-2 text-sm text-slate-600">
                KYC checks, basic skill validation, and service-level SOPs. Our goal is
                clean work + punctual arrival — consistently.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">Why only 3 services?</div>
              <p className="mt-2 text-sm text-slate-600">
                Focus = quality. We’re starting with the highest demand categories and
                scaling step-by-step after reliability is proven.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">What’s next after pilot?</div>
              <p className="mt-2 text-sm text-slate-600">
                Expand coverage in Noida → add more categories → standardize operations →
                grow across NCR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">QuickFix Local</span> — Noida-first home services (Pre-launch).
          </div>
          <div className="flex gap-4 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
