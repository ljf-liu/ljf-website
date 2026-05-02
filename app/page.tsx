"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Github, Mail } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { CursorSpotlight } from "@/components/cursor-spotlight"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { StaggerContainer, childVariants } from "@/components/stagger-container"
import { TextReveal } from "@/components/text-reveal"
import { WaveText } from "@/components/wave-text"
import { ParallaxBlob } from "@/components/parallax-blob"
import { useMagnetic } from "@/hooks/use-magnetic"

function MagneticButton({ children }: { children: React.ReactNode }) {
  const magnetic = useMagnetic()

  if (!magnetic.mounted) {
    return <div>{children}</div>
  }

  return (
    <motion.div
      style={magnetic.style}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
    >
      {children}
    </motion.div>
  )
}

function ScrollRevealSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <motion.section ref={ref} id={id} style={{ scale, opacity }} className={className}>
      {children}
    </motion.section>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <MouseFollower />
      <CursorSpotlight />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section — Dark */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #0c1222 0%, #0a0f1a 60%, #121b2e 100%)",
        }}
      >
        <div className="absolute inset-0 z-0">
          <ParallaxBlob speed={0.15} className="absolute top-20 left-10 w-96 h-96">
            <div className="w-full h-full bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
          </ParallaxBlob>
          <ParallaxBlob speed={0.25} className="absolute top-40 right-10 w-96 h-96">
            <div className="w-full h-full bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
          </ParallaxBlob>
          <ParallaxBlob speed={0.2} className="absolute bottom-20 left-1/3 w-96 h-96">
            <div className="w-full h-full bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </ParallaxBlob>
        </div>

        {/* Glass overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#0c1222]/50 pointer-events-none"></div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-4 py-1.5 text-sm font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 mt-4">
                <span className="relative z-10">软件开发工程师</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display">
              <WaveText text="Hi, I'm" as="span" className="block text-white/80" maxDist={200} maxFloat={10} maxScale={0.06} />
              <WaveText
                text="刘锦峰"
                as="span"
                charClassName="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-400"
                maxDist={250}
                maxFloat={14}
                maxScale={0.1}
              />
            </h1>
            <WaveText
              text={'过去一年，我把大模型从“能聊天”变成“能干活”——做过知识库问答、AI客服、自动化工作流。我相信好的大模型应用，用户甚至感觉不到它的存在。'}
              as="p"
              className="text-xl text-slate-400 max-w-[600px] leading-relaxed font-chinese"
              maxDist={150}
              maxFloat={6}
              maxScale={0.04}
            />
            <div className="flex flex-wrap gap-4 pt-4">
              <MagneticButton>
                <Link href="#projects">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-sky-500 to-cyan-500 border-0 text-white shadow-lg shadow-sky-500/30">
                    <span className="relative z-10 flex items-center">
                      查看项目{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="border-slate-600 text-sky-400 hover:text-sky-300 hover:border-slate-400 backdrop-blur-sm"
                  >
                    联系我
                  </Button>
                </Link>
              </MagneticButton>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/ljf-liu" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white backdrop-blur-sm"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:1210401150@qq.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white backdrop-blur-sm"
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

        {/* Arc transition to About section */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '160px', zIndex: 5 }}>
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroArcGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#121b2e" />
                <stop offset="18%" stopColor="#1e293b" />
                <stop offset="40%" stopColor="#475569" />
                <stop offset="60%" stopColor="#94a3b8" />
                <stop offset="80%" stopColor="#cbd5e1" />
                <stop offset="93%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#fafbfc" />
              </linearGradient>
            </defs>
            <path
              d="M0,160 L0,80 C240,0 480,0 720,30 C960,60 1200,30 1440,80 L1440,160 Z"
              fill="url(#heroArcGradient)"
            />
          </svg>
        </div>

      </section>

      {/* About Section — Light */}
      <ScrollRevealSection id="about" className="py-32 relative bg-[#fafbfc] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxBlob speed={0.25} className="absolute top-1/4 right-1/4 w-80 h-80">
            <div className="w-full h-full bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          </ParallaxBlob>
          <ParallaxBlob speed={0.2} className="absolute bottom-1/3 left-1/3 w-80 h-80">
            <div className="w-full h-full bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          </ParallaxBlob>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="关于我" subtitle="我的背景和经历" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div variants={childVariants} className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-sky-500/15 to-cyan-500/15 blur-xl opacity-80"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/40 shadow-2xl shadow-sky-500/10">
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
            </motion.div>

            <motion.div variants={childVariants}>
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
            </motion.div>
          </StaggerContainer>
        </div>
      </ScrollRevealSection>

      {/* Skills Section — Light (alternate) */}
      <ScrollRevealSection id="skills" className="py-32 relative bg-[#f1f5f9] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxBlob speed={0.25} className="absolute top-1/3 left-1/4 w-80 h-80">
            <div className="w-full h-full bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          </ParallaxBlob>
          <ParallaxBlob speed={0.2} className="absolute bottom-1/4 right-1/4 w-80 h-80">
            <div className="w-full h-full bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          </ParallaxBlob>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="技术栈" subtitle="我擅长的技术" />

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <motion.div variants={childVariants}><SkillBadge name="Python" level={90} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="Java" level={80} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="FastAPI" level={85} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="Spring Boot" level={75} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="LangChain" level={85} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="LlamaIndex" level={80} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="RAG" level={85} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="向量数据库" level={80} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="Docker" level={75} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="K8s" level={65} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="Redis" level={75} /></motion.div>
            <motion.div variants={childVariants}><SkillBadge name="Git" level={85} /></motion.div>
          </StaggerContainer>
        </div>
      </ScrollRevealSection>

      {/* Projects Section — Light */}
      <ScrollRevealSection id="projects" className="py-32 relative bg-[#fafbfc] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxBlob speed={0.25} className="absolute top-1/4 left-1/3 w-80 h-80">
            <div className="w-full h-full bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          </ParallaxBlob>
          <ParallaxBlob speed={0.2} className="absolute bottom-1/3 right-1/4 w-80 h-80">
            <div className="w-full h-full bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          </ParallaxBlob>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="项目展示" subtitle="我的一些作品" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <motion.div variants={childVariants}>
              <ProjectCard
                title="知识库问答系统"
                description="基于 RAG 架构的企业知识库问答系统，支持多格式文档解析和智能检索。"
                tags={["LangChain", "RAG", "向量数据库", "FastAPI"]}
                image="/placeholder.svg?height=400&width=600"
                demoUrl="https://example.com"
                repoUrl="https://github.com/ljf-liu"
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <ProjectCard
                title="AI 智能客服"
                description="基于大模型的智能客服系统，支持多轮对话和意图识别。"
                tags={["LLM", "FastAPI", "Redis", "NLP"]}
                image="/placeholder.svg?height=400&width=600"
                demoUrl="https://example.com"
                repoUrl="https://github.com/ljf-liu"
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <ProjectCard
                title="自动化工作流"
                description="基于大模型的自动化工作流引擎，将自然语言指令转化为可执行任务。"
                tags={["Python", "LangChain", "Celery", "PostgreSQL"]}
                image="/placeholder.svg?height=400&width=600"
                demoUrl="https://example.com"
                repoUrl="https://github.com/ljf-liu"
              />
            </motion.div>
          </StaggerContainer>
        </div>
      </ScrollRevealSection>

      {/* Experience Section — Light (alternate) */}
      <ScrollRevealSection id="experience" className="py-32 relative bg-[#f1f5f9] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxBlob speed={0.25} className="absolute top-1/3 right-1/3 w-80 h-80">
            <div className="w-full h-full bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          </ParallaxBlob>
          <ParallaxBlob speed={0.2} className="absolute bottom-1/4 left-1/4 w-80 h-80">
            <div className="w-full h-full bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
          </ParallaxBlob>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="工作经历" subtitle="我的职业旅程" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </ScrollRevealSection>

      {/* Contact Section — Light */}
      <ScrollRevealSection id="contact" className="py-32 relative bg-[#fafbfc] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxBlob speed={0.25} className="absolute top-1/4 left-1/4 w-80 h-80">
            <div className="w-full h-full bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          </ParallaxBlob>
          <ParallaxBlob speed={0.2} className="absolute bottom-1/3 right-1/3 w-80 h-80">
            <div className="w-full h-full bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          </ParallaxBlob>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="联系我" subtitle="一起合作" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div variants={childVariants}>
              <GlassmorphicCard>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">联系方式</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sky-50/80 backdrop-blur-sm flex items-center justify-center border border-sky-200/40">
                      <Mail className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">邮箱</div>
                      <div className="font-medium text-slate-900">1210401150@qq.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sky-50/80 backdrop-blur-sm flex items-center justify-center border border-sky-200/40">
                      <Github className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">GitHub</div>
                      <div className="font-medium text-slate-900">github.com/ljf-liu</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200/40">
                  <h4 className="text-lg font-medium mb-4 text-slate-900">当前状态</h4>
                  <div className="flex items-center gap-2 text-slate-700">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span>开放机会</span>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>

            <motion.div variants={childVariants}>
              <ContactForm />
            </motion.div>
          </StaggerContainer>
        </div>
      </ScrollRevealSection>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12 bg-[#fafbfc] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-sky-50/30 to-transparent pointer-events-none"></div>
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div>
            <Link href="/" className="font-bold text-xl font-chinese bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-500">
              刘锦峰
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
                className="rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 text-slate-600 hover:text-slate-900 border border-white/40"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:1210401150@qq.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 text-slate-600 hover:text-slate-900 border border-white/40"
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
