'use client'

import { motion } from 'framer-motion'

// Neural network layers visualization
const layers = [
  { nodes: 4, x: 10 },
  { nodes: 6, x: 30 },
  { nodes: 8, x: 50 },
  { nodes: 6, x: 70 },
  { nodes: 3, x: 90 },
]

const DataPulse = ({ fromX, fromY, toX, toY, delay }: {
  fromX: number; fromY: number; toX: number; toY: number; delay: number
}) => (
  <motion.circle
    r="2"
    fill="hsl(var(--secondary))"
    filter="url(#glow)"
    initial={{ cx: `${fromX}%`, cy: `${fromY}%`, opacity: 0 }}
    animate={{
      cx: [`${fromX}%`, `${toX}%`],
      cy: [`${fromY}%`, `${toY}%`],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

export function NeuralNetwork() {
  const connections: Array<{ from: { x: number; y: number }; to: { x: number; y: number }; delay: number }> = []

  // Generate connections between layers
  layers.forEach((layer, layerIndex) => {
    if (layerIndex < layers.length - 1) {
      const nextLayer = layers[layerIndex + 1]
      layer.nodes > 0 && Array.from({ length: Math.min(layer.nodes, 3) }).forEach((_, i) => {
        const fromY = ((i + 1) / (layer.nodes + 1)) * 100
        Array.from({ length: Math.min(nextLayer.nodes, 2) }).forEach((_, j) => {
          const toY = ((j + 1) / (nextLayer.nodes + 1)) * 100
          connections.push({
            from: { x: layer.x, y: fromY },
            to: { x: nextLayer.x, y: toY },
            delay: (layerIndex * 0.5) + (i * 0.2) + (j * 0.1),
          })
        })
      })
    }
  })

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Static connection lines */}
        {layers.map((layer, layerIndex) => {
          if (layerIndex >= layers.length - 1) return null
          const nextLayer = layers[layerIndex + 1]

          return Array.from({ length: layer.nodes }).map((_, i) => {
            const fromY = ((i + 1) / (layer.nodes + 1)) * 100
            return Array.from({ length: nextLayer.nodes }).map((_, j) => {
              const toY = ((j + 1) / (nextLayer.nodes + 1)) * 100
              return (
                <line
                  key={`${layerIndex}-${i}-${j}`}
                  x1={`${layer.x}%`}
                  y1={`${fromY}%`}
                  x2={`${nextLayer.x}%`}
                  y2={`${toY}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.1"
                />
              )
            })
          })
        })}

        {/* Animated data pulses */}
        {connections.slice(0, 15).map((conn, i) => (
          <DataPulse
            key={i}
            fromX={conn.from.x}
            fromY={conn.from.y}
            toX={conn.to.x}
            toY={conn.to.y}
            delay={conn.delay}
          />
        ))}

        {/* Layer nodes */}
        {layers.map((layer, layerIndex) =>
          Array.from({ length: layer.nodes }).map((_, i) => {
            const y = ((i + 1) / (layer.nodes + 1)) * 100
            return (
              <motion.circle
                key={`node-${layerIndex}-${i}`}
                cx={`${layer.x}%`}
                cy={`${y}%`}
                r="1"
                fill="hsl(var(--primary))"
                animate={{
                  r: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: layerIndex * 0.3 + i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          })
        )}
      </svg>
    </div>
  )
}
