import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          <p className="inline-flex rounded-full border bg-white px-4 py-1 text-xs text-gray-600 shadow-sm">
            Noida • Pre-Launch • Verified Professionals
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Reliable home services <br />
            made simple for Noida.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed">
            QuickFix Local connects you with trusted professionals for plumbing,
            electrician and AC repair — with transparent pricing and dedicated
            local support.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/book">
              <Button className="px-6 py-3">
                Book a Service
              </Button>
            </Link>

            <a href="#about" className="px-6 py-3 text-sm text-gray-700 underline">
              Learn More
            </a>
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-2xl font-semibold">
            Our Core Services
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">
            We are starting focused to ensure quality delivery.
            Currently serving Noida with three essential services.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <Card className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1 duration-300">
              <h3 className="text-lg font-medium">Plumbing</h3>
              <p className="mt-3 text-sm text-gray-600">
                Leak repairs, pipe fittings, tap installation,
                bathroom fixes and emergency plumbing handled by
                trained and verified professionals.
              </p>
              <Link className="mt-5 inline-block text-sm underline" href="/book">
                Book Plumbing →
              </Link>
            </Card>

            <Card className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1 duration-300">
              <h3 className="text-lg font-medium">Electrician</h3>
              <p className="mt-3 text-sm text-gray-600">
                Switch repairs, wiring, fan installation,
                inverter support and complete electrical troubleshooting.
              </p>
              <Link className="mt-5 inline-block text-sm underline" href="/book">
                Book Electrician →
              </Link>
            </Card>

            <Card className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1 duration-300">
              <h3 className="text-lg font-medium">AC Repair</h3>
              <p className="mt-3 text-sm text-gray-600">
                AC servicing, gas refill, cooling issues,
                installation and maintenance by experienced technicians.
              </p>
              <Link className="mt-5 inline-block text-sm underline" href="/book">
                Book AC Repair →
              </Link>
            </Card>

          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">

          <h2 className="text-2xl font-semibold">
            How It Works
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="font-medium">1. Book Online</h4>
              <p className="mt-2 text-sm text-gray-600">
                Choose your service and share basic details in seconds.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="font-medium">2. Confirm</h4>
              <p className="mt-2 text-sm text-gray-600">
                We confirm availability and share clear pricing.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="font-medium">3. Get It Done</h4>
              <p className="mt-2 text-sm text-gray-600">
                A verified professional completes your service on time.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-2xl font-semibold">
            About QuickFix Local
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            QuickFix Local is a Noida-based home service platform focused on
            delivering reliable, professional and transparent services.
            We are building a trust-first network by onboarding verified
            local experts with strict service standards.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            We are currently in pre-launch phase. Our mission is to first
            deliver excellence in Noida before expanding to additional
            services and cities.
          </p>

        </div>
      </section>


      {/* FINAL CTA */}
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
              <Button className="px-6 py-3">
                Book Now
              </Button>
            </Link>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-gray-600 text-center">
          © {new Date().getFullYear()} QuickFix Local • Noida
        </div>
      </footer>

    </div>
  );
}
