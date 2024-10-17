// app/api/create-checkout-session/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const res = await fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create checkout session");
    }

    const data = await res.json();
    return NextResponse.json({ url: data.url }); // クライアントにURLを返す
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
