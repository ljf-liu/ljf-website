"use client"

import { motion } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function TextReveal({ text, className, delay = 0, stagger = 0.04 }: TextRevealProps) {
  const characters = text.split("")

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label={text}
    >
      {characters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={child}
          className="inline-block"
          style={{ minWidth: char === " " ? "0.25em" : undefined }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
