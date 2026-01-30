'use client'

import { motion } from 'framer-motion'

const shapes = [
  { type: 'circle', size: 60, x: '10%', y: '20%', delay: 0, color: 'primary' },
  { type: 'square', size: 40, x: '85%', y: '15%', delay: 0.5, color: 'secondary' },
  { type: 'triangle', size: 50, x: '75%', y: '70%', delay: 1, color: 'accent' },
  { type: 'circle', size: 30, x: '20%', y: '80%', delay: 1.5, color: 'secondary' },
  { type: 'donut', size: 70, x: '90%', y: '50%', delay: 2, color: 'primary' },
  { type: 'cross', size: 35, x: '5%', y: '60%', delay: 2.5, color: 'accent' },
]

const ShapeComponent = ({ type, size, color }: { type: string; size: number; color: string }) => {
  const colorValue = `hsl(var(--${color}))`

  switch (type) {
    case 'circle':
      return (
        <div
          className="rounded-full"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle at 30% 30%, ${colorValue}40, ${colorValue}10)`,
            border: `1px solid ${colorValue}30`,
          }}
        />
      )
    case 'square':
      return (
        <div
          className="rounded-lg"
          style={{
            width: size,
            height: size,
            background: `linear-gradient(135deg, ${colorValue}20, transparent)`,
            border: `1px solid ${colorValue}30`,
            transform: 'rotate(45deg)',
          }}
        />
      )
    case 'triangle':
      return (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid ${colorValue}20`,
            filter: `drop-shadow(0 0 10px ${colorValue}40)`,
          }}
        />
      )
    case 'donut':
      return (
        <div
          className="rounded-full"
          style={{
            width: size,
            height: size,
            border: `3px solid ${colorValue}30`,
            boxShadow: `inset 0 0 20px ${colorValue}10, 0 0 20px ${colorValue}10`,
          }}
        />
      )
    case 'cross':
      return (
        <div className="relative" style={{ width: size, height: size }}>
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2"
            style={{
              width: size,
              height: 3,
              background: `linear-gradient(90deg, transparent, ${colorValue}40, transparent)`,
            }}
          />
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2"
            style={{
              width: 3,
              height: size,
              background: `linear-gradient(180deg, transparent, ${colorValue}40, transparent)`,
            }}
          />
        </div>
      )
    default:
      return null
  }
}

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
            rotate: shape.type === 'square' ? [45, 90, 45] : [0, 10, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ShapeComponent type={shape.type} size={shape.size} color={shape.color} />
        </motion.div>
      ))}
    </div>
  )
}
