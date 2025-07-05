'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles, Download, Mail } from 'lucide-react'
import { ParticleBackground } from '@/components/ui/ParticleBackground'

const taglines = [
  "Digital Storyteller",
  "Creative Developer", 
  "Innovation Catalyst",
  "Experience Architect",
  "Tech Visionary"
]

export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background"
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Main Content */}
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to my digital universe</span>
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-hero mb-6 tracking-tight"
          >
            <span className="block">Hi, I'm</span>
            <span className="block gradient-text font-serif">
              Adna Fika Agestifanka
            </span>
          </motion.h1>

          {/* Dynamic Tagline */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTagline}
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground"
              >
                {taglines[currentTagline]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I craft exceptional digital experiences that bridge creativity and technology. 
            From concept to deployment, I build solutions that not only look stunning 
            but create meaningful connections between brands and their audiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Explore My Work</span>
              <Sparkles className="w-5 h-5 ml-2 group-hover:animate-spin" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              <span>Let's Connect</span>
            </motion.button>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-accent"
            >
              <ChevronDown className="w-6 h-6" />
              <span className="sr-only">Scroll to next section</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 md:left-20 text-6xl opacity-20"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-10 md:right-20 text-4xl opacity-20"
      >
        🚀
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-10 md:left-32 text-5xl opacity-20"
      >
        💫
      </motion.div>
    </section>
  )
}