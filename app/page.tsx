import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h2 style={{ margin: 0 }}>QuickFix Local</h2>
        <Link href="/book">
          <button style={orangeButton}>Book Now</button>
        </Link>
      </nav>

      {/* HERO */}
      <section
        style={{
          backgroundColor: "#ff6600",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
          Fast Home Services Within 60 Minutes
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Plumbing, Electrical & Cleaning Services at Your Doorstep
        </p>

        <Link href="/book">
          <button style={blackButton}>Book Service Now</button>
        </Link>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "38px", marginBottom: "50px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={cardStyle}>
            <h3>🛠 Plumbing</h3>
            <p>Tap repair, leakage fixes & bathroom fittings.</p>
            <Link href="/book">
              <button style={smallButton}>Book</button>
            </Link>
          </div>

          <div style={cardStyle}>
            <h3>⚡ Electrical</h3>
            <p>Switch repair, wiring & appliance installation.</p>
            <Link href="/book">
              <button style={smallButton}>Book</button>
            </Link>
          </div>

          <div style={cardStyle}>
            <h3>🧼 Cleaning</h3>
            <p>Deep cleaning for bathroom, kitchen & full home.</p>
            <Link href="/book">
              <button style={smallButton}>Book</button>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        style={{
          backgroundColor: "#111",
          padding: "90px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "60px" }}>
          Our Pricing Plans
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* BASIC */}
          <div style={darkCard}>
            <h3>Basic</h3>
            <h1 style={priceStyle}>₹499</h1>
            <p>✔ 1 Issue Fix</p>
            <p>✔ 1 Hour Service</p>
            <Link href="/book">
              <button style={orangeButton}>Choose Plan</button>
            </Link>
          </div>

          {/* STANDARD */}
          <div style={{ ...darkCard, border: "3px solid #ff6600" }}>
            <h3>Standard (Most Popular)</h3>
            <h1 style={priceStyle}>₹999</h1>
            <p>✔ Up to 3 Issues</p>
            <p>✔ 2 Hour Service</p>
            <p>✔ Priority Support</p>
            <Link href="/book">
              <button style={orangeButton}>Choose Plan</button>
            </Link>
          </div>

          {/* PREMIUM */}
          <div style={darkCard}>
            <h3>Premium</h3>
            <h1 style={priceStyle}>₹1999</h1>
            <p>✔ Multiple Issues</p>
            <p>✔ Same Day Service</p>
            <p>✔ 7-Day Warranty</p>
            <Link href="/book">
              <button style={orangeButton}>Choose Plan</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "25px",
        }}
      >
        © 2026 QuickFix Local. All Rights Reserved.
      </footer>
    </div>
  );
}

/* STYLES */

const cardStyle = {
  width: "280px",
  padding: "25px",
  border: "1px solid #ddd",
  borderRadius: "10px",
};

const darkCard = {
  width: "300px",
  padding: "35px",
  backgroundColor: "#1e1e1e",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
};

const priceStyle = {
  color: "#ff6600",
  fontSize: "42px",
  margin: "15px 0",
};

const orangeButton = {
  marginTop: "15px",
  padding: "10px 20px",
  backgroundColor: "#ff6600",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const blackButton = {
  padding: "15px 30px",
  fontSize: "18px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  cursor: "pointer",
};

const smallButton = {
  marginTop: "10px",
  padding: "6px 15px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  cursor: "pointer",
};
