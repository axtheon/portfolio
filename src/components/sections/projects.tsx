"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import ProjectDeepDive from "./project-deep-dive"

const projects = [
  {
    name: "MoodCutter Community",
    url: "https://github.com/axtheon/MoodCutter_Community",
    description: "Open-source multimodal emotion detection pipeline for video. Detects emotionally resonant moments using speech sentiment, laughter detection, and voice intensity. Free. No subscription. Bring your own compute.",
    tags: ["Python", "AI/ML", "WhisperX", "RoBERTa", "librosa", "PyTorch"],
    badge: "Active Development",
    badgeColor: "bg-sage text-white"
  },
  {
    name: "MoodCutter POC",
    url: "https://github.com/axtheon/MoodCutter_POC",
    description: "Proof of concept validating audio-based emotional moment detection in video using RMS energy analysis. The foundation that MoodCutter Community was built on.",
    tags: ["Python", "librosa", "numpy", "matplotlib"],
    badge: "Archived · POC Complete",
    badgeColor: "bg-warm-grey/20 text-warm-grey"
  },
  {
    name: "Python Projects",
    url: "https://github.com/axtheon/Python_Projects",
    description: "Collection of Python projects including Calculator, Pyclock, Unit Converter, and practice scripts. Built while learning Python fundamentals.",
    tags: ["Python"],
    badge: "Learning",
    badgeColor: "bg-[#F5F5DC] text-[#8B4513]" // warm beige
  },
  {
    name: "Caesar Cipher",
    url: "https://github.com/axtheon/CaesarCipher",
    description: "Classic Caesar cipher encryption and decryption implementation in Python.",
    tags: ["Python", "Cryptography"],
    badge: "Completed",
    badgeColor: "bg-warm-grey/20 text-warm-grey"
  },
  {
    name: "Sorting Algorithms Visualizer",
    url: "https://github.com/axtheon/Sorting-Algorithms-Visualizer",
    description: "Educational tool for visualizing sorting algorithms - bubble sort, merge sort, quick sort, and more - with animated step-by-step execution.",
    tags: ["Python", "Algorithms", "DSA", "Visualization"],
    badge: "Contribution",
    badgeColor: "bg-sage/20 text-sage border border-sage/30"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-2xl font-light tracking-tight text-charcoal uppercase mb-2">Projects</h2>
          <p className="text-warm-grey font-mono text-sm tracking-tight">Building in public.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`group bg-white border border-charcoal/5 p-8 flex flex-col h-full hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-500 cursor-pointer ${
                project.name === "MoodCutter Community" ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <div className="flex gap-4">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-warm-grey hover:text-charcoal transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <ArrowUpRight size={20} className="text-warm-grey group-hover:text-sage transition-colors" />
                </div>
              </div>

              <h3 className="text-xl font-medium text-charcoal mb-4 group-hover:text-sage transition-colors">
                {project.name}
              </h3>
              
              <p className="text-warm-grey text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-charcoal/5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-charcoal/60 bg-off-white px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDeepDive 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject || { name: "", description: "", tags: [], url: "" }}
      />
    </section>
  )
}
