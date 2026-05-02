"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface ParallaxBlobProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxBlob({ children, speed = 0.2, className }: ParallaxBlobProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed])

  if (!mounted) {
    return (
      <div ref={ref} className={className} style={{ position: "absolute" }}>
        {children}
      </div>
    )
  }

  return (
    <motion.div ref={ref} style={{ y, position: "absolute" }} className={className}>
      {children}
    </motion.div>
  )
}
