"use client"

import { motion } from "framer-motion"
import { Code2, BrainCircuit, Database, Globe, Wrench, Binary } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-cyber-blue" />,
    skills: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    title: "AI / ML",
    icon: <BrainCircuit className="w-6 h-6 text-cyber-violet" />,
    skills: ["TensorFlow", "NumPy", "Pandas", "Scikit-Learn", "Computer Vision"],
  },
  {
    title: "Data Engineering",
    icon: <Database className="w-6 h-6 text-cyber-cyan" />,
    skills: ["PostgreSQL", "Data Cleaning", "ETL Pipelines", "Feature Engineering"],
  },
  {
    title: "CS Fundamentals",
    icon: <Binary className="w-6 h-6 text-white" />,
    skills: ["DSA", "OOP", "Algorithms", "Problem Solving", "Complexity Analysis"],
  },
  {
    title: "Tools & OS",
    icon: <Wrench className="w-6 h-6 text-gray-400" />,
    skills: ["Git", "GitHub", "Linux", "Docker", "VS Code"],
  },
  {
    title: "Web Tech",
    icon: <Globe className="w-6 h-6 text-cyber-blue" />,
    skills: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-6">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-mono">03. Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            EXPERTISE <span className="text-cyber-blue">MATRIX</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technical stack and engineering proficiencies, categorized by domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyber-blue/50 hover:bg-cyber-blue/[0.02] transition-all group relative overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyber-blue/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyber-blue/30 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-gray-400 group-hover:text-gray-300 group-hover:border-white/10 transition-colors"
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
