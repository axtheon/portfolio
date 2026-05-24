"use client"

import Link from "next/link"
import { Cpu, Github, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyber-blue/10 flex items-center justify-center border border-cyber-blue/20">
              <Cpu className="w-5 h-5 text-cyber-blue" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              axtheon
            </span>
          </div>

          <div className="flex gap-8">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors font-mono"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
             {[
               { icon: <Github className="w-4 h-4" />, href: "https://github.com/axtheon" },
               { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/axtheon" },
               { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/itz.abdulla.h/" },
               { icon: <Mail className="w-4 h-4" />, href: "mailto:abdullah.dev4220@gmail.com" },
             ].map((social, i) => (
               <a 
                 key={i} 
                 href={social.href}
                 target="_blank"
                 className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-cyber-blue hover:border-cyber-blue transition-all"
               >
                 {social.icon}
               </a>
             ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            © {currentYear} Abdullah Khan. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest flex items-center gap-2">
            Built with <span className="text-cyber-blue">Next.js</span> + <span className="text-cyber-violet">Three.js</span> + <span className="text-cyber-cyan">AI</span>
          </p>
        </div>

      </div>

      {/* Animated Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue via-cyber-violet to-cyber-cyan opacity-50 overflow-hidden">
         <div className="absolute inset-0 bg-white/20 animate-scanline" />
      </div>
    </footer>
  )
}
