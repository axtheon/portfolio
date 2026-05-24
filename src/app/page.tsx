"use client"

import BackgroundEffect from "@/components/effects/background-effect"
import LoadingScreen from "@/components/effects/loading-screen"
import KeyboardShortcuts from "@/components/effects/keyboard-shortcuts"
import BackToTop from "@/components/ui/back-to-top"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Github from "@/components/sections/github"
import Skills from "@/components/sections/skills"
import Roadmap from "@/components/sections/roadmap"
import Projects from "@/components/sections/projects"
import Philosophy from "@/components/sections/philosophy"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LoadingScreen />
      <BackgroundEffect />
      <KeyboardShortcuts />
      <BackToTop />
      <Navbar />
      
      <Hero />
      <About />
      <Github />
      <Skills />
      <Roadmap />
      <Projects />
      <Philosophy />
      <Contact />
      
      <Footer />
    </main>
  )
}
