'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'wave' | 'dots' | 'gradient' | 'code'
}

export function SectionDivider({ variant = 'gradient' }: SectionDividerProps) {
  if (variant === 'wave') {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
            fill="url(#wave-gradient)"
            animate={{
              d: [
                'M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z',
                'M0,50 C360,0 720,100 1080,50 C1260,25 1380,75 1440,50 L1440,100 L0,100 Z',
                'M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.1)" />
              <stop offset="50%" stopColor="hsl(var(--secondary) / 0.1)" />
              <stop offset="100%" stopColor="hsl(var(--accent) / 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center gap-3 py-12">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/40"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'code') {
    const codeSnippets = ['const ai = ', '{ model: ', '"GPT-4", ', 'ready: ', 'true }']
    return (
      <div className="flex items-center justify-center py-12 overflow-hidden">
        <div className="flex gap-1 font-mono text-sm">
          {codeSnippets.map((snippet, i) => (
            <motion.span
              key={i}
              className={i % 2 === 0 ? 'text-primary' : 'text-secondary'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {snippet}
            </motion.span>
          ))}
          <motion.span
            className="text-accent"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </div>
      </div>
    )
  }

  // Default gradient variant
  return (
    <div className="relative py-8">
      <motion.div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), hsl(var(--secondary) / 0.5), hsl(var(--accent) / 0.5), transparent)',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"
        animate={{
          boxShadow: [
            '0 0 0 0 hsl(var(--primary) / 0.4)',
            '0 0 0 10px hsl(var(--primary) / 0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  )
}
