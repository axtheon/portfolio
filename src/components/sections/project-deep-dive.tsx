"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, Cpu, Database, Network } from "lucide-react"

interface ProjectDeepDiveProps {
  isOpen: boolean
  onClose: () => void
  project: {
    name: string
    description: string
    tags: string[]
    url: string
  }
}

export default function ProjectDeepDive({ isOpen, onClose, project }: ProjectDeepDiveProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[100]"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed left-[5%] right-[5%] top-[5%] bottom-[5%] md:left-[10%] md:right-[10%] md:top-[10%] md:bottom-[10%] bg-off-white z-[101] shadow-2xl overflow-y-auto p-8 md:p-16 border border-charcoal/5"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <Dialog.Title className="text-4xl md:text-5xl font-light tracking-tight text-charcoal mb-4">
                        {project.name}
                      </Dialog.Title>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono text-charcoal/60 bg-white border border-charcoal/5 px-2 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Dialog.Close asChild>
                      <button className="text-warm-grey hover:text-charcoal transition-colors p-2">
                        <X size={32} strokeWidth={1} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="grid md:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                      <section>
                        <h3 className="text-sm font-mono font-bold tracking-widest text-warm-grey uppercase mb-6">Overview</h3>
                        <p className="text-lg leading-relaxed text-charcoal/80">
                          {project.description}
                        </p>
                      </section>

                      {project.name === "MoodCutter Community" && (
                        <section>
                          <h3 className="text-sm font-mono font-bold tracking-widest text-warm-grey uppercase mb-6">Technical Architecture</h3>
                          <div className="space-y-8">
                            <div className="flex gap-4">
                              <div className="mt-1 text-sage"><Cpu size={24} /></div>
                              <div>
                                <h4 className="font-medium text-charcoal mb-2">Audio Processing Pipeline</h4>
                                <p className="text-sm text-warm-grey leading-relaxed">
                                  Uses <strong>WhisperX</strong> for precise word-level timestamps and <strong>librosa</strong> for RMS energy analysis. By correlating speech volume with emotional keywords, we can pinpoint moments of high intensity.
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="mt-1 text-sage"><Network size={24} /></div>
                              <div>
                                <h4 className="font-medium text-charcoal mb-2">Sentiment Modeling</h4>
                                <p className="text-sm text-warm-grey leading-relaxed">
                                  Leverages <strong>RoBERTa</strong> fine-tuned on emotion datasets to classify speech segments. This allows the system to distinguish between "excited happy" and "excited angry" based on context.
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="mt-1 text-sage"><Database size={24} /></div>
                              <div>
                                <h4 className="font-medium text-charcoal mb-2">Data Flow</h4>
                                <p className="text-sm text-warm-grey leading-relaxed">
                                  Video is stripped of audio &rarr; Audio is transcribed and analyzed for pitch/volume &rarr; Metadata is synced back to video timestamps for automated clipping.
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>
                      )}

                      {project.name === "MoodCutter POC" && (
                        <section>
                          <h3 className="text-sm font-mono font-bold tracking-widest text-warm-grey uppercase mb-6">Technical Implementation</h3>
                          <div className="space-y-8">
                            <div className="flex gap-4">
                              <div className="mt-1 text-sage"><Cpu size={24} /></div>
                              <div>
                                <h4 className="font-medium text-charcoal mb-2">Acoustic Analysis</h4>
                                <p className="text-sm text-warm-grey leading-relaxed">
                                  Utilizes <strong>librosa</strong> to extract Root Mean Square (RMS) energy from audio signals. This provides a mathematical representation of audio "loudness" and intensity over time.
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="mt-1 text-sage"><Network size={24} /></div>
                              <div>
                                <h4 className="font-medium text-charcoal mb-2">Visualization</h4>
                                <p className="text-sm text-warm-grey leading-relaxed">
                                  Employs <strong>matplotlib</strong> to generate visual waveform representations and energy plots, allowing for empirical validation of the intensity detection algorithm.
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>
                      )}

                      {project.name === "Python Projects" && (
                        <section>
                          <h3 className="text-sm font-mono font-bold tracking-widest text-warm-grey uppercase mb-6">Technical Focus</h3>
                          <p className="text-lg leading-relaxed text-charcoal/80">
                            A foundational collection of Python implementations focusing on core programming paradigms. Projects include custom GUI calculators, real-time clocks, and unit converters designed to master object-oriented programming, state management, and functional logic.
                          </p>
                        </section>
                      )}

                      {project.name === "Caesar Cipher" && (
                        <section>
                          <h3 className="text-sm font-mono font-bold tracking-widest text-warm-grey uppercase mb-6">Implementation Details</h3>
                          <p className="text-lg leading-relaxed text-charcoal/80">
                            A Python-based implementation of classic substitution cryptography. Focuses on string manipulation, character encoding (ASCII/Unicode), and modular arithmetic to perform secure encryption and decryption.
                          </p>
                        </section>
                      )}

                      {project.name === "Sorting Algorithms Visualizer" && (
                        <section>
                          <h3 className="text-sm font-mono font-bold tracking-widest text-warm-grey uppercase mb-6">Algorithm Analysis</h3>
                          <p className="text-lg leading-relaxed text-charcoal/80">
                            An educational tool built to visualize the spatial and temporal complexity of sorting algorithms. Provides step by step animated execution of Bubble Sort, Merge Sort, and Quick Sort, highlighting how memory is managed and how comparison logic scales with data size.
                          </p>
                        </section>
                      )}

                      {!project.name.includes("MoodCutter") && 
                       !["Python Projects", "Caesar Cipher", "Sorting Algorithms Visualizer"].includes(project.name) && (
                        <section>
                          <h3 className="text-sm font-mono font-bold tracking-widest text-warm-grey uppercase mb-6">Project Context</h3>
                          <p className="text-lg leading-relaxed text-charcoal/80">
                            A focused technical implementation exploring specific areas of systems-level understanding and clean execution. Built to prioritize depth and fundamental programming concepts.
                          </p>
                        </section>
                      )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-12">
                      <div className="bg-white p-8 border border-charcoal/5 shadow-sm">
                        <h3 className="text-[10px] font-mono font-bold tracking-widest text-warm-grey uppercase mb-6">Project Links</h3>
                        <div className="space-y-4">
                          <a 
                            href={project.url} 
                            target="_blank" 
                            className="flex items-center gap-3 text-charcoal hover:text-sage transition-colors text-sm"
                          >
                            <Github size={18} /> Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
