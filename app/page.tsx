import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Blog } from '@/components/sections/Blog'
import { Contact } from '@/components/sections/Contact'
import { ParticleField } from '@/components/animations/ParticleField'
import { FloatingShapes } from '@/components/animations/FloatingShapes'
import { OrbField } from '@/components/animations/GlowingOrb'

export default function Home() {
  return (
    <>
      {/* Creative Background Layers */}
      <ParticleField />
      <OrbField />
      <FloatingShapes />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  )
}
