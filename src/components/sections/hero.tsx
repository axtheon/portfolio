"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Code2 } from "lucide-react"

const subtitles = [
  "- \"CS Student · AI/ML Engineer\"",
  "- \"Building MoodCutter - They clip what you said. We clip what you felt.\"",
  "- \"Foundations first. Everything else follows.\"",
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  const handleEmailClick = (e: React.MouseEvent) => {
    // Copy to clipboard
    navigator.clipboard.writeText("abdullah.dev4220@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    // The default mailto behavior will still trigger because we aren't calling e.preventDefault()
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        {/* Profile Picture */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-10 rounded-full border-4 border-sage p-1.5 shadow-2xl shadow-sage/10">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image 
              src="/pic.png" 
              alt="Muhammad Abdullah" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 text-charcoal">
          Muhammad Abdullah
        </h1>

        {/* Typing Animation Subtitle */}
        <div className="h-14 md:h-10 mb-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl font-mono text-warm-grey italic font-medium"
            >
              {subtitles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="#projects"
            className="px-8 py-3 bg-sage text-white rounded-none hover:bg-sage/90 transition-colors text-sm tracking-wide"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border border-sage text-sage rounded-none hover:bg-sage/5 transition-colors text-sm tracking-wide"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-warm-grey">
          <a href="https://github.com/axtheon" target="_blank" className="hover:text-charcoal transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/abdullah-khan-axtheon" target="_blank" className="hover:text-charcoal transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/axtheon_" target="_blank" className="hover:text-charcoal transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://leetcode.com/axtheon/" target="_blank" className="hover:text-charcoal transition-colors">
            <Code2 size={20} />
          </a>
          <a 
            href="mailto:abdullah.dev4220@gmail.com" 
            onClick={handleEmailClick}
            className="hover:text-charcoal transition-colors relative group"
          >
            <Mail size={20} />
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  className="absolute -top-10 left-1/2 bg-charcoal text-white text-[10px] px-2 py-1 rounded font-mono whitespace-nowrap"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
