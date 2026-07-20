import Image from "next/image"

// Update this when the carehomes.co.uk score changes.
const CAREHOME_RATING = "9.2"

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 px-6"
      aria-hidden={ariaHidden || undefined}
    >
      <li className="flex shrink-0 items-center gap-3 whitespace-nowrap">
        <Image
          src="/images/cqc-good.jpeg"
          alt="CQC rated Good"
          width={90}
          height={45}
          className="h-9 w-auto object-contain"
        />
      </li>
      <li className="flex shrink-0 items-center gap-3 whitespace-nowrap">
        <span
          className="h-2.5 w-2.5 rounded-full bg-primary/70"
          aria-hidden="true"
        />
        <span className="font-serif text-lg font-medium text-foreground/80">
          {CAREHOME_RATING} on carehomes.co.uk
        </span>
      </li>
    </ul>
  )
}

export function AwardMarquee() {
  return (
    <section className="border-y border-border bg-secondary/40 py-7">
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Recognised &amp; accredited by
      </p>
      {/* Infinite seamless marquee: duplicate the set and translate -50% linearly */}
      <div className="group relative flex overflow-hidden">
        <div className="flex animate-marquee items-center">
          <Row />
          <Row ariaHidden />
        </div>
      </div>
    </section>
  )
}
