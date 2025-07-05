import React from 'react'
import { Metadata } from 'next'
import { AdminDashboard } from '@/components/admin/AdminDashboard'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Adna Fika Agestifanka',
  description: 'Administrative dashboard for managing portfolio content, analytics, and user interactions.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return (
    <div className="min-h-screen pt-16 bg-muted/30">
      <AdminDashboard />
    </div>
  )
}