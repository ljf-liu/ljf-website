"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "experience", "contact"]
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const navItems = [
    { name: "关于", href: "#about", id: "about" },
    { name: "技能", href: "#skills", id: "skills" },
    { name: "项目", href: "#projects", id: "projects" },
    { name: "经历", href: "#experience", id: "experience" },
    { name: "联系", href: "#contact", id: "contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-4 py-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-lg">
          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <Link href="/" className="font-bold text-lg font-chinese">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-500">刘锦峰</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="font-bold text-lg mr-4 font-chinese">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-500">刘锦峰</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 group ${
                    activeSection === item.id
                      ? "text-sky-600"
                      : "text-slate-600 hover:text-sky-600"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full transition-all duration-300 group-hover:w-4/5" />
                  {/* Active dot */}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-500"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-8 py-4 text-2xl font-medium transition-colors ${
                  activeSection === item.id ? "text-sky-600" : "text-slate-800 hover:text-sky-600"
                }`}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}
