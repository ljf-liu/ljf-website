"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 h-full transition-all duration-300 hover:border-sky-300/60 hover:shadow-md">
        <div className="relative">
          <div className="text-center mb-4 font-medium text-lg text-slate-800">{name}</div>

          <div className="relative h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="mt-2 text-right text-sm text-slate-500">{level}%</div>
        </div>
      </div>
    </motion.div>
  )
}
