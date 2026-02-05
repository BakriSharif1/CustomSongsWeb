import Image from "next/image";
import Card from "@/components/Card";
import AudioPlayer from "@/components/AudioPlayer";
import Link from "next/link";

const samples = Array.from({ length: 9 }).map((_, index) => ({
  slug: `sample-${index + 1}`,
  title: `Sample Song ${index + 1}`,
  genre: "Pop",
  mood: "Warm",
  duration: "3:12",
  audio: `/audio/sample-${index + 1}.mp3`
}));

export default function SamplesPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-4xl text-rosewood md:text-5xl">Samples</h1>
        <p className="mt-4 text-base text-rosewood/70">
          Placeholder sample songs with preview audio.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {samples.map((song) => (
            <Card key={song.slug}>
              <Image
                src="/images/cover-placeholder.svg"
                alt={song.title}
                width={320}
                height={320}
                className="h-40 w-full rounded-2xl object-cover"
              />
              <div className="mt-4">
                <p className="text-lg font-serif text-rosewood">{song.title}</p>
                <p className="text-sm text-rosewood/70">
                  {song.genre} - {song.mood} - {song.duration}
                </p>
              </div>
              <div className="mt-4">
                <AudioPlayer src={song.audio} />
              </div>
              <Link href={`/samples/${song.slug}`} className="btn btn-secondary mt-5">
                View details
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
