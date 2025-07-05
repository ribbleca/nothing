# 🌟 Adna Fika Agestifanka - Personal Brand Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-ff0054)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com/)

> **A spectacular personal brand website that serves as a digital signature for Adna Fika Agestifanka - Digital Storyteller & Creative Developer**

![Website Preview](public/images/og-image.jpg)

## ✨ Features

### 🎨 **Spectacular Visual Design**
- **Particle Background Effects** - Interactive animated particles with connection lines
- **Glassmorphism UI** - Modern glass-like surfaces with backdrop blur
- **Gradient Animations** - Dynamic color transitions and text effects
- **Custom Animations** - Smooth Framer Motion animations throughout
- **Dark/Light/System Theme** - Complete theme switching with smooth transitions

### 🚀 **Performance Optimized**
- **Lighthouse Score 90+** - Optimized for performance, accessibility, and SEO
- **Next.js 14 App Router** - Latest Next.js features with optimal loading
- **Image Optimization** - WebP/AVIF format support with responsive images
- **Bundle Optimization** - Code splitting and dynamic imports
- **Progressive Web App** - PWA features with manifest and service worker

### 📱 **User Experience**
- **Fully Responsive** - Perfect on all devices from mobile to desktop
- **Smooth Scrolling** - Buttery smooth scroll animations
- **Interactive Elements** - Hover effects, micro-interactions, and gestures
- **Accessible** - WCAG compliant with proper ARIA labels
- **Fast Loading** - Optimized fonts, images, and assets

### 🎯 **Unique Features**
- **Quote of the Day** - Random inspirational quotes from Adna
- **Dynamic Taglines** - Rotating professional titles with 3D effects
- **Particle Connections** - Interactive particle network background
- **Scroll Progress** - Visual progress indicator
- **Theme Persistence** - Remembers user theme preference
- **Smooth Animations** - Every interaction is carefully animated

## 🛠️ **Tech Stack**

### **Core Framework**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - Latest React features

### **Styling & Animation**
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Custom CSS** - Advanced animations and effects
- **Google Fonts** - Inter, Playfair Display, JetBrains Mono

### **Development Tools**
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing and optimization

### **Deployment & Performance**
- **Vercel** - Zero-config deployment platform
- **next-seo** - Complete SEO optimization
- **PWA Features** - Progressive Web App capabilities

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn or pnpm

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/adna-personal-brand.git
   cd adna-personal-brand
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📦 **Project Structure**

```
adna-personal-brand/
├── public/                     # Static assets
│   ├── images/                # Images and graphics
│   │   ├── icons/                 # PWA icons
│   │   ├── favicon.ico            # Favicon
│   │   └── manifest.json          # PWA manifest
│   ├── src/
│   │   ├── app/                   # Next.js App Router
│   │   │   ├── globals.css        # Global styles
│   │   │   ├── layout.tsx         # Root layout
│   │   │   └── page.tsx          # Home page
│   │   ├── components/            # Reusable components
│   │   │   ├── layout/           # Layout components
│   │   │   ├── sections/         # Page sections
│   │   │   └── ui/               # UI components
│   │   ├── hooks/                # Custom React hooks
│   │   ├── lib/                  # Utility functions
│   │   └── types/                # TypeScript types
│   ├── tailwind.config.js        # Tailwind configuration
│   ├── next.config.js           # Next.js configuration
│   ├── tsconfig.json            # TypeScript configuration
│   └── package.json             # Dependencies
```

## 🚀 **Deploy to Vercel (FREE)**

### **Method 1: One-Click Deploy**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/adna-personal-brand)

### **Method 2: Manual Deploy**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### **Method 3: GitHub Integration**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

### **Environment Variables on Vercel**
Add these in your Vercel dashboard:
- `NEXT_PUBLIC_FORMSPREE_ID` - For contact form
- `NEXT_PUBLIC_SITE_URL` - Your domain
- `NEXT_PUBLIC_GA_ID` - Google Analytics (optional)

## 🎨 **Customization Guide**

### **Personal Information**
1. **Update content in components:**
   - `src/components/sections/HeroSection.tsx` - Hero content
   - `src/components/sections/AboutSection.tsx` - About me
   - `src/app/layout.tsx` - Meta tags and SEO

2. **Replace images:**
   - Add your photos to `public/images/`
   - Update image paths in components
   - Create/replace OG image

3. **Update social links:**
   - Edit `src/components/layout/Footer.tsx`
   - Add your social media URLs

### **Styling**
1. **Colors:** Edit `tailwind.config.js` for color scheme
2. **Fonts:** Modify font imports in `src/app/layout.tsx`
3. **Animations:** Customize in `src/app/globals.css`

### **Contact Form**
1. **Sign up for Formspree:** [formspree.io](https://formspree.io)
2. **Get your form ID**
3. **Add to environment variables**

## 📊 **Performance Optimization**

### **Lighthouse Scores (Target: 90+)**
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### **Optimization Features**
- Image optimization with Next.js Image
- Font optimization with `next/font`
- Bundle analysis and code splitting
- Lazy loading for non-critical components
- Efficient CSS with Tailwind purging

## 🔧 **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

## 🐛 **Troubleshooting**

### **Common Issues**

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Dependency issues:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Type errors:**
```bash
# Check TypeScript
npm run type-check
```

### **Vercel Deployment Issues**

1. **Build Command:** `npm run build`
2. **Output Directory:** `.next`
3. **Node.js Version:** 18.x
4. **Environment Variables:** Make sure all required env vars are set

## 📚 **Features Deep Dive**

### **🎭 Theme System**
- System theme detection
- Manual theme switching
- Smooth transitions
- Persistent preference

### **🎨 Animations**
- Scroll-triggered animations
- Particle system
- Gesture animations
- Performance optimized

### **📱 PWA Features**
- Installable
- Offline capable
- App-like experience
- Custom icons

### **🔍 SEO Features**
- Dynamic meta tags
- OpenGraph images
- Twitter Cards
- Structured data
- Sitemap generation

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Next.js Team** - For the amazing framework
- **Vercel** - For the deployment platform
- **Framer Motion** - For beautiful animations
- **Tailwind CSS** - For the utility-first CSS
- **Lucide Icons** - For the beautiful icons

---

<div align="center">
  <p><strong>Built with ❤️ by Adna Fika Agestifanka</strong></p>
  <p><em>Digital Storyteller & Creative Developer</em></p>
  
  [![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=social&logo=github)](https://github.com/adna-fika)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](https://linkedin.com/in/adna-fika)
  [![Website](https://img.shields.io/badge/Website-Visit-green?style=social&logo=vercel)](https://adna-personal-brand.vercel.app)
</div>