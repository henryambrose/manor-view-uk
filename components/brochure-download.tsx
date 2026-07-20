"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const BROCHURE_URL = encodeURI("/Manor View Care Home Brochure.pdf")

/**
 * Email-gated brochure download. Submits the email to /api/brochure-lead,
 * which forwards it to the manager's inbox via Resend (see that route for
 * the RESEND_API_KEY / BROCHURE_LEAD_FROM_EMAIL env vars it needs). The
 * download unlocks either way so a delivery hiccup doesn't block access
 * to the brochure itself.
 */
export function BrochureDownload() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("submitting")
    setError(null)

    try {
      const res = await fetch("/api/brochure-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Request failed")
    } catch {
      setError("Couldn't notify the team, but here's your brochure anyway.")
    }

    setStatus("done")
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

  if (status === "done") {
    return (
      <div className="flex flex-wrap items-center gap-3 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-white backdrop-blur-sm">
        <span className="text-sm">
          {error ?? "Thanks — your download is ready."}
        </span>
        <Button
          size="sm"
          className="rounded-full bg-white text-primary hover:bg-white/90"
          render={<a href={BROCHURE_URL} download />}
          nativeButton={false}
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
        disabled={status === "submitting"}
        className="rounded-full bg-white text-primary hover:bg-white/90"
      >
        {status === "submitting" ? "Sending…" : "Get brochure"}
      </Button>
    </form>
  )
}
