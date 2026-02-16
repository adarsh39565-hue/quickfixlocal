"use client";

import { useState } from "react";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          service,
          phone,
          address,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong");
      } else {
        alert("Booking submitted successfully!");
        setName("");
        setService("");
        setPhone("");
        setAddress("");
      }
    } catch (error) {
      console.error("Frontend Error:", error);
      alert("Server connection failed");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h1>Book a Service</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          id="service"
          name="service"
          type="text"
          placeholder="Service Needed"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        />

        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Book Now"}
        </button>
      </form>
    </div>
  );
}
