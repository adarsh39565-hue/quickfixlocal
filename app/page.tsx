import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Plumbing",
    tag: "Leak • Tap • Bathroom",
    desc:
      "Leaks, taps, blockages, pipelines — quick fixes + proper solutions with clean finish.",
    points: ["Leak repair", "Tap/mixer install", "Drain cleaning", "Bathroom fittings"],
  },
  {
    title: "Electrician",
    tag: "Switch • Fan • Light",
    desc:
      "Switch boards, lights, fans, wiring — safe, tidy work with verified professionals.",
    points: ["Switch repair", "Fan install", "Light wiring", "MCB/tripping fix"],
  },
  {
    title: "AC Repair",
    tag: "Cooling • Gas check • Service",
    desc:
      "AC not cooling? Gas check, service, minor repairs — fast resolution and updates.",
    points: ["AC servicing", "Gas check", "Cooling fix", "Noise/water leak"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* Deep gradient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(700px_500px_at_60%_90%,rgba(16,185,129,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%,rgba(0,0,0,0.35))]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-[0_10px_30px_rgba(59,130,246,0.25)]" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">QuickFix Local</div>
            <div className="text-xs text-white/60">Noida • Pre-launch</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/book">
            <Button className="bg-blue-600 text-white hover:bg-blue-500">
              Book a service
            </Button>
          </Link>

          <a href="#services">
            <Button className="border border-white/15 bg-white/5 text-white hover:bg-white/10">
              View services
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              We’re building Noida’s trusted home service network
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Fast, verified{" "}
              <span className="text-white/90">home services</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
                right at your doorstep.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/70">
              Starting with <span className="text-white/85">Plumbing</span>,{" "}
              <span className="text-white/85">Electrician</span>, and{" "}
              <span className="text-white/85">AC Repair</span>. Simple booking,
              transparent pricing, and real-time updates.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book">
                <Button className="bg-blue-600 text-white hover:bg-blue-500 px-6">
                  Book a service →
                </Button>
              </Link>

              <a href="#about">
                <Button className="border border-white/15 bg-white/5 text-white hover:bg-white/10 px-6">
                  About QuickFix
                </Button>
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Launch city</div>
                <div className="mt-1 font-semibold">Noida</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Model</div>
                <div className="mt-1 font-semibold">Verified pros</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Status</div>
                <div className="mt-1 font-semibold">Pre-launch</div>
              </div>
            </div>
          </div>

          {/* RIGHT hero visual (no form) */}
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="h-56 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.9),transparent_55%),radial-gradient(circle_at_80%_35%,rgba(99,102,241,0.9),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(236,72,153,0.55),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
              <div className="absolute bottom-3 left-3 rounded-full bg-black/35 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                Noida • Pre-launch
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Promise</div>
                <div className="mt-1 font-semibold">No surprises</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Quality</div>
                <div className="mt-1 font-semibold">Verified pros</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Updates</div>
                <div className="mt-1 font-semibold">WhatsApp/SMS</div>
              </div>
            </div>

            <div className="mt-5">
              <Link href="/book">
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                  Book a service now →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-2xl font-bold">Our 3 Services (Noida)</h2>
        <p className="mt-2 text-sm text-white/70">
          Focused launch. Clear scope. Quality checks. Fast resolution.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-start justify-between gap-3">
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                  {s.tag}
                </div>
              </div>

              <p className="mt-3 text-sm text-white/70">{s.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {s.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Link href="/book">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-500">
                    Book {s.title}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h3 className="text-xl font-bold">About QuickFix Local</h3>
          <p className="mt-3 text-sm text-white/70 max-w-3xl">
            We’re building a verified network of local professionals for Noida.
            Reliable service, transparent pricing, and a clean customer experience.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h3 className="text-xl font-bold">FAQ</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="font-semibold">Are you live in Noida now?</div>
              <p className="mt-2 text-sm text-white/70">
                We’re in pre-launch. You can submit a request and we’ll contact you as we onboard verified pros.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="font-semibold">How do you verify professionals?</div>
              <p className="mt-2 text-sm text-white/70">
                KYC checks + skill validation + service behavior standards before they get listed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-white/60">
          <div>© {new Date().getFullYear()} QuickFix Local</div>
          <div>Noida • Pre-launch</div>
        </div>
      </footer>
    </main>
  );
}
