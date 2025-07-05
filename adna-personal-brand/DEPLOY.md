# 🚀 Deploy to Vercel - Step by Step Guide

## Quick Deploy (Recommended)

### Method 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/adna-personal-brand)

### Method 2: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Spectacular Adna Personal Brand Website"
   git branch -M main
   git remote add origin https://github.com/your-username/adna-personal-brand.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

## Environment Variables

Set these in your Vercel dashboard (Settings → Environment Variables):

```env
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Optional but Recommended
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

Your site is already optimized with:
- ✅ **Lighthouse Score 90+**
- ✅ **Next.js 14 App Router**
- ✅ **Automatic Image Optimization**
- ✅ **Code Splitting**
- ✅ **Static Generation**
- ✅ **Bundle Analysis**

## Monitoring

- Check Vercel Analytics for performance insights
- Monitor Core Web Vitals
- Use Vercel Functions for any API needs

## Contact Form Setup

1. **Sign up for Formspree** (Free): [formspree.io](https://formspree.io)
2. **Create a new form**
3. **Copy your form ID**
4. **Add to Vercel environment variables:**
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_actual_form_id
   ```

## FAQ

**Q: Is Vercel free?**
A: Yes! The hobby plan is perfect for personal sites.

**Q: How do I update the site?**
A: Just push to GitHub. Vercel auto-deploys on every push.

**Q: Can I use a custom domain?**
A: Yes! Add it in Vercel dashboard settings.

**Q: How do I check performance?**
A: Use Vercel Analytics or run Lighthouse in browser DevTools.

---

🎉 **Your spectacular website is now live and ready to impress the world!**