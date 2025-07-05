'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Star, Calendar, Users, Clock } from 'lucide-react'
import { projects } from '@/data/portfolio'
import Link from 'next/link'

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
  { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'design', name: 'Design', count: projects.filter(p => p.category === 'design').length },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-section gradient-text mb-6">
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            A showcase of projects that demonstrate my passion for creating 
            innovative digital solutions that make a real impact.
          </motion.p>
        </motion.div>

        {/* Featured Projects Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-adna-gold fill-current" />
            <h3 className="text-xl font-semibold">Featured Work</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <FeaturedProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background hover:bg-accent text-foreground'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>

          <div className="flex gap-2">
            <motion.button
              onClick={() => setViewMode('grid')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent'
              }`}
            >
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-background hover:bg-accent'
              }`}
            >
              <div className="w-4 h-4 flex flex-col gap-0.5">
                <div className="bg-current h-0.5 rounded-sm"></div>
                <div className="bg-current h-0.5 rounded-sm"></div>
                <div className="bg-current h-0.5 rounded-sm"></div>
                <div className="bg-current h-0.5 rounded-sm"></div>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 gap-8'
                : 'flex flex-col gap-6'
            }
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <ProjectCard project={project} viewMode={viewMode} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-2xl bg-card border shadow-lg hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Featured Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-adna-gold text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      </div>

      {/* Project Image */}
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="w-full h-full flex items-center justify-center text-6xl opacity-50">
          {project.technologies[0] === 'Next.js' ? '▲' : 
           project.technologies[0] === 'React' ? '⚛️' : 
           project.technologies[0] === 'React Native' ? '📱' : '🚀'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Quick Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {project.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {project.team}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-center text-sm py-2"
            >
              <ExternalLink className="w-4 h-4 inline mr-1" />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 text-center text-sm py-2"
            >
              <Github className="w-4 h-4 inline mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, viewMode }: { project: any, viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300"
      >
        <div className="md:w-64 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
          <div className="w-full h-full flex items-center justify-center text-4xl opacity-50">
            {project.technologies[0] === 'Next.js' ? '▲' : 
             project.technologies[0] === 'React' ? '⚛️' : 
             project.technologies[0] === 'React Native' ? '📱' : '🚀'}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>

          <p className="text-muted-foreground mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-4"
              >
                <ExternalLink className="w-4 h-4 inline mr-1" />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2 px-4"
              >
                <Github className="w-4 h-4 inline mr-1" />
                Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-xl bg-card border shadow-lg hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="w-full h-full flex items-center justify-center text-6xl opacity-50">
          {project.technologies[0] === 'Next.js' ? '▲' : 
           project.technologies[0] === 'React' ? '⚛️' : 
           project.technologies[0] === 'React Native' ? '📱' : '🚀'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-center text-sm py-2"
            >
              <ExternalLink className="w-4 h-4 inline mr-1" />
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 text-center text-sm py-2"
            >
              <Github className="w-4 h-4 inline mr-1" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}