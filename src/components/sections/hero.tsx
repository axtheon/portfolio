"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import Typewriter from "@/components/ui/typewriter"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-blue"></span>
            </span>
            <span className="text-[10px] font-bold text-cyber-blue uppercase tracking-widest font-mono">
              Systems & Algorithms
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-4">
            <span className="text-white block">ABDULLAH</span>
            <span className="text-cyber-blue block">KHAN</span>
          </h1>

          <div className="mb-8">
            <Typewriter />
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg font-medium leading-relaxed">
            Foundations-first engineer focused on <span className="text-white font-bold">Artificial Intelligence</span> and building <span className="text-white font-bold">Robust Systems</span> from first principles.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="#projects"
              className="px-8 py-4 bg-cyber-blue text-cyber-dark font-bold rounded-lg flex items-center gap-2 hover:bg-white hover:scale-105 transition-all group shadow-[0_0_20px_rgba(0,212,170,0.3)]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex gap-4 items-center">
              <Link
                href="https://github.com/axtheon"
                target="_blank"
                className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyber-blue hover:border-cyber-blue transition-all"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/axtheon"
                target="_blank"
                className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyber-blue hover:border-cyber-blue transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/5">
            {[
              { label: "Language", val: "Python" },
              { label: "Focus", val: "AI/ML" },
              { label: "Strength", val: "DSA" },
              { label: "Location", val: "Lahore" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-1">{stat.label}</p>
                <p className="text-sm font-bold text-white">{stat.val}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-cyber-blue/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-20px] border border-cyber-violet/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute inset-[-40px] border border-cyber-cyan/5 rounded-full animate-[spin_40s_linear_infinite]" />
            
            {/* Glow Orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyber-blue/20 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyber-violet/20 blur-[60px] rounded-full" />

            {/* Profile Image Wrapper */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-cyber-dark shadow-[0_0_50px_rgba(0,212,170,0.2)]">
              <Image
                src="/AbdullahKhan_Portfolio/pic.png"
                alt="Abdullah Khan"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -right-4 top-1/4 glass p-3 rounded-xl border-cyber-blue/30 animate-bounce [animation-duration:3s]">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-cyber-blue" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Systems Engineering</span>
               </div>
            </div>
            <div className="absolute -left-8 bottom-1/4 glass p-3 rounded-xl border-cyber-violet/30 animate-bounce [animation-duration:4s]">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-cyber-violet" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Algorithm Design</span>
               </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Background Decor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-20">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyber-blue to-transparent" />
      </div>
    </section>
  )
}
