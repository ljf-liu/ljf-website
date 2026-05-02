"use client"

import { useRef, useCallback, useMemo, useState, useEffect } from "react"
import { useMotionValue, useSpring } from "framer-motion"

interface UseMagneticOptions {
  strength?: number
  radius?: number
  stiffness?: number
  damping?: number
}

interface UseMagneticReturn {
  mounted: boolean
  style: Record<string, unknown>
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
}

export function useMagnetic(options: UseMagneticOptions = {}): UseMagneticReturn {
  const {
    strength = 14,
    radius = 120,
    stiffness = 200,
    damping = 20,
  } = options

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const enabledRef = useRef<boolean | null>(null)
  if (mounted && enabledRef.current === null) {
    enabledRef.current =
      window.matchMedia("(hover: hover)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }
  const enabled = mounted && enabledRef.current === true

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness, damping })
  const springY = useSpring(y, { stiffness, damping })

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled) return
      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < radius) {
        const factor = (1 - dist / radius) * strength
        x.set((dx / dist) * factor || 0)
        y.set((dy / dist) * factor || 0)
      } else {
        x.set(0)
        y.set(0)
      }
    },
    [enabled, radius, strength, x, y]
  )

  const onMouseLeave = useCallback(() => {
    if (!enabled) return
    x.set(0)
    y.set(0)
  }, [enabled, x, y])

  const style = useMemo(
    () => (enabled ? { x: springX, y: springY } : {}),
    [enabled, springX, springY]
  )

  return { mounted, style, onMouseMove, onMouseLeave }
}
