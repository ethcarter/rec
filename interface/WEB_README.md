# Ambience - Dynamic Web Interface

A modern, responsive web interface for accessing practical records in Computer Science courses. Built with vanilla HTML, CSS, and JavaScript with progressive web app capabilities.

## Features

### 🎨 **Modern Design**
- AMOLED dark theme optimized for readability
- Material Design icons and principles
- Smooth animations and transitions
- Responsive layout for all devices

### 📱 **Progressive Web App**
- Offline functionality with service worker
- App-like experience on mobile devices
- Automatic updates and caching
- Fast loading and performance optimized

### 🧭 **Dynamic Navigation**
- Breadcrumb navigation system
- Sidebar with collapsible menu
- Keyboard shortcuts support
- History management (back/forward)

### 📝 **Markdown Rendering**
- GitHub-style markdown parsing
- Syntax highlighting for code blocks
- XSS protection with DOMPurify
- Dynamic link conversion for experiments

### ⚡ **Performance Features**
- Lazy loading of content
- Debounced event handlers
- Intersection Observer for animations
- Optimized asset loading

## Structure

```
/
├── index.html          # Main application shell
├── styles.css          # Complete styling and theme
├── script.js           # Application logic and navigation
├── sw.js              # Service worker for PWA features
├── manifest.json      # PWA manifest
├── config.json        # Configuration settings
├── robots.txt         # SEO and crawling rules
└── record/            # Content directories
    ├── cpp/           # C++ Programming records
    ├── dsa/           # Data Structures & Algorithms
    └── de/            # Digital Electronics
```

## Usage

### Local Development
```bash
# Start local server
python -m http.server 8000

# Or with Node.js
npx serve .

# Access at http://localhost:8000
```

### Deployment
1. Upload all files to web server
2. Ensure proper MIME types for `.json` and `.md` files
3. Configure HTTPS for PWA features
4. Set up proper caching headers

## Navigation

### Keyboard Shortcuts
- `Ctrl/Cmd + R` - Refresh content
- `Alt + ←` - Go back in history
- `Alt + →` - Go forward in history
- `Ctrl/Cmd + Home` - Navigate to home
- `Esc` - Close floating menus

### Mobile Navigation
- Swipe gestures supported
- Touch-optimized interface
- Collapsible sidebar
- Floating action button for quick actions

## Content Organization

The website automatically organizes content based on the repository structure:

- **Home**: Main README.md with subject links
- **Subjects**: Individual subject README files with experiment listings
- **Experiments**: Individual markdown files with practical content

Files matching these patterns are hidden from navigation:
- `experiments/` folders
- `LICENSE` file
- `S.md` files

## Customization

### Theme Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --accent-primary: #ff7139;    /* Primary accent color */
    --bg-primary: #000000;        /* Main background */
    --text-primary: #ffffff;      /* Primary text */
}
```

### Configuration
Edit `config.json` for:
- Subject definitions
- Feature toggles
- Performance settings
- Security options

## Browser Support

- **Modern browsers**: Full feature support
- **Chrome/Edge 80+**: All PWA features
- **Firefox 75+**: Core functionality
- **Safari 13+**: Basic PWA support
- **Mobile browsers**: Optimized experience

## Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## Security

- Content Security Policy headers recommended
- DOMPurify sanitizes all markdown content
- Service worker validates origins
- No inline scripts or styles

## License

Licensed under ARR-2025:dorukaysor

---

*Built with ❤️ for seamless access to educational content*