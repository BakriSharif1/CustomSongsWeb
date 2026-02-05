import Link from "next/link";
import Card from "@/components/Card";

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl text-center">
        <Card>
          <h1 className="font-serif text-4xl text-rosewood">Thank you</h1>
          <p className="mt-4 text-base text-rosewood/70">
            Your order is received. We will review the details and begin crafting
            your custom song.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/account" className="btn btn-primary">
              Visit your account
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
