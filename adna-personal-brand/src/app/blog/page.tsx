import React from 'react'
import { Metadata } from 'next'
import { BlogListingClient } from '@/components/blog/BlogListingClient'

export const metadata: Metadata = {
  title: 'Blog - Adna Fika Agestifanka',
  description: 'Insights, tutorials, and thoughts on web development, design, and technology by Adna Fika Agestifanka.',
  keywords: ['blog', 'web development', 'React', 'Next.js', 'tutorials', 'Adna Fika Agestifanka'],
  openGraph: {
    title: 'Blog - Adna Fika Agestifanka',
    description: 'Insights, tutorials, and thoughts on web development, design, and technology.',
    type: 'website',
    url: '/blog',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      <BlogListingClient />
    </div>
  )
}