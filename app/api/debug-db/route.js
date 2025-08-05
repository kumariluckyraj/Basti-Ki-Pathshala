
import connectDb from "@/db/connectDb";
import mongoose from "mongoose";

export async function GET() {
  await connectDb();
  return new Response(`Connected to DB: ${mongoose.connection.name}`, {
    status: 200,
  });
}
