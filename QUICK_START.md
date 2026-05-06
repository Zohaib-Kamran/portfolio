# 🎯 Quick Start Guide

## Getting Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies (2 minutes)
```bash
npm install
```

This installs:
- React & React DOM
- Tailwind CSS for styling
- Framer Motion for animations
- Vite for development

### Step 2: Start Development Server (30 seconds)
```bash
npm run dev
```

The portfolio will automatically open in your browser at `http://localhost:3000`

### Step 3: Customize Your Info (2 minutes)

**Open**: `src/utils/constants.js`

Update these variables:
```javascript
HERO_DATA = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your tagline",
  ...
}

ABOUT_DATA = {
  description: "Your story",
  ...
}

SKILLS_DATA = {
  categories: [...],  // Your skills
  ...
}

PROJECTS_DATA = {
  projects: [...],  // Your projects
  ...
}
```

### Step 4: Update Colors (Optional)

**Open**: `tailwind.config.js`

Change the accent colors in the `theme.extend.colors.accent` section to match your brand:
```javascript
accent: {
  500: '#3b82f6',  // Your primary color
  600: '#2563eb',
  ...
}
```

### Step 5: Customize Your Projects

Replace the placeholder projects with your real work:
```javascript
{
  id: 1,
  title: "Your Project",
  description: "What you built",
  tech: ["React", "Tailwind", "etc"],
  image: "🎨",  // emoji or link to image
  liveLink: "https://your-project-live.com",
  githubLink: "https://github.com/yourrepo",
}
```

---

## 🚀 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production (creates `dist/` folder) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality |

---

## 📝 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/utils/constants.js` | All your content (names, skills, projects, etc) |
| `tailwind.config.js` | Colors, fonts, animations |
| `src/components/Navigation.jsx` | Header & navigation |
| `src/components/Footer.jsx` | Footer content |
| `index.html` | Meta tags & title |

---

## 🎨 Customization Tips

### Change the Primary Color
Edit `tailwind.config.js`:
```javascript
accent: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',  // ← Your color here
  600: '#0284c7',
  ...
}
```

### Update Social Links
Find these sections and update URLs:
- `Contact.jsx` - Social links in contact section
- `Footer.jsx` - Social links at the bottom
- `constants.js` - `CONTACT_DATA.socials`

### Change Animations
Edit `src/index.css` and modify the keyframes:
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }  /* Adjust this value */
}
```

---

## 🔗 Linking to Sections

Internal links use hash navigation:
- `href="#hero"` → Jumps to hero section
- `href="#about"` → Jumps to about section
- `href="#contact"` → Jumps to contact section

---

## 📱 Testing Responsiveness

1. Open browser DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Test on different device sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1440px)

---

## 🚢 Deployment

### Deploy to Netlify (Recommended)
1. Run `npm run build`
2. Drag the `dist/` folder to Netlify
3. Your site is live!

### Deploy to Vercel
1. Connect your GitHub repo
2. Vercel auto-detects Vite config
3. Your site is deployed!

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run `npm run build`
3. Push `dist/` to `gh-pages` branch

---

## 🐛 Common Issues & Solutions

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Styles Not Showing
Clear cache:
```bash
npm run build
rm -rf node_modules/.vite
npm run dev
```

### Images Not Loading
Check the paths in components and ensure they're accessible from the `public/` folder.

---

## 💡 Pro Tips

1. **Test Form Integration**: The contact form logs to console. Integrate with:
   - Formspree (email)
   - Netlify Forms (built-in)
   - Your own backend API

2. **Add Google Analytics**: Update `index.html` with your tracking ID

3. **Custom Domain**: 
   - Buy domain from GoDaddy/Namecheap
   - Point to Netlify/Vercel in DNS settings

4. **SEO Optimization**:
   - Update meta tags in `index.html`
   - Use descriptive alt text for images
   - Add structured data (JSON-LD)

---

## 🎓 Next Steps

1. ✅ Get it running locally
2. ✅ Update all your content
3. ✅ Test on mobile devices
4. ✅ Deploy to production
5. ✅ Add custom domain
6. ✅ Integrate contact form
7. ✅ Add Google Analytics

---

## 📞 Support

- Check component comments for explanations
- Review README.md for detailed documentation
- Check Framer Motion docs for animation help
- Check Tailwind CSS docs for styling help

---

**You're all set! Start customizing and let your portfolio shine! 🌟**
