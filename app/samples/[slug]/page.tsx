import Image from "next/image";
import AudioPlayer from "@/components/AudioPlayer";
import Card from "@/components/Card";
import Link from "next/link";

export default function SampleDetailPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ");

  return (
    <section className="section">
      <div className="mx-auto max-w-4xl">
        <Link href="/samples" className="text-sm font-semibold text-rosewood/70">
          Back to samples
        </Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <Image
            src="/images/cover-placeholder.svg"
            alt={title}
            width={480}
            height={480}
            className="h-72 w-full rounded-3xl object-cover"
          />
          <div>
            <h1 className="font-serif text-4xl text-rosewood md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-rosewood/70">
              Placeholder story blurb for this sample song. Replace with real
              notes about the moment and creative direction.
            </p>
            <div className="mt-6">
              <AudioPlayer src="/audio/sample-1.mp3" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index}>
              <p className="text-sm text-rosewood/70">
                Placeholder highlight {index + 1}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
