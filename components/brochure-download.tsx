"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const BROCHURE_URL = "/brochure.pdf"

/**
 * Email-gated brochure download. There's no backend/CMS in this project,
 * so the email is only used client-side to unlock the download link - it
 * isn't sent or stored anywhere. Wire this up to a real capture endpoint
 * (Formspree, Mailchimp, a serverless function, etc.) when one is chosen.
 */
export function BrochureDownload() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (!open) {
    return (
      <Button
        size="lg"
        variant="outline"
        className="rounded-full border-white/40 bg-white/10 px-7 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
        onClick={() => setOpen(true)}
      >
        Download our brochure
      </Button>
    )
  }

  if (submitted) {
    return (
      <div className="flex flex-wrap items-center gap-3 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-white backdrop-blur-sm">
        <span className="text-sm">Thanks — your download is ready.</span>
        <Button
          size="sm"
          className="rounded-full bg-white text-primary hover:bg-white/90"
          render={<a href={BROCHURE_URL} download />}
        >
          Download PDF
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center gap-2 rounded-full border border-white/40 bg-white/10 p-1.5 pl-5 backdrop-blur-sm"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
      />
      <Button
        size="sm"
        type="submit"
        className="rounded-full bg-white text-primary hover:bg-white/90"
      >
        Get brochure
      </Button>
    </form>
  )
}
