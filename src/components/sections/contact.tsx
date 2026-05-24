"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, Github, Linkedin, Instagram, Twitter } from "lucide-react"

const contactLinks = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "abdullah.dev4220@gmail.com", href: "mailto:abdullah.dev4220@gmail.com" },
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+92 3246016727", href: "tel:+923246016727" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "axtheon", href: "https://www.linkedin.com/in/axtheon" },
]

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
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          <div>
            <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 mb-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-mono">07. Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              LET&apos;S BUILD THE <br />
              <span className="text-cyber-blue">FUTURE TOGETHER</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Open for research collaborations, internships, and open-source projects. Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              {contactLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyber-blue/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-cyber-blue transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{link.label}</p>
                    <p className="text-sm font-medium text-white">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
               {[
                 { icon: <Github />, href: "https://github.com/axtheon" },
                 { icon: <Instagram />, href: "https://www.instagram.com/itz.abdulla.h/" },
                 { icon: <Twitter />, href: "https://x.com/axtheon_" },
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href}
                   target="_blank"
                   className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyber-blue hover:border-cyber-blue transition-all"
                 >
                   {social.icon}
                 </a>
               ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyber-blue focus:bg-cyber-blue/5 transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyber-blue focus:bg-cyber-blue/5 transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyber-blue focus:bg-cyber-blue/5 transition-all resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button 
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-widest transition-all ${
                  status === "success" 
                  ? "bg-green-500 text-white" 
                  : "bg-cyber-blue text-cyber-dark hover:scale-[1.02] shadow-[0_0_20px_rgba(0,212,170,0.2)]"
                }`}
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-cyber-dark/30 border-t-cyber-dark rounded-full animate-spin" />
                ) : status === "success" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Transmit Data
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-center text-xs text-red-400 font-bold uppercase tracking-tighter animate-pulse">
                  Transmission Failed. Please try again.
                </p>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
