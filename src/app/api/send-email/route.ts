import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { email, message ,subject } = await request.json();
    if (!email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }


    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not defined');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }
    
    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from:'Client <onboarding@resend.dev>',
      to: process.env.RECIPIENT_EMAIL || "",
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}