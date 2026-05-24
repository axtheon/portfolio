"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-cyber-dark flex items-center justify-center font-mono"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-px bg-cyber-blue mb-4"
            />
            <div className="flex items-center gap-2 text-cyber-blue text-sm uppercase tracking-[0.5em] font-bold">
              <span>Initializing</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 text-[10px] text-gray-600 uppercase tracking-widest"
            >
              Systems Ready
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
