"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useTilt } from "@/hooks/use-tilt"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  const tilt = useTilt({ maxTilt: 25, perspective: 500, stiffness: 150, damping: 20 })

  const cardContent = (
    <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-xl border border-white/40 p-8 transition-all duration-500 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-500/10">
      {/* Glass shimmer overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-sky-100/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"></div>
      <div className="relative text-slate-700">{children}</div>
    </div>
  )

  if (!tilt.mounted) {
    return <div>{cardContent}</div>
  }

  return (
    <motion.div
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      {cardContent}
    </motion.div>
  )
}
