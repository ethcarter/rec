# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy the Ambience website to GitHub Pages.

## 📋 Prerequisites

1. The GUI folder is in your GitHub repository (`iancarter-dev/ambience`)
2. You have admin access to the repository
3. The repository is public (required for GitHub Pages on free plans)

## 🛠️ Deployment Steps

### Step 1: Repository Settings
1. Go to your GitHub repository: `https://github.com/iancarter-dev/ambience`
2. Click on the **Settings** tab
3. Scroll down to the **Pages** section in the left sidebar

### Step 2: Configure GitHub Pages
1. Under **Source**, select `Deploy from a branch`
2. Select the branch: `main` (or your default branch)
3. Select the folder: `/ (root)`
4. Click **Save**

### Step 3: Wait for Deployment
- GitHub Pages will automatically build and deploy your site
- This typically takes 5-10 minutes for the first deployment
- You'll see a green checkmark when it's ready

### Step 4: Access Your Website
Your website will be available at:
```
https://iancarter-dev.github.io/ambience/GUI/
```

## 🔧 Configuration Files Created

The following files have been created to optimize GitHub Pages deployment:

### `.nojekyll`
- Tells GitHub Pages to serve files as-is without Jekyll processing
- Essential for proper CSS and JavaScript loading

### `_config.yml`
- GitHub Pages configuration file
- Defines site metadata and build settings
- Configures SEO and social media integration

### `robots.txt`
- Search engine optimization
- Allows crawlers to index educational content
- Points to sitemap location

### `sitemap.xml`
- SEO sitemap for search engines
- Lists all important pages with metadata
- Helps with search engine indexing

### Updated `README.md`
- Comprehensive documentation
- Features and technology stack
- Usage instructions

## 🌐 Website Features

### ✨ Modern Design
- **Dark AMOLED Theme**: True black background optimized for OLED displays
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Orange Accent Color**: Vibrant #FF7139 for highlights and interactions

### 🔍 Search Functionality
- Real-time search across all experiments
- Category filtering (C++, DSA, DE)
- Quick navigation to specific content

### 📱 Mobile Optimization
- Responsive grid layouts
- Touch-friendly navigation
- Optimized typography for mobile reading

### 💻 Code Features
- Syntax highlighting with Prism.js
- Copy code functionality
- Dark theme optimized colors

## 🧪 Testing Responsive Design

The website has been designed and tested for:

### Desktop (1200px+)
- Full-width layout with sidebar navigation
- Multi-column experiment grids
- Large typography and spacing

### Tablet (768px - 1199px)
- Adapted grid layouts
- Optimized touch targets
- Balanced content density

### Mobile (320px - 767px)
- Single-column layouts
- Collapsible navigation
- Large touch-friendly buttons
- Optimized code blocks

### Key Breakpoints
```css
/* Tablet and below */
@media (max-width: 768px) { ... }

/* Mobile and below */
@media (max-width: 480px) { ... }
```

## 🎨 Design System

### Color Palette
```css
--bg-primary: #000000        /* True black background */
--bg-secondary: #0a0a0a      /* Slightly lighter black */
--bg-card: #111111           /* Card backgrounds */
--text-primary: #ffffff      /* Primary text */
--text-secondary: #cccccc    /* Secondary text */
--accent-primary: #ff7139    /* Orange accent */
--border-color: #333333      /* Subtle borders */
```

### Typography
- **Primary**: Segoe UI, system fonts
- **Code**: Consolas, Monaco, monospace fonts
- **Hierarchy**: Clear heading levels with consistent sizing

### Spacing
- **Base unit**: 1rem (16px)
- **Consistent multipliers**: 0.5rem, 1rem, 1.5rem, 2rem, 3rem
- **Grid gaps**: 1rem to 2rem based on content density

## 🔄 Update Workflow

### Adding New Experiments
1. Create new HTML files following the template structure
2. Update the course index.html files with new experiment links
3. Update the search functionality in the main index.html
4. Commit and push changes - GitHub Pages will auto-deploy

### Modifying Styles
1. Update CSS variables in the `:root` section for theme changes
2. Use media queries for responsive adjustments
3. Test on multiple screen sizes before deployment

### SEO Updates
1. Update `sitemap.xml` with new pages
2. Modify `_config.yml` for metadata changes
3. Update meta tags in HTML files as needed

## 🐛 Troubleshooting

### Common Issues

**Site not loading CSS/JS:**
- Ensure `.nojekyll` file exists
- Check file paths are relative
- Verify _config.yml baseurl setting

**Search not working:**
- Check JavaScript console for errors
- Verify search data is properly formatted
- Ensure Prism.js CDN links are accessible

**Mobile layout issues:**
- Test with browser dev tools
- Check viewport meta tag
- Verify media query breakpoints

### Getting Help
- Check GitHub Pages status at: `https://www.githubstatus.com/`
- Review GitHub Pages documentation
- Check browser console for JavaScript errors

## 📊 Performance Optimization

### Already Implemented
- ✅ Optimized CSS with variables
- ✅ Minimal JavaScript with CDN resources
- ✅ Responsive images and layouts
- ✅ Efficient animations with CSS transforms

### Recommendations
- Consider implementing lazy loading for images
- Add service worker for offline functionality
- Implement progressive enhancement
- Consider WebP images for better compression

## 🚀 Go Live Checklist

- [ ] Repository is public
- [ ] All files are committed and pushed
- [ ] GitHub Pages is configured correctly
- [ ] Site loads at: `https://iancarter-dev.github.io/ambience/GUI/`
- [ ] Navigation works on all pages
- [ ] Search functionality is operational
- [ ] Mobile responsiveness is tested
- [ ] All experiment links are functional

Your modern, responsive university course records website is now ready to go live! 🎉