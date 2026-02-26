import { Resend } from "resend";
import { NextResponse } from "next/server";

interface OrderItemPayload {
    name: string;
    variant: string;
    price: number;
    quantity: number;
}

interface OrderPayload {
    items: OrderItemPayload[];
    customer: {
        name: string;
        email: string;
        phone?: string;
        eventDate?: string;
        notes?: string;
    };
    subtotal: number;
}

function buildOrderEmailHtml(data: OrderPayload): string {
    const itemRows = data.items
        .map(
            (item) => `
      <tr>
        <td style="padding: 12px 16px; font-size: 15px; border-bottom: 1px solid #f0ebe3;">${item.name}</td>
        <td style="padding: 12px 16px; font-size: 14px; color: #888; border-bottom: 1px solid #f0ebe3;">${item.variant}</td>
        <td style="padding: 12px 16px; font-size: 14px; text-align: center; border-bottom: 1px solid #f0ebe3;">${item.quantity}</td>
        <td style="padding: 12px 16px; font-size: 15px; text-align: right; font-weight: 500; border-bottom: 1px solid #f0ebe3;">$${item.price * item.quantity}</td>
      </tr>`
        )
        .join("");

    return `
    <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
      <div style="background: linear-gradient(135deg, #6b1d4a, #8b2d62); padding: 28px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 400; letter-spacing: 2px;">
          New Order Request
        </h1>
        <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 13px; letter-spacing: 1px;">
          from ${data.customer.name}
        </p>
      </div>

      <div style="padding: 0; background: #faf8f5; border: 1px solid #eee; border-top: none;">
        <!-- Order Items Table -->
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f5f0ea;">
              <th style="padding: 10px 16px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #888; text-align: left; font-weight: 400;">Item</th>
              <th style="padding: 10px 16px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #888; text-align: left; font-weight: 400;">Size</th>
              <th style="padding: 10px 16px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #888; text-align: center; font-weight: 400;">Qty</th>
              <th style="padding: 10px 16px; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #888; text-align: right; font-weight: 400;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemRows}
          </tbody>
        </table>

        <!-- Subtotal -->
        <div style="padding: 16px; text-align: right; background: #f5f0ea;">
          <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888;">Estimated Total: </span>
          <span style="font-size: 22px; color: #6b1d4a; font-weight: 500;">$${data.subtotal}</span>
        </div>

        <!-- Customer Details -->
        <div style="padding: 24px 16px; border-top: 2px solid #f0ebe3;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #888; margin: 0 0 14px; font-weight: 400;">Customer Details</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 100px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; font-size: 15px;">${data.customer.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${data.customer.email}" style="color: #6b1d4a;">${data.customer.email}</a></td>
            </tr>
            ${data.customer.phone
            ? `<tr>
              <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="tel:${data.customer.phone}" style="color: #6b1d4a;">${data.customer.phone}</a></td>
            </tr>`
            : ""
        }
            ${data.customer.eventDate
            ? `<tr>
              <td style="padding: 8px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Event Date</td>
              <td style="padding: 8px 0; font-size: 15px;">${data.customer.eventDate}</td>
            </tr>`
            : ""
        }
          </table>
          ${data.customer.notes
            ? `
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e5e5;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Special Notes / Allergies</p>
              <p style="font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.customer.notes}</p>
            </div>
          `
            : ""
        }
        </div>
      </div>

      <div style="padding: 16px; text-align: center; border-radius: 0 0 12px 12px; background: #faf8f5; border: 1px solid #eee; border-top: none;">
        <p style="font-size: 12px; color: #aaa; margin: 0;">
          Reply directly to this email to respond to ${data.customer.name}
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
    try {
        const body: OrderPayload = await request.json();

        if (!body.customer?.name || !body.customer?.email || !body.items?.length) {
            return NextResponse.json(
                { error: "Name, email, and at least one item are required." },
                { status: 400 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const contactEmail =
            process.env.CONTACT_EMAIL || "sandy.sharon101@gmail.com";

        const itemSummary = body.items
            .map((i) => `${i.name} (${i.variant}) x${i.quantity}`)
            .join(", ");

        const { error } = await resend.emails.send({
            from: "Cake Orders <onboarding@resend.dev>",
            to: contactEmail,
            replyTo: body.customer.email,
            subject: `New Order Request from ${body.customer.name} — ${itemSummary}`,
            html: buildOrderEmailHtml(body),
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send order. Please try again later." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Order API error:", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
