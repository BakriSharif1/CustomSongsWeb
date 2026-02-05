import Link from "next/link";

const footerLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/packages", label: "Packages" },
  { href: "/song-types", label: "Song Types" },
  { href: "/artists", label: "Artists" },
  { href: "/samples", label: "Samples" },
  { href: "/account", label: "Account" }
];

export default function Footer() {
  return (
    <footer className="border-t border-rosewood/10 bg-parchment/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl text-rosewood">BVKRI Songs</p>
          <p className="mt-3 max-w-sm text-sm text-rosewood/70">
            Premium custom songs crafted with care, warmth, and cinematic
            detail. Every story deserves its own soundtrack.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-rosewood/70">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-rosewood/10 px-6 py-6 text-center text-xs text-rosewood/60">
        (c) 2026 BVKRI Songs. Crafted with heart.
      </div>
    </footer>
  );
}
