"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";

function ConfirmInner() {
  const params = useSearchParams();

  const service = params.get("service") ?? "";
  const city = params.get("city") ?? "";
  const phone = params.get("phone") ?? "";

  const cleanPhone = phone.replace(/\D/g, "");

  // ✅ CHANGE THIS to your WhatsApp number with country code (no +)
  // Example: 919876543210
  const businessWhatsApp = "91XXXXXXXXXX";

  const waText = encodeURIComponent(
    `Hi QuickFix Local 👋\n\nBooking request:\nService: ${service}\nCity: ${city}\nPhone: ${phone}\n\nPlease confirm availability.`
  );

  const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${waText}`;
  const callUrl = cleanPhone ? `tel:${cleanPhone}` : "tel:";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-xl px-4 py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Request received ✅</h1>
          <p className="mt-2 text-sm text-gray-600">
            We’ll contact you soon with an available professional.
          </p>
        </div>

        <Card className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Service:</span>{" "}
              <span className="text-gray-700">{service || "-"}</span>
            </div>
            <div>
              <span className="font-medium">City:</span>{" "}
              <span className="text-gray-700">{city || "-"}</span>
            </div>
            <div>
              <span className="font-medium">Phone:</span>{" "}
              <span className="text-gray-700">{phone || "-"}</span>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Button className="w-full">Chat on WhatsApp</Button>
            </a>

            <a href={callUrl}>
              <Button variant="outline" className="w-full">
                Call Now
              </Button>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm">
            <Link className="text-gray-700 hover:underline" href="/book">
              Edit details
            </Link>
            <Link className="text-gray-700 hover:underline" href="/">
              Back to Home
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function ConfirmPage() {
  // ✅ Needed because useSearchParams must be inside Suspense in Next 16
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50">
          <div className="mx-auto max-w-xl px-4 py-10 text-sm text-gray-600">
            Loading confirmation…
          </div>
        </div>
      }
    >
      <ConfirmInner />
    </Suspense>
  );
}
