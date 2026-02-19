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
    <div className="space-y-16 py-10">
      {/* HERO */}
      <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-10 text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Book Trusted Local Services
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Verified professionals • Transparent pricing • Fast support
        </p>

        <div className="mt-6 flex flex-col gap-3 md:flex-row">
          <Input
            placeholder="Search services..."
            className="h-12 bg-white text-black"
          />
          <Button className="h-12 px-6 bg-black hover:bg-gray-800">
            Search
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Popular Services</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service}
              className="cursor-pointer p-6 transition hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold">{service}</h3>
              <p className="mt-2 text-sm text-gray-500">
                Professional & affordable service
              </p>
              <Button className="mt-4 w-full">Book Now</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="rounded-xl bg-gray-100 p-8 text-center">
        <h3 className="text-xl font-semibold">Why Choose Quick Fix Local?</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">4.8★</p>
            <p className="text-gray-500">Average Rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold">5000+</p>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-gray-500">Verified Professionals</p>
          </div>
        </div>
      </section>
    </div>
  );
}
