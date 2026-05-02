"use client"

import { useRef, useCallback, useMemo, useState, useEffect } from "react"
import { useMotionValue, useSpring, useTransform } from "framer-motion"

interface UseTiltOptions {
  maxTilt?: number
  perspective?: number
  stiffness?: number
  damping?: number
}

interface UseTiltReturn {
  mounted: boolean
  style: Record<string, unknown>
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
}

export function useTilt(options: UseTiltOptions = {}): UseTiltReturn {
  const {
    maxTilt = 15,
    perspective = 800,
    stiffness = 200,
    damping = 25,
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

  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt])
  const scale = useTransform(
    [springX, springY],
    ([latestX, latestY]: number[]) => 1 + Math.abs(latestX as number) * 0.03 + Math.abs(latestY as number) * 0.03
  )

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled) return
      const rect = e.currentTarget.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      x.set(px)
      y.set(py)
    },
    [enabled, x, y]
  )

  const onMouseLeave = useCallback(() => {
    if (!enabled) return
    x.set(0)
    y.set(0)
  }, [enabled, x, y])

  const style = useMemo(
    () =>
      enabled
        ? { rotateX, rotateY, scale, perspective }
        : {},
    [enabled, rotateX, rotateY, scale, perspective]
  )

  return { mounted, style, onMouseMove, onMouseLeave }
}
