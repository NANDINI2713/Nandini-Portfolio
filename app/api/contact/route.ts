import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = 'nandinipankajbhaipatel@gmail.com'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#00f5ff;margin-bottom:4px">New portfolio message</h2>
        <p style="color:#666;font-size:13px;margin-top:0">Sent via your portfolio contact form</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="background:#f5f5f5;padding:12px 16px;border-radius:8px;white-space:pre-wrap">${message}</p>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
