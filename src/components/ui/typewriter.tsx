"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const words = ["AI/ML Engineer", "Python Developer", "DSA Enthusiast", "System Architect"]

export default function Typewriter() {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  // typeWriter
  useEffect(() => {
    const handleTyping = () => {
      if (subIndex === words[index].length + 1 && !reverse) {
        setReverse(true)
      } else if (subIndex === 0 && reverse) {
        setReverse(false)
        setIndex((prev) => (prev + 1) % words.length)
      } else {
        setSubIndex((prev) => prev + (reverse ? -1 : 1))
      }
    }

    const timeout = setTimeout(
      handleTyping,
      Math.max(
        reverse ? 75 : subIndex === words[index].length ? 1000 : 150,
        Math.floor(Math.random() * 100)
      )
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  return (
    <div className="flex items-center gap-1 min-h-[1.5em]">
      <span className="text-xl md:text-2xl text-cyber-blue font-mono font-bold tracking-tighter">
        {words[index].substring(0, subIndex)}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="w-1 h-6 md:h-8 bg-cyber-blue"
      />
    </div>
  )
}
