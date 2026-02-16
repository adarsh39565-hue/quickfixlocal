export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Fast & Reliable Local Services</h1>
          <p>
            QuickFix Local connects you with trusted professionals in your area.
            Plumbing, electrical, repairs — done right the first time.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Book a Service
            </a>
            <a href="#services" className="btn secondary">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>

          <div className="service-grid">
            <div className="card">
              <h3>Plumbing</h3>
              <p>Leak repairs, installations, and emergency plumbing services.</p>
            </div>

            <div className="card">
              <h3>Electrical</h3>
              <p>Safe and certified electrical repairs and installations.</p>
            </div>

            <div className="card">
              <h3>Home Repairs</h3>
              <p>General maintenance and quick fixes for your home.</p>
            </div>

            <div className="card">
              <h3>AC & Appliances</h3>
              <p>Installation and repair of AC units and major appliances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why">
        <div className="container">
          <h2>Why Choose QuickFix Local?</h2>

          <div className="why-grid">
            <div>
              <h4>✔ Verified Professionals</h4>
              <p>All service providers are background-checked and experienced.</p>
            </div>

            <div>
              <h4>✔ Fast Response</h4>
              <p>Same-day service available in most locations.</p>
            </div>

            <div>
              <h4>✔ Affordable Pricing</h4>
              <p>Transparent pricing with no hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>Need a Quick Fix?</h2>
          <p>Book your service today and get professional help instantly.</p>
          <a href="#" className="btn primary large">
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2026 QuickFix Local. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
