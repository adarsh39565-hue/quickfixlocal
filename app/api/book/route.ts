import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Create Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    // Get form data
    const body = await req.json();
    const { name, service, phone, address } = body;

    // Validate fields
    if (!name || !service || !phone || !address) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Insert into database
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          name,
          service,
          phone,
          address,
          status: "pending",
        },
      ])
      .select();

    // If database error
    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Booking created successfully", data },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
