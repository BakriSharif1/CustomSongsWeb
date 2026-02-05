import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { ADD_ONS, PACKAGE_PRICING, calculateTotal, type PackageType } from "@/lib/pricing";
import { OrderStatus, PackageType as PrismaPackageType } from "@prisma/client";

const PACKAGE_MAP: Record<PackageType, PrismaPackageType> = {
  Basic: PrismaPackageType.BASIC,
  Plus: PrismaPackageType.PLUS,
  Premium: PrismaPackageType.PREMIUM
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      email,
      packageType,
      occasion,
      recipientName,
      relationship,
      storyText,
      mustIncludeLines,
      pronunciationNotes,
      genre,
      mood,
      tempo,
      vocalGender,
      language,
      explicit,
      addOns,
      preferredArtistId
    } = body ?? {};

    if (!email || !packageType) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const safePackageType = PACKAGE_MAP[packageType as PackageType];
    if (!safePackageType) {
      return NextResponse.json({ error: "Invalid package type." }, { status: 400 });
    }

    const addOnIds = Array.isArray(addOns) ? addOns : [];
    const total = calculateTotal(packageType as PackageType, addOnIds);
    const totalCents = total * 100;

    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: { email }
    });

    const order = await prisma.order.create({
      data: {
        userId: user.id,
        packageType: safePackageType,
        priceCents: totalCents,
        status: OrderStatus.AWAITING_PAYMENT,
        preferredArtistId: preferredArtistId || null,
        details: {
          create: {
            occasion: occasion ?? "",
            recipientName: recipientName ?? "",
            relationship: relationship ?? "",
            storyText: storyText ?? "",
            mustIncludeLines: mustIncludeLines ?? "",
            pronunciationNotes: pronunciationNotes ?? "",
            genre: genre ?? "",
            mood: mood ?? "",
            tempo: tempo ?? "",
            vocalGender: vocalGender ?? "",
            language: language ?? "",
            explicit: Boolean(explicit),
            addOns: addOnIds
          }
        },
        events: {
          create: {
            message: "Checkout session created."
          }
        }
      }
    });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: `BVKRI Songs ${packageType} Package`,
              description: `Custom song + ${addOnIds.length} add-ons`
            },
            unit_amount: totalCents
          }
        }
      ],
      metadata: {
        orderId: order.id
      },
      success_url: `${appUrl}/thank-you?orderId=${order.id}`,
      cancel_url: `${appUrl}/start?canceled=true`
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to create checkout session." }, { status: 500 });
  }
}
