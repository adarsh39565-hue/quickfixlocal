import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const services = [
  {
    title: "Plumbing",
    desc: "Leaks, taps, blockages, fittings — quick fix + proper solution.",
    points: ["Leak repair", "Tap & mixer install", "Drain cleaning", "Bathroom fittings"],
    href: "/book?service=Plumbing&city=Noida",
  },
  {
    title: "Electrician",
    desc: "Switches, lights, wiring checks — verified work, clean finishing.",
    points: ["Switch & socket repair", "Fan install", "Light fixtures", "Basic wiring checks"],
    href: "/book?service=Electrician&city=Noida",
  },
  {
    title: "AC Repair",
    desc: "Cooling issues, servicing, gas check — transparent steps & updates.",
    points: ["Cooling issue fix", "Service & cleaning", "Gas check", "Noise/vibration fix"],
    href: "/book?service=AC%20Repair&city=Noida",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* TOP BAR */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-indigo-600" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">QuickFix Local</div>
              <div className="text-xs text-gray-500">Noida • Pre-launch</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="#services">
              <Button variant="outline">View services</Button>
            </Link>
            <Link href="/get-started">
              <Button>Get early access</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-gray-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              We’re building Noida’s trusted home service network
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Fast, verified home services —{" "}
              <span className="text-indigo-600">right at your doorstep.</span>
            </h1>

            <p className="mt-4 text-gray-600">
              Starting with the 3 most demanded categories:{" "}
              <span className="font-semibold text-gray-900">
                Plumbing, Electrician, AC Repair
              </span>
              . Simple booking, transparent pricing, real-time updates.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book?city=Noida">
                <Button>Book a service</Button>
              </Link>
              <Link href="#about">
                <Button variant="outline">About QuickFix</Button>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Card className="p-4">
                <div className="text-xs text-gray-500">Launch city</div>
                <div className="mt-1 font-semibold">Noida</div>
              </Card>
              <Card className="p-4">
                <div className="text-xs text-gray-500">Model</div>
                <div className="mt-1 font-semibold">Verified pros</div>
              </Card>
              <Card className="p-4">
                <div className="text-xs text-gray-500">Status</div>
                <div className="mt-1 font-semibold">Pre-launch</div>
              </Card>
            </div>
          </div>

          {/* HERO CARD */}
          <Card className="p-6 md:p-7">
            <div className="text-sm font-semibold text-gray-900">
              What you’ll get on Day 1
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>✅ Verified professionals (KYC + skill checks)</li>
              <li>✅ Transparent pricing (no surprise charges)</li>
              <li>✅ Clean work & punctual arrival</li>
              <li>✅ Booking + updates on WhatsApp/SMS</li>
            </ul>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <div className="text-xs font-semibold text-gray-700">Popular today</div>
              <div className="mt-2 grid gap-2">
                <div className="flex items-center justify-between rounded-lg bg-white p-3">
                  <div>
                    <div className="text-sm font-semibold">AC Repair</div>
                    <div className="text-xs text-gray-500">Cooling issue • Gas check • Service</div>
                  </div>
                  <Link href="/book?service=AC%20Repair&city=Noida">
                    <Button variant="outline">Book</Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-white p-3">
                  <div>
                    <div className="text-sm font-semibold">Plumbing</div>
                    <div className="text-xs text-gray-500">Leak • Tap • Bathroom</div>
                  </div>
                  <Link href="/book?service=Plumbing&city=Noida">
                    <Button variant="outline">Book</Button>
                  </Link>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-white p-3">
                  <div>
                    <div className="text-sm font-semibold">Electrician</div>
                    <div className="text-xs text-gray-500">Switch • Fan • Light</div>
                  </div>
                  <Link href="/book?service=Electrician&city=Noida">
                    <Button variant="outline">Book</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our 3 Services (Noida)</h2>
            <p className="mt-1 text-gray-600">
              We’re starting focused. Clear scope, quality checks, and fast resolution.
            </p>
          </div>
          <Link href="/get-started">
            <Button variant="outline">Join early access</Button>
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="text-lg font-semibold text-gray-900">{s.title}</div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {s.points.map((p) => (
                  <li key={p}>• {p}</li>
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

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 pb-14">
        <Card className="p-7">
          <h3 className="text-xl font-bold text-gray-900">About QuickFix Local</h3>
          <p className="mt-2 text-gray-600">
            We’re building a local-first home services platform for Noida — where customers
            get reliable professionals, clear pricing, and timely service. We’re currently
            in pre-launch: finishing the website, onboarding partners, and testing operations.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm font-semibold">Where we are now</div>
              <div className="mt-1 text-sm text-gray-600">
                Pre-launch setup + website build + initial categories locked.
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm font-semibold">What’s next</div>
              <div className="mt-1 text-sm text-gray-600">
                Verify pros, finalize pricing slabs, launch in Noida sectors.
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-sm font-semibold">Promise</div>
              <div className="mt-1 text-sm text-gray-600">
                Clean work, transparent pricing, and real-time updates.
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/get-started">
              <Button>Get notified at launch</Button>
            </Link>
            <Link href="/book?city=Noida">
              <Button variant="outline">Try booking flow</Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} QuickFix Local • Noida</div>
          <div className="flex gap-4">
            <Link href="/get-started">Early access</Link>
            <Link href="/book?city=Noida">Book</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
