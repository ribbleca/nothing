'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section text-center mb-16 gradient-text"
        >
          What People Say
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground">
            Kind words from clients and collaborators who have experienced 
            the impact of exceptional digital craftsmanship.
          </p>
        </motion.div>
      </div>
    </section>
  )
}