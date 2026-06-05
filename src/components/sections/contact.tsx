"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://abdullahkhanportfoliobackend.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setStatus("success")
        setFormState({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-light tracking-tight text-charcoal uppercase mb-4">Get in Touch</h2>
          <p className="text-warm-grey">Open to collaborations, conversations, and opportunities.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-charcoal/5 p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] font-mono font-bold text-warm-grey uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-off-white border-b border-charcoal/10 px-0 py-3 text-charcoal focus:outline-none focus:border-sage transition-all"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-mono font-bold text-warm-grey uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-off-white border-b border-charcoal/10 px-0 py-3 text-charcoal focus:outline-none focus:border-sage transition-all"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-mono font-bold text-warm-grey uppercase tracking-widest">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-off-white border-b border-charcoal/10 px-0 py-3 text-charcoal focus:outline-none focus:border-sage transition-all resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading"}
              className={`w-full py-4 bg-sage text-white font-medium uppercase tracking-widest transition-all hover:bg-sage/90 flex items-center justify-center gap-2 ${
                status === "success" ? "bg-green-600" : ""
              }`}
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully" : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-center text-xs text-red-500 font-mono">
                Error sending message. Please try again.
              </p>
            )}
          </form>
        </motion.div>

        {/* Social Links below form */}
        <div className="mt-16 flex justify-center gap-4 text-[10px] font-mono text-warm-grey uppercase tracking-widest">
          <a href="https://github.com/axtheon" target="_blank" className="hover:text-charcoal transition-colors">GitHub</a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/abdullah-khan-axtheon" target="_blank" className="hover:text-charcoal transition-colors">LinkedIn</a>
          <span>·</span>
          <a href="https://x.com/axtheon_" target="_blank" className="hover:text-charcoal transition-colors">Twitter/X</a>
          <span>·</span>
          <a href="mailto:abdullah.dev4220@gmail.com" className="hover:text-charcoal transition-colors">Email</a>
        </div>
      </div>
    </section>
  )
}
