import { NextResponse } from "next/server";
export const runtime = "edge";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = "re_ZfsxS9ZU_AUk9GT9XhwX9bhLufTzBztvy";

export async function POST(request: Request) {
  try {
    console.log("Received POST request:", request);
    const mail_vals: {
      from_name: string;
      reply_to: string;
      message: string;
    } = await request.json();
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Message <onboarding@resend.dev>",
        to: ["techcommunityelixir@gmail.com"],
        subject: `New message from ${mail_vals.from_name}`,
        html: `<p>Hi!<br>Name: ${mail_vals.from_name},<br>Email: ${mail_vals.reply_to}<br>Message: ${mail_vals.message}</p>`,
      }),
    });

    if (res.ok) {
      return NextResponse.json(res);
    } else {
      return NextResponse.error();
    }
  } catch (error) {
    console.error("Error in POST function:", error);
    return NextResponse.error();
  }
}
