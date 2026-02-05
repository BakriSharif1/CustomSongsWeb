import Card from "@/components/Card";
import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-4xl text-rosewood md:text-5xl">
          How BVKRI Songs works
        </h1>
        <p className="mt-4 text-base text-rosewood/70">
          A guided, premium process that turns real stories into a studio-ready
          custom song.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-serif text-rosewood">Order</h2>
            <p className="mt-3 text-sm text-rosewood/70">
              Choose a package, share your story, and select any add-ons.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-serif text-rosewood">Writing</h2>
            <p className="mt-3 text-sm text-rosewood/70">
              Your songwriter shapes the lyrics and melody from your answers.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-serif text-rosewood">Recording</h2>
            <p className="mt-3 text-sm text-rosewood/70">
              Studio vocals and production bring the song to life.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-serif text-rosewood">Delivery</h2>
            <p className="mt-3 text-sm text-rosewood/70">
              You receive a polished mix ready to share and gift.
            </p>
          </Card>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-serif text-rosewood">
              What customers provide
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-rosewood/70">
              <li>- Relationship story and key moments</li>
              <li>- Names, pronunciations, and nicknames</li>
              <li>- Desired tone, genre, and mood</li>
              <li>- Anything to avoid</li>
            </ul>
          </div>
          <Card>
            <Image
              src="/images/cover-placeholder.svg"
              alt="Process placeholder"
              width={520}
              height={520}
              className="h-56 w-full rounded-2xl object-cover"
            />
            <p className="mt-4 text-sm text-rosewood/70">
              Placeholder visual. Replace with your real production imagery.
            </p>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif text-rosewood">What you receive</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {[
              "Studio-quality WAV and MP3",
              "Custom lyrics and melodies",
              "A private delivery link"
            ].map((item) => (
              <Card key={item}>
                <p className="text-sm text-rosewood/70">{item}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif text-rosewood">Revisions policy</h2>
          <p className="mt-3 text-sm text-rosewood/70">
            Placeholder policy. You will define how many revisions each package
            includes and how turnaround is handled.
          </p>
        </div>
      </div>
    </section>
  );
}
