import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const eventType = String(body.eventType || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER;

    if (!to || !from) {
      return NextResponse.json(
        { error: "Mail environment variables are not configured." },
        { status: 500 }
      );
    }

    const subject = `New inquiry from ${name}`;

    const text = `
New inquiry from Shots in Motion

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Event Type: ${eventType || "N/A"}

Message:
${message}
    `.trim();

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New inquiry from Shots in Motion</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Event Type:</strong> ${eventType || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
