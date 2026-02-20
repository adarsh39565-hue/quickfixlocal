import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full border bg-white px-3 py-1 text-xs text-gray-600">
              Noida • Pre-Launch • Trusted Local Services
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
              Book trusted home services <br className="hidden md:block" />
              in Noida — without stress.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
              QuickFix Local helps you book verified professionals for{" "}
              <b>Plumbing</b>, <b>Electrician</b> and <b>AC Repair</b>. Transparent
              pricing. On-time service. Local support.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/book">
                <Button className="px-6">Book a Service</Button>
              </Link>

              <a href="#about" className="text-sm text-gray-700 underline">
                Learn more
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-gray-600">
              <div className="rounded-xl border bg-white p-3">
                <div className="font-semibold text-gray-900">Verified</div>
                <div className="mt-1">Background checks</div>
              </div>
              <div className="rounded-xl border bg-white p-3">
                <div className="font-semibold text-gray-900">Transparent</div>
                <div className="mt-1">Clear pricing rules</div>
              </div>
              <div className="rounded-xl border bg-white p-3">
                <div className="font-semibold text-gray-900">Local</div>
                <div className="mt-1">Noida support</div>
              </div>
            </div>
          </div>

          {/* Right “visual” card */}
          <Card className="rounded-3xl border bg-gray-50 p-8 shadow-sm">
            <div className="text-sm font-semibold text-gray-900">
              What you can book today
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Three core services, done right. We’ll expand after we prove quality.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">Plumbing</div>
                <div className="mt-1 text-sm text-gray-600">
                  Leaks, taps, pipes, bathroom fixes
                </div>
              </div>
              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">Electrician</div>
                <div className="mt-1 text-sm text-gray-600">
                  Switches, wiring, fans, troubleshooting
                </div>
              </div>
              <div className="rounded-2xl border bg-white p-4">
                <div className="font-medium">AC Repair</div>
                <div className="mt-1 text-sm text-gray-600">
                  Servicing, gas refill, cooling issues
                </div>
              </div>

              <Link href="/book">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-semibold">
            Our Core Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">
            We are starting focused to ensure quality. Only 3 services in Noida
            right now.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-medium">Plumbing</h3>
              <p className="mt-3 text-sm text-gray-600">
                Leak repairs, pipe fittings, tap installation, bathroom fixes and
                emergency plumbing handled by trained professionals.
              </p>
              <Link className="mt-5 inline-block text-sm underline" href="/book">
                Book Plumbing →
              </Link>
            </Card>

            <Card className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-medium">Electrician</h3>
              <p className="mt-3 text-sm text-gray-600">
                Switch repairs, wiring, fan installation, inverter support and
                complete electrical troubleshooting.
              </p>
              <Link className="mt-5 inline-block text-sm underline" href="/book">
                Book Electrician →
              </Link>
            </Card>

            <Card className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-medium">AC Repair</h3>
              <p className="mt-3 text-sm text-gray-600">
                AC servicing, gas refill, cooling issues, installation and
                maintenance by experienced technicians.
              </p>
              <Link className="mt-5 inline-block text-sm underline" href="/book">
                Book AC Repair →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
            A simple process designed for trust and clarity.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold">1) Book</div>
              <p className="mt-2 text-sm text-gray-600">
                Choose a service and share basic details. We keep it fast.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold">2) Confirm</div>
              <p className="mt-2 text-sm text-gray-600">
                We confirm availability and share pricing clarity before work.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="text-sm font-semibold">3) Done</div>
              <p className="mt-2 text-sm text-gray-600">
                A verified professional completes the job. You rate the service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold">About QuickFix Local</h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            QuickFix Local is a Noida-based home service platform focused on
            delivering reliable, professional and transparent services. We’re
            building a trust-first network by onboarding verified local experts
            with clear service standards and support.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            We are currently <b>pre-launch</b>. Our first goal is to deliver an
            excellent experience in Noida before expanding into more services
            and nearby cities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Ready to book a trusted professional?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">
            Share your request and we’ll confirm the next available professional.
          </p>
          <div className="mt-6">
            <Link href="/book">
              <Button className="px-6">Book Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600">
          © {new Date().getFullYear()} QuickFix Local • Noida
        </div>
      </footer>
    </div>
  );
}
