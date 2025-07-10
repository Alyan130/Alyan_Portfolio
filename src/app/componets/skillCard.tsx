"use client"

import type React from "react"

import { Globe, FileCode, Code, Bot, Database, Zap } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { FeatureCard } from "./grid"

const skills = [
  {
    title: "Next.js",
    icon: Globe,
    description:
      "Full-stack React framework for building modern web applications with server-side rendering and API routes.",
  },
  {
    title: "TypeScript",
    icon: FileCode,
    description:
      "Strongly typed JavaScript that scales. Building robust applications with enhanced developer experience.",
  },
  {
    title: "Python",
    icon: Code,
    description: "Versatile programming language for backend development, data analysis, and automation scripts.",
  },
  {
    title: "OpenAI Agents SDK",
    icon: Bot,
    description: "Building intelligent AI agents and chatbots with advanced natural language processing capabilities.",
  },
  {
    title: "SQL",
    icon: Database,
    description: "Database design and optimization. Complex queries, stored procedures, and data modeling expertise.",
  },
  {
    title: "FastAPI",
    icon: Zap,
    description: "High-performance Python web framework for building modern APIs with automatic documentation.",
  },
]

export default function SkillsGrid() {
  return (
    <section className="py-12 md:py-28 bg-black/95">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-bold text-white">
            Technical Skills
          </h2>
          <p className="text-gray-400 mt-6 text-sm tracking-wide text-balance md:text-base">
            Technologies I use to build exceptional digital experiences and robust solutions.
          </p>
        </AnimatedContainer>
        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-1 border-gray-800 sm:grid-cols-2 md:grid-cols-3 rounded-lg overflow-hidden backdrop-blur-sm gap-6"
        >
          {skills.map((skill, i) => (
            <FeatureCard key={i} feature={skill} />
          ))}
        </AnimatedContainer>
      </div>

      {/* Background gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Subtle grid background */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
    </section>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: React.ComponentProps<typeof motion.div>["className"]
  children: React.ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
