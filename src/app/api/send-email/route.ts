import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/<[^>]*>/g, "");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name        = clean(body.name);
    const emailRaw    = clean(body.email);
    const company     = clean(body.company);
    const jobTitle    = clean(body.jobTitle);
    const inquiryType = clean(body.inquiryType);
    const phone       = clean(body.phone);
    const message     = clean(body.message);
    const agreeUpdates = body.agreeUpdates ? "Yes" : "No";

    // ── Validate email format ─────────────────────────────────────────────────
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw);

    // ── Server-side validation ────────────────────────────────────────────────
    if (!name || !emailValid || !company || !jobTitle) {
      return NextResponse.json(
        { status: "error", message: "Required fields are missing or invalid" },
        { status: 422 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.dreamhost.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER || "";
    const smtpPass = process.env.SMTP_PASS || "";
    const mailTo   = process.env.MAIL_TO   || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from:     `"Website Contact" <${smtpUser}>`,
      to:       mailTo,
      replyTo:  `"${name}" <${emailRaw}>`,
      subject:  "New Contact Form Submission",
      html: `
        <h3 style="font-family:sans-serif;color:#1d4ed8">New Contact Form Submission</h3>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:6px 12px;font-weight:bold">Name</td><td style="padding:6px 12px">${name}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Email</td><td style="padding:6px 12px">${emailRaw}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Company</td><td style="padding:6px 12px">${company}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Job Title</td><td style="padding:6px 12px">${jobTitle}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Inquiry Type</td><td style="padding:6px 12px">${inquiryType}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Phone</td><td style="padding:6px 12px">${phone}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold">Agrees to Updates</td><td style="padding:6px 12px">${agreeUpdates}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">Message</td><td style="padding:6px 12px">${message}</td></tr>
        </table>
      `,
      text: `Name: ${name}\nEmail: ${emailRaw}\nCompany: ${company}\nJob Title: ${jobTitle}\nInquiry: ${inquiryType}\nPhone: ${phone}\nAgrees to Updates: ${agreeUpdates}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ status: "success", message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: "error", message: "Failed to send email" },
      { status: 500 }
    );
  }
}