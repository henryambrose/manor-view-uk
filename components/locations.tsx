import Image from "next/image"
import { MapPin, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const HOMES = [
  {
    name: "Willowmere House",
    location: "Cotswolds, Gloucestershire",
    image: "/images/location-1.png",
    care: "Residential & Dementia",
    rooms: "42 en-suite rooms",
  },
  {
    name: "The Maples",
    location: "Harrogate, North Yorkshire",
    image: "/images/location-2.png",
    care: "Nursing & Respite",
    rooms: "38 en-suite rooms",
  },
  {
    name: "Rosewood Lodge",
    location: "Bath, Somerset",
    image: "/images/location-3.png",
    care: "Residential & Palliative",
    rooms: "30 en-suite rooms",
  },
]

export function Locations() {
  return (
    <section id="locations" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Our Homes
        </p>
        <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
          Welcoming places, set in beautiful surroundings.
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Each Manor View home is chosen for its light, its gardens, and its
          sense of belonging. Explore a few of our favourites.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {HOMES.map((home, i) => (
          <Reveal key={home.name} index={i}>
            {/* Clickable listing card: hover scale 1.0 -> 1.03 + shadow lift, 0.3s ease */}
            <a
              href="#"
              className="group block overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:shadow-foreground/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={home.image || "/placeholder.svg"}
                  alt={`${home.name} in ${home.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  {home.care}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {home.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {home.location}
                  </p>
                  <p className="mt-3 text-sm text-foreground/70">{home.rooms}</p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
