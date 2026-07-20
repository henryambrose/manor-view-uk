import Image from "next/image"
import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const HIGHLIGHTS = [
  "35 large single rooms, many with en-suite facilities",
  "Dementia and EMI specialists",
  "Curated gardens",
  "Bistro",
  "Quiet lounge",
  "Communal activities lounge",
  "Daily activities",
  "Hair salon",
  "Bespoke care plans and meal choices",
  "Strong community links",
  "Passionate and long-standing staff",
  "No top-up fees",
]

const CARE_TYPES = [
  "Long stays",
  "Short stays",
  "Respite care",
  "Palliative care",
  "EMI and complex care",
]

export function Locations() {
  return (
    <section id="locations" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Manor View
        </p>
        <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
          A welcoming place, nestled in the beautiful Hatfield countryside.
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Manor View is a long-established specialist provider of residential
          and nursing care. We believe that every resident deserves more than
          just excellent care — they deserve to feel truly at home. That's why
          we have created a warm, loving, and supportive environment where
          residents are treated like family, encouraged to maintain their
          independence, and cared for with compassion and respect. Our
          greatest pride is knowing that Manor View is a place where residents
          feel safe, valued, and happy to call home.
        </p>
      </div>

      <Reveal>
        <div className="grid gap-8 rounded-xl bg-card p-6 shadow-sm ring-1 ring-border md:grid-cols-2 md:p-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-auto">
            <Image
              src="/images/location-1.png"
              alt="Manor View Care Home"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 self-center sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div id="care" className="mt-16 scroll-mt-24">
        <h3 className="text-balance font-serif text-2xl font-medium leading-tight text-foreground md:text-3xl">
          We understand that every situation is different, that&rsquo;s why
          we offer:
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {CARE_TYPES.map((item, i) => (
            <Reveal key={item} index={i}>
              <li className="rounded-lg bg-card px-5 py-4 text-sm font-medium text-foreground shadow-sm ring-1 ring-border">
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
