import React from 'react'
import { Metadata } from 'next'
import { BookingSystem } from '@/components/booking/BookingSystem'

export const metadata: Metadata = {
  title: 'Book a Consultation - Adna Fika Agestifanka',
  description: 'Schedule a consultation with Adna for your next web development project. Choose from various services including frontend development, full-stack solutions, and UI/UX consultation.',
  keywords: ['consultation', 'booking', 'web development', 'frontend', 'React', 'Next.js', 'Adna Fika Agestifanka'],
  openGraph: {
    title: 'Book a Consultation - Adna Fika Agestifanka',
    description: 'Schedule a consultation for your next web development project.',
    type: 'website',
    url: '/booking',
  },
}

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-16">
      <BookingSystem />
    </div>
  )
}