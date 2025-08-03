import { connectDB } from "@/lib/mongoose"; // adjust the path if needed
import Register from "@/models/Registration"; // your Mongoose model
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const users = await Register.find({});
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
