'use client'

import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Sparkles, Zap, Code2 } from 'lucide-react'
import { TextRotator } from '@/components/animations/TextRotator'
import { MagneticElement } from '@/components/animations/MagneticElement'

const roles = [
  'AI that understands context',
  'Systems that scale gracefully',
  'Models that explain themselves',
  'Pipelines that never sleep',
  'Intelligence that empowers teams',
]

const stats = [
  { value: '8+', label: 'Years in the Trenches', icon: Zap },
  { value: '3', label: 'Fortune 500s Transformed', icon: Code2 },
  { value: '50+', label: 'AI Systems Shipped', icon: Sparkles },
]

// Animated ring component
const AnimatedRing = ({ size, delay, duration }: { size: number; delay: number; duration: number }) => (
  <motion.div
    className="absolute left-1/2 top-1/2 rounded-full border border-primary/20"
    style={{
      width: size,
      height: size,
      marginLeft: -size / 2,
      marginTop: -size / 2,
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.1, 0.3],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
)

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated rings */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedRing size={400} delay={0} duration={20} />
        <AnimatedRing size={600} delay={2} duration={25} />
        <AnimatedRing size={800} delay={4} duration={30} />
      </div>

      {/* Gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--primary)/0.3)_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--secondary)/0.2)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--accent)/0.2)_0%,_transparent_50%)]" />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 pt-20 md:pt-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              Open to opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            I&apos;m{' '}
            <span className="gradient-text">Harika</span>
            <span className="text-muted-foreground">,</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4"
          >
            I architect <span className="text-foreground font-semibold">AI systems</span>
            {' '}that ship
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 h-12 md:h-14"
          >
            <TextRotator texts={roles} interval={2500} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            From <span className="text-secondary font-medium">Apple</span> to{' '}
            <span className="text-accent font-medium">Bank of America</span> to{' '}
            <span className="text-primary font-medium">Macy&apos;s</span> — I turn ambitious AI visions
            into production reality. Currently leading GenAI transformation at enterprise scale.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
          >
            <MapPin size={16} className="text-primary" />
            <span>United States</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={18} />
              View My Work
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harika-ye"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
          >
            {stats.map((stat, index) => (
              <MagneticElement key={index} strength={0.2}>
                <motion.div
                  className="text-center p-4 rounded-2xl glass group cursor-default"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary group-hover:text-secondary transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap">{stat.label}</div>
                </motion.div>
              </MagneticElement>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
