"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const SERVICES = [
  "Electrician",
  "Plumber",
  "AC Repair",
  "Home Cleaning",
  "Appliance Repair",
  "Painting",
];

export default function BookPage() {
  const router = useRouter();
  const [service, setService] = useState(SERVICES[0]);
  const [city, setCity] = useState("Noida");
  const [phone, setPhone] = useState("");

  const canSubmit = useMemo(() => {
    const cleaned = phone.replace(/\D/g, "");
    return service.trim().length > 0 && city.trim().length > 1 && cleaned.length >= 10;
  }, [service, city, phone]);

  function onSubmit() {
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
            QuickFix Local is pre-launch — we’re collecting requests and will connect you with verified professionals.
          </p>
        </div>

        <Card className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Select service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-200"
              >
                {SERVICES.map((s) => (
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
              <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Noida" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit number"
              />
              <p className="mt-1 text-xs text-gray-500">
                We only use this to confirm your booking.
              </p>
            </div>

            <Button onClick={onSubmit} disabled={!canSubmit} className="w-full">
              Confirm Booking
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}


