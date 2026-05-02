"use client"

import type React from "react"

import { useState } from "react"
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
    <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-xl border border-white/40 p-8 transition-all duration-500 hover:border-sky-300/50 hover:shadow-2xl hover:shadow-sky-500/10 group">
      {/* Glass shimmer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-sky-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"></div>
      <div className="relative">
        <h3 className="text-2xl font-bold mb-6 text-slate-900">发送消息</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              placeholder="你的姓名"
              required
              className="bg-white/60 backdrop-blur-sm border-slate-200/60 focus:border-sky-500 focus:ring-sky-500/20 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="你的邮箱"
              required
              className="bg-white/60 backdrop-blur-sm border-slate-200/60 focus:border-sky-500 focus:ring-sky-500/20 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="主题"
              required
              className="bg-white/60 backdrop-blur-sm border-slate-200/60 focus:border-sky-500 focus:ring-sky-500/20 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="你的消息"
              rows={5}
              required
              className="bg-white/60 backdrop-blur-sm border-slate-200/60 focus:border-sky-500 focus:ring-sky-500/20 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 border-0 text-white shadow-lg shadow-sky-500/25"
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
  )
}
