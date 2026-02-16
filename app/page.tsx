export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Trusted Electrician, Plumbing & AC Repair Services in Noida
        </h1>
        <p className="text-lg mb-6">
          Same-Day Professional Home Services with Transparent & Affordable Pricing.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="tel:+919999999999"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919999999999"
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold"
          >
            💬 WhatsApp Booking
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Home Services in Noida
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">⚡ Expert Electrician in Noida</h3>
            <p>
              Wiring repair, switch installation, fan fitting, MCB replacement,
              inverter setup, and emergency electrical services.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">🚰 Professional Plumbing Services</h3>
            <p>
              Pipe leakage repair, bathroom fittings, kitchen plumbing,
              tap & shower installation with fast same-day service.
            </p>
          </div>

          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">❄ AC Repair & Installation</h3>
            <p>
              AC gas filling, servicing, installation, and complete AC repair
              solutions across all sectors of Noida.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Quick Fix Local?</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          <div>✔ Same-Day Service Across Noida</div>
          <div>✔ Transparent Pricing (No Hidden Charges)</div>
          <div>✔ Verified & Skilled Technicians</div>
          <div>✔ Fast Response Time</div>
          <div>✔ Affordable Rates</div>
          <div>✔ Customer Satisfaction Guaranteed</div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Serving All Major Sectors in Noida</h2>
        <p>
          Sector 18 • Sector 62 • Sector 75 • Sector 137 • Sector 50 •
          Sector 76 • Sector 93 and nearby areas.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Service Today?
        </h2>
        <p className="mb-6">
          Call Now or WhatsApp Us for Instant Booking.
        </p>
        <a
          href="tel:+919999999999"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
        >
          📞 Book Now
        </a>
      </section>

    </main>
  );
}
