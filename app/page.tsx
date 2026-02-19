"use client";

import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { useState } from "react";

const services = [
  "Electrician",
  "Plumber",
  "AC Repair",
  "Home Cleaning",
  "Appliance Repair",
  "Painting",
];

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function goToBooking(service?: string) {
    const s = service ?? query.trim();
    if (!s) return;
    router.push(`/book?service=${encodeURIComponent(s)}`);
  }

  return (
    <div className="space-y-14 py-10">
      <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white md:p-12">
        <h1 className="text-3xl font-bold md:text-5xl">Book trusted local services</h1>
        <p className="mt-3 text-white/80">Verified professionals • Transparent pricing • Fast support</p>

        <div className="mt-6 flex flex-col gap-3 md:flex-row">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: AC repair, electrician, cleaning..."
            className="h-12"
          />
          <Button className="h-12 md:w-40" onClick={() => goToBooking()}>
            Search
          </Button>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-xl font-semibold md:text-2xl">Popular services</h2>
          <Button variant="outline" onClick={() => router.push("/book")}>
            View all
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service} className="p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{service}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Professional & affordable service near you.
              </p>
              <Button className="mt-5 w-full" onClick={() => goToBooking(service)}>
                Book now
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

