import Card from "@/components/Card";
import Link from "next/link";
import { PACKAGE_TIERS } from "@/lib/data";

const addOns = [
  { title: "Rush delivery", price: "$99" },
  { title: "Extra revision", price: "$49" },
  { title: "Instrumental cut", price: "$59" },
  { title: "Lyric PDF", price: "$19" },
  { title: "Commercial rights", price: "$199" }
];

export default function PackagesPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-4xl text-rosewood md:text-5xl">
          Packages
        </h1>
        <p className="mt-4 text-base text-rosewood/70">
          Three tiers of production, each designed to honor your story.
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
              <div className="mt-5 space-y-2 text-sm text-rosewood/70">
                <p>Delivery: {tier.delivery}</p>
                <p>Revisions: {tier.revisions}</p>
              </div>
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

        <div className="mt-16">
          <h2 className="text-2xl font-serif text-rosewood">Add-ons</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {addOns.map((addOn) => (
              <Card key={addOn.title}>
                <p className="text-sm font-semibold text-rosewood">{addOn.title}</p>
                <p className="mt-2 text-sm text-rosewood/70">{addOn.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
