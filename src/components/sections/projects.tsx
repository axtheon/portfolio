"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Play } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "MoodCutter",
    description: "AI-focused system designed to detect emotionally resonant moments in video content using NLP and CV pipelines. An ambitious project pushing the boundaries of automated content curation.",
    tech: ["Python", "TensorFlow", "OpenCV", "NLP"],
    github: "https://github.com/axtheon/MoodCutter",
    status: "Featured / Archived",
    featured: true,
  },
  {
    title: "Sorting Algorithms Visualizer",
    description: "Interactive educational tool for visualizing complex sorting algorithms in real-time. Built to make DSA concepts intuitive and accessible.",
    tech: ["JavaScript", "Algorithms", "Canvas"],
    github: "https://github.com/axtheon/Sorting-Algorithms-Visualizer",
    status: "Open Source",
  },
  {
    title: "CaesarCipher",
    description: "A secure implementation of the classic encryption algorithm, part of a broader exploration into cryptographic foundations and security.",
    tech: ["Python", "Security", "Cryptography"],
    github: "https://github.com/axtheon/CaesarCipher",
    status: "Completed",
  },
  {
    title: "Mini Python Projects",
    description: "A collection of 20+ utility scripts and mini-apps focused on logic building and data manipulation fundamentals.",
    tech: ["Python", "Scripting", "Logic"],
    github: "https://github.com/axtheon/Python_Projects",
    status: "Active",
  },
  {
    title: "Personal Portfolio",
    description: "A high-performance, visually stunning portfolio website built with Next.js, Three.js, and Framer Motion. Features custom shaders, glassmorphism, and responsive design.",
    tech: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/axtheon/AbdullahKhan_Portfolio",
    status: "Completed",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-mono">05. Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              TECHNICAL <span className="text-cyber-blue">PORTFOLIO</span>
            </h2>
          </div>
          <Link 
            href="https://github.com/axtheon" 
            target="_blank"
            className="flex items-center gap-2 text-sm font-bold text-cyber-blue hover:text-white transition-colors uppercase tracking-widest font-mono group"
          >
            Explore All Repos
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
                project.featured 
                ? "bg-cyber-blue/[0.03] border-cyber-blue/20 hover:border-cyber-blue/50 md:col-span-2" 
                : "bg-white/[0.02] border-white/10 hover:border-white/20"
              }`}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${
                  project.featured ? "bg-cyber-blue/10 border-cyber-blue/30 text-cyber-blue" : "bg-white/5 border-white/10 text-gray-500"
                }`}>
                  {project.status}
                </span>
                <div className="flex gap-3">
                  <Link href={project.github} target="_blank" className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all">
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className={project.featured ? "md:grid md:grid-cols-2 md:gap-12" : ""}>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyber-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xl">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tag, j) => (
                      <span key={j} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-cyber-blue transition-colors uppercase tracking-widest font-mono">
                Technical Overview
                <Play className="w-3 h-3 fill-current" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
