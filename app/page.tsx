import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-semibold leading-tight">
          Trusted Home Services <br /> in Noida
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Book verified professionals for plumbing, electrical, and AC repair.
          Transparent pricing. On-time service. Local support.
        </p>

        <div className="mt-6">
          <Link href="/book">
            <Button className="px-6 py-3 text-sm">
              Book a Service
            </Button>
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            
            <Card className="p-6 rounded-2xl shadow-sm border">
              <h3 className="text-lg font-medium">Plumbing</h3>
              <p className="mt-3 text-sm text-gray-600">
                Leak repairs, pipe fittings, tap installation, bathroom fixes
                and emergency plumbing handled by trained professionals.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm border">
              <h3 className="text-lg font-medium">Electrician</h3>
              <p className="mt-3 text-sm text-gray-600">
                Switch repairs, wiring, fan installation, inverter support
                and complete electrical troubleshooting.
              </p>
            </Card>

            <Card className="p-6 rounded-2xl shadow-sm border">
              <h3 className="text-lg font-medium">AC Repair</h3>
              <p className="mt-3 text-sm text-gray-600">
                AC servicing, gas refill, cooling issues, installation and
                maintenance by experienced technicians.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">Why QuickFix Local?</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900">Verified Professionals</h4>
            <p className="mt-2">
              Every partner is background-checked and skill-tested before
              onboarding.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900">Transparent Pricing</h4>
            <p className="mt-2">
              No hidden charges. Clear pricing shared before work begins.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900">Local Support</h4>
            <p className="mt-2">
              Dedicated Noida support team for quick coordination and
              issue resolution.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">About QuickFix Local</h2>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed">
            QuickFix Local is a Noida-based home service platform focused on
            delivering reliable, professional, and transparent services.
            We aim to simplify how residents book essential home repairs by
            combining verified local professionals with modern booking
            technology.
          </p>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Our goal is not just to complete a job, but to build long-term
            trust with every household we serve.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">
          Ready to book a trusted professional?
        </h2>

        <div className="mt-6">
          <Link href="/book">
            <Button className="px-6 py-3 text-sm">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
