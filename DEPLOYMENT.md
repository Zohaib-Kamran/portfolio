# 🚀 Deployment Guide

Complete guide to deploy your portfolio to production.

## Option 1: Netlify (Recommended - Easiest)

### Step 1: Build Your Site
```bash
npm run build
```

### Step 2: Deploy to Netlify

**Method A: Drag & Drop (Easiest)**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag and drop the `dist/` folder
4. Your site is live immediately!

**Method B: Connect GitHub Repo (Recommended)**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Netlify auto-detects your build config
6. Deploys automatically on every push!

### Step 3: Add Custom Domain
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add a custom domain"
3. Follow instructions to connect your domain
4. Update DNS records at your domain registrar

---

## Option 2: Vercel

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### Step 2: Import Your Project
1. Click "New Project"
2. Select your GitHub repository
3. Vercel auto-configures everything
4. Click "Deploy"

### Step 3: Connect Domain
1. In project settings, click "Domains"
2. Add your custom domain
3. Update DNS at your registrar

**Advantages:**
- ⚡ Fastest builds
- 🔄 Automatic deploys on git push
- 📊 Built-in analytics
- 🎯 SEO-optimized

---

## Option 3: GitHub Pages (Free)

### Step 1: Update Vite Config
Edit `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio-repo/',  // Your repo name
  // ... rest of config
})
```

### Step 2: Build and Deploy
```bash
npm run build
```

### Step 3: Push to GitHub
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "GitHub Pages"
3. Select `gh-pages` branch as source
4. Your site is live at `username.github.io/portfolio-repo`

---

## Option 4: Traditional Hosting (Bluehost, GoDaddy, etc.)

### Step 1: Build Your Site
```bash
npm run build
```

### Step 2: Upload Files
1. Connect to server via FTP
2. Upload contents of `dist/` folder to public directory
3. That's it!

**FTP Tools:**
- FileZilla (free)
- Cyberduck (free)
- WinSCP (free)

---

## Monitoring & Maintenance

### Set Up Analytics
Update `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Performance
- **Netlify/Vercel**: Built-in analytics dashboard
- **Google Analytics**: Check traffic and user behavior
- **Uptime Robot**: Monitor site availability

### Security
- ✅ HTTPS enabled automatically
- ✅ No sensitive data exposed
- ✅ Static site = no vulnerabilities
- ✅ Regular backups (git history)

---

## Continuous Deployment Setup

### Netlify (Auto Deployment)
```toml
# netlify.toml (optional)
[build]
  command = "npm run build"
  publish = "dist"

[dev]
  command = "npm run dev"
  port = 3000
```

### Vercel (Auto Deployment)
```json
# vercel.json (optional)
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Both platforms automatically deploy when you push to your main branch.

---

## Pre-Deployment Checklist

- [ ] All content is updated
- [ ] Links are working
- [ ] Contact form is integrated
- [ ] Mobile responsive (tested)
- [ ] Images/assets optimized
- [ ] Meta tags updated
- [ ] Social links correct
- [ ] No console errors
- [ ] Lighthouse score > 90

### Run Lighthouse Check
1. Build: `npm run build`
2. Preview: `npm run preview`
3. Open in Chrome
4. F12 → Lighthouse → Generate Report

---

## Domain Purchase & Setup

### Buy a Domain
- **Namecheap**: Cheapest ($0.88/year)
- **GoDaddy**: Popular & reliable
- **Google Domains**: Simple & clean
- **Cloudflare**: Free + excellent support

### Connect Domain to Hosting

**Netlify:**
1. Go to Domain settings
2. Add custom domain
3. Update DNS at registrar (they provide instructions)

**Vercel:**
1. Go to Project settings → Domains
2. Add domain name
3. Follow provided DNS instructions

**GitHub Pages:**
1. Create `CNAME` file in root: `yourdomain.com`
2. Push to repo
3. Update DNS to point to GitHub's servers

---

## Troubleshooting

### Site Shows "Page Not Found"
- Check that you uploaded `dist/` folder contents
- Verify base path in `vite.config.js`
- Clear browser cache (Ctrl+Shift+Delete)

### Styles Not Loading
- Check that CSS files are in the right path
- Verify no 404 errors in DevTools
- Clear and rebuild: `npm run build`

### Contact Form Not Working
- Check browser console for errors
- Verify form backend is configured
- Test with Formspree/Netlify Forms

### Domain Points to Wrong Site
- Wait 24 hours for DNS propagation
- Clear DNS cache: `ipconfig /flushdns` (Windows)
- Verify CNAME/A records at registrar

---

## Performance Optimization

### Netlify Specific
```toml
# netlify.toml
[build]
  functions = "netlify/functions"

# Enable asset optimization
[build.environment]
  NODE_ENV = "production"
  VITE_OPTS = "--minify"
```

### Cache Headers
```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## SSL & HTTPS

✅ **Automatically Enabled** on:
- Netlify (free)
- Vercel (free)
- GitHub Pages (free)
- Most modern hosting providers

Your portfolio is secure by default!

---

## Backup & Versioning

### GitHub Backup
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Rollback Previous Version
```bash
git log --oneline  # See history
git revert COMMIT_ID  # Revert to version
git push  # Deploy reverted version
```

---

## Next Steps

1. ✅ Build your site: `npm run build`
2. ✅ Choose a deployment platform
3. ✅ Deploy! 🚀
4. ✅ Buy a custom domain
5. ✅ Connect domain to hosting
6. ✅ Monitor and maintain

---

## Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://pages.github.com/)
- [DNS Setup Guide](https://www.namecheap.com/support/knowledgebase/)

---

**Your portfolio is ready to go live! Pick a platform and deploy today! 🎉**
