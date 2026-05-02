"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    window.addEventListener("mousemove", onMove)
    document.body.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      document.body.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <>
      {/* Core glow */}
      <motion.div
        className="fixed pointer-events-none z-[60]"
        style={{
          width: 200,
          height: 200,
          left: pos.x - 100,
          top: pos.y - 100,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
          mixBlendMode: "overlay",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
        animate={{ left: pos.x - 100, top: pos.y - 100 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.4 }}
      />
      {/* Ambient halo */}
      <motion.div
        className="fixed pointer-events-none z-[59]"
        style={{
          width: 350,
          height: 350,
          left: pos.x - 175,
          top: pos.y - 175,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s",
        }}
        animate={{ left: pos.x - 175, top: pos.y - 175 }}
        transition={{ type: "spring", stiffness: 80, damping: 30, mass: 1 }}
      />
    </>
  )
}
