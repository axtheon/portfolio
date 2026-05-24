"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Rocket, Shield, Sparkles } from "lucide-react"

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Python + DSA Foundations",
    description: "Mastering language syntax, algorithmic logic, and data structures. Building the core computational mindset.",
    status: "completed",
    icon: <CheckCircle2 className="w-6 h-6 text-cyber-blue" />,
    items: ["Python Advanced Concepts", "Array/List Manipulation", "Tree/Graph Algorithms", "Big O Complexity Analysis"],
  },
  {
    phase: "Phase 2",
    title: "Data Engineering & Systems",
    description: "Learning to handle large-scale data and persistent storage systems. Understanding how data moves through a pipeline.",
    status: "current",
    icon: <Sparkles className="w-6 h-6 text-cyber-violet animate-pulse" />,
    items: ["NumPy & Pandas", "PostgreSQL Architectures", "ETL Process Design", "Data Normalization"],
  },
  {
    phase: "Phase 3",
    title: "Machine Learning & TensorFlow",
    description: "Transitioning to applied AI. Building neural networks and training models on real-world datasets.",
    status: "upcoming",
    icon: <Rocket className="w-6 h-6 text-gray-500" />,
    items: ["TensorFlow Ecosystem", "Neural Network Architecture", "Model Optimization", "Deep Learning Research"],
  },
  {
    phase: "Phase 4",
    title: "Systems Security & Advanced AI",
    description: "Merging AI with cybersecurity. Focusing on research-grade technical depth and secure intelligent systems.",
    status: "upcoming",
    icon: <Shield className="w-6 h-6 text-gray-500" />,
    items: ["Adversarial AI", "Secure ML Pipelines", "AI Research Projects", "Vulnerability Research"],
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-6">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-mono">04. Progression</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            LEARNING <span className="text-cyber-violet">ROADMAP</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            My structured journey toward mastering AI/ML Engineering, one deliberate phase at a time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-violet to-white/5 md:-translate-x-1/2" />

          <div className="space-y-16">
            {roadmapPhases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-16 h-16 rounded-2xl bg-cyber-dark border border-white/10 flex items-center justify-center z-10 -translate-x-0 md:-translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  {phase.icon}
                </div>

                {/* Content Card */}
                <div className="flex-1 ml-20 md:ml-0 md:w-1/2">
                  <div className={`p-8 rounded-3xl border transition-all duration-500 ${
                    phase.status === "current" 
                      ? "bg-cyber-violet/5 border-cyber-violet/30 shadow-[0_0_30px_rgba(139,92,246,0.1)]" 
                      : phase.status === "completed"
                      ? "bg-white/[0.02] border-white/10 opacity-80"
                      : "bg-white/[0.01] border-white/5 opacity-40"
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold text-cyber-violet uppercase tracking-widest">{phase.phase}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-tighter ${
                        phase.status === "current" ? "bg-cyber-violet text-white" : "bg-white/5 text-gray-500"
                      }`}>
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{phase.title}</h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">{phase.description}</p>
                    
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className={`w-1 h-1 rounded-full ${phase.status === "completed" ? "bg-cyber-blue" : "bg-gray-700"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
