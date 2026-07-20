"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

// Placeholder photos - swap for the client's real gallery photos once received.
const GALLERY_IMAGES = [
  { src: "/images/location-1.png", alt: "Manor View Care Home exterior" },
  { src: "/images/location-2.png", alt: "A resident bedroom at Manor View" },
  { src: "/images/location-3.png", alt: "A communal lounge at Manor View" },
  { src: "/images/hero.png", alt: "A resident sharing tea with a caregiver" },
  { src: "/images/testimonial-1.png", alt: "A resident enjoying the gardens" },
  { src: "/images/testimonial-2.png", alt: "A resident in the activities lounge" },
]

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  function scrollByAmount(direction: 1 | -1) {
    const node = scrollerRef.current
    if (!node) return
    node.scrollBy({ left: direction * node.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section id="gallery" className="mx-auto w-full max-w-6xl px-6 py-24">
      <Reveal>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Gallery
            </p>
            <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              A look inside Manor View.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              aria-label="Previous photos"
              className="rounded-full bg-card p-2.5 text-foreground shadow-sm ring-1 ring-border transition-colors hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              aria-label="Next photos"
              className="rounded-full bg-card p-2.5 text-foreground shadow-sm ring-1 ring-border transition-colors hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Reveal>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {GALLERY_IMAGES.map((image) => (
          <div
            key={image.src + image.alt}
            className="relative aspect-[4/3] w-[80%] shrink-0 snap-start overflow-hidden rounded-xl sm:w-[45%] lg:w-[30%]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
