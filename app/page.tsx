"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("bookings").insert([
      { name, phone, service },
    ]);

    if (error) {
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Booking submitted successfully!");
      setName("");
      setPhone("");
      setService("");
    }

    setLoading(false);
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Fast & Reliable Local Services</h1>
          <p>
            QuickFix Local connects you with trusted professionals in your area.
            Plumbing, electrical, repairs — done right the first time.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
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

      {/* BOOKING FORM */}
      <section className="cta">
        <div className="container">
          <h2>Book a Service</h2>

          <form onSubmit={handleSubmit} className="booking-form">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select Service</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Electrical">Electrical</option>
              <option value="Home Repairs">Home Repairs</option>
              <option value="AC & Appliances">AC & Appliances</option>
            </select>

            <button type="submit" className="btn primary large">
              {loading ? "Submitting..." : "Book Now"}
            </button>
          </form>

          {message && <p className="form-message">{message}</p>}
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 QuickFix Local. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
