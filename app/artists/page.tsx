import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";

const artists = [
  {
    slug: "ava-hart",
    name: "Ava Hart",
    genres: ["Pop", "Acoustic"],
    tags: ["warm", "cinematic"],
    bio: "A cinematic vocalist with a warm alto and a storyteller's instinct."
  },
  {
    slug: "juno-kai",
    name: "Juno Kai",
    genres: ["EDM", "Pop"],
    tags: ["electric", "uplifting"],
    bio: "A genre-bending producer blending electronic textures with heartfelt hooks."
  },
  {
    slug: "westley-brooks",
    name: "Westley Brooks",
    genres: ["Folk", "Country"],
    tags: ["grounded", "nostalgic"],
    bio: "A folk-inspired songwriter with earthy tones and thoughtful lyrics."
  }
];

export default function ArtistsPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-4xl text-rosewood md:text-5xl">Artists</h1>
        <p className="mt-4 text-base text-rosewood/70">
          Choose a vocalist and producer match, or let us surprise you.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {artists.map((artist) => (
            <Card key={artist.slug}>
              <Image
                src="/images/artist-placeholder.svg"
                alt={artist.name}
                width={320}
                height={320}
                className="h-40 w-full rounded-2xl object-cover"
              />
              <h2 className="mt-4 text-xl font-serif text-rosewood">
                {artist.name}
              </h2>
              <p className="mt-2 text-sm text-rosewood/70">{artist.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood/60">
                {artist.genres.map((genre) => (
                  <span key={genre}>{genre}</span>
                ))}
              </div>
              <Link href={`/artists/${artist.slug}`} className="btn btn-secondary mt-5">
                View artist
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
