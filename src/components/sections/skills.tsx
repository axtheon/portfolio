"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "LANGUAGES",
    skills: ["Python", "C++", "JavaScript", "C#"]
  },
  {
    title: "AI / ML",
    skills: ["PyTorch", "HuggingFace", "WhisperX", "RoBERTa", "librosa", "NumPy", "Pandas", "scikit-learn", "OpenCV"]
  },
  {
    title: "TOOLS & INFRASTRUCTURE",
    skills: ["Git", "GitHub", "FFmpeg", "FastAPI", "Docker", "VS Code", "Linux"]
  },
  {
    title: "CURRENTLY LEARNING",
    skills: ["DSA", "PostgreSQL", "React", "TailwindCSS", "ML Math"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl font-light tracking-tight text-charcoal uppercase mb-16">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] text-warm-grey mb-6">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-off-white border border-charcoal/5 text-xs text-charcoal tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
