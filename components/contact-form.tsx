"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "消息已发送！",
      description: "感谢你的联系，我会尽快回复。",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 transition-all duration-300 hover:border-sky-300/60 hover:shadow-md">
        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">发送消息</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                placeholder="你的姓名"
                required
                className="bg-white border-slate-300 focus:border-sky-500 focus:ring-sky-500/20 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="你的邮箱"
                required
                className="bg-white border-slate-300 focus:border-sky-500 focus:ring-sky-500/20 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="主题"
                required
                className="bg-white border-slate-300 focus:border-sky-500 focus:ring-sky-500/20 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="你的消息"
                rows={5}
                required
                className="bg-white border-slate-300 focus:border-sky-500 focus:ring-sky-500/20 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 border-0 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>发送中...</>
              ) : (
                <>
                  发送消息 <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
