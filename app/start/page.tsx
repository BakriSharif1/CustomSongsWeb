import IntakeForm from "@/components/IntakeForm";

export default function StartPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rosewood/60">
          Start Your Song
        </p>
        <h1 className="mt-4 font-serif text-4xl text-rosewood md:text-5xl">
          Tell us the story behind the song.
        </h1>
        <p className="mt-4 text-base text-rosewood/70">
          Use this intake to capture the relationship details and emotional tone.
          You can refine everything later inside your full order flow.
        </p>
        <div className="mt-10">
          <IntakeForm />
        </div>
      </div>
    </section>
  );
}
