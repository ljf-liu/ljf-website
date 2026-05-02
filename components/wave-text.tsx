"use client"

import { useRef, useEffect, useCallback } from "react"

interface WaveTextProps {
  text: string
  className?: string
  charClassName?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
  maxDist?: number
  maxFloat?: number
  maxScale?: number
}

export function WaveText({
  text,
  className,
  charClassName,
  as: Tag = "span",
  maxDist = 200,
  maxFloat = 10,
  maxScale = 0.08,
}: WaveTextProps) {
  const containerRef = useRef<HTMLElement>(null)
  const charsRef = useRef<(HTMLSpanElement | null)[]>([])
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  const handleMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(update)
    }
  }, [])

  const update = useCallback(() => {
    rafRef.current = 0
    const { x: mx, y: my } = mouseRef.current

    for (let i = 0; i < charsRef.current.length; i++) {
      const el = charsRef.current[i]
      if (!el) continue

      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = mx - cx
      const dy = my - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < maxDist) {
        const ratio = 1 - dist / maxDist
        const ease = ratio * ratio
        const phase = i * 0.6
        const wave = Math.sin(Date.now() / 180 + phase)
        const y = wave * maxFloat * ease
        const s = 1 + maxScale * ease
        el.style.transform = `translateY(${y}px) scale(${s})`
        el.style.opacity = `${0.7 + 0.3 * ease}`
      } else {
        el.style.transform = ""
        el.style.opacity = ""
      }
    }

    rafRef.current = requestAnimationFrame(update)
  }, [maxDist, maxFloat, maxScale])

  useEffect(() => {
    window.addEventListener("mousemove", handleMove)
    rafRef.current = requestAnimationFrame(update)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [handleMove, update])

  const chars = text.split("")

  return (
    <Tag ref={containerRef as React.RefObject<any>} className={className} aria-label={text}>
      {chars.map((char, i) => (
        <span
          key={`${char}-${i}`}
          ref={(el) => { charsRef.current[i] = el }}
          className={`inline-block will-change-transform transition-none ${charClassName || ""}`}
          style={{ minWidth: char === " " ? "0.25em" : undefined }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </Tag>
  )
}
