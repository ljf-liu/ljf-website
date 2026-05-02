import Link from "next/link"
import { ArrowRight, Github, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section — Dark */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0c1222] to-[#0a0f1a] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">软件开发工程师</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display">
              <span className="block text-white/80">Hi, I&apos;m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-400">
                刘锦峰
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-[600px] leading-relaxed font-chinese">
              过去一年，我把大模型从&ldquo;能聊天&rdquo;变成&ldquo;能干活&rdquo;——做过知识库问答、AI
              客服、自动化工作流。我相信好的大模型应用，用户甚至感觉不到它的存在。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-sky-500 to-cyan-500 border-0 text-white">
                  <span className="relative z-10 flex items-center">
                    查看项目{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-slate-600 text-sky-400 hover:text-sky-300 hover:border-slate-400"
                >
                  联系我
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/ljf-liu" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:1210401150@qq.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>

        {/* Transition gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#fafbfc]"></div>
      </section>

      {/* About Section — Light */}
      <section id="about" className="py-32 relative bg-[#fafbfc]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="关于我" subtitle="我的背景和经历" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-sky-500/10 to-cyan-500/10 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-200">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="刘锦峰"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-white">开放机会</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-slate-700 leading-relaxed">
                  我是一名专注于大模型应用开发的软件工程师。过去一年，我深入探索如何让大模型从&ldquo;能聊天&rdquo;走向&ldquo;能干活&rdquo;，构建了知识库问答系统、AI
                  客服和自动化工作流等实际产品。
                </p>
                <p className="text-lg text-slate-700 mt-4 leading-relaxed">
                  我的技术栈涵盖 Python、Java 后端开发，以及 LangChain、LlamaIndex
                  等大模型框架。我相信好的技术应该服务于用户，而不是让用户感受到技术的存在。
                </p>
                <p className="text-lg text-slate-700 mt-4 leading-relaxed">
                  在工作之余，我持续关注大模型领域的最新进展，喜欢动手实践新技术，并乐于将经验分享给团队。
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500">姓名</div>
                    <div className="font-medium text-slate-900">刘锦峰</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500">邮箱</div>
                    <div className="font-medium text-slate-900">1210401150@qq.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500">状态</div>
                    <div className="font-medium text-green-600">开放机会</div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section — Light (alternate) */}
      <section id="skills" className="py-32 relative bg-[#f1f5f9]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="技术栈" subtitle="我擅长的技术" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Python" level={90} />
            <SkillBadge name="Java" level={80} />
            <SkillBadge name="FastAPI" level={85} />
            <SkillBadge name="Spring Boot" level={75} />
            <SkillBadge name="LangChain" level={85} />
            <SkillBadge name="LlamaIndex" level={80} />
            <SkillBadge name="RAG" level={85} />
            <SkillBadge name="向量数据库" level={80} />
            <SkillBadge name="Docker" level={75} />
            <SkillBadge name="K8s" level={65} />
            <SkillBadge name="Redis" level={75} />
            <SkillBadge name="Git" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section — Light */}
      <section id="projects" className="py-32 relative bg-[#fafbfc]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="项目展示" subtitle="我的一些作品" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="知识库问答系统"
              description="基于 RAG 架构的企业知识库问答系统，支持多格式文档解析和智能检索。"
              tags={["LangChain", "RAG", "向量数据库", "FastAPI"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/ljf-liu"
            />
            <ProjectCard
              title="AI 智能客服"
              description="基于大模型的智能客服系统，支持多轮对话和意图识别。"
              tags={["LLM", "FastAPI", "Redis", "NLP"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/ljf-liu"
            />
            <ProjectCard
              title="自动化工作流"
              description="基于大模型的自动化工作流引擎，将自然语言指令转化为可执行任务。"
              tags={["Python", "LangChain", "Celery", "PostgreSQL"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com/ljf-liu"
            />
          </div>
        </div>
      </section>

      {/* Experience Section — Light (alternate) */}
      <section id="experience" className="py-32 relative bg-[#f1f5f9]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="工作经历" subtitle="我的职业旅程" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section — Light */}
      <section id="contact" className="py-32 relative bg-[#fafbfc]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="联系我" subtitle="一起合作" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">邮箱</div>
                    <div className="font-medium text-slate-900">1210401150@qq.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center">
                    <Github className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">GitHub</div>
                    <div className="font-medium text-slate-900">github.com/ljf-liu</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="text-lg font-medium mb-4 text-slate-900">当前状态</h4>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>开放机会</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-[#fafbfc]">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl font-chinese">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-500">刘</span>
              <span className="text-slate-700">锦峰</span>
            </Link>
            <p className="text-sm text-slate-500 mt-2">
              &copy; {new Date().getFullYear()} 刘锦峰. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/ljf-liu" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:1210401150@qq.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
