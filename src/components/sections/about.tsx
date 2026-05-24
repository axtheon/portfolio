"use client"

import { motion } from "framer-motion"
import { Brain, Database, Code2, ShieldCheck, Cpu, Terminal } from "lucide-react"

export default function About() {
  const categories = [
    {
      title: "Core Philosophy",
      icon: <Brain className="w-5 h-5 text-cyber-blue" />,
      desc: "Foundations-first engineering. I believe in understanding the math and system architecture beneath the abstractions.",
    },
    {
      title: "Research Interest",
      icon: <Cpu className="w-5 h-5 text-cyber-violet" />,
      desc: "Exploring the intersection of high-performance computing and neural network efficiency.",
    },
    {
      title: "Open Source",
      icon: <Terminal className="w-5 h-5 text-cyber-cyan" />,
      desc: "Active contributor and believer in transparent, community-driven software development.",
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left: Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-mono">01. Biography</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              ENGINEERING <span className="text-cyber-blue">IDENTITY</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a Computer Science student from <span className="text-white">Lahore, Pakistan</span> with a singular focus: mastering the building blocks of intelligent systems. My journey is defined by a <span className="text-cyber-blue">deliberate, foundations-first</span> approach to technology.
              </p>
              <p>
                Currently, I am deep-diving into <span className="text-white">Applied AI and Data Engineering</span>, moving beyond simple framework usage to understand the underlying algorithms, data structures, and system security protocols.
              </p>
              <p>
                I thrive at the intersection of complex theory and practical implementation, building systems that aren&apos;t just functional, but <span className="text-white">scalable and mathematically sound</span>.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group">
                  <div className="mb-4">{cat.icon}</div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{cat.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">{cat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Technical Stats / Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[400px] glass p-8 rounded-3xl border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Code2 className="w-24 h-24 text-white" />
            </div>
            
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyber-blue" />
              <span className="font-mono text-sm uppercase tracking-widest text-cyber-blue">Stack_Analysis</span>
            </h3>

            <div className="space-y-8">
              {[
                { name: "Python / Data Science", level: "90%" },
                { name: "Algorithms / DSA", level: "85%" },
                { name: "Neural Networks", level: "65%" },
                { name: "PostgreSQL", level: "75%" },
                { name: "System Security", level: "60%" },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-tighter">{skill.name}</span>
                    <span className="text-[10px] font-mono text-cyber-blue">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                      className="h-full bg-gradient-to-r from-cyber-blue to-cyber-violet"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col gap-4">
               <div className="flex items-center gap-3">
                 <ShieldCheck className="w-5 h-5 text-cyber-cyan" />
                 <span className="text-xs text-gray-500 font-medium tracking-tight">Vulnerability assessment focused</span>
               </div>
               <div className="flex items-center gap-3">
                 <Database className="w-5 h-5 text-cyber-violet" />
                 <span className="text-xs text-gray-500 font-medium tracking-tight">Structured and unstructured data expertise</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-cyber-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-cyber-violet/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
