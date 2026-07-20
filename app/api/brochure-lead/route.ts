import { NextResponse } from "next/server"
import { Resend } from "resend"

//const MANAGER_EMAIL = "manager.manorview@lasohealthcare.co.uk"
const MANAGER_EMAIL = "henry.ambrose@visicardia.com"
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  const { email } = await request.json()

  if (typeof email !== "string" || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured")
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const fromEmail = process.env.BROCHURE_LEAD_FROM_EMAIL ?? "onboarding@resend.dev"

  try {
    await resend.emails.send({
      from: `Manor View Website <${fromEmail}>`,
      to: MANAGER_EMAIL,
      replyTo: email,
      subject: "New brochure request from the website",
      text: `A visitor requested the brochure download.\n\nTheir email address: ${email}`,
    })
  } catch (error) {
    console.error("Failed to send brochure lead email", error)
    return NextResponse.json({ error: "Failed to send" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
