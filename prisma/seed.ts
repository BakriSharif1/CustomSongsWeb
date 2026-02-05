import { PrismaClient, PackageType, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const artists = [
  {
    slug: "ava-hart",
    name: "Ava Hart",
    bio: "A cinematic vocalist with a warm alto and a storyteller's instinct.",
    genres: ["Pop", "Acoustic", "Cinematic"],
    tags: ["lush", "intimate", "emotional"],
    avatarUrl: "/images/artist-placeholder.svg"
  },
  {
    slug: "juno-kai",
    name: "Juno Kai",
    bio: "A genre-bending producer blending electronic textures with heartfelt hooks.",
    genres: ["EDM", "Pop"],
    tags: ["electric", "modern", "uplifting"],
    avatarUrl: "/images/artist-placeholder.svg"
  },
  {
    slug: "westley-brooks",
    name: "Westley Brooks",
    bio: "A folk-inspired songwriter with earthy tones and thoughtful lyrics.",
    genres: ["Folk", "Country"],
    tags: ["grounded", "warm", "nostalgic"],
    avatarUrl: "/images/artist-placeholder.svg"
  },
  {
    slug: "imani-rose",
    name: "Imani Rose",
    bio: "A soulful R&B vocalist known for velvet runs and intimate delivery.",
    genres: ["R&B", "Soul"],
    tags: ["sultry", "smooth", "romantic"],
    avatarUrl: "/images/artist-placeholder.svg"
  },
  {
    slug: "leo-marquez",
    name: "Leo Marquez",
    bio: "A hip-hop storyteller with crisp cadences and bold swagger.",
    genres: ["Hip-hop", "Rap"],
    tags: ["confident", "rhythmic", "dynamic"],
    avatarUrl: "/images/artist-placeholder.svg"
  },
  {
    slug: "nora-ellis",
    name: "Nora Ellis",
    bio: "A pop composer crafting shimmering melodies and radiant choruses.",
    genres: ["Pop"],
    tags: ["bright", "joyful", "clean"],
    avatarUrl: "/images/artist-placeholder.svg"
  },
  {
    slug: "soren-clarke",
    name: "Soren Clarke",
    bio: "An indie artist weaving moody textures with atmospheric guitar.",
    genres: ["Indie", "Alternative"],
    tags: ["moody", "cinematic", "textured"],
    avatarUrl: "/images/artist-placeholder.svg"
  },
  {
    slug: "maya-river",
    name: "Maya River",
    bio: "A bilingual vocalist delivering tender acoustic ballads.",
    genres: ["Acoustic", "Latin"],
    tags: ["soft", "organic", "tender"],
    avatarUrl: "/images/artist-placeholder.svg"
  }
];

const sampleSongs = [
  {
    slug: "evergreen-vows",
    title: "Evergreen Vows",
    genre: "Acoustic",
    mood: "Romantic",
    durationSec: 210,
    audioUrl: "/audio/sample-1.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "A gentle aisle-walk ballad with layered harmonies."
  },
  {
    slug: "midnight-lanterns",
    title: "Midnight Lanterns",
    genre: "Pop",
    mood: "Uplifted",
    durationSec: 198,
    audioUrl: "/audio/sample-2.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Shimmering synths and a soaring hook for milestone moments."
  },
  {
    slug: "golden-hour-toast",
    title: "Golden Hour Toast",
    genre: "Soul",
    mood: "Warm",
    durationSec: 230,
    audioUrl: "/audio/sample-3.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "A soulful celebration track with lush vocal stacks."
  },
  {
    slug: "city-of-us",
    title: "City of Us",
    genre: "Indie",
    mood: "Dreamy",
    durationSec: 204,
    audioUrl: "/audio/sample-4.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Indie textures and airy vocals for modern love stories."
  },
  {
    slug: "spark-and-signal",
    title: "Spark & Signal",
    genre: "EDM",
    mood: "Electric",
    durationSec: 180,
    audioUrl: "/audio/sample-5.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "An energetic build-and-drop anthem for high-energy gifts."
  },
  {
    slug: "paper-planes",
    title: "Paper Planes",
    genre: "Folk",
    mood: "Nostalgic",
    durationSec: 216,
    audioUrl: "/audio/sample-6.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Story-driven lyricism wrapped in acoustic warmth."
  },
  {
    slug: "afterglow-letter",
    title: "Afterglow Letter",
    genre: "R&B",
    mood: "Sensual",
    durationSec: 192,
    audioUrl: "/audio/sample-7.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Smooth grooves with intimate vocal phrasing."
  },
  {
    slug: "raise-the-roof",
    title: "Raise the Roof",
    genre: "Hip-hop",
    mood: "Confident",
    durationSec: 176,
    audioUrl: "/audio/sample-8.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Bold bars and a celebratory beat.",
  },
  {
    slug: "wildflower-sunday",
    title: "Wildflower Sunday",
    genre: "Country",
    mood: "Grounded",
    durationSec: 220,
    audioUrl: "/audio/sample-9.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "An intimate folk-country blend with heartfelt details."
  },
  {
    slug: "starlit-birthday",
    title: "Starlit Birthday",
    genre: "Pop",
    mood: "Joyful",
    durationSec: 188,
    audioUrl: "/audio/sample-10.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Bright and celebratory with playful lyric moments."
  },
  {
    slug: "ivy-and-oak",
    title: "Ivy & Oak",
    genre: "Acoustic",
    mood: "Tender",
    durationSec: 212,
    audioUrl: "/audio/sample-11.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "A soft acoustic arrangement with tender harmonies."
  },
  {
    slug: "gravity-rush",
    title: "Gravity Rush",
    genre: "EDM",
    mood: "Epic",
    durationSec: 174,
    audioUrl: "/audio/sample-12.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Festival-ready energy with a cinematic build."
  },
  {
    slug: "homefield-anthem",
    title: "Homefield Anthem",
    genre: "Hip-hop",
    mood: "Hype",
    durationSec: 182,
    audioUrl: "/audio/sample-13.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Rhythmic, confident, and built for celebration."
  },
  {
    slug: "slow-drift",
    title: "Slow Drift",
    genre: "R&B",
    mood: "Calm",
    durationSec: 200,
    audioUrl: "/audio/sample-14.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Moody keys and a relaxed tempo for late-night stories."
  },
  {
    slug: "letter-to-us",
    title: "Letter to Us",
    genre: "Pop",
    mood: "Emotional",
    durationSec: 208,
    audioUrl: "/audio/sample-15.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "A cinematic pop ballad with a rising chorus."
  },
  {
    slug: "wildfire-wishes",
    title: "Wildfire Wishes",
    genre: "Country",
    mood: "Hopeful",
    durationSec: 214,
    audioUrl: "/audio/sample-16.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Warm guitars and open-road lyricism."
  },
  {
    slug: "ocean-signal",
    title: "Ocean Signal",
    genre: "Indie",
    mood: "Dreamy",
    durationSec: 196,
    audioUrl: "/audio/sample-17.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "Atmospheric textures with a drifting melody."
  },
  {
    slug: "lunar-promise",
    title: "Lunar Promise",
    genre: "Soul",
    mood: "Romantic",
    durationSec: 224,
    audioUrl: "/audio/sample-18.mp3",
    coverUrl: "/images/cover-placeholder.svg",
    description: "A slow-burning soul ballad with glowing harmonies."
  }
];

async function main() {
  const existing = await prisma.artist.findFirst();
  if (existing) return;

  const createdArtists = await prisma.$transaction(
    artists.map((artist) => prisma.artist.create({ data: artist }))
  );

  const bySlug = Object.fromEntries(createdArtists.map((artist) => [artist.slug, artist]));

  const songsWithArtists = sampleSongs.map((song, index) => ({
    ...song,
    artistId: createdArtists[index % createdArtists.length].id
  }));

  await prisma.$transaction(
    songsWithArtists.map((song) => prisma.sampleSong.create({ data: song }))
  );

  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail) {
    await prisma.user.upsert({
      where: { email: adminEmail },
      update: { role: UserRole.ADMIN },
      create: { email: adminEmail, role: UserRole.ADMIN }
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
