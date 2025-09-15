# GitHub Pages Deployment Guide

## Overview
This repository is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch. The web interface is located in the `interface/` folder.

## GitHub Pages Setup

### 1. Repository Configuration
- **Repository**: `https://github.com/iancarter-dev/ambience`
- **Branch**: `main`
- **GitHub Pages URL**: `https://iancarter-dev.github.io/ambience/interface/`

### 2. Automatic Deployment
The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Triggers on every push to `main` branch
- Builds the site using Jekyll
- Deploys to GitHub Pages automatically
- Makes the interface accessible at `/interface/` subdirectory

### 3. Manual Deployment Setup
If you need to set up GitHub Pages manually:

1. Go to repository **Settings**
2. Navigate to **Pages** section
3. Under **Source**, select "GitHub Actions"
4. The workflow will handle the rest

## Configuration Files

### Jekyll Configuration (`_config.yml`)
- Configures Jekyll for GitHub Pages
- Sets base URL to `/ambience`
- Excludes unnecessary files from deployment

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automates the build and deployment process
- Uses Jekyll to process the site
- Deploys to GitHub Pages environment

## Progressive Web App Features

### Service Worker (`sw.js`)
- Configured for GitHub Pages paths
- Caches content for offline use
- Handles base URL differences between local and production

### Web App Manifest (`manifest.json`)
- Configured for GitHub Pages URLs
- Enables installation as PWA
- Optimized for mobile devices

## Local Development vs Production

### Local Development (localhost)
- Base URL: `'..'` (parent directory to access record files)
- Service Worker: `/sw.js`
- Interface accessible at: `http://localhost:8000/interface/`

### GitHub Pages Production
- Base URL: `/ambience`
- Service Worker: `/ambience/interface/sw.js`
- Interface accessible at: `https://iancarter-dev.github.io/ambience/interface/`

## File Structure
```
ambience/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── interface/                  # Web interface files
│   ├── index.html             # Main application
│   ├── styles.css             # Styling
│   ├── script.js              # Application logic
│   ├── sw.js                  # Service Worker
│   ├── manifest.json          # PWA manifest
│   ├── config.json            # Configuration
│   └── robots.txt             # SEO configuration
├── record/
│   ├── cpp/
│   │   ├── README.md
│   │   └── experiments/
│   ├── dsa/
│   │   ├── README.md
│   │   └── experiments/
│   └── de/
│       ├── README.md
│       └── experiments/
├── _config.yml                 # Jekyll configuration
└── README.md                   # Project documentation
```

## SEO and Performance

### Robots.txt
- Configured for GitHub Pages domain
- Excludes private files from crawling
- Includes sitemap reference

### Meta Tags
- Open Graph tags for social sharing
- Twitter Card support
- Proper canonical URLs

### Performance Features
- Service Worker caching
- Lazy loading
- Optimized assets
- Progressive Web App capabilities

## Deployment Process

### Automatic (Recommended)
1. Make changes to your files
2. Commit and push to `main` branch
3. GitHub Actions automatically builds and deploys
4. Site updates within 5-10 minutes

### Manual Trigger
1. Go to repository **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Choose `main` branch and run

## Troubleshooting

### Common Issues

1. **404 Errors on Refresh**
   - GitHub Pages serves static files
   - Use hash-based routing for SPA behavior
   - Fallback to index.html for missing routes

2. **Service Worker Issues**
   - Clear browser cache
   - Unregister old service workers
   - Check browser console for errors

3. **Path Issues**
   - Ensure all internal links use relative paths
   - JavaScript handles base URL differences
   - Check `CONFIG.baseUrl` in script.js

### Debugging
- Check GitHub Actions logs for build errors
- Use browser developer tools for client-side issues
- Verify file paths in GitHub repository

## Updates and Maintenance

### Content Updates
- Edit markdown files in `record/` directories
- Changes auto-deploy when pushed to `main`
- Service Worker handles cache updates

### Code Updates
- Modify HTML, CSS, or JavaScript files
- Test locally first: `python -m http.server 8000`
- Deploy via git push to `main`

### Cache Management
- Service Worker automatically manages caching
- Force refresh: Ctrl+Shift+R (Chrome/Firefox)
- Clear all caches via browser settings if needed

## Features Working on GitHub Pages

✅ **Working Features:**
- Dynamic navigation
- Markdown rendering
- Progressive Web App
- Offline functionality
- Mobile responsiveness
- Auto-updates
- Service Worker caching

⚠️ **Limitations:**
- No server-side processing
- Static file serving only
- Limited to client-side JavaScript

## Support

For issues related to:
- **GitHub Pages**: Check GitHub documentation
- **Jekyll**: See Jekyll documentation
- **PWA Features**: Verify browser compatibility
- **Mobile Issues**: Test on actual devices

## Next Steps

1. Push your changes to the `main` branch
2. Wait for GitHub Actions to complete
3. Visit `https://iancarter-dev.github.io/ambience/interface/`
4. Test all functionality on GitHub Pages
5. Share the URL with your classmates!

The site is now ready for production use on GitHub Pages! 🚀