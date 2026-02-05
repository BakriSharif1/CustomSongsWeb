"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const toneOptions = [
  "Calm & grounded",
  "Playful & affectionate",
  "Deep & emotional",
  "Proud & affirming"
];

const intensityOptions = [
  "Subtle emotion",
  "Medium emotion",
  "This might make them cry"
];

export default function IntakeForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-10"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rosewood/60">
              Section A
            </p>
            <h2 className="mt-2 font-serif text-2xl text-rosewood">
              Relationship Signal (required)
            </h2>
          </div>
          <span className="badge">Required</span>
        </div>
        <div className="mt-6 space-y-6">
          <div>
            <label className="label" htmlFor="meet">
              How did you meet? (One paragraph, plain language. No poetry.)
            </label>
            <textarea
              id="meet"
              name="meet"
              rows={4}
              className="input mt-2"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="real">
              What moment made this relationship real? (Specific event, not a feeling.)
            </label>
            <textarea
              id="real"
              name="real"
              rows={3}
              className="input mt-2"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="challenge">
              One challenge you overcame together (small to dramatic)
            </label>
            <textarea
              id="challenge"
              name="challenge"
              rows={3}
              className="input mt-2"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="safe">
              What does your partner do that makes you feel safe or seen?
            </label>
            <textarea
              id="safe"
              name="safe"
              rows={3}
              className="input mt-2"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="admire">
              What do you admire that they do not see in themselves?
            </label>
            <textarea
              id="admire"
              name="admire"
              rows={3}
              className="input mt-2"
              required
            />
          </div>
        </div>
      </Card>

      <Card>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rosewood/60">
          Section B
        </p>
        <h2 className="mt-2 font-serif text-2xl text-rosewood">
          Language Capture (this is gold)
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <label className="label" htmlFor="phrases">
              Phrases you actually say to each other (text messages count)
            </label>
            <textarea
              id="phrases"
              name="phrases"
              rows={4}
              className="input mt-2"
            />
          </div>
          <div>
            <label className="label" htmlFor="nicknames">
              Nicknames or inside jokes (even if silly)
            </label>
            <textarea
              id="nicknames"
              name="nicknames"
              rows={3}
              className="input mt-2"
            />
          </div>
          <div>
            <label className="label" htmlFor="secret">
              A word or phrase only the two of you would recognize
            </label>
            <textarea
              id="secret"
              name="secret"
              rows={2}
              className="input mt-2"
            />
          </div>
        </div>
      </Card>

      <Card>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rosewood/60">
          Section C
        </p>
        <h2 className="mt-2 font-serif text-2xl text-rosewood">
          Emotional Direction
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <p className="label">Choose one primary tone</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {toneOptions.map((tone) => (
                <label
                  key={tone}
                  className="flex items-center gap-3 rounded-2xl border border-rosewood/10 bg-white/70 px-4 py-3 text-sm text-rosewood/80"
                >
                  <input type="radio" name="tone" value={tone} required />
                  {tone}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="label" htmlFor="final-feel">
              What should they feel in the final 10 seconds of the song?
            </label>
            <textarea
              id="final-feel"
              name="finalFeel"
              rows={3}
              className="input mt-2"
              required
            />
          </div>
        </div>
      </Card>

      <Card>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rosewood/60">
          Section D
        </p>
        <h2 className="mt-2 font-serif text-2xl text-rosewood">
          Guardrails
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <label className="label" htmlFor="avoid">
              Words or themes to avoid
            </label>
            <textarea id="avoid" name="avoid" rows={3} className="input mt-2" />
          </div>
          <div>
            <p className="label">Do you want</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {intensityOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 rounded-2xl border border-rosewood/10 bg-white/70 px-4 py-3 text-sm text-rosewood/80"
                >
                  <input type="radio" name="intensity" value={option} required />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <p className="text-sm text-rosewood/70">
            Internal note: If a client struggles here, you translate. That is part of the
            value.
          </p>
        </div>
      </Card>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">Save responses</Button>
        {submitted && (
          <span className="text-sm text-rosewood/70">
            Responses captured locally. Connect to your order flow when ready.
          </span>
        )}
      </div>
    </form>
  );
}
