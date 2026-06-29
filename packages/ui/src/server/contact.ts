import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "../lib/site";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || siteConfig.contactEmail;
// onboarding@resend.dev works without any DNS/domain verification.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || `${siteConfig.name} <onboarding@resend.dev>`;

const SUBJECT_LABELS: Record<string, string> = {
  "business-enablement": "Business Enablement",
  "technology-consulting": "Technology Consulting",
  "career-services": "Career Services",
  general: "General Inquiry",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Shared contact-form handler. Each app's /api/contact route re-exports this as POST. */
export async function handleContact(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const organization = String(body.organization ?? "").trim();
  const subjectKey = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company_website ?? "").trim();

  // Bot caught by honeypot — pretend success, send nothing.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !subjectKey || !message) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: `Email is not configured yet. Please email ${TO_EMAIL} directly.` },
      { status: 500 }
    );
  }

  const subjectLabel = SUBJECT_LABELS[subjectKey] || subjectKey;
  const resend = new Resend(apiKey);
  const domain = siteConfig.url.replace(/^https?:\/\//, "");

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #111; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New inquiry from ${domain}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ""}
      <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  const text = [
    `New inquiry from ${domain}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : null,
    `Subject: ${subjectLabel}`,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New inquiry: ${subjectLabel} — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: `Could not send your message. Please try again or email ${TO_EMAIL}.` },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: `Could not send your message. Please try again or email ${TO_EMAIL}.` },
      { status: 500 }
    );
  }
}
