import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import { OrderStatus } from "@prisma/client";

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error("Webhook signature verification failed.", error);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;

    if (orderId) {
      const order = await prisma.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.RECEIVED,
          payments: {
            create: {
              stripeCheckoutId: session.id,
              stripePaymentIntentId: session.payment_intent?.toString() ?? null,
              amountCents: session.amount_total ?? 0,
              currency: session.currency ?? "usd",
              status: session.payment_status ?? "paid"
            }
          },
          events: {
            create: { message: "Payment received. Order is now in the queue." }
          }
        },
        include: { user: true }
      });

      const adminEmail = process.env.ADMIN_EMAIL;
      if (order.user.email) {
        await sendEmail({
          to: order.user.email,
          subject: "We received your BVKRI Songs order",
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6">
              <h2 style="color:#3B1F2B">Thank you for your order</h2>
              <p>We have received your custom song request and will begin crafting it soon.</p>
              <p>Order ID: <strong>${order.id}</strong></p>
            </div>
          `
        });
      }

      if (adminEmail) {
        await sendEmail({
          to: adminEmail,
          subject: "New BVKRI Songs order received",
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6">
              <h2 style="color:#3B1F2B">New order received</h2>
              <p>Order ID: <strong>${order.id}</strong></p>
              <p>Package: ${order.packageType}</p>
            </div>
          `
        });
      }
    }
  }

  return NextResponse.json({ received: true });
}
