'use client'

import { motion } from 'framer-motion'

interface GlowingOrbProps {
  color?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  position?: { top?: string; bottom?: string; left?: string; right?: string }
  delay?: number
}

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-72 h-72',
  xl: 'w-96 h-96',
}

const blurMap = {
  sm: 'blur-[60px]',
  md: 'blur-[80px]',
  lg: 'blur-[100px]',
  xl: 'blur-[120px]',
}

export function GlowingOrb({
  color = 'primary',
  size = 'md',
  position = {},
  delay = 0,
}: GlowingOrbProps) {
  return (
    <motion.div
      className={`absolute ${sizeMap[size]} rounded-full ${blurMap[size]} pointer-events-none`}
      style={{
        background: `hsl(var(--${color}) / 0.15)`,
        ...position,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function OrbField() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <GlowingOrb color="primary" size="xl" position={{ top: '10%', left: '-10%' }} delay={0} />
      <GlowingOrb color="secondary" size="lg" position={{ top: '60%', right: '-5%' }} delay={2} />
      <GlowingOrb color="accent" size="md" position={{ bottom: '10%', left: '30%' }} delay={4} />
      <GlowingOrb color="primary" size="sm" position={{ top: '40%', left: '60%' }} delay={1} />
      <GlowingOrb color="secondary" size="md" position={{ top: '20%', right: '20%' }} delay={3} />
    </div>
  )
}
