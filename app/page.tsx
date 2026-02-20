import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const ServiceIcon = ({ label }: { label: string }) => {
  const icon =
    label === "Plumbing" ? "🔧" : label === "Electrician" ? "⚡" : "❄️";
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-white text-2xl shadow-sm">
      {icon}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="inline-flex rounded-full border bg-white px-4 py-1 text-xs text-gray-600 shadow-sm">
            Noida • Pre-Launch • Verified Professionals
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Reliable home services <br /> made simple for Noida.
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
            QuickFix Local connects you with trusted professionals for{" "}
            <b>Plumbing</b>, <b>Electrician</b> and <b>AC Repair</b> — with
            transparent pricing and dedicated local support.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/book">
              <Button className="px-6 py-3">Book a Service</Button>
            </Link>

            <a
              href="#about"
              className="px-6 py-3 text-sm text-gray-700 underline"
            >
              Learn more
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-white p-4 text-left shadow-sm">
              <div className="text-sm font-semibold">Verified</div>
              <div className="mt-1 text-sm text-gray-600">
                Background checks + skill tagging
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-4 text-left shadow-sm">
              <div className="text-sm font-semibold">Transparent</div>
              <div className="mt-1 text-sm text-gray-600">
                Clear pricing before work starts
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-4 text-left shadow-sm">
              <div className="text-sm font-semibold">Local Support</div>
              <div className="mt-1 text-sm text-gray-600">
                Noida-first coordination and help
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold">
            Our Core Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">
            We’re starting focused to ensure quality. Only 3 services in Noida
            for now.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Plumbing",
                desc: "Leak repairs, tap/pipe fitting, bathroom fixes and emergency plumbing by verified pros.",
              },
              {
                title: "Electrician",
                desc: "Switch repairs, wiring, fan installation and safe electrical troubleshooting.",
              },
              {
                title: "AC Repair",
                desc: "Servicing, gas refill, cooling issues and installation handled by experienced technicians.",
              },
            ].map((s) => (
              <Card
                key={s.title}
                className="rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <ServiceIcon label={s.title} />
                  <div>
                    <h3 className="text-lg font-medium">{s.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                    <Link
                      className="mt-4 inline-block text-sm underline"
                      href="/book"
                    >
                      Book {s.title} →
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-semibold">Transparent Pricing</h2>

          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            Clear starting prices. Final cost depends on inspection and work
            required. No hidden charges.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-medium">Plumbing</h3>
              <p className="mt-3 text-3xl font-semibold">₹199</p>
              <p className="mt-1 text-xs text-gray-500">starting price</p>

              <ul className="mt-6 text-sm text-gray-600 space-y-2 text-left">
                <li>✔ Tap & leakage repair</li>
                <li>✔ Pipe inspection</li>
                <li>✔ Bathroom fittings</li>
              </ul>

              <Link
                href="/book"
                className="mt-6 inline-block text-sm underline"
              >
                Book Plumbing →
              </Link>
            </div>

            <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-medium">Electrician</h3>
              <p className="mt-3 text-3xl font-semibold">₹199</p>
              <p className="mt-1 text-xs text-gray-500">starting price</p>

              <ul className="mt-6 text-sm text-gray-600 space-y-2 text-left">
                <li>✔ Switch replacement</li>
                <li>✔ Wiring check</li>
                <li>✔ Fan installation</li>
              </ul>

              <Link
                href="/book"
                className="mt-6 inline-block text-sm underline"
              >
                Book Electrician →
              </Link>
            </div>

            <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-medium">AC Repair</h3>
              <p className="mt-3 text-3xl font-semibold">₹399</p>
              <p className="mt-1 text-xs text-gray-500">starting price</p>

              <ul className="mt-6 text-sm text-gray-600 space-y-2 text-left">
                <li>✔ Basic servicing</li>
                <li>✔ Cooling inspection</li>
                <li>✔ Gas refill check</li>
              </ul>

              <Link href="/book" className="mt-6 inline-block text-sm underline">
                Book AC Repair →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-semibold">What Residents Say</h2>

          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            Early feedback from our Noida pilot users.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed">
                “Booked a plumber through QuickFix Local. The technician arrived
                on time and fixed the leakage quickly. Very smooth experience.”
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-900">Rohit Sharma</p>
                <p className="text-xs text-gray-500">Sector 75, Noida</p>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed">
                “Transparent pricing and professional behavior. Much better than
                random local technicians.”
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-900">Neha Verma</p>
                <p className="text-xs text-gray-500">Sector 137, Noida</p>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed">
                “AC service was done properly and the team explained everything.
                Looking forward to using again.”
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-900">Amit Gupta</p>
                <p className="text-xs text-gray-500">Sector 78, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
            Simple flow built for trust and clarity.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">1) Book</div>
              <p className="mt-2 text-sm text-gray-600">
                Choose a service and share basic details.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">2) Confirm</div>
              <p className="mt-2 text-sm text-gray-600">
                We confirm availability and pricing before work begins.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">3) Done</div>
              <p className="mt-2 text-sm text-gray-600">
                A verified professional completes the job. You rate the
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold">About QuickFix Local</h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            QuickFix Local is a Noida-based home service platform focused on
            reliable, professional and transparent service delivery. We’re
            building a trust-first network by onboarding verified local experts
            with clear service standards.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            We are currently <b>pre-launch</b>. Our first goal is to deliver an
            excellent experience in Noida before expanding to more categories
            and areas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Ready to book a trusted professional?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
            Share your request and we’ll confirm the next available expert.
          </p>
          <div className="mt-6">
            <Link href="/book">
              <Button className="px-6 py-3">Book Now</Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} QuickFix Local • Noida
        </div>
      </footer>
    </div>
  );
}
