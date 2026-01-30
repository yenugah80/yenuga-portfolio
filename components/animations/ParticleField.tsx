'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const count = Math.min(80, Math.floor(window.innerWidth / 20))

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          hue: Math.random() > 0.5 ? 239 : 189, // Primary indigo or secondary cyan
        })
      }
      return particles
    }

    const drawParticle = (p: Particle) => {
      if (!ctx) return
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${p.hue}, 84%, 67%, ${p.opacity})`
      ctx.fill()
    }

    const drawConnections = (particles: Particle[]) => {
      if (!ctx) return
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `hsla(239, 84%, 67%, ${0.1 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((p) => {
        // Mouse attraction
        const dx = mouseRef.current.x - p.x
        const dy = mouseRef.current.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200 * 0.02
          p.vx += (dx / distance) * force
          p.vy += (dy / distance) * force
        }

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Damping
        p.vx *= 0.99
        p.vy *= 0.99

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Keep in bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        // Pulse opacity
        p.opacity = 0.3 + Math.sin(Date.now() * 0.001 + p.x * 0.01) * 0.2

        drawParticle(p)
      })

      drawConnections(particlesRef.current)
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    resizeCanvas()
    particlesRef.current = createParticles()
    animate()

    window.addEventListener('resize', () => {
      resizeCanvas()
      particlesRef.current = createParticles()
    })
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
