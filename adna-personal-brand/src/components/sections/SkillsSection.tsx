'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section text-center mb-16 gradient-text"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit of modern technologies and methodologies 
            that enable me to bring creative visions to life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}