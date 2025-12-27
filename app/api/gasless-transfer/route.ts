import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { to, amount } = body;

  // Stub only — API key & real tx later
  console.log("Gasless tx requested:", { to, amount });

  return NextResponse.json({
    success: true,
    message:
      "Gasless transaction submitted (stub). Connect Paymaster API to execute.",
  });
}
