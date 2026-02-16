import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

type CakeInquiry = {
  type: "cake";
  name: string;
  email: string;
  phone?: string;
  eventType?: string;
  date?: string;
  message?: string;
};

type BusinessInquiry = {
  type: "business";
  name: string;
  email: string;
  phone?: string;
  businessName: string;
  serviceType?: string;
  timeline?: string;
  message?: string;
};

type ContactPayload = CakeInquiry | BusinessInquiry;

function buildCakeEmailHtml(data: CakeInquiry): string {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
      <div style="background: #7b5e7b; padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 400; letter-spacing: 2px;">
          New Cake Inquiry
        </h1>
      </div>
      <div style="padding: 28px; background: #faf8f5; border-radius: 0 0 12px 12px; border: 1px solid #eee; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; font-size: 15px;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; font-size: 15px;"><a href="mailto:${data.email}" style="color: #7b5e7b;">${data.email}</a></td>
          </tr>
          ${data.phone ? `<tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Phone</td>
            <td style="padding: 10px 0; font-size: 15px;"><a href="tel:${data.phone}" style="color: #7b5e7b;">${data.phone}</a></td>
          </tr>` : ""}
          ${data.eventType ? `<tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Event Type</td>
            <td style="padding: 10px 0; font-size: 15px; text-transform: capitalize;">${data.eventType}</td>
          </tr>` : ""}
          ${data.date ? `<tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Event Date</td>
            <td style="padding: 10px 0; font-size: 15px;">${data.date}</td>
          </tr>` : ""}
        </table>
        ${data.message ? `
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
            <p style="font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

function buildBusinessEmailHtml(data: BusinessInquiry): string {
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
      <div style="background: #7b5e7b; padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 400; letter-spacing: 2px;">
          New Business Inquiry
        </h1>
      </div>
      <div style="padding: 28px; background: #faf8f5; border-radius: 0 0 12px 12px; border: 1px solid #eee; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 10px 0; font-size: 15px;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Email</td>
            <td style="padding: 10px 0; font-size: 15px;"><a href="mailto:${data.email}" style="color: #7b5e7b;">${data.email}</a></td>
          </tr>
          ${data.phone ? `<tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Phone</td>
            <td style="padding: 10px 0; font-size: 15px;"><a href="tel:${data.phone}" style="color: #7b5e7b;">${data.phone}</a></td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Business</td>
            <td style="padding: 10px 0; font-size: 15px;">${data.businessName}</td>
          </tr>
          ${data.serviceType ? `<tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Service Needed</td>
            <td style="padding: 10px 0; font-size: 15px; text-transform: capitalize;">${data.serviceType.replace(/-/g, " ")}</td>
          </tr>` : ""}
          ${data.timeline ? `<tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Timeline</td>
            <td style="padding: 10px 0; font-size: 15px; text-transform: capitalize;">${data.timeline.replace(/-/g, " ")}</td>
          </tr>` : ""}
        </table>
        ${data.message ? `
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Project Details</p>
            <p style="font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "sandy.sharon101@gmail.com";

    const isCake = body.type === "cake";
    const subject = isCake
      ? `New Cake Inquiry from ${body.name}`
      : `New Business Inquiry from ${body.name}`;
    const html = isCake
      ? buildCakeEmailHtml(body as CakeInquiry)
      : buildBusinessEmailHtml(body as BusinessInquiry);

    const { error } = await resend.emails.send({
      from: "Cake Inquiries <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: body.email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
