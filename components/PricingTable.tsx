import Card from "@/components/Card";
import Button from "@/components/Button";

interface PackageTier {
  name: string;
  description: string;
  price: string;
  delivery: string;
  revisions: string;
  includes: string[];
}

interface PricingTableProps {
  tiers: PackageTier[];
}

export default function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <Card key={tier.name} className="flex h-full flex-col">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rosewood/60">
              {tier.name}
            </p>
            <p className="mt-3 text-3xl font-serif text-rosewood">{tier.price}</p>
            <p className="mt-3 text-sm text-rosewood/70">{tier.description}</p>
            <div className="mt-5 space-y-2 text-sm text-rosewood/70">
              <p>Delivery: {tier.delivery}</p>
              <p>Revisions: {tier.revisions}</p>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-rosewood/70">
              {tier.includes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <Button className="mt-6">
            Start Your Song
          </Button>
        </Card>
      ))}
    </div>
  );
}
