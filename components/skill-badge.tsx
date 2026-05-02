"use client"

import { useState, useEffect } from "react"
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion"
import { useTilt } from "@/hooks/use-tilt"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const [mounted, setMounted] = useState(false)
  const width = useMotionValue(0)
  const springWidth = useSpring(width, { stiffness: 80, damping: 20 })
  const widthPct = useTransform(springWidth, (v) => `${v}%`)
  const tilt = useTilt({ maxTilt: 35, perspective: 400, stiffness: 120, damping: 15 })

  useEffect(() => { setMounted(true) }, [])

  const cardInner = (
    <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-xl border border-white/40 p-6 h-full transition-all duration-500 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-500/10 group">
      {/* Glass shimmer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-sky-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent"></div>
      <div className="relative">
        <div className="text-center mb-4 font-medium text-lg text-slate-800">{name}</div>

        <div className="relative h-2.5 w-full bg-slate-200/60 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full shadow-sm shadow-sky-500/30"
            style={{ width: widthPct }}
            onViewportEnter={() => width.set(level)}
            viewport={{ once: true }}
          />
        </div>

        <div className="mt-2 text-right text-sm font-medium text-sky-600">{level}%</div>
      </div>
    </div>
  )

  if (!tilt.mounted) {
    return <div className="h-full">{cardInner}</div>
  }

  return (
    <motion.div
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="h-full"
    >
      {cardInner}
    </motion.div>
  )
}
