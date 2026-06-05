"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column: Bio */}
          <div>
            <h2 className="text-2xl font-light tracking-tight mb-8 text-charcoal uppercase">About</h2>
            <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
              I&apos;m a CS student from Lahore, Pakistan, focused on building a long-term career in AI/ML Engineering and Data Science. I prioritise mathematical foundations and systems-level understanding over surface-level tooling, the kind of depth that scales.
            </p>
            <p className="text-lg leading-relaxed text-charcoal/80">
              Currently building MoodCutter - an open-source multimodal emotion detection engine for video that clips what you felt, not just what you said.
            </p>
          </div>

          {/* Right Column: Focus & Stats */}
          <div className="flex flex-col gap-8">
            <div className="bg-white border border-charcoal/5 p-8 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-warm-grey mb-6">Technical Focus</h3>
              <div className="space-y-6">
                {[
                  { label: "AI/ML Engineering", progress: 85 },
                  { label: "Data Science & Analysis", progress: 80 },
                  { label: "Systems & Architecture", progress: 75 },
                  { label: "Research & Development", progress: 70 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal">{stat.label}</span>
                      <span className="text-xs font-mono text-warm-grey">{stat.progress}%</span>
                    </div>
                    <div className="h-1 bg-off-white">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-sage"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-charcoal/5 p-6 text-center">
                <p className="text-2xl font-light text-charcoal mb-1">Building</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-warm-grey">In Public</p>
              </div>
              <div className="bg-white border border-charcoal/5 p-6 text-center">
                <p className="text-2xl font-light text-charcoal mb-1">Open Source</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-warm-grey">First</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
