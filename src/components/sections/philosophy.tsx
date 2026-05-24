"use client"

import { motion } from "framer-motion"
import { Terminal, ChevronRight, Share2, Bug } from "lucide-react"

const philosophyPoints = [
  {
    cmd: "cat open_source.md",
    title: "Open Source Mindset",
    content: "Building in public isn't just about sharing code; it's about inviting scrutiny to achieve collective engineering excellence.",
  },
  {
    cmd: "run depth_check.sh",
    title: "Engineering Depth",
    content: "Mastering the 'why' before the 'how'. Frameworks are transient; mathematical foundations and algorithmic logic are permanent.",
  },
  {
    cmd: "grep 'future' vision.txt",
    title: "Long-term Vision",
    content: "AI should be a tool for human augmentation, built on secure, transparent, and high-performance systems.",
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-mono">06. Mindset</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              ENGINEERING <br />
              <span className="text-cyber-cyan">PHILOSOPHY</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Understanding the layer beneath the framework. My approach to building systems is rooted in fundamental computer science principles and a commitment to open-source collaboration.
            </p>
            
            <div className="flex flex-col gap-6">
               <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="p-3 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/20 h-fit">
                    <Share2 className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Public Contribution</h4>
                    <p className="text-xs text-gray-500 font-medium">Actively contributing to the global engineering community through open repos.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="p-3 rounded-xl bg-cyber-violet/10 border border-cyber-violet/20 h-fit">
                    <Bug className="w-5 h-5 text-cyber-violet" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Vulnerability First</h4>
                    <p className="text-xs text-gray-500 font-medium">Designing systems with an offensive-security mindset to ensure robust defense.</p>
                  </div>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-square md:aspect-auto md:h-[500px] glass-dark rounded-3xl border-white/10 flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-2">
                 <Terminal className="w-3 h-3 text-gray-500" />
                 <span className="text-[10px] font-mono text-gray-500 tracking-tighter">bash — 80x24</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-6 font-mono text-sm overflow-y-auto no-scrollbar">
              <div className="flex items-center gap-2 text-cyber-blue mb-4">
                <span className="opacity-50">➜</span>
                <span className="font-bold">~/abdullah</span>
                <span className="text-white opacity-30">git:(main)</span>
              </div>

              <div className="space-y-8">
                {philosophyPoints.map((point, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-2 text-gray-400">
                      <ChevronRight className="w-4 h-4 text-cyber-cyan" />
                      <span className="text-white">{point.cmd}</span>
                    </div>
                    <div className="pl-6">
                      <p className="text-cyber-cyan font-bold mb-1 tracking-tight">{point.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{point.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2">
                <span className="w-2 h-4 bg-cyber-blue animate-blink" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
