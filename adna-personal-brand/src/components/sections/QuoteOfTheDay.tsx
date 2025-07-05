'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Quote } from 'lucide-react'

const adnaQuotes = [
  "Innovation is not about having the right idea, but executing it with passion.",
  "Every line of code tells a story, make yours worth reading.",
  "Design is not just what it looks like, it's how it works and feels.",
  "The best digital experiences are invisible until they become unforgettable.",
  "Technology should amplify human potential, not replace human connection.",
  "Create with purpose, build with heart, deliver with excellence.",
  "In a world of templates, dare to be original.",
  "The intersection of creativity and technology is where magic happens."
]

export function QuoteOfTheDay() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    setCurrentQuote(Math.floor(Math.random() * adnaQuotes.length))
  }, [])

  const getNewQuote = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * adnaQuotes.length)
    } while (newIndex === currentQuote)
    setCurrentQuote(newIndex)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Quote className="w-12 h-12 mx-auto text-primary mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
              "{adnaQuotes[currentQuote]}"
            </blockquote>
            <cite className="text-muted-foreground font-medium">
              — Adna Fika Agestifanka
            </cite>
          </motion.div>

          <motion.button
            onClick={getNewQuote}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
            New Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}