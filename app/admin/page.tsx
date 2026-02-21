import { supabaseAdmin } from "@/lib/supabaseAdmin";

type Booking = {
  id: string | number;
  created_at?: string;
  service?: string;
  city?: string;
  name?: string;
  phone?: string;
  address?: string;
  details?: string;

  status?: string;
  assigned_to?: string | null;
  call_notes?: string | null;
  scheduled_date?: string | null;
};

const STATUSES = ["new", "called", "confirmed", "completed", "cancelled"] as const;

export default async function AdminPage() {
  const sb = supabaseAdmin();

  const { data, error } = await sb
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div style={{ padding: 24, color: "white", background: "#0b1220", minHeight: "100vh" }}>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>Admin</h1>
        <p style={{ marginTop: 12, color: "#ffb4b4" }}>Error: {error.message}</p>
      </div>
    );
  }

  const bookings = (data ?? []) as Booking[];

  async function updateBooking(formData: FormData) {
    "use server";

    const id = formData.get("id") as string;
    const status = formData.get("status") as string;
    const assigned_to = (formData.get("assigned_to") as string) || null;
    const call_notes = (formData.get("call_notes") as string) || null;

    const sb2 = supabaseAdmin();
    await sb2
      .from("bookings")
      .update({ status, assigned_to, call_notes })
      .eq("id", id);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#070b14", color: "white", padding: 24 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>QuickFix Local — Admin</h1>
            <p style={{ marginTop: 6, color: "#a7b3cc" }}>
              Manage bookings: update status, assign technician, add call notes.
            </p>
          </div>

          <div style={{ padding: "10px 12px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12 }}>
            <div style={{ fontSize: 12, color: "#a7b3cc" }}>Total bookings</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{bookings.length}</div>
          </div>
        </div>

        <div style={{ marginTop: 18, overflowX: "auto", borderRadius: 16, border: "1px solid rgba(255,255,255,0.12)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 1100 }}>
            <thead style={{ background: "rgba(255,255,255,0.04)" }}>
              <tr>
                <Th>ID</Th>
                <Th>Created</Th>
                <Th>Service</Th>
                <Th>Customer</Th>
                <Th>Phone</Th>
                <Th>City</Th>
                <Th>Status</Th>
                <Th>Assigned</Th>
                <Th>Call Notes</Th>
                <Th>Action</Th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b) => (
                <tr key={String(b.id)} style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <Td style={{ fontFamily: "monospace", color: "#d7e0ff" }}>{String(b.id).slice(0, 8)}…</Td>
                  <Td style={{ color: "#a7b3cc" }}>{b.created_at ? new Date(b.created_at).toLocaleString() : "-"}</Td>

                  <Td>
                    <div style={{ fontWeight: 700 }}>{b.service ?? "-"}</div>
                    <div style={{ color: "#a7b3cc", fontSize: 12 }}>{b.address ?? ""}</div>
                  </Td>

                  <Td>{b.name ?? "-"}</Td>
                  <Td style={{ fontFamily: "monospace" }}>{b.phone ?? "-"}</Td>
                  <Td>{b.city ?? "-"}</Td>

                  <Td>
                    <span
                      style={{
                        padding: "6px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        border: "1px solid rgba(255,255,255,0.14)",
                        background: "rgba(255,255,255,0.04)",
                        textTransform: "capitalize",
                      }}
                    >
                      {b.status ?? "new"}
                    </span>
                  </Td>

                  <Td>{b.assigned_to ?? "-"}</Td>

                  <Td style={{ maxWidth: 220, color: "#a7b3cc" }}>
                    {b.call_notes ? b.call_notes.slice(0, 60) + (b.call_notes.length > 60 ? "…" : "") : "-"}
                  </Td>

                  <Td>
                    <form action={updateBooking} style={{ display: "grid", gap: 8, minWidth: 220 }}>
                      <input type="hidden" name="id" value={String(b.id)} />

                      <select name="status" defaultValue={b.status ?? "new"} style={inputStyle}>
                        {STATUSES.map((s) => (
                          <option value={s} key={s}>
                            {s.toUpperCase()}
                          </option>
                        ))}
                      </select>

                      <input name="assigned_to" placeholder="Assigned to (name)" defaultValue={b.assigned_to ?? ""} style={inputStyle} />
                      <input name="call_notes" placeholder="Call notes" defaultValue={b.call_notes ?? ""} style={inputStyle} />

                      <button
                        type="submit"
                        style={{
                          padding: "10px 12px",
                          borderRadius: 12,
                          border: "1px solid rgba(255,255,255,0.16)",
                          background: "linear-gradient(135deg, rgba(60,120,255,0.9), rgba(120,90,255,0.9))",
                          color: "white",
                          fontWeight: 800,
                          cursor: "pointer",
                        }}
                      >
                        Save
                      </button>
                    </form>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: 14, color: "#a7b3cc", fontSize: 12 }}>
          Status flow: <b>new → called → confirmed → completed</b> (or cancelled).
        </p>
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th style={{ textAlign: "left", padding: 12, fontSize: 12, letterSpacing: 0.4, color: "#a7b3cc" }}>
      {children}
    </th>
  );
}

function Td({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <td style={{ padding: 12, verticalAlign: "top", ...style }}>{children}</td>;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
};
