"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

export default function ConfirmPage() {
  const params = useSearchParams();
  const service = params.get("service") ?? "";
  const city = params.get("city") ?? "";
  const phone = params.get("phone") ?? "";

  return (
    <div className="py-10 max-w-xl">
      <h1 className="text-2xl font-semibold">Request received ✅</h1>
      <p className="mt-2 text-sm text-gray-600">
        We’ll contact you soon with an available professional.
      </p>

      <div className="mt-6 rounded-xl border bg-white p-5 space-y-2 text-sm">
        <div><b>Service:</b> {service}</div>
        <div><b>City:</b> {city}</div>
        <div><b>Phone:</b> {phone}</div>
      </div>

      <div className="mt-6 flex gap-3">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
        <Link href="/book">
          <Button>New Booking</Button>
        </Link>
      </div>
    </div>
  );
}
