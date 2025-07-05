'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, Users, FileText, Calendar, Settings, 
  TrendingUp, Eye, Heart, MessageSquare, Star,
  Plus, Edit, Trash2, Download, RefreshCw,
  Clock, CheckCircle, XCircle, AlertCircle
} from 'lucide-react'

// Sample analytics data
const analyticsData = {
  overview: {
    totalViews: 15420,
    uniqueVisitors: 8730,
    blogViews: 5680,
    projectViews: 4120,
    contactRequests: 156,
    bookingRequests: 89
  },
  recentActivity: [
    { id: 1, type: 'blog_view', title: 'React TypeScript Guide', time: '2 minutes ago', count: 1 },
    { id: 2, type: 'contact', title: 'New Contact Form Submission', time: '15 minutes ago', count: 1 },
    { id: 3, type: 'booking', title: 'Consultation Booking Request', time: '1 hour ago', count: 1 },
    { id: 4, type: 'project_view', title: 'EcoMart Project View', time: '2 hours ago', count: 5 },
    { id: 5, type: 'blog_like', title: 'Next.js Guide Liked', time: '3 hours ago', count: 3 }
  ],
  topContent: [
    { title: 'Building Scalable React Applications', views: 2456, likes: 189, type: 'blog' },
    { title: 'EcoMart E-commerce Platform', views: 1876, likes: 234, type: 'project' },
    { title: 'Next.js 14 Complete Guide', views: 2108, likes: 156, type: 'blog' },
    { title: 'SmartCity Dashboard', views: 1654, likes: 178, type: 'project' }
  ]
}

const bookings = [
  {
    id: 1,
    clientName: 'Sarah Johnson',
    email: 'sarah@techcorp.com',
    service: 'Frontend Development',
    date: '2023-12-15',
    time: '10:00 AM',
    status: 'confirmed',
    message: 'Need help with React performance optimization',
    budget: '$5000'
  },
  {
    id: 2,
    clientName: 'Michael Chen',
    email: 'michael@startup.io',
    service: 'Full-Stack Development',
    date: '2023-12-18',
    time: '2:00 PM',
    status: 'pending',
    message: 'Looking to build a new e-commerce platform',
    budget: '$10000+'
  },
  {
    id: 3,
    clientName: 'Emma Wilson',
    email: 'emma@design.co',
    service: 'UI/UX Consultation',
    date: '2023-12-20',
    time: '11:00 AM',
    status: 'pending',
    message: 'Need UX audit for our mobile app',
    budget: '$2000'
  }
]

const tabs = [
  { id: 'overview', name: 'Overview', icon: BarChart3 },
  { id: 'analytics', name: 'Analytics', icon: TrendingUp },
  { id: 'content', name: 'Content', icon: FileText },
  { id: 'bookings', name: 'Bookings', icon: Calendar },
  { id: 'settings', name: 'Settings', icon: Settings },
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold gradient-text mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your portfolio, track analytics, and handle client interactions
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8 border-b"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-3 rounded-t-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-card text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && <OverviewTab data={analyticsData} />}
            {activeTab === 'analytics' && <AnalyticsTab data={analyticsData} />}
            {activeTab === 'content' && <ContentTab />}
            {activeTab === 'bookings' && <BookingsTab bookings={bookings} />}
            {activeTab === 'settings' && <SettingsTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function OverviewTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Total Views"
          value={data.overview.totalViews.toLocaleString()}
          icon={Eye}
          trend="+12%"
          color="text-blue-500"
        />
        <StatsCard
          title="Unique Visitors"
          value={data.overview.uniqueVisitors.toLocaleString()}
          icon={Users}
          trend="+8%"
          color="text-green-500"
        />
        <StatsCard
          title="Contact Requests"
          value={data.overview.contactRequests}
          icon={MessageSquare}
          trend="+24%"
          color="text-purple-500"
        />
        <StatsCard
          title="Blog Views"
          value={data.overview.blogViews.toLocaleString()}
          icon={FileText}
          trend="+15%"
          color="text-orange-500"
        />
        <StatsCard
          title="Project Views"
          value={data.overview.projectViews.toLocaleString()}
          icon={Star}
          trend="+18%"
          color="text-pink-500"
        />
        <StatsCard
          title="Booking Requests"
          value={data.overview.bookingRequests}
          icon={Calendar}
          trend="+32%"
          color="text-cyan-500"
        />
      </div>

      {/* Recent Activity & Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivity activities={data.recentActivity} />
        <TopContent content={data.topContent} />
      </div>
    </div>
  )
}

function AnalyticsTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div className="bg-card p-6 rounded-xl border">
        <h3 className="text-xl font-semibold mb-4">Traffic Analytics</h3>
        <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Analytics Chart Placeholder</p>
            <p className="text-sm text-muted-foreground">Integrate with Google Analytics or custom analytics</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-xl border">
          <h4 className="font-semibold mb-4">Top Referrers</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Google</span>
              <span className="text-muted-foreground">45%</span>
            </div>
            <div className="flex justify-between">
              <span>Direct</span>
              <span className="text-muted-foreground">25%</span>
            </div>
            <div className="flex justify-between">
              <span>LinkedIn</span>
              <span className="text-muted-foreground">15%</span>
            </div>
            <div className="flex justify-between">
              <span>GitHub</span>
              <span className="text-muted-foreground">10%</span>
            </div>
            <div className="flex justify-between">
              <span>Other</span>
              <span className="text-muted-foreground">5%</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border">
          <h4 className="font-semibold mb-4">Device Breakdown</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Desktop</span>
              <span className="text-muted-foreground">60%</span>
            </div>
            <div className="flex justify-between">
              <span>Mobile</span>
              <span className="text-muted-foreground">35%</span>
            </div>
            <div className="flex justify-between">
              <span>Tablet</span>
              <span className="text-muted-foreground">5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Content Management</h3>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Post
        </button>
      </div>

      <div className="bg-card rounded-xl border overflow-hidden">
        <div className="p-6 border-b">
          <h4 className="font-semibold">Recent Blog Posts</h4>
        </div>
        <div className="divide-y">
          {[
            { title: 'Building Scalable React Applications', status: 'published', date: '2023-12-01', views: 2456 },
            { title: 'Next.js 14 Complete Guide', status: 'published', date: '2023-11-28', views: 2108 },
            { title: 'Modern CSS Techniques', status: 'draft', date: '2023-11-25', views: 0 },
          ].map((post, index) => (
            <div key={index} className="p-4 flex items-center justify-between">
              <div>
                <h5 className="font-medium">{post.title}</h5>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className={`px-2 py-1 rounded text-xs ${
                    post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {post.status}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.views} views</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-accent rounded">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-accent rounded text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BookingsTab({ bookings }: { bookings: any[] }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Booking Management</h3>
        <div className="flex gap-2">
          <button className="btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button className="btn-primary">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  )
}

function SettingsTab() {
  return (
    <div className="space-y-8">
      <div className="bg-card p-6 rounded-xl border">
        <h3 className="text-xl font-semibold mb-4">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Site Name</label>
            <input
              type="text"
              defaultValue="Adna Fika Agestifanka"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contact Email</label>
            <input
              type="email"
              defaultValue="adna@example.com"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Tagline</label>
            <input
              type="text"
              defaultValue="Digital Storyteller & Creative Developer"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-xl border">
        <h3 className="text-xl font-semibold mb-4">Integrations</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Google Analytics</h4>
              <p className="text-sm text-muted-foreground">Track website analytics</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-green-600">Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Formspree</h4>
              <p className="text-sm text-muted-foreground">Contact form handling</p>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-yellow-600">Setup Required</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsCard({ title, value, icon: Icon, trend, color }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className={`w-8 h-8 ${color}`} />
        <span className="text-sm text-green-600 font-medium">{trend}</span>
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-muted-foreground text-sm">{title}</p>
    </motion.div>
  )
}

function RecentActivity({ activities }: { activities: any[] }) {
  return (
    <div className="bg-card p-6 rounded-xl border">
      <h4 className="font-semibold mb-4">Recent Activity</h4>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            <span className="text-xs bg-muted px-2 py-1 rounded">{activity.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TopContent({ content }: { content: any[] }) {
  return (
    <div className="bg-card p-6 rounded-xl border">
      <h4 className="font-semibold mb-4">Top Content</h4>
      <div className="space-y-4">
        {content.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium">{item.title}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="capitalize">{item.type}</span>
                <span>{item.views} views</span>
                <span>{item.likes} likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BookingCard({ booking }: { booking: any }) {
  const statusColor = {
    confirmed: 'text-green-600 bg-green-100',
    pending: 'text-yellow-600 bg-yellow-100',
    cancelled: 'text-red-600 bg-red-100'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-lg">{booking.clientName}</h4>
          <p className="text-muted-foreground">{booking.email}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[booking.status]}`}>
          {booking.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-muted-foreground">Service</p>
          <p className="font-medium">{booking.service}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Date & Time</p>
          <p className="font-medium">{booking.date} at {booking.time}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Budget</p>
          <p className="font-medium">{booking.budget}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-2">Message</p>
        <p className="text-sm bg-muted p-3 rounded-lg">{booking.message}</p>
      </div>

      <div className="flex gap-2">
        <button className="btn-primary text-sm py-2 px-4">
          <CheckCircle className="w-4 h-4 mr-2" />
          Approve
        </button>
        <button className="btn-secondary text-sm py-2 px-4">
          <MessageSquare className="w-4 h-4 mr-2" />
          Message
        </button>
        <button className="btn-ghost text-sm py-2 px-4 text-red-600">
          <XCircle className="w-4 h-4 mr-2" />
          Decline
        </button>
      </div>
    </motion.div>
  )
}