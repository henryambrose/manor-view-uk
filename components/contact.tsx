import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/30 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Contact Us
            </p>
            <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              We&rsquo;d love to hear from you.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 rounded-xl bg-card p-6 shadow-sm ring-1 ring-border md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <ul className="grid gap-5 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="flex flex-col text-sm">
                <a
                  href="mailto:manager.manorview@lasohealthcare.co.uk"
                  className="text-foreground hover:text-primary"
                >
                  manager.manorview@lasohealthcare.co.uk
                </a>
                <a
                  href="mailto:admin.manorview@lasohealthcare.co.uk"
                  className="text-foreground hover:text-primary"
                >
                  admin.manorview@lasohealthcare.co.uk
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:01302350877" className="text-sm text-foreground hover:text-primary">
                01302 350877
              </a>
            </li>
            <li className="flex items-start gap-3 sm:col-span-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <address className="text-sm not-italic leading-relaxed text-foreground">
                Manor View Care Home
                <br />
                19 Manor Road
                <br />
                Hatfield, Doncaster
                <br />
                DN7 6BH
              </address>
            </li>
          </ul>

          <Image
            src="/images/cqc-good.jpeg"
            alt="CQC rated Good"
            width={140}
            height={70}
            className="h-auto w-32 justify-self-start object-contain md:justify-self-end"
          />
        </div>
      </div>
    </section>
  )
}
