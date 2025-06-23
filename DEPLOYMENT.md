# 🚀 Deployment Guide

This guide will help you deploy Rani's Portfolio Website to GitHub and various hosting platforms.

## 📋 Prerequisites

Before deploying, make sure you have:

1. **Git installed** on your computer
2. **GitHub account** created
3. **Node.js 18+** installed
4. **Repository created** on GitHub at `https://github.com/Groksite/Website`

## 🔧 Step 1: GitHub Repository Setup

### Option A: Create Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `Website`
4. Set owner to `Groksite`
5. Make it public or private (your choice)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### Option B: Repository Already Exists

If the repository already exists, make sure you have write access to it.

## 🔑 Step 2: GitHub Authentication

You need to authenticate with GitHub. Choose one method:

### Method 1: Personal Access Token (Recommended)

1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate new token (classic)
3. Give it a name like "Website Deployment"
4. Select scopes: `repo` (full control of private repositories)
5. Copy the token
6. When pushing, use your username and token as password

### Method 2: SSH Key

1. Generate SSH key: `ssh-keygen -t ed25519 -C "your-email@example.com"`
2. Add to SSH agent: `ssh-add ~/.ssh/id_ed25519`
3. Copy public key: `cat ~/.ssh/id_ed25519.pub`
4. Add to GitHub: Settings > SSH and GPG keys > New SSH key
5. Change remote URL: `git remote set-url origin git@github.com:Groksite/Website.git`

## 🚀 Step 3: Deploy to GitHub

### Automatic Deployment (Recommended)

**For Windows:**

```bash
./deploy.bat
```

**For Mac/Linux:**

```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deployment

```bash
# Add all files
git add .

# Commit changes
git commit -m "🎉 Initial deployment"

# Add remote (if not already added)
git remote add origin https://github.com/Groksite/Website.git

# Push to GitHub
git push -u origin main
```

## 🌐 Step 4: Choose Hosting Platform

### Option 1: Vercel (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your `Groksite/Website` repository
5. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose GitHub and select `Groksite/Website`
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

### Option 3: GitHub Pages

1. Go to your repository on GitHub
2. Click Settings > Pages
3. Source: Deploy from a branch
4. Branch: `main`
5. Folder: `/ (root)`
6. Click Save
7. Your site will be available at `https://groksite.github.io/Website`

**Note:** For GitHub Pages, you need to modify `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

## 🔄 Step 5: Continuous Deployment

Once connected to Vercel or Netlify:

- Every push to `main` branch automatically deploys
- Pull requests create preview deployments
- No manual deployment needed

## 🛠️ Troubleshooting

### Permission Denied Error

```
remote: Permission to Groksite/Website.git denied
```

**Solution:** Check your GitHub authentication (token or SSH key)

### Repository Not Found

```
remote: Repository not found
```

**Solution:** Make sure the repository exists and you have access

### Build Failures

**Solution:** Run `npm run build` locally first to check for errors

### Large File Errors

**Solution:** Check `.gitignore` is properly configured

## 📊 Performance Optimization

After deployment, check:

1. **Lighthouse Score** - Should be 90+ on all metrics
2. **Core Web Vitals** - Monitor in Google Search Console
3. **Bundle Size** - Use Vercel Analytics or similar

## 🔒 Environment Variables

If you need environment variables:

1. **Vercel:** Project Settings > Environment Variables
2. **Netlify:** Site Settings > Environment Variables
3. **Local:** Create `.env.local` file

Example `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📈 Analytics Setup

### Google Analytics

1. Create GA4 property
2. Add tracking ID to environment variables
3. Update `layout.tsx` with tracking code

### Vercel Analytics

1. Enable in Vercel dashboard
2. Add `@vercel/analytics` package
3. Import in `layout.tsx`

## 🎯 Custom Domain

### Vercel

1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records as shown

### Netlify

1. Go to Site Settings > Domain management
2. Add custom domain
3. Update DNS records

## 📞 Support

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/Groksite/Website/issues)
2. Review the deployment logs
3. Contact support through the repository

---

**Happy Deploying! 🚀**
