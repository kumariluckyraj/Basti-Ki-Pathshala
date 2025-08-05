export async function GET(req) {
  try {
    await connectDb();
    const users = await Register.find({});

    return new NextResponse(JSON.stringify({ success: true, users }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store", // 👈 Prevent caching
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
          "Cache-Control": "no-store", // 👈 Apply here too
        },
      }
    );
  }
}
