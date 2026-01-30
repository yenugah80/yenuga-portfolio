'use client'

import { motion } from 'framer-motion'

// Tech-inspired shapes
const techElements = [
  { type: 'hexagon', size: 50, x: '8%', y: '15%', delay: 0, color: 'primary' },
  { type: 'bracket', size: 40, x: '88%', y: '20%', delay: 0.5, color: 'secondary' },
  { type: 'chip', size: 45, x: '75%', y: '75%', delay: 1, color: 'accent' },
  { type: 'hexagon', size: 35, x: '15%', y: '70%', delay: 1.5, color: 'secondary' },
  { type: 'circuit', size: 60, x: '92%', y: '55%', delay: 2, color: 'primary' },
  { type: 'bracket', size: 30, x: '5%', y: '45%', delay: 2.5, color: 'accent' },
  { type: 'data', size: 25, x: '70%', y: '10%', delay: 3, color: 'primary' },
  { type: 'chip', size: 30, x: '25%', y: '85%', delay: 3.5, color: 'secondary' },
]

const TechShape = ({ type, size, color }: { type: string; size: number; color: string }) => {
  const colorValue = `hsl(var(--${color}))`

  switch (type) {
    case 'hexagon':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <polygon
            points="50,2 95,25 95,75 50,98 5,75 5,25"
            fill="none"
            stroke={colorValue}
            strokeWidth="2"
            opacity="0.4"
          />
          <polygon
            points="50,15 82,32 82,68 50,85 18,68 18,32"
            fill={colorValue}
            opacity="0.1"
          />
        </svg>
      )
    case 'bracket':
      return (
        <div className="font-mono text-4xl font-bold" style={{ color: colorValue, opacity: 0.3 }}>
          {'{ }'}
        </div>
      )
    case 'chip':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke={colorValue} strokeWidth="2" opacity="0.4" />
          <rect x="30" y="30" width="40" height="40" rx="3" fill={colorValue} opacity="0.15" />
          {/* Chip pins */}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <line x1={35 + i * 15} y1="20" x2={35 + i * 15} y2="5" stroke={colorValue} strokeWidth="2" opacity="0.3" />
              <line x1={35 + i * 15} y1="80" x2={35 + i * 15} y2="95" stroke={colorValue} strokeWidth="2" opacity="0.3" />
              <line x1="20" y1={35 + i * 15} x2="5" y2={35 + i * 15} stroke={colorValue} strokeWidth="2" opacity="0.3" />
              <line x1="80" y1={35 + i * 15} x2="95" y2={35 + i * 15} stroke={colorValue} strokeWidth="2" opacity="0.3" />
            </g>
          ))}
        </svg>
      )
    case 'circuit':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <path
            d="M10,50 L30,50 L40,30 L60,70 L70,50 L90,50"
            fill="none"
            stroke={colorValue}
            strokeWidth="2"
            opacity="0.3"
          />
          <circle cx="10" cy="50" r="4" fill={colorValue} opacity="0.4" />
          <circle cx="90" cy="50" r="4" fill={colorValue} opacity="0.4" />
        </svg>
      )
    case 'data':
      return (
        <div className="font-mono text-xs" style={{ color: colorValue, opacity: 0.4 }}>
          <div>01001</div>
          <div>10110</div>
        </div>
      )
    default:
      return null
  }
}

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {techElements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.05, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6 + i,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <TechShape type={element.type} size={element.size} color={element.color} />
        </motion.div>
      ))}
    </div>
  )
}
