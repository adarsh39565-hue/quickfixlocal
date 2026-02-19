import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const services = [
  "Electrician",
  "Plumber",
  "AC Repair",
  "Home Cleaning",
  "Appliance Repair",
  "Painting",
];

export default function Home() {
  return (
    <div className="space-y-14 py-10">
      {/* HERO */}
      <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white md:p-12">
        <h1 className="text-3xl font-bold md:text-5xl">
          Book trusted local services
        </h1>
        <p className="mt-3 text-white/80">
          Verified professionals • Transparent pricing • Fast support
        </p>

        <div className="mt-6 flex flex-col gap-3 md:flex-row">
          <Input
            placeholder="Search: AC repair, electrician, cleaning..."
            className="h-12"
          />
          <Button className="h-12 md:w-40">Search</Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/90">
          <span className="rounded-full border border-white/30 px-3 py-1">⭐ 4.7 Avg Rating</span>
          <span className="rounded-full border border-white/30 px-3 py-1">✅ Verified Pros</span>
          <span className="rounded-full border border-white/30 px-3 py-1">🕒 On-time Service</span>
          <span className="rounded-full border border-white/30 px-3 py-1">💬 Fast Support</span>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Popular services</h2>
          <Button variant="outline">View all</Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service} className="p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{service}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Professional & affordable service near you.
              </p>
              <Button className="mt-5 w-full">Book now</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="rounded-2xl border bg-gray-50 p-8 text-center">
        <h3 className="text-xl font-semibold">Why Quick Fix Local?</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 border">
            <div className="text-2xl font-bold">4.8★</div>
            <div className="text-sm text-gray-600">Average rating</div>
          </div>
          <div className="rounded-xl bg-white p-6 border">
            <div className="text-2xl font-bold">5000+</div>
            <div className="text-sm text-gray-600">Happy customers</div>
          </div>
          <div className="rounded-xl bg-white p-6 border">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm text-gray-600">Verified professionals</div>
          </div>
        </div>
      </section>
    </div>
  );
}
