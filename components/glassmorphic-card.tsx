"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 transition-all duration-300 hover:border-sky-300/60 hover:shadow-md">
        <div className="relative text-slate-700">{children}</div>
      </div>
    </motion.div>
  )
}
