"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Command, Info } from "lucide-react"

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const isInput = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement
      if (isInput) return

      if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setIsOpen((prev) => !prev)
      } else if (e.key === "Escape") {
        setIsOpen(false)
      } else if (e.key === "g" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        window.open("https://github.com/axtheon", "_blank", "noopener,noreferrer")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {/* Help Trigger Indicator (visible only on hover or for a few seconds) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        whileHover={{ opacity: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 backdrop-blur-md hidden md:flex items-center gap-2 hover:border-cyber-blue transition-all group"
      >
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest hidden group-hover:block animate-fade-up">Press ? for help</span>
        <Info className="w-5 h-5 group-hover:text-cyber-blue transition-colors" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-cyber-dark/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass p-8 rounded-3xl border-cyber-blue/20 shadow-2xl overflow-hidden"
            >
              {/* Animated Scanline */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyber-blue/30 animate-scanline pointer-events-none" />

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyber-blue/10 text-cyber-blue">
                    <Command className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Command Center</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between group">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Toggle Help</span>
                    <span className="text-[10px] text-gray-500 font-mono">View keyboard shortcuts</span>
                  </div>
                  <kbd className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyber-blue font-mono font-bold text-sm shadow-[0_2px_0_rgba(255,255,255,0.05)]">?</kbd>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Close Modal</span>
                    <span className="text-[10px] text-gray-500 font-mono">Exit current view</span>
                  </div>
                  <kbd className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyber-blue font-mono font-bold text-sm shadow-[0_2px_0_rgba(255,255,255,0.05)]">Esc</kbd>
                </div>

                <div className="flex items-center justify-between group">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">GitHub Profile</span>
                    <span className="text-[10px] text-gray-500 font-mono">Navigate to open source</span>
                  </div>
                  <kbd className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyber-blue font-mono font-bold text-sm shadow-[0_2px_0_rgba(255,255,255,0.05)]">G</kbd>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-center gap-4">
                 <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
                   <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Operational</span>
                 </div>
              </div>

              {/* Background Decor */}
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyber-blue/5 blur-[80px] rounded-full pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
