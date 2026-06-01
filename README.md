# 🚀 Deepali's 3D Interactive Portfolio

A modern, production-ready portfolio website with stunning 3D animations, featuring React Three Fiber, Next.js, TypeScript, and Tailwind CSS.

**[View Live Demo](#)** | **[GitHub](#)** | **[LinkedIn](https://www.linkedin.com/in/deepali-chaudhary-d3705)**

---

## ✨ Features

- 🎨 **Modern Design**: Dark theme with neon accent colors and glassmorphism effects
- 🌐 **3D Hero Section**: Interactive 3D scene with floating shapes and parallax effects using React Three Fiber
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Performance Optimized**: Lazy loading, image optimization, and code splitting
- 🎬 **Smooth Animations**: Beautiful transitions and micro-interactions with Framer Motion
- 🔍 **SEO Ready**: Proper meta tags, Open Graph, and semantic HTML
- 📝 **Contact Form**: Integrated with Web3Forms for email notifications
- 🎯 **Project Filtering**: Filter and search projects by category and technology
- 📄 **Resume Integration**: Easy PDF resume download and updates
- ♿ **Accessible**: WCAG compliant with keyboard navigation and ARIA labels
- 🌙 **Prefers Reduced Motion**: Respects user's motion preferences

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js & React Three Fiber
- **Icons**: Lucide React
- **Form Handling**: Web3Forms
- **Deployment**: Vercel

---

## 📋 Prerequisites

- Node.js 18+ (recommended: 20.x LTS)
- npm or yarn package manager
- Git

---

## 🚀 Quick Start

### 1. Installation

```bash
# Clone the repository or navigate to the project folder
cd portfolio-deepali

# Install dependencies
npm install
# or
yarn install
```

### 2. Configure Your Portfolio

Edit `src/data/portfolio.ts` to customize all your content:

```typescript
export const portfolioData = {
  personal: {
    name: 'Deepali',
    email: 'deepali3705@gmail.com',
    phone: '+91 8126031455',
    // ... other details
  },
  // Add your projects, experience, education, etc.
}
```

### 3. Web3Forms Setup (Optional but Recommended)

To enable email notifications from the contact form:

1. Go to [Web3Forms](https://web3forms.com)
2. Sign up and create a new form project
3. Copy your **Access Key**
4. Update `src/data/portfolio.ts`:
   ```typescript
   contact: {
     web3formsKey: 'YOUR_ACTUAL_ACCESS_KEY',
     // ...
   }
   ```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will auto-update as you make changes.

---

## 📝 Customization Guide

### Edit Personal Information

File: `src/data/portfolio.ts`

```typescript
personal: {
  name: 'Your Name',
  fullName: 'Your Full Name',
  title: 'Your Title',
  tagline: 'Your professional tagline',
  location: 'Your City, Country',
  email: 'your.email@example.com',
  phone: '+91 XXXXXXXXXX',
  bio: 'Your bio text',
}
```

### Update Social Links

```typescript
social: {
  github: 'https://github.com/YOUR_USERNAME',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  email: 'your.email@example.com',
  whatsapp: '+91 XXXXXXXXXX',
}
```

### Customize Tech Stack

```typescript
techStack: {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'Python'],
  database: ['MongoDB', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'VS Code'],
}
```

### Add/Edit Projects

```typescript
projects: [
  {
    id: 'project-id',
    title: 'Project Name',
    description: 'Project description',
    category: 'Full-Stack', // Options: 'Frontend', 'Full-Stack', 'Website'
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/project.jpg',
    github: 'https://github.com/...',
    live: 'https://live-demo.com',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
]
```

### Add Experience

```typescript
experience: [
  {
    id: 'exp-1',
    company: 'Company Name',
    position: 'Your Position',
    period: '2023 - Present',
    description: 'What you did...',
    technologies: ['Tech1', 'Tech2'],
  },
]
```

### Add Education

```typescript
education: [
  {
    id: 'edu-1',
    institution: 'University Name',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    year: '2020 - 2024',
  },
]
```

---

## 🖼️ Adding Images & Screenshots

### Project Images

1. Create folder: `public/images/projects/`
2. Add your project screenshots
3. Update the image path in `src/data/portfolio.ts`:
   ```typescript
   image: '/images/projects/my-project.jpg'
   ```

### Resume PDF

1. Place your `resume.pdf` in the `public/` directory
2. Path is automatically configured as `/public/resume.pdf`
3. Users can download it from the Resume section

### Favicon

1. Replace `public/favicon.ico` with your own favicon
2. Optionally add Apple touch icon: `public/apple-touch-icon.png`

### Open Graph Image

1. Add a preview image: `public/og-image.jpg` (1200x630px recommended)
2. Used for social media sharing

---

## 🎨 Styling Customization

### Change Color Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark blue
      secondary: '#1e293b',    // Lighter blue
      accent: '#00d9ff',       // Cyan
      'accent-alt': '#6366f1', // Indigo
    },
  },
}
```

### Modify Fonts

Edit `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');

theme: {
  fontFamily: {
    display: ['Your Display Font', 'sans-serif'],
    body: ['Your Body Font', 'monospace'],
  }
}
```

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [Vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Your site will be live at `YOUR_PROJECT.vercel.app`

3. **Custom Domain (Optional)**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Connect your GitHub repo on Netlify
```

**Railway.app:**
```bash
# Connect GitHub and auto-deploy
```

---

## 🔧 Advanced Customization

### Change Hero Background

Edit `src/components/HeroScene.tsx`:

```typescript
// Modify the 3D scene, shapes, colors, and animations
```

### Add Custom Sections

1. Create a new component: `src/components/CustomSection.tsx`
2. Export the component
3. Import and add it to `src/app/page.tsx`:
   ```typescript
   import { CustomSection } from '@/components/CustomSection';
   
   // Add to the Home component
   <CustomSection />
   ```

### Disable 3D Scene

If targeting low-end devices, replace `HeroScene` with a static background:

```typescript
// In src/components/Hero.tsx
// Comment out <HeroScene /> and add a simple gradient instead
```

---

## 🐛 Troubleshooting

### Build Errors

**Issue**: Three.js compatibility errors

**Solution**:
```bash
npm install three@r158 @react-three/fiber@^8.14.0
```

### Performance Issues

- Disable 3D scene on mobile
- Optimize images: use WebP format
- Enable image lazy loading
- Use Next.js Image component

### Web3Forms Not Working

1. Check your Access Key is correct
2. Ensure the key has "auto_reply" enabled
3. Test form submission in browser console

---

## 📊 SEO Optimization

The portfolio includes:

- ✅ Proper meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Structured data (Schema.org)
- ✅ Semantic HTML
- ✅ Image alt text
- ✅ Fast loading performance
- ✅ Mobile responsiveness

### Further SEO Tips

1. Add Google Analytics: Update `next.config.js`
2. Submit sitemap to Google Search Console
3. Create robots.txt in `public/`
4. Add canonical URLs

---

## 📱 Mobile Optimization

The portfolio is fully responsive:

- Desktop: Full 3D animations and effects
- Tablet: Optimized layouts
- Mobile: Touch-friendly navigation, simplified 3D scene

### Test Responsiveness

```bash
# Use Chrome DevTools
# F12 → Toggle device toolbar (Ctrl+Shift+M)
```

---

## 🔐 Security

- No sensitive data in source code
- Environment variables for API keys
- Input validation on contact form
- HTTPS enforced on Vercel

---

## 📚 Project Structure

```
portfolio-deepali/
├── public/
│   ├── images/
│   │   └── projects/           # Project screenshots
│   ├── resume.pdf              # Your resume
│   ├── og-image.jpg            # Social preview
│   └── favicon.ico             # Website icon
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation
│   │   ├── Hero.tsx            # Hero section
│   │   ├── HeroScene.tsx       # 3D scene
│   │   ├── About.tsx           # About section
│   │   ├── TechStack.tsx       # Tech skills
│   │   ├── Projects.tsx        # Projects grid
│   │   ├── ExperienceEducation.tsx
│   │   ├── Resume.tsx          # Resume section
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer
│   └── data/
│       └── portfolio.ts        # ⭐ MAIN CONFIG FILE
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

---

## 🤝 Contributing & Support

### Report Issues

Open an issue on GitHub with:
- Detailed description
- Steps to reproduce
- Screenshots/errors

### Feature Requests

Suggest improvements via GitHub discussions

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Edit `src/data/portfolio.ts` with your information
3. ✅ Add your project images and resume
4. ✅ Set up Web3Forms for contact form
5. ✅ Run development server: `npm run dev`
6. ✅ Test all sections and links
7. ✅ Build and deploy to Vercel

---

## 🌟 Show Your Support

If you found this portfolio template helpful:
- ⭐ Star this repository
- 📢 Share with other developers
- 💬 Provide feedback

---

## 👨‍💻 Built with ❤️

**Original Portfolio for**: Deepali Chaudhary  
**GitHub**: [github.com/DEEPALI-2005](https://github.com/DEEPALI-2005)  
**LinkedIn**: [linkedin.com/in/deepali-chaudhary-d3705](https://www.linkedin.com/in/deepali-chaudhary-d3705)

---

## 📞 Need Help?

- **GitHub Issues**: For bugs and feature requests
- **Email**: deepali3705@gmail.com
- **WhatsApp**: +91 8126031455

---

**Happy coding! 🚀**
