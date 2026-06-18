"use client"

import { useState } from "react"
import { Palette } from "lucide-react"
import { cn } from "@/lib/utils"

type Theme = {
  name: string
  swatch: string
  colorScheme: "light" | "dark"
  vars: Record<string, string>
}

const THEMES: Theme[] = [
  {
    name: "Cream",
    swatch: "oklch(0.97 0.012 75)",
    colorScheme: "light",
    vars: {
      "--background": "oklch(0.97 0.012 75)",
      "--foreground": "oklch(0.3 0.025 50)",
      "--card": "oklch(0.99 0.008 80)",
      "--card-foreground": "oklch(0.3 0.025 50)",
      "--primary": "oklch(0.5 0.06 150)",
      "--primary-foreground": "oklch(0.98 0.01 90)",
      "--secondary": "oklch(0.93 0.025 40)",
      "--secondary-foreground": "oklch(0.4 0.04 40)",
      "--muted": "oklch(0.94 0.015 70)",
      "--muted-foreground": "oklch(0.52 0.025 55)",
      "--accent": "oklch(0.9 0.04 20)",
      "--accent-foreground": "oklch(0.38 0.05 20)",
      "--border": "oklch(0.89 0.02 65)",
      "--input": "oklch(0.89 0.02 65)",
      "--ring": "oklch(0.5 0.06 150)",
    },
  },
  {
    name: "Purple",
    swatch: "oklch(0.41 0.19 299)",
    colorScheme: "dark",
    vars: {
      "--background": "oklch(0.41 0.19 299)",
      "--foreground": "oklch(0.97 0.008 299)",
      "--card": "oklch(0.46 0.18 299)",
      "--card-foreground": "oklch(0.97 0.008 299)",
      "--primary": "oklch(0.82 0.12 299)",
      "--primary-foreground": "oklch(0.27 0.17 299)",
      "--secondary": "oklch(0.35 0.16 299)",
      "--secondary-foreground": "oklch(0.90 0.01 299)",
      "--muted": "oklch(0.36 0.15 299)",
      "--muted-foreground": "oklch(0.72 0.08 299)",
      "--accent": "oklch(0.56 0.18 299)",
      "--accent-foreground": "oklch(0.97 0.005 299)",
      "--border": "oklch(0.51 0.16 299)",
      "--input": "oklch(0.51 0.16 299)",
      "--ring": "oklch(0.82 0.12 299)",
    },
  },
  {
    name: "Navy",
    swatch: "oklch(0.22 0.055 240)",
    colorScheme: "dark",
    vars: {
      "--background": "oklch(0.22 0.055 240)",
      "--foreground": "oklch(0.97 0.008 240)",
      "--card": "oklch(0.27 0.05 240)",
      "--card-foreground": "oklch(0.97 0.008 240)",
      "--primary": "oklch(0.72 0.12 210)",
      "--primary-foreground": "oklch(0.18 0.06 240)",
      "--secondary": "oklch(0.18 0.045 240)",
      "--secondary-foreground": "oklch(0.90 0.01 240)",
      "--muted": "oklch(0.20 0.04 240)",
      "--muted-foreground": "oklch(0.65 0.04 240)",
      "--accent": "oklch(0.38 0.07 240)",
      "--accent-foreground": "oklch(0.97 0.005 240)",
      "--border": "oklch(0.35 0.05 240)",
      "--input": "oklch(0.35 0.05 240)",
      "--ring": "oklch(0.72 0.12 210)",
    },
  },
  {
    name: "Sage",
    swatch: "oklch(0.33 0.055 155)",
    colorScheme: "dark",
    vars: {
      "--background": "oklch(0.33 0.055 155)",
      "--foreground": "oklch(0.97 0.008 155)",
      "--card": "oklch(0.38 0.05 155)",
      "--card-foreground": "oklch(0.97 0.008 155)",
      "--primary": "oklch(0.78 0.1 145)",
      "--primary-foreground": "oklch(0.22 0.05 155)",
      "--secondary": "oklch(0.28 0.045 155)",
      "--secondary-foreground": "oklch(0.90 0.01 155)",
      "--muted": "oklch(0.30 0.04 155)",
      "--muted-foreground": "oklch(0.68 0.04 155)",
      "--accent": "oklch(0.50 0.07 145)",
      "--accent-foreground": "oklch(0.97 0.005 155)",
      "--border": "oklch(0.44 0.05 155)",
      "--input": "oklch(0.44 0.05 155)",
      "--ring": "oklch(0.78 0.1 145)",
    },
  },
  {
    name: "Rose",
    swatch: "oklch(0.97 0.018 15)",
    colorScheme: "light",
    vars: {
      "--background": "oklch(0.97 0.018 15)",
      "--foreground": "oklch(0.3 0.04 15)",
      "--card": "oklch(0.99 0.01 20)",
      "--card-foreground": "oklch(0.3 0.04 15)",
      "--primary": "oklch(0.52 0.16 15)",
      "--primary-foreground": "oklch(0.98 0.01 15)",
      "--secondary": "oklch(0.93 0.03 20)",
      "--secondary-foreground": "oklch(0.4 0.05 20)",
      "--muted": "oklch(0.94 0.02 15)",
      "--muted-foreground": "oklch(0.55 0.04 15)",
      "--accent": "oklch(0.88 0.06 20)",
      "--accent-foreground": "oklch(0.38 0.07 20)",
      "--border": "oklch(0.88 0.03 15)",
      "--input": "oklch(0.88 0.03 15)",
      "--ring": "oklch(0.52 0.16 15)",
    },
  },
  {
    name: "Slate",
    swatch: "oklch(0.24 0.025 250)",
    colorScheme: "dark",
    vars: {
      "--background": "oklch(0.24 0.025 250)",
      "--foreground": "oklch(0.96 0.008 250)",
      "--card": "oklch(0.29 0.022 250)",
      "--card-foreground": "oklch(0.96 0.008 250)",
      "--primary": "oklch(0.75 0.1 220)",
      "--primary-foreground": "oklch(0.18 0.04 250)",
      "--secondary": "oklch(0.20 0.02 250)",
      "--secondary-foreground": "oklch(0.88 0.008 250)",
      "--muted": "oklch(0.22 0.018 250)",
      "--muted-foreground": "oklch(0.65 0.02 250)",
      "--accent": "oklch(0.38 0.04 250)",
      "--accent-foreground": "oklch(0.95 0.005 250)",
      "--border": "oklch(0.35 0.025 250)",
      "--input": "oklch(0.35 0.025 250)",
      "--ring": "oklch(0.75 0.1 220)",
    },
  },
]

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Purple")

  function applyTheme(theme: Theme) {
    const root = document.documentElement
    Object.entries(theme.vars).forEach(([prop, value]) => {
      root.style.setProperty(prop, value)
    })
    root.style.setProperty("color-scheme", theme.colorScheme)
    setActive(theme.name)
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/70 p-2.5 shadow-2xl backdrop-blur-md">
          <p className="px-3 pb-1 pt-0.5 text-[11px] font-medium uppercase tracking-widest text-white/40">
            Theme
          </p>
          {THEMES.map((theme) => (
            <button
              key={theme.name}
              onClick={() => applyTheme(theme)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                active === theme.name && "bg-white/15 text-white"
              )}
            >
              <span
                className="h-5 w-5 shrink-0 rounded-full ring-1 ring-white/25"
                style={{ background: theme.swatch }}
              />
              {theme.name}
              {active === theme.name && (
                <span className="ml-auto text-xs text-white/50">✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change colour theme"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-xl ring-1 ring-white/15 backdrop-blur-md transition-all hover:scale-105 hover:bg-black/75 active:scale-95"
      >
        <Palette className="h-5 w-5" />
      </button>
    </div>
  )
}
