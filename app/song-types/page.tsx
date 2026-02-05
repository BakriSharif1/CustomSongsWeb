import Card from "@/components/Card";
import Link from "next/link";
import { SONG_TYPES } from "@/lib/data";

export default function SongTypesPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-4xl text-rosewood md:text-5xl">
          Song types
        </h1>
        <p className="mt-4 text-base text-rosewood/70">
          Explore a few popular categories. Each one is tailored to your story.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SONG_TYPES.map((type) => (
            <Card key={type.slug}>
              <h2 className="text-xl font-serif text-rosewood">{type.title}</h2>
              <p className="mt-3 text-sm text-rosewood/70">{type.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-rosewood/60">
                {type.genre} - {type.mood}
              </p>
              <Link
                href={`/start?genre=${type.genre}&mood=${type.mood}`}
                className="btn btn-secondary mt-5"
              >
                Request this style
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
