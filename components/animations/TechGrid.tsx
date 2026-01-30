'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  connections: number[]
  pulse: number
  active: boolean
}

export function TechGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createGrid()
    }

    const createGrid = () => {
      const nodes: Node[] = []
      const spacing = 80
      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const index = row * cols + col
          nodes.push({
            x: col * spacing,
            y: row * spacing,
            connections: [],
            pulse: Math.random() * Math.PI * 2,
            active: Math.random() > 0.7,
          })

          // Connect to neighbors
          if (col > 0) nodes[index].connections.push(index - 1)
          if (row > 0) nodes[index].connections.push(index - cols)
          if (col > 0 && row > 0) nodes[index].connections.push(index - cols - 1)
          if (col < cols - 1 && row > 0) nodes[index].connections.push(index - cols + 1)
        }
      }
      nodesRef.current = nodes
    }

    const draw = (time: number) => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach((connIndex) => {
          const conn = nodes[connIndex]
          if (!conn) return

          const dx = mouse.x - (node.x + conn.x) / 2
          const dy = mouse.y - (node.y + conn.y) / 2
          const dist = Math.sqrt(dx * dx + dy * dy)
          const highlight = dist < 150

          // Data flow animation
          const flowPhase = (time * 0.001 + i * 0.1) % 1

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(conn.x, conn.y)

          const gradient = ctx.createLinearGradient(node.x, node.y, conn.x, conn.y)
          const baseOpacity = highlight ? 0.3 : 0.08

          gradient.addColorStop(0, `hsla(239, 84%, 67%, ${baseOpacity})`)
          gradient.addColorStop(flowPhase, `hsla(189, 94%, 43%, ${highlight ? 0.6 : 0.2})`)
          gradient.addColorStop(1, `hsla(270, 91%, 65%, ${baseOpacity})`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = highlight ? 1.5 : 0.5
          ctx.stroke()
        })
      })

      // Draw nodes
      nodes.forEach((node, i) => {
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const highlight = dist < 120

        // Pulse effect
        const pulseScale = 1 + Math.sin(time * 0.002 + node.pulse) * 0.3
        const size = (highlight ? 4 : 2) * pulseScale

        // Node glow
        if (highlight || node.active) {
          const glowSize = highlight ? 20 : 10
          const glowGradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, glowSize
          )
          glowGradient.addColorStop(0, highlight ? 'hsla(189, 94%, 43%, 0.4)' : 'hsla(239, 84%, 67%, 0.2)')
          glowGradient.addColorStop(1, 'transparent')

          ctx.beginPath()
          ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
          ctx.fillStyle = glowGradient
          ctx.fill()
        }

        // Node dot
        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.fillStyle = highlight
          ? 'hsl(189, 94%, 43%)'
          : node.active
            ? 'hsl(239, 84%, 67%)'
            : 'hsla(239, 84%, 67%, 0.3)'
        ctx.fill()

        // Randomly toggle active state
        if (Math.random() < 0.001) {
          node.active = !node.active
        }
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    resizeCanvas()
    draw(0)

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  )
}
