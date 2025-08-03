import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose"; // We'll set this up in step 2
import Registration from "@/models/Registration"; // Set up this model in step 3

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, role, motivation } = body;

    if (!fullName || !email || !phone || !motivation) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    await connectDB();

    const newEntry = await Registration.create({ fullName, email, phone, role, motivation });

    return NextResponse.json({ message: "Success", data: newEntry }, { status: 201 });
  } catch (error) {
    console.error("POST /api/register error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
