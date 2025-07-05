import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import React from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Adna Fika Agestifanka - Digital Storyteller & Creative Developer',
    template: '%s | Adna Fika Agestifanka'
  },
  description: 'Digital Storyteller & Creative Developer specialized in building impactful digital experiences. Explore my journey in creating innovative web solutions that bridge creativity and technology.',
  keywords: [
    'Adna Fika Agestifanka',
    'Digital Storyteller',
    'Creative Developer',
    'Web Developer',
    'Frontend Developer',
    'UI/UX Designer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Indonesian Developer',
    'Creative Technologist'
  ],
  authors: [{ name: 'Adna Fika Agestifanka' }],
  creator: 'Adna Fika Agestifanka',
  publisher: 'Adna Fika Agestifanka',
  applicationName: 'Adna Personal Brand',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'Technology',
  classification: 'Personal Portfolio',
  
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://adna-personal-brand.vercel.app'),
  
  alternates: {
    canonical: '/',
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Adna Fika Agestifanka - Digital Storyteller & Creative Developer',
    description: 'Digital Storyteller & Creative Developer specialized in building impactful digital experiences. Explore my journey in creating innovative web solutions.',
    siteName: 'Adna Fika Agestifanka',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adna Fika Agestifanka - Digital Storyteller & Creative Developer',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Adna Fika Agestifanka - Digital Storyteller & Creative Developer',
    description: 'Digital Storyteller & Creative Developer specialized in building impactful digital experiences.',
    images: ['/images/og-image.jpg'],
    creator: '@adnafika', // Replace with actual Twitter handle
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  manifest: '/manifest.json',
  
  other: {
    'msapplication-TileColor': '#6366f1',
    'theme-color': '#6366f1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <ScrollProgress />
            <Navbar />
            
            <main className="flex-1">
              {children}
            </main>
            
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}