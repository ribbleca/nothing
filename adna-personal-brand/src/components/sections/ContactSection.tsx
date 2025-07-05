'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section text-center mb-16 gradient-text"
        >
          Let's Connect
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Ready to bring your digital vision to life? Let's start a conversation 
            about how we can create something amazing together.
          </p>
          
          <motion.a
            href="mailto:adna@example.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}