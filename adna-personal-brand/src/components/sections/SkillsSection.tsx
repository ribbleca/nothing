'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { Filter, TrendingUp, Code, Palette, Settings, Heart } from 'lucide-react'

const skillCategories = [
  { id: 'all', name: 'All Skills', icon: TrendingUp, color: 'text-primary' },
  { id: 'frontend', name: 'Frontend', icon: Code, color: 'text-blue-500' },
  { id: 'backend', name: 'Backend', icon: Settings, color: 'text-green-500' },
  { id: 'design', name: 'Design', icon: Palette, color: 'text-purple-500' },
  { id: 'tools', name: 'Tools', icon: Settings, color: 'text-orange-500' },
  { id: 'soft', name: 'Soft Skills', icon: Heart, color: 'text-pink-500' },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'progress' | 'grid'>('progress')

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category)
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-section gradient-text mb-6">
            Skills & Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            A comprehensive toolkit of modern technologies and methodologies 
            that enable me to bring creative visions to life.
          </motion.p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
        >
          {skillCategories.slice(1).map((category, index) => {
            const categorySkills = getSkillsByCategory(category.id)
            const averageLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300"
              >
                <category.icon className={`w-8 h-8 mx-auto mb-3 ${category.color}`} />
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {Math.round(averageLevel)}%
                </div>
                <div className="text-sm text-muted-foreground">
                  {categorySkills.length} skills
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background hover:bg-accent text-foreground border'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>

          <div className="flex gap-2">
            <motion.button
              onClick={() => setViewMode('progress')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'progress' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent border'
              }`}
            >
              Progress View
            </motion.button>
            <motion.button
              onClick={() => setViewMode('grid')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent border'
              }`}
            >
              Grid View
            </motion.button>
          </div>
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {viewMode === 'progress' ? (
              <ProgressView skills={filteredSkills} />
            ) : (
              <GridView skills={filteredSkills} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly learning new tools, 
              frameworks, and methodologies to stay at the forefront of web development 
              and deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProgressView({ skills }: { skills: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="group"
        >
          <SkillProgressBar skill={skill} />
        </motion.div>
      ))}
    </div>
  )
}

function GridView({ skills }: { skills: any[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className="group"
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </div>
  )
}

function SkillProgressBar({ skill }: { skill: any }) {
  return (
    <div className="p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground capitalize">
              {skill.category}
            </p>
          </div>
        </div>
        <div className="text-lg font-bold gradient-text">
          {skill.level}%
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SkillCard({ skill }: { skill: any }) {
  const getSkillColor = (level: number) => {
    if (level >= 90) return 'border-green-500 bg-green-500/10 text-green-600'
    if (level >= 80) return 'border-blue-500 bg-blue-500/10 text-blue-600'
    if (level >= 70) return 'border-yellow-500 bg-yellow-500/10 text-yellow-600'
    return 'border-orange-500 bg-orange-500/10 text-orange-600'
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className={`p-4 rounded-xl border-2 transition-all duration-300 text-center hover:shadow-lg ${getSkillColor(skill.level)}`}
    >
      <div className="text-3xl mb-2">{skill.icon}</div>
      <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
      <div className="text-xs opacity-80 mb-2 capitalize">{skill.category}</div>
      <div className="font-bold text-lg">{skill.level}%</div>
      
      {/* Skill level indicator */}
      <div className="mt-2 flex justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
              i < Math.floor(skill.level / 20) ? 'bg-current' : 'bg-current/20'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}