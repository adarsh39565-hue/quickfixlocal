import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const services = [
  {
    title: "Plumbing",
    subtitle: "Leaks • Taps • Blockages",
    points: ["Leak repair", "Tap & mixer install", "Drain cleaning", "Bathroom fittings"],
    href: "/get-started?service=plumbing",
  },
  {
    title: "Electrician",
    subtitle: "Switch • Fan • Light",
    points: ["Switchboard repair", "Fan install/repair", "Light & wiring", "MCB/short-circuit checks"],
    href: "/get-started?service=electrician",
  },
  {
    title: "AC Repair",
    subtitle: "Cooling issue • Gas check",
    points: ["AC not cooling fix", "Gas check/refill", "Service & cleaning", "Basic diagnostics"],
    href: "/get-started?service=ac-repair",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute top-24 right-[-140px] h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-[-220px] left-1/3 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Top Nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
            <span className="h-5 w-5 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold">QuickFix Local</div>
            <div className="text-xs text-white/60">Noida • Pre-launch</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/get-started">
            <Button variant="outline" className="hidden md:inline-flex">
              Book a service
            </Button>
          </Link>
          <a href="#services">
            <Button>View services</Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              We’re building Noida’s trusted home service network
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Fast, verified home <br />
              services —{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                right at your doorstep.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Starting with the 3 most demanded categories: Plumbing, Electrician, AC Repair.
              Simple booking, transparent pricing, and real-time updates.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/get-started">
                <Button className="px-5">Book a service →</Button>
              </Link>
              <a href="#about">
                <Button variant="outline" className="px-5">
                  About QuickFix
                </Button>
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Card className="bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Launch city</div>
                <div className="mt-1 text-lg font-semibold">Noida</div>
              </Card>
              <Card className="bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Model</div>
                <div className="mt-1 text-lg font-semibold">Verified pros</div>
              </Card>
              <Card className="bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Status</div>
                <div className="mt-1 text-lg font-semibold">Pre-launch</div>
              </Card>
            </div>
          </div>

          {/* Right */}
          <Card className="bg-white/5 p-6 ring-1 ring-white/10">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-cyan-400/10 p-5 ring-1 ring-white/10">
              <h3 className="text-sm font-semibold">What you’ll get on Day 1</h3>

              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                    ✓
                  </span>
                  Verified professionals (KYC + skill checks)
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                    ✓
                  </span>
                  Transparent pricing (no surprise charges)
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                    ✓
                  </span>
                  Clean work & punctual arrival
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                    ✓
                  </span>
                  Booking + updates on WhatsApp/SMS
                </li>
              </ul>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="text-xs font-semibold text-white/70">Popular today</div>
                <div className="mt-3 grid gap-3">
                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">AC Repair</div>
                    <div className="text-xs text-white/60">Cooling issue • Gas check • Service</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">Plumbing</div>
                    <div className="text-xs text-white/60">Leak • Tap • Bathroom</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">Electrician</div>
                    <div className="text-xs text-white/60">Switch • Fan • Light</div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-white/50">
                  *Pre-launch note: timings, pricing and service areas will expand after pilot.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Our 3 Services (Noida)</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              We’re starting focused. Clear scope, quality checks, and fast resolution — built for
              Noida homes.
            </p>
          </div>
          <Link href="/get-started" className="hidden md:block">
            <Button variant="outline">Get started</Button>
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="mt-1 text-xs text-white/60">{s.subtitle}</div>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-blue-300">•</span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link href={s.href}>
                  <Button className="w-full">Book {s.title}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10">
        <Card className="bg-white/5 p-7 ring-1 ring-white/10">
          <h3 className="text-xl font-bold">About QuickFix Local</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            QuickFix Local is building a trusted network of home service professionals for Noida.
            Our focus is simple: verified workers, transparent pricing, punctual service, and
            clear communication. We’re pre-launch right now — building the system, onboarding
            professionals, and refining the customer experience before scale.
          </p>
        </Card>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold">When are you launching?</div>
            <div className="mt-2 text-sm text-white/70">
              We’re starting with a controlled pilot in Noida. Launch timing will be announced on
              our socials soon.
            </div>
          </Card>
          <Card className="bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold">How will pricing work?</div>
            <div className="mt-2 text-sm text-white/70">
              Upfront, transparent pricing for common tasks — no surprise charges. Complex jobs
              get a clear quote first.
            </div>
          </Card>
          <Card className="bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold">How do you verify pros?</div>
            <div className="mt-2 text-sm text-white/70">
              KYC checks, skill verification, and ongoing quality feedback loops.
            </div>
          </Card>
        </div>

        <footer className="mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <div>© {new Date().getFullYear()} QuickFix Local • Noida</div>
          <div className="flex gap-3">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
