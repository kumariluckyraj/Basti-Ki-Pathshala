
import connectDb from "@/db/connectDb" // adjust the path if needed
import Register from "@/models/Registration"; // your Mongoose model
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(req) {
  try {
    await connectDb();
console.log("🔌 Connected to DB:", mongoose.connection.host);

    const users = await Register.find({});
    console.log("Fetched users:", users);

    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
