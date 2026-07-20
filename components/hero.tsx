import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BrochureDownload } from "@/components/brochure-download"

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] w-full overflow-hidden">
      {/* Full-bleed background image with slow Ken Burns zoom (1.0 -> 1.05 over 7s) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="An elderly resident sharing tea with a caregiver in a sunlit sitting room"
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns origin-center object-cover"
        />
        {/* Soft dark gradient overlay, bottom-to-top, ~40% opacity, keeps headline legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.2 0.02 50 / 0.55) 0%, oklch(0.2 0.02 50 / 0.25) 35%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Image
          src="/images/manor-view-logo.jpg"
          alt="Manor View Care Home"
          width={200}
          height={40}
          className="h-10 w-auto object-contain"
          priority
        />
        <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex">
          <a className="transition-colors hover:text-white" href="#locations">
            Our Homes
          </a>
          <a className="transition-colors hover:text-white" href="#care">
            Types of Care
          </a>
          <a className="transition-colors hover:text-white" href="#voices">
            Family Stories
          </a>
        </nav>
        <Button
          size="sm"
          className="rounded-full bg-white text-primary hover:bg-white/90"
          render={<a href="mailto:manager.manorview@lasohealthcare.co.uk" />}
          nativeButton={false}
        >
          Book a visit
        </Button>
      </header>

      {/* Headline */}
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-end px-6 pb-20 pt-32 md:pt-56">
        <p className="mb-4 text-base font-semibold uppercase tracking-[0.15em] text-white md:text-lg">
          Residential &amp; Nursing Care
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.05] text-white md:text-6xl lg:text-7xl">
          A warmer way to care for the people who cared for us.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
          Beautiful environment, warming gardens, familiar comforts, and a
          team that treats every resident like family. Discover care your
          loved ones will be glad to call home.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <BrochureDownload />
        </div>
      </div>
    </section>
  )
}
