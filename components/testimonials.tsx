import { Reveal } from "@/components/reveal"

const CAREHOME_RATING = "9.2"
const CAREHOME_PROFILE_URL =
  "https://www.carehome.co.uk/carehome.cfm/searchazref/20004003MANA"

const TESTIMONIALS = [
  {
    quote:
      "We unfortunately had to place our dad through the injury he sustained. We were very worried how he would adjust to the environment. Soon as we came we were put at ease instantly by the level of care and compassion. He's been there 10 weeks, all settled and happy with his next chapter. Really glad that he ended up here. We couldn't ask for anything more. Lovely people and a lovely home. Plus he loves the food.",
  },
  {
    quote:
      "Everyone of the staff are very helpful and caring, the facilities are clean and the meals are fulfilling. We are always informed of my father's wellbeing. The resident's daughter consistently provides excellent feedback regarding the care home.",
  },
  {
    quote:
      "My dad was a resident there until he passed away. The staff were amazing. They always treated my dad with the utmost respect. Nothing was too much trouble for them. As my dad's illness progressed, so did the level of care. I don't know what I would have done without the staff. Thank you.",
  },
]

export function Testimonials() {
  return (
    <section id="voices" className="bg-secondary/30 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Family Stories
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            The words that mean the most to us.
          </h2>
          <a
            href={CAREHOME_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm ring-1 ring-border transition-colors hover:text-primary"
          >
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
              {CAREHOME_RATING}
            </span>
            Read more reviews on carehome.co.uk
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} index={i}>
              <figure className="flex h-full flex-col rounded-xl bg-card p-7 shadow-sm ring-1 ring-border">
                <blockquote className="flex-1 text-pretty font-serif text-lg leading-relaxed text-foreground/90">
                  {`"${t.quote}"`}
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  Verified review · carehome.co.uk
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
