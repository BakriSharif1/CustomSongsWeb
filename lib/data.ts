import type { PackageType } from "@/lib/pricing";

export const HOW_STEPS = [
  {
    title: "Share the spark",
    description:
      "Tell us the moment, the people, and the feelings that should lead the song."
  },
  {
    title: "We craft the story",
    description:
      "Your songwriter shapes the narrative, melody, and sonic palette around your brief."
  },
  {
    title: "Receive the magic",
    description:
      "We deliver a studio-polished song ready to gift, stream, and replay forever."
  }
];

export const PACKAGE_TIERS: Array<{
  name: PackageType;
  description: string;
  price: string;
  delivery: string;
  revisions: string;
  includes: string[];
}> = [
  {
    name: "Basic",
    description: "A heartfelt custom song with signature BVKRI polish.",
    price: "$199",
    delivery: "10 business days",
    revisions: "1 round",
    includes: ["Custom lyrics", "Signature melody", "Studio mix"]
  },
  {
    name: "Plus",
    description: "Elevated production with layered instrumentation.",
    price: "$299",
    delivery: "8 business days",
    revisions: "2 rounds",
    includes: ["Custom lyrics", "Expanded arrangement", "Vocal production"]
  },
  {
    name: "Premium",
    description: "Cinematic, bespoke production with our top-tier artists.",
    price: "$499",
    delivery: "6 business days",
    revisions: "3 rounds",
    includes: ["Custom lyrics", "Full band arrangement", "Mastered delivery"]
  }
];

export const FAQ_ITEMS = [
  {
    question: "Can I request a specific style?",
    answer:
      "Absolutely. Share favorite genres, moods, or references and we will match the vibe without copying any existing song."
  },
  {
    question: "How many revisions are included?",
    answer:
      "Every package includes revisions. You can also add extra revision rounds if you want more iteration."
  },
  {
    question: "When do I receive my song?",
    answer:
      "Turnaround varies by package. You can also add rush delivery if you need the song sooner."
  },
  {
    question: "What formats will I get?",
    answer:
      "You will receive a high-quality WAV and MP3 file plus any add-on deliverables you select."
  }
];

export const SOCIAL_LOGOS = [
  "Eclipse Weddings",
  "Golden Hour Events",
  "Northwind Studios",
  "Everafter Planners",
  "Crescent Retreats"
];

export const SONG_TYPES = [
  {
    slug: "romantic",
    title: "Romantic",
    description: "Slow-burn love stories with warm, cinematic melodies.",
    genre: "Pop",
    mood: "Tender"
  },
  {
    slug: "birthday",
    title: "Birthday",
    description: "Bright, celebratory tracks with personalized lyrics.",
    genre: "Pop",
    mood: "Joyful"
  },
  {
    slug: "wedding",
    title: "Wedding",
    description: "Elegant, emotional anthems for walking down the aisle.",
    genre: "Acoustic",
    mood: "Romantic"
  },
  {
    slug: "tribute",
    title: "Tribute",
    description: "Reflective songs that honor someone unforgettable.",
    genre: "R&B",
    mood: "Grateful"
  },
  {
    slug: "hype",
    title: "Hype / EDM",
    description: "High-energy drops and festival-ready hooks.",
    genre: "EDM",
    mood: "Electric"
  },
  {
    slug: "acoustic",
    title: "Acoustic",
    description: "Intimate vocals, guitar, and candlelit vibes.",
    genre: "Acoustic",
    mood: "Warm"
  },
  {
    slug: "hip-hop",
    title: "Hip-hop / Rap",
    description: "Confident flows with bold, rhythmic storytelling.",
    genre: "Hip-hop",
    mood: "Confident"
  },
  {
    slug: "pop",
    title: "Pop",
    description: "Shimmering hooks with radio-ready energy.",
    genre: "Pop",
    mood: "Uplifted"
  },
  {
    slug: "country",
    title: "Country / Folk",
    description: "Story-rich lyrics with organic instrumentation.",
    genre: "Country",
    mood: "Grounded"
  },
  {
    slug: "rb",
    title: "R&B",
    description: "Smooth grooves and soulful vocal stacks.",
    genre: "R&B",
    mood: "Sensual"
  }
];
