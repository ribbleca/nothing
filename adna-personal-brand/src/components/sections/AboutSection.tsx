'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            I'm a passionate digital storyteller who believes in the power of technology 
            to create meaningful human connections. With a deep love for both design and 
            development, I craft experiences that not only look beautiful but feel intuitive 
            and purposeful.
          </p>
          <p className="text-lg text-muted-foreground">
            Every project is an opportunity to push boundaries, learn something new, 
            and make a positive impact in the digital world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}