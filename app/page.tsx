import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              ⚡
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold">QuickFix Local</div>
              <div className="text-xs text-white/60">Noida</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              Book service
            </Link>
            <Link
              href="/get-started"
              className="rounded-xl bg-lime-300 px-4 py-2 text-sm font-semibold text-black hover:bg-lime-200"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime-300/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          {/* Left */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-lime-300" />
              We’re building Noida’s trusted home service network
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Fast, verified home services —
              <span className="text-lime-300"> right at your doorstep.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">
              QuickFix Local connects you with reliable professionals for
              <b> Plumbing</b>, <b> Electrician</b>, and <b> AC Repair</b>.
              Simple booking, transparent updates, and quality work — starting in Noida.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/book"
                className="rounded-xl bg-lime-300 px-5 py-3 text-sm font-semibold text-black hover:bg-lime-200"
              >
                Book a service
              </Link>
              <a
                href="#services"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm hover:bg-white/10"
              >
                View services
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold">3</div>
                <div className="mt-1 text-xs text-white/70">Core services</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold">Noida</div>
                <div className="mt-1 text-xs text-white/70">First launch city</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold">Pre-launch</div>
                <div className="mt-1 text-xs text-white/70">Building & testing</div>
              </div>
            </div>
          </div>

          {/* Right - Visual Card (like your reference) */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/90">QuickFix Local</div>
                <div className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/70">
                  Noida • Beta
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-black/30 p-4">
                  <div className="text-xs text-white/70">Popular today</div>
                  <div className="mt-2 text-lg font-semibold">AC Repair</div>
                  <div className="mt-1 text-sm text-white/70">
                    Cooling issue • Gas check • Service
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-black/30 p-4">
                    <div className="text-xs text-white/70">Service</div>
                    <div className="mt-2 font-semibold">Plumbing</div>
                    <div className="mt-1 text-xs text-white/60">
                      Leak • Tap • Bathroom
                    </div>
                  </div>
                  <div className="rounded-2xl bg-black/30 p-4">
                    <div className="text-xs text-white/70">Service</div>
                    <div className="mt-2 font-semibold">Electrician</div>
                    <div className="mt-1 text-xs text-white/60">
                      Switch • Fan • Wiring
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-lime-300/15 p-4">
                  <div className="text-xs text-white/80">What’s coming</div>
                  <div className="mt-2 text-sm text-white/80">
                    Verified professionals • Transparent pricing • Real-time updates
                  </div>
                </div>
              </div>
            </div>

            {/* little badge */}
            <div className="absolute -bottom-4 left-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/80 backdrop-blur">
              “Local professionals. Trusted work. QuickFix.”
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold md:text-3xl">Our 3 Services (Noida)</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          We’re starting focused with the most demanded services. Each category has clear scope and quality checks.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <ServiceCard
            title="Plumbing"
            desc="Leaking taps, bathroom fittings, blockages, pipelines — quick fixes + proper solutions."
            points={["Leak repair", "Tap & mixer install", "Drain cleaning", "Bathroom fittings"]}
          />
          <ServiceCard
            title="Electrician"
            desc="Switches, sockets, fans, lights, wiring — safe work with clean finishing."
            points={["Switchboard repair", "Fan installation", "Lights & fixtures", "Basic wiring"]}
          />
          <ServiceCard
            title="AC Repair"
            desc="AC not cooling, service, gas check, minor repairs — reliable diagnosis & updates."
            points={["Cooling issue", "General service", "Gas check", "Minor repairs"]}
          />
        </div>

        <div className="mt-8">
          <Link
            href="/book"
            className="inline-flex rounded-xl bg-lime-300 px-5 py-3 text-sm font-semibold text-black hover:bg-lime-200"
          >
            Book now
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <StepCard
              n="01"
              title="Choose service"
              desc="Pick Plumbing, Electrician, or AC Repair. Add your city and phone."
            />
            <StepCard
              n="02"
              title="We confirm"
              desc="We validate the request and share next steps. (Pre-launch: basic flow is ready.)"
            />
            <StepCard
              n="03"
              title="Professional visit"
              desc="A trained local professional is assigned with tracking & quality checks (in progress)."
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">About QuickFix Local</h2>
              <p className="mt-3 text-white/70">
                We’re building a trusted service platform for Noida that’s simple for customers
                and fair for professionals. Our goal is to make home services feel as reliable as ordering food —
                with real accountability and clear communication.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/75">
                <li>✅ Clear service scopes & SOPs</li>
                <li>✅ Professional onboarding & verification (in progress)</li>
                <li>✅ Support + quality checks on every job (in progress)</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Current status (Pre-launch)</div>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <StatusRow label="Website & UI" value="Ready (improving)" />
                <StatusRow label="Booking flow" value="Working" />
                <StatusRow label="Professional network" value="Building" />
                <StatusRow label="Service SOPs" value="Drafting" />
              </div>

              <div className="mt-6 rounded-2xl bg-black/30 p-4 text-xs text-white/70">
                Next: onboard first professionals + run 30 pilot jobs in Noida for feedback.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60">
          © {new Date().getFullYear()} QuickFix Local • Noida
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({
  title,
  desc,
  points,
}: {
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-lime-300">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs text-white/60">{n}</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-white/70">{label}</div>
      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
        {value}
      </div>
    </div>
  );
}
