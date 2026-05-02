"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WaveText } from "@/components/wave-text"
import { useTilt } from "@/hooks/use-tilt"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const tilt = useTilt({ maxTilt: 25, perspective: 600, stiffness: 150, damping: 20 })

  const cardInner = (
    <div
      className="relative h-full overflow-hidden rounded-2xl bg-white/50 backdrop-blur-xl border border-white/40 transition-all duration-500 group hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-500/10"
    >
      {/* Glass shimmer overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 via-transparent to-sky-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent z-20"></div>

      <div className="relative h-full flex flex-col">
        <div className="relative overflow-hidden h-48">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>

        <div className="p-6 flex-grow">
          <WaveText text={title} as="h3" className="text-xl font-bold mb-2 text-slate-900" maxDist={120} maxFloat={5} maxScale={0.05} />
          <p className="text-slate-600 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-sky-50/80 text-sky-700 border border-sky-200/60 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex justify-between mt-auto pt-4 border-t border-slate-200/40">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 hover:bg-white/60" asChild>
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 border-0 text-white shadow-lg shadow-sky-500/25"
              asChild
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute top-3 right-3 z-20">
          <div
            className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-slate-300"} transition-colors duration-300`}
          ></div>
        </div>
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
      onMouseLeave={() => {
        tilt.onMouseLeave()
        setIsHovered(false)
      }}
      onMouseEnter={() => setIsHovered(true)}
      className="h-full"
    >
      {cardInner}
    </motion.div>
  )
}
