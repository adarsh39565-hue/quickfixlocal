"use client"

import { useEffect, useState } from "react"

export default function AdminPage() {
  const [bookings, setBookings] = useState<any[]>([])

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    const res = await fetch("/api/book")
    const data = await res.json()
    setBookings(data)
  }

  const updateStatus = async (id: number, status: string) => {
    await fetch("/api/book", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    })

    fetchBookings()
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Panel</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((b) => (
          <div
            key={b.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <p><strong>Name:</strong> {b.name}</p>
            <p><strong>Phone:</strong> {b.phone}</p>
            <p><strong>Service:</strong> {b.service}</p>
            <p><strong>Address:</strong> {b.address}</p>
            <p><strong>Status:</strong> {b.status}</p>

            <div style={{ marginTop: "10px" }}>
              <button onClick={() => updateStatus(b.id, "Assigned")}>
                Assign
              </button>

              <button
                onClick={() => updateStatus(b.id, "Completed")}
                style={{ marginLeft: "10px" }}
              >
                Complete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
