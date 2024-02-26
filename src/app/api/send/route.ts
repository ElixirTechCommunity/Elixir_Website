import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
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
      to: ["briheetyadav@gmail.com"],
      subject: `New message from ${mail_vals.from_name}`,
      html: `<p>Hi!<br>Name: ${mail_vals.from_name},<br>Email: ${mail_vals.reply_to}<br>Message: ${mail_vals.message}</p>`,
    }),
  });

  if (res.ok) {
    return NextResponse.json(res);
  } else {
    return NextResponse.error();
  }
}
