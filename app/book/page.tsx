"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useState } from "react";

export default function BookPage() {
  const params = useSearchParams();
  const router = useRouter();

  const serviceFromUrl = params.get("service") ?? "";
  const cityFromUrl = params.get("city") ?? "";

  const [service, setService] = useState(serviceFromUrl);
  const [city, setCity] = useState(cityFromUrl);
  const [phone, setPhone] = useState("");

  function submit() {
    // For now just show confirmation screen (later connect Supabase)
    router.push(
      `/book/confirm?service=${encodeURIComponent(service)}&city=${encodeURIComponent(
        city
      )}&phone=${encodeURIComponent(phone)}`
    );
  }

  return (
    <div className="py-10 max-w-xl">
      <h1 className="text-2xl font-semibold">Book a service</h1>
      <p className="mt-2 text-sm text-gray-600">Fill details and confirm your request.</p>

      <div className="mt-6 space-y-3">
        <div>
          <div className="text-sm font-medium mb-1">Service</div>
          <Input value={service} onChange={(e) => setService(e.target.value)} placeholder="Electrician" />
        </div>

        <div>
          <div className="text-sm font-medium mb-1">City</div>
          <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Delhi" />
        </div>

        <div>
          <div className="text-sm font-medium mb-1">Phone</div>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9876543210" />
        </div>

        <Button className="w-full" onClick={submit}>
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}

