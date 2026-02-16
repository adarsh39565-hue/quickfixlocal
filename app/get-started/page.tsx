'use client';

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.logo}>⚡ QuickFix Local</h1>

        <h2 style={styles.heading}>
          30-Minute Home Repair Services
        </h2>

        <p style={styles.subtext}>
          Electrician • Plumber • AC • Laptop Repair • Bike Pickup  
          <br />
          Fast • Verified • Affordable
        </p>

        <button style={styles.button}>
          Book a Service
        </button>

        <div style={styles.trustRow}>
          <div>✔ Verified Technicians</div>
          <div>✔ Same Day Service</div>
          <div>✔ Transparent Pricing</div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'system-ui, sans-serif',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '50px',
    borderRadius: '18px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
    textAlign: 'center' as const,
  },
  logo: {
    fontSize: '28px',
    marginBottom: '15px',
    fontWeight: 800,
    color: '#2563eb',
  },
  heading: {
    fontSize: '26px',
    marginBottom: '10px',
  },
  subtext: {
    opacity: 0.7,
    marginBottom: '30px',
    fontSize: '15px',
  },
  button: {
    padding: '15px 30px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#2563eb',
    color: 'white',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '16px',
  },
  trustRow: {
    marginTop: '30px',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    opacity: 0.8,
  },
};
