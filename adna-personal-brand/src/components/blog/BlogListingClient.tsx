'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Calendar, Clock, Tag, ArrowRight, Bookmark, Share2 } from 'lucide-react'
import Link from 'next/link'

// Sample blog data - in real app, this would come from CMS/API
const blogPosts = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large-scale React applications using TypeScript, best practices for component architecture, and performance optimization techniques.',
    content: 'Full content here...',
    author: 'Adna Fika Agestifanka',
    publishedAt: '2023-12-01',
    tags: ['React', 'TypeScript', 'Architecture'],
    featuredImage: '/images/blog/react-typescript.jpg',
    readTime: 8,
    category: 'react',
    views: 1542,
    likes: 89
  },
  {
    id: '2',
    title: 'Next.js 14 App Router: Complete Guide',
    excerpt: 'Comprehensive guide to Next.js 14 App Router, covering server components, routing, data fetching, and optimization strategies.',
    content: 'Full content here...',
    author: 'Adna Fika Agestifanka',
    publishedAt: '2023-11-28',
    tags: ['Next.js', 'React', 'Performance'],
    featuredImage: '/images/blog/nextjs-14.jpg',
    readTime: 12,
    category: 'next-js',
    views: 2108,
    likes: 156
  },
  {
    id: '3',
    title: 'Modern CSS Techniques for Better UX',
    excerpt: 'Explore advanced CSS features like container queries, CSS Grid subgrid, and modern layout techniques for creating better user experiences.',
    content: 'Full content here...',
    author: 'Adna Fika Agestifanka',
    publishedAt: '2023-11-25',
    tags: ['CSS', 'UI/UX', 'Web Design'],
    featuredImage: '/images/blog/modern-css.jpg',
    readTime: 6,
    category: 'ui-ux',
    views: 987,
    likes: 73
  },
  {
    id: '4',
    title: 'Career Growth as a Frontend Developer',
    excerpt: 'Practical advice for frontend developers looking to advance their careers, build better portfolios, and land senior positions.',
    content: 'Full content here...',
    author: 'Adna Fika Agestifanka',
    publishedAt: '2023-11-20',
    tags: ['Career', 'Frontend', 'Professional Growth'],
    featuredImage: '/images/blog/career-growth.jpg',
    readTime: 10,
    category: 'career',
    views: 1876,
    likes: 234
  },
  {
    id: '5',
    title: 'The Art of Component Composition in React',
    excerpt: 'Master the patterns of component composition in React to build more maintainable and reusable UI components.',
    content: 'Full content here...',
    author: 'Adna Fika Agestifanka',
    publishedAt: '2023-11-15',
    tags: ['React', 'Components', 'Architecture'],
    featuredImage: '/images/blog/component-composition.jpg',
    readTime: 7,
    category: 'react',
    views: 1345,
    likes: 98
  },
  {
    id: '6',
    title: 'Performance Optimization Techniques for Web Apps',
    excerpt: 'Comprehensive guide to optimizing web application performance, from bundle size reduction to runtime optimizations.',
    content: 'Full content here...',
    author: 'Adna Fika Agestifanka',
    publishedAt: '2023-11-10',
    tags: ['Performance', 'Optimization', 'Web Development'],
    featuredImage: '/images/blog/performance-optimization.jpg',
    readTime: 15,
    category: 'web-development',
    views: 2456,
    likes: 189
  }
]

const categories = [
  { id: 'all', name: 'All Posts', count: blogPosts.length, color: 'bg-primary' },
  { id: 'react', name: 'React', count: blogPosts.filter(p => p.category === 'react').length, color: 'bg-blue-500' },
  { id: 'next-js', name: 'Next.js', count: blogPosts.filter(p => p.category === 'next-js').length, color: 'bg-black' },
  { id: 'ui-ux', name: 'UI/UX', count: blogPosts.filter(p => p.category === 'ui-ux').length, color: 'bg-purple-500' },
  { id: 'career', name: 'Career', count: blogPosts.filter(p => p.category === 'career').length, color: 'bg-green-500' },
  { id: 'web-development', name: 'Web Dev', count: blogPosts.filter(p => p.category === 'web-development').length, color: 'bg-orange-500' },
]

export function BlogListingClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'readTime'>('date')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return b.views - a.views
        case 'readTime':
          return a.readTime - b.readTime
        case 'date':
        default:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-hero gradient-text mb-6">
            Blog & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge, insights, and experiences in web development, 
            design, and technology. Join me on this journey of continuous learning.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card hover:bg-accent text-foreground border'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'views' | 'readTime')}
                className="px-4 py-2 bg-card border rounded-lg text-sm"
              >
                <option value="date">Latest First</option>
                <option value="views">Most Popular</option>
                <option value="readTime">Quick Reads</option>
              </select>

              <div className="flex gap-2">
                <motion.button
                  onClick={() => setViewMode('grid')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-accent border'
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
                    viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-accent border'
                  }`}
                >
                  <div className="w-4 h-4 flex flex-col gap-0.5">
                    <div className="bg-current h-0.5 rounded-sm"></div>
                    <div className="bg-current h-0.5 rounded-sm"></div>
                    <div className="bg-current h-0.5 rounded-sm"></div>
                  </div>
                </motion.button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </motion.div>

        {/* Blog Posts */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${viewMode}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'flex flex-col gap-6'
            }
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogPostCard post={post} viewMode={viewMode} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles about web development, 
            design, and technology insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function BlogPostCard({ post, viewMode }: { post: any, viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <motion.article
        whileHover={{ scale: 1.02 }}
        className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300"
      >
        <div className="md:w-64 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
          <div className="w-full h-full flex items-center justify-center text-4xl opacity-50">
            📝
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
            <div className="flex items-center gap-1">
              <span>👁️</span>
              {post.views} views
            </div>
          </div>

          <Link href={`/blog/${post.id}`}>
            <h3 className="text-xl font-bold hover:text-primary transition-colors mb-3">
              {post.title}
            </h3>
          </Link>

          <p className="text-muted-foreground mb-4">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Link
              href={`/blog/${post.id}`}
              className="btn-primary text-sm py-2 px-4 inline-flex items-center gap-2"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex gap-2">
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      whileHover={{ y: -10 }}
      className="bg-card rounded-xl border overflow-hidden hover:shadow-2xl transition-all duration-500 group"
    >
      {/* Featured Image */}
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="w-full h-full flex items-center justify-center text-6xl opacity-50">
          📝
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} min
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.id}`}>
          <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-3 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>👁️ {post.views}</span>
            <span>❤️ {post.likes}</span>
          </div>

          <Link
            href={`/blog/${post.id}`}
            className="btn-primary text-sm py-2 px-4 inline-flex items-center gap-2"
          >
            Read
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}