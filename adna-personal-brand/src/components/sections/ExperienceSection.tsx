'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section text-center mb-16 gradient-text"
        >
          Experience
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground">
            My journey in creating exceptional digital experiences spans across 
            various industries and technologies, always with a focus on innovation 
            and user-centered design.
          </p>
        </motion.div>
      </div>
    </section>
  )
}