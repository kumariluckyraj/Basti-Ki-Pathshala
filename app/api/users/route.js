import { NextResponse } from "next/server";
import connectDb from "@/db/connectDb";
import Register from "@/models/Registration";
import mongoose from "mongoose";

export const dynamic = "force-dynamic"; // ✅ tells Vercel this route is dynamic

export async function GET(req) {
  try {
    await connectDb();
    const users = await Register.find({});
    console.log("🔌 Connected to DB:", mongoose.connection.host);

    return new NextResponse(JSON.stringify({ success: true, users }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store", // ✅ disables caching
      },
    });
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    return new NextResponse(
      JSON.stringify({ success: false, message: "Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
