"use client"

import type { ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  /** Stagger order among sibling cards (0-indexed). Adds 120ms per step. */
  index?: number
  className?: string
}

/**
 * Wraps content in a scroll-triggered fade-and-slide-up entrance.
 * opacity 0 -> 1, translateY 20px -> 0, ~0.6s ease-out, with a
 * 120ms stagger between siblings via the `index` prop.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ transitionDelay: inView ? `${index * 120}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}
