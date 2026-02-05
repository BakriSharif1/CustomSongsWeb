import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { HOW_STEPS, PACKAGE_TIERS, FAQ_ITEMS, SOCIAL_LOGOS } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="section">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge>Custom songs, handcrafted</Badge>
            <h1 className="mt-6 font-serif text-4xl text-rosewood md:text-6xl">
              The most meaningful gift is one only you can give.
            </h1>
            <p className="mt-4 text-base text-rosewood/70">
              BVKRI Songs pairs your story with premium producers to create a
              cinematic, emotional soundtrack built around your people, your
              memories, and your words.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/start" className="btn btn-primary">
                Start Your Song
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary">
                How it works
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood/60">
              {SOCIAL_LOGOS.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 right-6 h-32 w-32 rounded-full bg-ember/20 blur-3xl" />
            <Card className="relative overflow-hidden">
              <Image
                src="/images/cover-placeholder.svg"
                alt="Song cover placeholder"
                width={640}
                height={640}
                className="h-80 w-full rounded-3xl object-cover"
              />
              <div className="mt-6 space-y-3 text-sm text-rosewood/70">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosewood/50">
                  Featured package
                </p>
                <p className="text-2xl font-serif text-rosewood">Premium Signature</p>
                <p>
                  A bespoke song with full instrumentation, layered vocals, and
                  album-ready mastering.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title">How it works</h2>
          <p className="section-lead">
            Our process keeps you close to the creative, while we handle the
            production details.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {HOW_STEPS.map((step) => (
              <Card key={step.title}>
                <h3 className="text-xl font-serif text-rosewood">{step.title}</h3>
                <p className="mt-3 text-sm text-rosewood/70">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title">Featured packages</h2>
          <p className="section-lead">
            Choose the collaboration level that fits your moment.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PACKAGE_TIERS.map((tier) => (
              <Card key={tier.name} className="flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rosewood/60">
                  {tier.name}
                </p>
                <p className="mt-3 text-3xl font-serif text-rosewood">
                  {tier.price}
                </p>
                <p className="mt-3 text-sm text-rosewood/70">
                  {tier.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-rosewood/70">
                  {tier.includes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <Link href="/start" className="btn btn-secondary mt-6">
                  Start Your Song
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title">Sample songs</h2>
          <p className="section-lead">
            Preview a few placeholder tracks while you wait for yours.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <Image
                  src="/images/cover-placeholder.svg"
                  alt="Sample cover"
                  width={480}
                  height={480}
                  className="h-48 w-full rounded-2xl object-cover"
                />
                <div className="mt-4">
                  <p className="text-lg font-serif text-rosewood">
                    Placeholder Song {index + 1}
                  </p>
                  <p className="text-sm text-rosewood/70">Pop - Warm - 3:12</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title">Reviews</h2>
          <p className="section-lead">
            Placeholder testimonials that you can swap with real customer words.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "It felt like they turned our story into a movie soundtrack.",
              "The song captured every detail we shared and more.",
              "We cried happy tears the moment we pressed play."
            ].map((quote) => (
              <Card key={quote}>
                <p className="text-sm text-rosewood/70">{quote}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood/50">
                  Placeholder client
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title">FAQ</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <Card key={item.question}>
                <p className="text-lg font-serif text-rosewood">
                  {item.question}
                </p>
                <p className="mt-3 text-sm text-rosewood/70">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
