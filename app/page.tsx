import Link from "next/link";

const services = [
  {
    title: "Plumbing",
    desc: "Leaks, blockages, fittings — quick fixes + proper solutions.",
    points: ["Leak repair", "Tap & mixer install", "Drain cleaning", "Bathroom fittings"],
    href: "/book?service=Plumbing",
  },
  {
    title: "Electrician",
    desc: "Switches, fans, lights — safe, clean and on-time work.",
    points: ["Switch/socket repair", "Fan installation", "Light & wiring fixes", "MCB issues"],
    href: "/book?service=Electrician",
  },
  {
    title: "AC Repair",
    desc: "Cooling issues, gas check, servicing — faster resolution.",
    points: ["AC servicing", "Gas check/fill", "Cooling issue fix", "Noise/water leakage"],
    href: "/book?service=AC%20Repair",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* Top bar */}
      <div className="mx-auto max-w-6xl px-5 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/10" />
            <div>
              <div className="text-sm font-semibold tracking-wide">QuickFix Local</div>
              <div className="text-xs text-white/60">Noida · Pre-launch</div>
            </div>
          </div>

          <Link
            href="/book"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/15"
          >
            Book a service
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              We’re building Noida’s trusted home service network
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Fast, verified home services —
              <span className="text-indigo-300"> right at your doorstep.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Starting with the 3 most demanded categories: Plumbing, Electrician, and AC Repair.
              Simple booking, transparent pricing, and real-time updates.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-400"
              >
                Book a service
              </Link>
              <a
                href="#services"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15"
              >
                View services
              </a>
              <a
                href="#about"
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15"
              >
                About QuickFix
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Launch city</div>
                <div className="mt-1 text-lg font-semibold">Noida</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Model</div>
                <div className="mt-1 text-lg font-semibold">Verified pros</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Status</div>
                <div className="mt-1 text-lg font-semibold">Pre-launch</div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-sm font-semibold">What you’ll get on Day 1</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>✅ Verified professionals (KYC + skill checks)</li>
              <li>✅ Transparent pricing (no surprise charges)</li>
              <li>✅ Clean work & punctual arrival</li>
              <li>✅ Booking + updates on WhatsApp/SMS</li>
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="text-xs font-semibold text-white/60">Popular today</div>
              <div className="mt-3 space-y-3 text-sm">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="font-medium">AC Repair</div>
                  <div className="text-white/60">Cooling issue · Gas check · Service</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="font-medium">Plumbing</div>
                  <div className="text-white/60">Leak · Tap · Bathroom</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="font-medium">Electrician</div>
                  <div className="text-white/60">Switch · Fan · Light</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Our 3 Services (Noida)</h2>
            <p className="mt-2 text-sm text-white/60">
              We’re starting focused. Clear scope, quality checks, and fast resolution.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-white/70">{s.desc}</div>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {s.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>

              <Link
                href={s.href}
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-medium hover:bg-indigo-400"
              >
                Book {s.title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h3 className="text-xl font-semibold">About QuickFix Local</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            QuickFix Local is building a trusted, local-first home service platform for Noida.
            Our focus is simple: verified professionals, transparent pricing, and a clean,
            reliable service experience — starting with Plumbing, Electrician, and AC Repair.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Quality</div>
              <div className="mt-1 text-sm text-white/65">Verification + skill checks + feedback loop.</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Trust</div>
              <div className="mt-1 text-sm text-white/65">Clear pricing, clean work, punctual pros.</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm font-semibold">Speed</div>
              <div className="mt-1 text-sm text-white/65">Fast booking + updates on WhatsApp/SMS.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-5 text-xs text-white/50">
          © {new Date().getFullYear()} QuickFix Local · Noida (Pre-launch)
        </div>
      </footer>
    </main>
  );
}
