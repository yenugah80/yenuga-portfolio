'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
}

// Smooth easing curve
const smoothEase = [0.25, 0.1, 0.25, 1]

export function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.15, margin: '-50px' })
  const prefersReducedMotion = useReducedMotion()

  // Reduced motion support
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const directionOffsets = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = directionOffsets[direction]

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: 'blur(4px)',
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              filter: 'blur(0px)',
            }
          : {
              opacity: 0,
              x: offset.x,
              y: offset.y,
              filter: 'blur(4px)',
            }
      }
      transition={{
        duration,
        delay,
        ease: smoothEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
