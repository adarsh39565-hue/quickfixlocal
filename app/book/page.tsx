"use client";

import React, { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

function BookInner() {
  const router = useRouter();
  const params = useSearchParams();

  const services = useMemo(() => ["Plumbing", "Electrician", "AC Repair"], []);
  const serviceFromUrl = params.get("service") ?? "";

  const [service, setService] = useState(
    services.includes(serviceFromUrl) ? serviceFromUrl : "Plumbing"
  );
  const [city, setCity] = useState("Noida");
  const [phone, setPhone] = useState("");

  const canSubmit = useMemo(() => {
    const p = phone.replace(/\D/g, "");
    return service.trim().length > 0 && city.trim().length > 1 && p.length >= 10;
  }, [service, city, phone]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    const qs = new URLSearchParams({
      service,
      city,
      phone,
    });

    router.push(`/book/confirm?${qs.toString()}`);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-xl px-4 py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Book a service</h1>
          <p className="mt-2 text-sm text-gray-600">
            Pre-launch in Noida — we are collecting requests and confirming the
            next available verified professional.
          </p>
        </div>

        <Card className="rounded-2xl border bg-white p-6 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Select service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                City
              </label>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Noida"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
              />
              <p className="mt-1 text-xs text-gray-500">
                We only use this to confirm your booking.
              </p>
            </div>

            <Button className="w-full" type="submit" disabled={!canSubmit}>
              Confirm Booking
            </Button>

            <div className="text-center text-sm">
              <Link href="/" className="text-gray-700 underline">
                Back to Home
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default function BookPage() {
  // ✅ Needed because useSearchParams must be inside Suspense in Next 16
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-xl px-4 py-10 text-sm text-gray-600">
            Loading booking page…
          </div>
        </div>
      }
    >
      <BookInner />
    </Suspense>
  );
}


