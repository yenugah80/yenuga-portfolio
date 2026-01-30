import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Blog } from '@/components/sections/Blog'
import { Contact } from '@/components/sections/Contact'
import { TechGrid } from '@/components/animations/TechGrid'
import { FloatingShapes } from '@/components/animations/FloatingShapes'
import { OrbField } from '@/components/animations/GlowingOrb'
import { NeuralNetwork } from '@/components/animations/NeuralNetwork'

export default function Home() {
  return (
    <>
      {/* Modern Tech Background Layers */}
      <TechGrid />
      <NeuralNetwork />
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
