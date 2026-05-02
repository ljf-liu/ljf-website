"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "大模型应用开发工程师",
    company: "占位公司",
    period: "2024 - 至今",
    description:
      "专注于大模型应用开发，构建知识库问答系统、AI 客服和自动化工作流。使用 LangChain、LlamaIndex 等框架搭建 RAG 管线，将大模型从能聊天变成能干活。",
  },
  {
    title: "后端开发工程师",
    company: "占位公司",
    period: "2023 - 2024",
    description:
      "使用 Python (FastAPI) 和 Java (Spring Boot) 开发后端服务。设计和实现 RESTful API，优化数据库查询性能，参与微服务架构设计。",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-sky-200 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 transition-all duration-300 hover:border-sky-300/60 hover:shadow-md">
              <div className="relative">
                <h3 className="text-xl font-bold text-slate-900">{experience.title}</h3>
                <div className="text-sky-600 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-slate-600">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
