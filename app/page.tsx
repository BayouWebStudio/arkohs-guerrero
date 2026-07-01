import GeometryBackdrop from "./components/GeometryBackdrop";
import WaitlistForm from "./components/WaitlistForm";
import { COURSE, MODULES, totalLessons, totalMinutes } from "@/content/curriculum";

const HOURS = Math.round((totalMinutes() / 60) * 10) / 10;

const OUTCOMES = [
  "Construct any sacred geometry pattern from scratch with compass, straightedge, or iPad",
  "Compose mandalas with rhythm and negative space that read clearly at tattoo scale",
  "Design pieces that flow with the body — including sleeves and back pieces",
  "Pull long, straight lines on curved skin with confidence",
  "Build stipple gradients and pack solid black evenly",
  "Price, book, and market large-scale geometric work",
];

const FAQ: Array<[string, string]> = [
  [
    "Who is this course for?",
    "Working tattoo artists who want to specialize in geometric and blackwork styles. Illustrators and Procreate artists will get a lot from the design modules, but the execution modules assume you tattoo.",
  ],
  [
    "How long is the course?",
    `${totalLessons()} lessons across ${MODULES.length} modules — about ${HOURS} hours of focused video. No padding.`,
  ],
  [
    "Do I need an iPad?",
    "The digital workflow modules use Procreate and Vesica Studio on iPad, but every construction is also taught with compass and straightedge on paper.",
  ],
  [
    "When does it launch?",
    "Filming is underway. Waitlist members get first access and founding-member pricing before it opens to the public.",
  ],
  [
    "Is there a refund policy?",
    "Yes — 14 days, no questions asked.",
  ],
];

function formatLabel(format: string): string {
  switch (format) {
    case "session":
      return "Live session";
    case "screen":
      return "iPad demo";
    case "overhead":
      return "Desk demo";
    case "documentary":
      return "Documentary";
    default:
      return "Lesson";
  }
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center">
        <GeometryBackdrop className="absolute left-1/2 top-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.08]" />
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">
          Raúl Wesche · Houston, TX
        </p>
        <h1 className="font-display max-w-3xl text-4xl leading-tight sm:text-6xl">
          {COURSE.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-faded">
          {COURSE.subtitle}. Twelve years of precision, distilled into{" "}
          {totalLessons()} lessons.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <WaitlistForm />
          <p className="text-xs text-faded">
            Founding members get ${COURSE.foundingPrice} pricing (regular $
            {COURSE.regularPrice}) and first access.
          </p>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-10 text-center sm:grid-cols-4">
          {[
            ["12+", "years tattooing"],
            ["297K", "Instagram followers"],
            ["900+", "artists in OMF Geometry"],
            [`${HOURS}h`, "of course content"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-display text-3xl text-gold">{stat}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-faded">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-display text-3xl text-center">
          What you&apos;ll be able to do
        </h2>
        <ul className="mt-10 space-y-4">
          {OUTCOMES.map((o) => (
            <li key={o} className="flex gap-4">
              <span className="mt-1 text-gold" aria-hidden>
                ◆
              </span>
              <span className="text-bone/90">{o}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Curriculum */}
      <section className="border-t border-line bg-ink-2 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-center text-3xl">The curriculum</h2>
          <p className="mt-3 text-center text-sm text-faded">
            {MODULES.length} modules · {totalLessons()} lessons · ~{HOURS} hours
          </p>
          <div className="mt-12 space-y-4">
            {MODULES.map((m) => (
              <details
                key={m.number}
                className="group rounded border border-line bg-ink px-5 py-4 open:pb-5"
              >
                <summary className="flex cursor-pointer list-none items-baseline gap-4">
                  <span className="font-display text-gold">
                    {String(m.number).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold">{m.title}</span>
                    <span className="block text-sm text-faded">{m.tagline}</span>
                  </span>
                  <span className="text-xs text-faded">
                    {m.lessons.reduce((s, l) => s + l.minutes, 0)} min
                  </span>
                </summary>
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {m.lessons.map((l) => (
                    <li
                      key={l.title}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="text-bone/85">{l.title}</span>
                      <span className="shrink-0 text-xs text-faded">
                        {formatLabel(l.format)} · {l.minutes} min
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="font-display text-center text-3xl">Your instructor</h2>
        <p className="mt-8 text-bone/90">
          Raúl Wesche is a geometric tattoo artist and painter based in Houston,
          Texas, with more than twelve years of professional experience.
          His work — large-scale mandalas, Platonic solids, and mathematical
          patterns — is built on a simple idea:{" "}
          <em className="text-gold not-italic">precision as a practice</em>.
          Every line is placed with intention, whether on skin or canvas.
        </p>
        <p className="mt-4 text-bone/90">
          He is the author of{" "}
          <em>Sacred Geometry: The Art of Raúl Wesche</em>, the creator of{" "}
          <a
            href="https://vesica.studio"
            className="text-gold underline underline-offset-4"
          >
            Vesica Studio
          </a>{" "}
          — a sacred geometry drawing app for iPad — and the founder of OMF
          Geometry, a community of more than 900 geometric tattoo artists
          worldwide.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-ink-2 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-center text-3xl">
            Questions, answered
          </h2>
          <div className="mt-10 space-y-4">
            {FAQ.map(([q, a]) => (
              <details key={q} className="rounded border border-line bg-ink px-5 py-4">
                <summary className="cursor-pointer list-none font-semibold">
                  {q}
                </summary>
                <p className="mt-3 text-sm text-faded">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-28 text-center">
        <GeometryBackdrop className="absolute left-1/2 top-1/2 h-[100vmin] w-[100vmin] -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.06]" />
        <h2 className="font-display text-3xl">Be first through the door</h2>
        <p className="mx-auto mt-4 max-w-md text-faded">
          Waitlist members get founding pricing and early access before the
          course opens to the public.
        </p>
        <div className="mt-8 flex justify-center">
          <WaitlistForm />
        </div>
      </section>

      <footer className="border-t border-line px-6 py-10 text-center text-xs text-faded">
        <p>
          © {new Date().getFullYear()} Raúl Wesche ·{" "}
          <a href="https://wesche.com" className="underline underline-offset-4">
            wesche.com
          </a>{" "}
          ·{" "}
          <a
            href="https://weschetattoo.com"
            className="underline underline-offset-4"
          >
            store
          </a>{" "}
          ·{" "}
          <a
            href="https://vesica.studio"
            className="underline underline-offset-4"
          >
            Vesica Studio
          </a>
        </p>
      </footer>
    </main>
  );
}
