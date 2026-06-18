import Image from "next/image"
import { Reveal } from "@/components/reveal"

const TESTIMONIALS = [
  {
    quote:
      "From the first visit, it felt like home. The team know Dad by name, by story, and by heart. We finally sleep at night.",
    name: "Margaret Ellison",
    relation: "Daughter of a resident",
    image: "/images/testimonial-2.png",
  },
  {
    quote:
      "I was nervous about moving, but my room looks out over the roses and there's always someone to share a cup of tea with.",
    name: "Albert Hughes",
    relation: "Resident at Willowmere",
    image: "/images/testimonial-1.png",
  },
  {
    quote:
      "The care is gentle and genuinely personal. Mum has come alive again — gardening, baking, laughing. I can't thank them enough.",
    name: "Priya Anand",
    relation: "Daughter of a resident",
    image: "/images/testimonial-2.png",
  },
]

export function Testimonials() {
  return (
    <section id="voices" className="bg-secondary/30 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Family Stories
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            The words that mean the most to us.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} index={i}>
              <figure className="flex h-full flex-col rounded-xl bg-card p-7 shadow-sm ring-1 ring-border">
                <blockquote className="flex-1 text-pretty font-serif text-lg leading-relaxed text-foreground/90">
                  {`“${t.quote}”`}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-accent">
                    <Image
                      src={t.image || "/placeholder.svg"}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {t.relation}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
