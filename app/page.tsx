"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type ServiceKey = "plumbing" | "electrician" | "ac-repair";

const serviceOptions: { key: ServiceKey; label: string; sub: string }[] = [
  { key: "plumbing", label: "Plumbing", sub: "Leak • Tap • Bathroom" },
  { key: "electrician", label: "Electrician", sub: "Switch • Fan • Light" },
  { key: "ac-repair", label: "AC Repair", sub: "Cooling • Gas check • Service" },
];

function isValidPhone(phone: string) {
  const p = phone.replace(/\D/g, "");
  return p.length === 10;
}

export default function BookPage() {
  const router = useRouter();

  const [service, setService] = useState<ServiceKey>("plumbing");
  const [city, setCity] = useState("Noida");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const selectedServiceLabel = useMemo(() => {
    const s = serviceOptions.find((x) => x.key === service);
    return s?.label ?? "Service";
  }, [service]);

  async function submitBooking() {
    setErrorMsg(null);

    if (!name.trim()) return setErrorMsg("Please enter your name.");
    if (!isValidPhone(phone)) return setErrorMsg("Please enter a valid 10-digit phone number.");
    if (!address.trim()) return setErrorMsg("Please enter your address.");

    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          city,
          name: name.trim(),
          phone: phone.replace(/\D/g, ""),
          address: address.trim(),
          notes: notes.trim(),
          source: "book-page",
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Booking API failed. Please try again.");
      }

      const qp = new URLSearchParams({
        service: selectedServiceLabel,
        city,
        phone: phone.replace(/\D/g, ""),
        name: name.trim(),
      });

      router.push(`/book/confirm?${qp.toString()}`);
    } catch (e: any) {
      setErrorMsg(e?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(700px_500px_at_60%_90%,rgba(16,185,129,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%,rgba(0,0,0,0.35))]" />
      </div>

      {/* header */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-[0_10px_30px_rgba(59,130,246,0.25)]" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">QuickFix Local</div>
            <div className="text-xs text-white/60">Noida • Pre-launch</div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/">
            <Button className="border border-white/15 bg-white/5 text-white hover:bg-white/10">
              ← Back
            </Button>
          </Link>
          <Link href="/#services">
            <Button className="border border-white/15 bg-white/5 text-white hover:bg-white/10">
              View services
            </Button>
          </Link>
        </div>
      </header>

      {/* content */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* left intro */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Request in 1 minute • Verified pros
            </div>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl">
              Book a service in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
                Noida
              </span>
            </h1>

            <p className="mt-4 text-sm text-white/70 max-w-xl">
              Choose service, add your details, and submit. We’ll confirm availability with a verified professional.
            </p>

            <div className="mt-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold">What you’ll get on Day 1</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>✅ Verified professionals (KYC + skill checks)</li>
                <li>✅ Transparent pricing (no surprise charges)</li>
                <li>✅ Clean work & punctual arrival</li>
                <li>✅ Booking + updates on WhatsApp/SMS</li>
              </ul>
            </div>
          </div>

          {/* right form */}
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold">Booking form</div>
            <p className="mt-1 text-xs text-white/60">
              Pre-launch requests help us prioritize areas and timings.
            </p>

            <div className="mt-5 space-y-3">
              {/* Service select */}
              <div>
                <div className="text-xs text-white/60 mb-1">Service</div>
                <div className="grid grid-cols-3 gap-2">
                  {serviceOptions.map((opt) => {
                    const active = opt.key === service;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setService(opt.key)}
                        className={[
                          "rounded-xl px-3 py-2 text-left text-xs ring-1 transition",
                          active
                            ? "bg-blue-600/20 ring-blue-400/40 text-white"
                            : "bg-white/5 ring-white/10 text-white/80 hover:bg-white/10",
                        ].join(" ")}
                      >
                        <div className="font-semibold">{opt.label}</div>
                        <div className="text-[10px] text-white/60">{opt.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="text-xs text-white/60 mb-1">City</div>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                  placeholder="Noida"
                />
              </div>

              <div>
                <div className="text-xs text-white/60 mb-1">Full name</div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <div className="text-xs text-white/60 mb-1">Phone (10 digits)</div>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                  placeholder="9876543210"
                  inputMode="numeric"
                />
              </div>

              <div>
                <div className="text-xs text-white/60 mb-1">Address</div>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                  placeholder="Sector / Locality / Landmark"
                />
              </div>

              <div>
                <div className="text-xs text-white/60 mb-1">Problem details (optional)</div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[90px] w-full resize-none rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                  placeholder="Example: tap leaking, AC not cooling, switch sparks..."
                />
              </div>

              {errorMsg ? (
                <div className="rounded-xl bg-red-500/10 px-3 py-2 text-xs text-red-200 ring-1 ring-red-400/20">
                  {errorMsg}
                </div>
              ) : null}

              <Button
                onClick={submitBooking}
                disabled={loading}
                className="w-full bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit request"}
              </Button>

              <div className="text-[11px] text-white/50">
                By submitting, you agree to receive updates via WhatsApp/SMS.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
