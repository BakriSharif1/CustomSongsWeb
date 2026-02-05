import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import AudioPlayer from "@/components/AudioPlayer";

const artists = [
  { slug: "ava-hart", name: "Ava Hart", genres: ["Pop", "Acoustic"] },
  { slug: "juno-kai", name: "Juno Kai", genres: ["EDM", "Pop"] },
  { slug: "westley-brooks", name: "Westley Brooks", genres: ["Folk", "Country"] }
];

export default function ArtistDetailPage({ params }: { params: { slug: string } }) {
  const artist = artists.find((item) => item.slug === params.slug) ?? artists[0];

  return (
    <section className="section">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <Image
            src="/images/artist-placeholder.svg"
            alt={artist.name}
            width={420}
            height={420}
            className="h-72 w-full rounded-3xl object-cover"
          />
          <div>
            <h1 className="font-serif text-4xl text-rosewood md:text-5xl">
              {artist.name}
            </h1>
            <p className="mt-3 text-sm text-rosewood/70">
              Placeholder artist bio. Replace with a story, credits, and sonic
              identity that aligns with your brand.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood/60">
              {artist.genres.map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </div>
            <Link href={`/start?artist=${artist.slug}`} className="btn btn-primary mt-6">
              Start your song with this artist
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-serif text-rosewood">Example work</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index}>
                <Image
                  src="/images/cover-placeholder.svg"
                  alt="Example song"
                  width={320}
                  height={320}
                  className="h-40 w-full rounded-2xl object-cover"
                />
                <p className="mt-4 text-lg font-serif text-rosewood">
                  Placeholder Song {index + 1}
                </p>
                <AudioPlayer src={`/audio/sample-${index + 1}.mp3`} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
