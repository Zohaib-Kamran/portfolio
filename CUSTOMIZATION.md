# 🎨 Customization Guide

Advanced customization examples to make your portfolio truly unique.

## Color Scheme Customization

### Change Primary Color
Edit `tailwind.config.js`:

```javascript
// From blue to purple
accent: {
  50: '#f3e8ff',
  100: '#e9d5ff',
  200: '#d8b4fe',
  300: '#c084fc',
  400: '#a855f7',
  500: '#9333ea',  // ← Change this
  600: '#7e22ce',
  700: '#6d28d9',
  800: '#5b21b6',
  900: '#3f0f5c',
}

// From blue to green
accent: {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',  // ← Green
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
}

// From blue to red
accent: {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',  // ← Red
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
}
```

### Add Dark Mode Background Colors
```javascript
// In tailwind.config.js
dark: {
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  500: '#6b7280',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2937',
  900: '#111827',
  950: '#030712',  // Ultra dark for hero section
}
```

---

## Typography Customization

### Change Font Family
Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      // Using Google Fonts
      display: ['Poppins', 'sans-serif'],  // Bold headings
      body: ['Inter', 'sans-serif'],       // Regular text
      mono: ['Fira Code', 'monospace'],    // Code snippets
    },
  },
}
```

Then update `index.html`:
```html
<!-- Add to <head> -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Custom Font Sizes
```javascript
// In tailwind.config.js
fontSize: {
  'hero': ['5rem', '1.2'],      // 80px
  'headline': ['3rem', '1.3'],  // 48px
  'body': ['1rem', '1.6'],      // 16px
  'small': ['0.875rem', '1.5'], // 14px
}
```

---

## Animation Customization

### Add New Animations
Edit `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'float': 'float 3s ease-in-out infinite',
  'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
  'glow-pulse': 'glowPulse 2s ease-in-out infinite',
  'rotate-slow': 'rotateSlow 10s linear infinite',
},
keyframes: {
  bounceSlow: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  glowPulse: {
    '0%, 100%': { 
      boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)',
      opacity: '1',
    },
    '50%': { 
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
      opacity: '0.8',
    },
  },
  rotateSlow: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
}
```

Then use in components:
```jsx
<motion.div className="animate-bounce-slow">
  Slowly bouncing element
</motion.div>
```

---

## Layout Modifications

### Make Hero Section Full Height
Edit `src/components/Hero.jsx`:

```javascript
// Change from min-h-screen to h-screen
<section
  id="hero"
  className="relative h-screen flex items-center justify-center overflow-hidden"
>
```

### Add Section Background Colors
Edit `src/components/About.jsx`:

```javascript
<Section id="about" className="bg-gradient-to-br from-dark-800 to-dark-900">
```

### Adjust Section Spacing
Edit `tailwind.config.js`:

```javascript
// Reduce spacing for compact design
extend: {
  spacing: {
    'section': '60px',  // Instead of 80px
  }
}
```

Then update components:
```jsx
<Section className="py-section"> {/* Compact spacing */}
```

---

## Component Customization

### Hide the Dark Mode Toggle
Edit `src/components/Navigation.jsx`:

```javascript
{/* Dark Mode Toggle - HIDE THIS SECTION */}
{/* 
<motion.button
  onClick={() => setIsDarkMode(!isDarkMode)}
  className="p-2 rounded-lg glass-effect hover:bg-opacity-20 smooth-transition"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  title="Toggle dark mode"
>
  <span className="text-xl">
    {isDarkMode ? '🌙' : '☀️'}
  </span>
</motion.button>
*/}
```

### Remove Scroll Progress Bar
Edit `src/components/Navigation.jsx`:

```javascript
{/* Remove this section: */}
{/*
<motion.div
  className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-400 to-accent-600 z-40"
  style={{ width: `${scrollProgress}%` }}
  transition={{ type: 'tween', ease: 'linear' }}
/>
*/}
```

### Change CTA Button Text
Edit `src/utils/constants.js`:

```javascript
HERO_DATA = {
  cta_primary: "Get Started Now",  // Changed from "Let's Work Together"
  cta_secondary: "Browse Portfolio",
}
```

---

## Advanced: Custom Gradient Backgrounds

### Replace Blob Animations
Edit `src/index.css`:

```css
/* Custom gradient mesh background */
.animated-bg {
  background: linear-gradient(
    45deg,
    #1f2937 0%,
    #111827 25%,
    #0f172a 50%,
    #111827 75%,
    #1f2937 100%
  );
  animation: gradientShift 15s ease infinite;
  background-size: 400% 400%;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Add Noise Texture
```css
.animated-bg {
  background-image: 
    url('data:image/svg+xml,...noise-pattern...'),
    linear-gradient(...);
}
```

---

## Form Customization

### Change Form Fields
Edit `src/utils/constants.js`:

```javascript
CONTACT_DATA = {
  formFields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: false },
    { name: "subject", label: "Subject", type: "text", required: true },
    { name: "message", label: "Message", type: "textarea", required: true },
  ],
}
```

### Add Form Validation
Edit `src/components/Contact.jsx`:

```javascript
const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};
  if (!formData.email.includes('@')) {
    newErrors.email = 'Invalid email';
  }
  if (formData.message.length < 10) {
    newErrors.message = 'Message too short';
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!validateForm()) return;
  // ... rest of submit logic
};
```

---

## Performance Enhancements

### Lazy Load Images
```jsx
import { useState } from 'react';

export const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};
```

### Code Splitting Components
```javascript
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects />
      <Contact />
    </Suspense>
  );
}
```

---

## Adding New Sections

### Create a New Section
1. Create `src/components/NewSection.jsx`:

```javascript
import { Section, SectionTitle, ScrollReveal } from './shared';

export const NewSection = () => {
  return (
    <Section id="new-section">
      <SectionTitle title="New Section" />
      
      <ScrollReveal>
        <div className="glass-effect p-12 rounded-xl">
          Your content here
        </div>
      </ScrollReveal>
    </Section>
  );
};
```

2. Add to `src/components/index.js`:

```javascript
export { NewSection } from './NewSection';
```

3. Import and use in `src/App.jsx`:

```javascript
import { NewSection } from './components';

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <NewSection /> {/* New section */}
      <Footer />
    </>
  );
}
```

---

## Social Media Integration

### Add Social Share Buttons
```jsx
const ShareButtons = () => {
  const url = window.location.href;
  
  return (
    <div className="flex gap-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        Share on Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        Share on LinkedIn
      </a>
    </div>
  );
};
```

---

## SEO Enhancement

### Add Structured Data
Edit `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Zohaib Kamran",
  "url": "https://your-portfolio.com",
  "sameAs": [
    "https://twitter.com/yourusername",
    "https://linkedin.com/in/yourprofile"
  ],
  "jobTitle": "Frontend Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  }
}
</script>
```

---

## Ready to Customize!

With these examples, you can transform your portfolio into a truly unique showcase. Mix and match ideas to create something special!

**Happy customizing! 🎨**
