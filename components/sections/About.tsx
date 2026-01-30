'use client'

import { motion } from 'framer-motion'
import { Brain, Users, Rocket, GraduationCap, Award } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const values = [
  {
    icon: Brain,
    title: 'The Full Journey',
    description:
      'I learned early that ideas without execution are just dreams. So I became the person who takes AI from whiteboard sketches to systems handling millions of requests. Every pipeline, every model, every deployment teaches me something new.',
  },
  {
    icon: Users,
    title: 'Building Bridges',
    description:
      'The best AI solutions come from understanding people, not just data. I spend as much time listening to business leaders and end users as I do writing code. That&apos;s how technology becomes transformation.',
  },
  {
    icon: Rocket,
    title: 'Shipping is Learning',
    description:
      'I believe in getting things into production quickly, then iterating relentlessly. Perfect is the enemy of shipped. MLOps, testing, monitoring... they&apos;re not overhead, they&apos;re how you learn what actually works.',
  },
]

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-custom mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The <span className="gradient-text">Story</span> Behind{' '}
              <span className="gradient-text">The Code</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Eight years ago, I wrote my first machine learning model. It was messy, slow, and barely worked.
              But watching data transform into insight sparked something. Since then, I&apos;ve chased that feeling
              through <span className="text-accent font-medium">Apple&apos;s</span> retail floors,{' '}
              <span className="text-secondary font-medium">Bank of America&apos;s</span> trading systems, and now{' '}
              <span className="text-primary font-medium">Macy&apos;s</span> GenAI revolution. Each stop added a new
              chapter to my understanding of what AI can become when it meets real problems.
            </p>
          </div>
        </RevealOnScroll>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.div
                className="glass rounded-2xl p-8 h-full hover-card group card-shine inner-light"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:glow transition-all duration-500"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{value.description}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education & Recognition */}
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Where I Learned</h3>
                  <p className="text-sm text-muted-foreground">The foundation of my journey</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-secondary/50 pl-4">
                  <h4 className="font-semibold">MS Business Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Northwood University • GPA: 3.87/4.00 • 2024
                  </p>
                </div>
                <div className="border-l-2 border-secondary/50 pl-4">
                  <h4 className="font-semibold">B.Tech Electronics & Communications</h4>
                  <p className="text-sm text-muted-foreground">
                    JNTU • 2015-2019
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Moments That Mattered</h3>
                  <p className="text-sm text-muted-foreground">Milestones along the way</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-accent/50 pl-4">
                  <h4 className="font-semibold">Research Publication</h4>
                  <p className="text-sm text-muted-foreground">
                    Predictive Hiring with ML • IBAC May 2025
                  </p>
                </div>
                <div className="border-l-2 border-accent/50 pl-4">
                  <h4 className="font-semibold">Spot Awards (x2)</h4>
                  <p className="text-sm text-muted-foreground">
                    Apple Inc. • Exemplary Performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
