"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

function BookInner() {
  const router = useRouter();
  const params = useSearchParams();

  // OPTIONAL: if you pass ?service=Electrician from homepage, it will prefill
  const serviceFromUrl = params.get("service") ?? "";

  const services = useMemo(
    () => ["Electrician", "Plumber", "AC Repair", "Home Cleaning", "Appliance Repair", "Painting"],
    []
  );

  const [service, setService] = useState(serviceFromUrl || services[0]);
  const [city, setCity] = useState("Noida");
  const [phone, setPhone] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const url =
      `/book/confirm?service=${encodeURIComponent(service)}` +
      `&city=${encodeURIComponent(city)}` +
      `&phone=${encodeURIComponent(phone)}`;

    router.push(url);
  }

  return (
    <div className="py-10 max-w-xl mx-auto px-4">
      <h1 className="text-2xl font-semibold">Book a Service</h1>
      <p className="mt-2 text-sm text-gray-600">
        QuickFix Local (Noida) — share details and we’ll connect you with a verified professional.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-xl border bg-white p-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Service</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">City</label>
          <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Noida" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number</label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter mobile number"
          />
        </div>

        <div className="pt-2 flex gap-3">
          <Button type="submit">Confirm Booking</Button>
          <Button type="button" variant="outline" onClick={() => router.push("/")}>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="py-10 max-w-xl mx-auto px-4 text-sm text-gray-600">
          Loading booking page...
        </div>
      }
    >
      <BookInner />
    </Suspense>
  );
}

