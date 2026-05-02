import type { Metadata } from "next"
import "./globals.css"
import "@fontsource/bricolage-grotesque/400.css"
import "@fontsource/bricolage-grotesque/700.css"
import "@fontsource/outfit/400.css"
import "@fontsource/outfit/500.css"
import "@fontsource/outfit/600.css"
import "@fontsource/lxgw-wenkai-tc/400.css"
import "@fontsource/lxgw-wenkai-tc/700.css"

export const metadata: Metadata = {
  title: "刘锦峰 - 软件开发工程师",
  description:
    "刘锦峰的个人网站 — 专注于大模型应用开发，把大模型从能聊天变成能干活。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-body">{children}</body>
    </html>
  )
}
