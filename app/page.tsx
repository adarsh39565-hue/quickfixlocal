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

const services = [
  {
    title: "Plumbing",
    tag: "Leaks • Tap • Bathroom",
    desc:
      "Leaks, taps, blockages, pipelines — quick fixes + proper solutions with clean finish.",
    points: ["Leak repair", "Tap/mixer install", "Drain cleaning", "Bathroom fittings"],
    key: "plumbing" as ServiceKey,
  },
  {
    title: "Electrician",
    tag: "Switch • Fan • Light",
    desc:
      "Switch boards, lights, fans, wiring — safe, tidy work with verified professionals.",
    points: ["Switch repair", "Fan install", "Light wiring", "MCB/tripping fix"],
    key: "electrician" as ServiceKey,
  },
  {
    title: "AC Repair",
    tag: "Cooling • Gas check • Service",
    desc:
      "AC not cooling? Gas check, service, minor repairs — fast resolution and updates.",
    points: ["AC servicing", "Gas check", "Cooling fix", "Noise/water leak"],
    key: "ac-repair" as ServiceKey,
  },
];

function isValidPhone(phone: string) {
  // Simple India validation: 10 digits
  const p = phone.replace(/\D/g, "");
  return p.length === 10;
}

export default function Home() {
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
      // 1) Call your API (you already have app/api/book)
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
          source: "homepage",
        }),
      });

      // If your API returns errors, show them
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Booking API failed. Please try again.");
      }

      // 2) Redirect to confirm page (keep query params simple)
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
      {/* Deep gradient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(900px_500px_at_80%_30%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(700px_500px_at_60%_90%,rgba(16,185,129,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_40%,rgba(0,0,0,0.35))]" />
      </div>

      {/* NAVBAR */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-[0_10px_30px_rgba(59,130,246,0.25)]" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">QuickFix Local</div>
            <div className="text-xs text-white/60">Noida • Pre-launch</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#book">
            <Button className="bg-blue-600 text-white hover:bg-blue-500">
              Book a service
            </Button>
          </a>

          <a href="#services">
            <Button className="border border-white/15 bg-white/5 text-white hover:bg-white/10">
              View services
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs text-white/70 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              We’re building Noida’s trusted home service network
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Fast, verified{" "}
              <span className="text-white/90">home services</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300 bg-clip-text text-transparent">
                right at your doorstep.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/70">
              Starting with{" "}
              <span className="text-white/85">Plumbing</span>,{" "}
              <span className="text-white/85">Electrician</span>, and{" "}
              <span className="text-white/85">AC Repair</span>. Simple booking,
              transparent pricing, and real-time updates.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book">
                <Button className="bg-blue-600 text-white hover:bg-blue-500 px-6">
                  Book a service →
                </Button>
              </a>

              <a href="#about">
                <Button className="border border-white/15 bg-white/5 text-white hover:bg-white/10 px-6">
                  About QuickFix
                </Button>
              </a>
            </div>

            {/* STAT STRIP */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Launch city</div>
                <div className="mt-1 font-semibold">Noida</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Model</div>
                <div className="mt-1 font-semibold">Verified pros</div>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Status</div>
                <div className="mt-1 font-semibold">Pre-launch</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Booking panel */}
          <div className="relative" id="book">
            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Gradient “image” */}
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <div className="h-44 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.9),transparent_55%),radial-gradient(circle_at_80%_35%,rgba(99,102,241,0.9),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(236,72,153,0.55),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
                  <div className="absolute bottom-3 left-3 rounded-full bg-black/35 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                    Request in 1 minute
                  </div>
                </div>

                {/* Booking Form */}
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Book a service (Pre-launch)</div>
                  <p className="mt-1 text-xs text-white/60">
                    Submit request — we’ll confirm availability with a verified professional.
                  </p>

                  <div className="mt-4 space-y-3">
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

                    {/* City */}
                    <div>
                      <div className="text-xs text-white/60 mb-1">City</div>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                        placeholder="Noida"
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <div className="text-xs text-white/60 mb-1">Full name</div>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Phone */}
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

                    {/* Address */}
                    <div>
                      <div className="text-xs text-white/60 mb-1">Address</div>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                        placeholder="Sector / Locality / Landmark"
                      />
                    </div>

                    {/* Notes */}
                    <div>
                      <div className="text-xs text-white/60 mb-1">Problem details (optional)</div>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="min-h-[70px] w-full resize-none rounded-xl bg-white/5 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
                        placeholder="Example: tap leaking, AC not cooling, switch sparks..."
                      />
                    </div>

                    {errorMsg ? (
                      <div className="rounded-xl bg-red-500/10 px-3 py-2 text-xs text-red-200 ring-1 ring-red-400/20">
                        {errorMsg}
                      </div>
                    ) : null}

                    <div className="flex gap-2">
                      <Button
                        onClick={submitBooking}
                        disabled={loading}
                        className="w-full bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60"
                      >
                        {loading ? "Submitting..." : "Submit request"}
                      </Button>

                      <a href="#services" className="w-full">
                        <Button className="w-full border border-white/15 bg-white/5 text-white hover:bg-white/10">
                          Services
                        </Button>
                      </a>
                    </div>

                    <div className="text-[11px] text-white/50">
                      By submitting, you agree to receive updates via WhatsApp/SMS.
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Today cards */}
              <div className="mt-6">
                <div className="text-xs font-semibold text-white/70">Popular today</div>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="font-semibold">AC Repair</div>
                    <div className="text-xs text-white/60">Cooling • Gas check • Service</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="font-semibold">Plumbing</div>
                    <div className="text-xs text-white/60">Leak • Tap • Bathroom</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="font-semibold">Electrician</div>
                    <div className="text-xs text-white/60">Switch • Fan • Light</div>
                  </div>
                </div>

                <div className="mt-3 text-xs text-white/50">
                  *Pre-launch: timings, pricing and service areas expand after pilot.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 mx-auto max-w-6xl px-4 pb-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Our 3 Services (Noida)</h2>
            <p className="mt-2 text-sm text-white/70">
              Focused launch. Clear scope. Quality checks. Fast resolution.
            </p>
          </div>
          <a href="#faq" className="hidden text-sm text-white/70 hover:text-white md:block">
            See FAQ →
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                  {s.tag}
                </div>
              </div>

              <p className="mt-3 text-sm text-white/70">{s.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {s.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-500"
                  onClick={() => {
                    setService(s.key);
                    const el = document.getElementById("book");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  Book now
                </Button>

                <a href="#about" className="w-full">
                  <Button className="w-full border border-white/15 bg-white/5 text-white hover:bg-white/10">
                    Learn
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h3 className="text-xl font-bold">About QuickFix Local</h3>
          <p className="mt-3 text-sm text-white/70 max-w-3xl">
            We’re building a verified network of local professionals for Noida.
            The goal is simple: reliable service, transparent pricing, and a clean customer experience —
            without delays, confusion, or surprise charges.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h3 className="text-xl font-bold">FAQ</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="font-semibold">Are you live in Noida now?</div>
              <p className="mt-2 text-sm text-white/70">
                We’re in pre-launch. You can submit a request and we’ll contact you as we onboard verified pros.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="font-semibold">How do you verify professionals?</div>
              <p className="mt-2 text-sm text-white/70">
                KYC checks + skill validation + service behavior standards before they get listed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-white/60">
          <div>© {new Date().getFullYear()} QuickFix Local</div>
          <div>Noida • Pre-launch</div>
        </div>
      </footer>
    </main>
  );
}
