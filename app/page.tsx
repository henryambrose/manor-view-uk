import Image from "next/image"
import { Hero } from "@/components/hero"
import { AwardMarquee } from "@/components/award-marquee"
import { Locations } from "@/components/locations"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeSwitcher />
      <Hero />
      <AwardMarquee />
      <Locations />
      <Testimonials />
      <Gallery />
      <Contact />
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <Image
            src="/images/manor-view-logo.jpg"
            alt="Manor View Care Home"
            width={200}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <p>{`© ${new Date().getFullYear()} Manor View Care Home. All rights reserved.`}</p>
        </div>
      </footer>
    </main>
  )
}
