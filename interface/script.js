// ====================================
// GLOBAL VARIABLES & CONFIGURATION
// ====================================
// GitHub Pages configuration
const GITHUB_CONFIG = {
    owner: 'iancarter-dev',
    repo: 'ambience',
    branch: 'main',
    baseUrl: window.location.hostname === 'localhost' ? '..' : '/ambience'
};

const CONFIG = {
    baseUrl: GITHUB_CONFIG.baseUrl,
    repositoryStructure: {
        home: {
            title: 'Ambience - Practical Records',
            file: `${GITHUB_CONFIG.baseUrl}/README.md`,
            icon: 'home'
        },
        subjects: {
            'cpp': {
                title: 'C++ Programming',
                file: `${GITHUB_CONFIG.baseUrl}/record/cpp/README.md`,
                icon: 'code',
                experiments: `${GITHUB_CONFIG.baseUrl}/record/cpp/experiments/`
            },
            'dsa': {
                title: 'Data Structures & Algorithms', 
                file: `${GITHUB_CONFIG.baseUrl}/record/dsa/README.md`,
                icon: 'account_tree',
                experiments: `${GITHUB_CONFIG.baseUrl}/record/dsa/experiments/`
            },
            'de': {
                title: 'Digital Electronics & Computer Organization',
                file: `${GITHUB_CONFIG.baseUrl}/record/de/README.md`, 
                icon: 'electrical_services',
                experiments: `${GITHUB_CONFIG.baseUrl}/record/de/experiments/`
            }
        }
    },
    hiddenFiles: ['experiments', 'LICENSE', 'S.md'],
    autoUpdateInterval: 60000, // 60 seconds for GitHub Pages
    animationDuration: 300,
    githubPages: true
};

let currentPath = '';
let navigationHistory = [];
let historyIndex = -1;
let lastUpdateTime = new Date();
let sidebarCollapsed = false;
let fabMenuOpen = false;

// ====================================
// INITIALIZATION
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    registerServiceWorker();
});

// ====================================
// SERVICE WORKER REGISTRATION
// ====================================
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const swPath = window.location.hostname === 'localhost' ? '/sw.js' : '/ambience/interface/sw.js';
            const registration = await navigator.serviceWorker.register(swPath);
            console.log('Service Worker registered successfully:', registration);
            
            // Handle service worker updates
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        // New service worker available
                        showUpdateNotification();
                    }
                });
            });
            
            // Handle messages from service worker
            navigator.serviceWorker.addEventListener('message', (event) => {
                console.log('Message from SW:', event.data);
            });
            
        } catch (error) {
            console.error('Service Worker registration failed:', error);
        }
    }
}

function showUpdateNotification() {
    // Create update notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: var(--bg-tertiary);
        color: var(--text-primary);
        padding: 16px 20px;
        border-radius: var(--border-radius);
        border-left: 4px solid var(--accent-primary);
        box-shadow: 0 4px 16px var(--shadow-medium);
        z-index: 10000;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
            <span class="material-icons" style="color: var(--accent-primary);">system_update</span>
            <strong>Update Available</strong>
        </div>
        <p style="margin: 0 0 12px 0; font-size: 14px; color: var(--text-secondary);">
            A new version of the site is available.
        </p>
        <div style="display: flex; gap: 8px;">
            <button onclick="applyUpdate()" style="
                background: var(--accent-primary);
                color: white;
                border: none;
                padding: 6px 12px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
            ">Update Now</button>
            <button onclick="this.closest('div').remove()" style="
                background: var(--bg-hover);
                color: var(--text-secondary);
                border: none;
                padding: 6px 12px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
            ">Later</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 10000);
}

function applyUpdate() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration && registration.waiting) {
                registration.waiting.postMessage({ action: 'skipWaiting' });
                window.location.reload();
            }
        });
    }
}

async function initializeApp() {
    try {
        showLoading(true);
        await loadNavigationTree();
        await navigateHome();
        setupEventListeners();
        startAutoUpdate();
        updateLastUpdatedTime();
        showLoading(false);
        
        // Add fade-in animation to main content
        document.querySelector('.main-content').classList.add('fade-in');
    } catch (error) {
        console.error('Failed to initialize app:', error);
        showError('Failed to initialize application');
    }
}

function setupEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Window resize handler
    window.addEventListener('resize', handleWindowResize);
    
    // Mobile sidebar handling
    if (window.innerWidth <= 768) {
        document.addEventListener('click', handleMobileClick);
    }
}

// ====================================
// NAVIGATION SYSTEM
// ====================================
async function loadNavigationTree() {
    const navTree = document.getElementById('navTree');
    navTree.innerHTML = '';
    
    // Home navigation item
    const homeItem = createNavItem('home', CONFIG.repositoryStructure.home.title, CONFIG.repositoryStructure.home.icon, () => navigateHome());
    navTree.appendChild(homeItem);
    
    // Subject navigation items
    for (const [key, subject] of Object.entries(CONFIG.repositoryStructure.subjects)) {
        const subjectItem = createNavItem(key, subject.title, subject.icon, () => navigateToSubject(key));
        navTree.appendChild(subjectItem);
    }
    
    // Add separator
    const separator = document.createElement('div');
    separator.style.cssText = 'height: 1px; background: var(--border-primary); margin: 16px 0;';
    navTree.appendChild(separator);
    
    // Additional navigation items
    const licenseItem = createNavItem('license', 'License', 'description', () => loadMarkdown('LICENSE'));
    navTree.appendChild(licenseItem);
}

function createNavItem(id, title, icon, clickHandler) {
    const item = document.createElement('div');
    item.className = 'nav-item';
    
    const link = document.createElement('div');
    link.className = 'nav-link';
    link.dataset.navId = id;
    link.onclick = clickHandler;
    
    link.innerHTML = `
        <span class="material-icons">${icon}</span>
        <span>${title}</span>
    `;
    
    item.appendChild(link);
    return item;
}

async function navigateHome() {
    try {
        showLoading(true);
        updateBreadcrumb([{ text: 'Home', icon: 'home', action: navigateHome }]);
        updatePageTitle('Welcome to Ambience');
        setActiveNavItem('home');
        
        const content = await loadMarkdownFile(CONFIG.repositoryStructure.home.file);
        await displayContent(content);
        
        currentPath = '';
        addToHistory('home', 'Home');
        showLoading(false);
    } catch (error) {
        console.error('Failed to navigate home:', error);
        showError('Failed to load home page');
    }
}

async function navigateToSubject(subjectKey) {
    try {
        showLoading(true);
        const subject = CONFIG.repositoryStructure.subjects[subjectKey];
        
        updateBreadcrumb([
            { text: 'Home', icon: 'home', action: navigateHome },
            { text: subject.title, icon: subject.icon, action: () => navigateToSubject(subjectKey) }
        ]);
        updatePageTitle(subject.title);
        setActiveNavItem(subjectKey);
        
        const content = await loadMarkdownFile(subject.file);
        const processedContent = await processSubjectContent(content, subject);
        await displayContent(processedContent);
        
        currentPath = subjectKey;
        addToHistory(subjectKey, subject.title);
        showLoading(false);
    } catch (error) {
        console.error(`Failed to navigate to subject ${subjectKey}:`, error);
        showError(`Failed to load ${subject.title}`);
    }
}

async function navigateToExperiment(subjectKey, experimentFile) {
    try {
        showLoading(true);
        const subject = CONFIG.repositoryStructure.subjects[subjectKey];
        const experimentPath = `${subject.experiments}${experimentFile}`;
        
        updateBreadcrumb([
            { text: 'Home', icon: 'home', action: navigateHome },
            { text: subject.title, icon: subject.icon, action: () => navigateToSubject(subjectKey) },
            { text: `Experiment ${experimentFile.replace('.md', '')}`, icon: 'assignment', action: () => navigateToExperiment(subjectKey, experimentFile) }
        ]);
        updatePageTitle(`${subject.title} - Experiment ${experimentFile.replace('.md', '')}`);
        setActiveNavItem(subjectKey);
        
        const content = await loadMarkdownFile(experimentPath);
        await displayContent(content);
        
        currentPath = `${subjectKey}/${experimentFile}`;
        addToHistory(`${subjectKey}/${experimentFile}`, `Experiment ${experimentFile.replace('.md', '')}`);
        showLoading(false);
    } catch (error) {
        console.error(`Failed to load experiment ${experimentFile}:`, error);
        showError(`Failed to load experiment ${experimentFile.replace('.md', '')}`);
    }
}

// ====================================
// MARKDOWN PROCESSING
// ====================================
async function loadMarkdownFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return await response.text();
    } catch (error) {
        console.error(`Failed to load markdown file ${filePath}:`, error);
        throw new Error(`Failed to load content from ${filePath}`);
    }
}

async function processSubjectContent(content, subject) {
    // Convert markdown links to JavaScript navigation
    return content.replace(
        /\[!\[exp_btn\][^\]]+\]\(experiments\/([^)]+)\)/g,
        (match, experimentFile) => {
            const buttonHtml = match.split('](')[0] + ']';
            return `<div class="experiment-button" onclick="navigateToExperiment('${currentPath}', '${experimentFile}')">${buttonHtml}</div>`;
        }
    );
}

async function displayContent(markdownContent) {
    const contentBody = document.getElementById('contentBody');
    
    try {
        // Configure marked options
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });
        
        // Parse markdown to HTML
        let html = marked.parse(markdownContent);
        
        // Sanitize HTML to prevent XSS
        html = DOMPurify.sanitize(html);
        
        // Process experiment buttons
        html = processExperimentButtons(html);
        
        // Add markdown-body class for styling
        contentBody.innerHTML = `<div class="markdown-body">${html}</div>`;
        
        // Add click handlers for experiment buttons
        addExperimentButtonHandlers();
        
        // Scroll to top
        contentBody.scrollTop = 0;
        
        // Add slide-in animation
        contentBody.classList.add('slide-in-right');
        setTimeout(() => {
            contentBody.classList.remove('slide-in-right');
        }, CONFIG.animationDuration);
        
    } catch (error) {
        console.error('Failed to display content:', error);
        contentBody.innerHTML = '<div class="bg-card text-center"><h3>Error Loading Content</h3><p>Failed to parse markdown content</p></div>';
    }
}

function processExperimentButtons(html) {
    // Convert shield.io badges to clickable experiment buttons
    return html.replace(
        /<img[^>]*src="[^"]*shields\.io[^"]*"[^>]*alt="([^"]*)"[^>]*>/g,
        (match, altText) => {
            if (altText.includes('exp_btn') || altText.includes('Experiment')) {
                return `<div class="experiment-button-wrapper">${match}</div>`;
            }
            return match;
        }
    );
}

function addExperimentButtonHandlers() {
    const experimentButtons = document.querySelectorAll('.experiment-button-wrapper img');
    experimentButtons.forEach(button => {
        button.style.cursor = 'pointer';
        button.addEventListener('click', (e) => {
            // Extract experiment number from the context
            const parentElement = e.target.closest('.experiment-button-wrapper').parentElement;
            const linkElement = parentElement.querySelector('a[href*="experiments/"]');
            if (linkElement) {
                const href = linkElement.getAttribute('href');
                const experimentFile = href.replace('experiments/', '');
                navigateToExperiment(currentPath, experimentFile);
            }
        });
    });
}

async function loadMarkdown(fileName) {
    try {
        showLoading(true);
        updateBreadcrumb([
            { text: 'Home', icon: 'home', action: navigateHome },
            { text: fileName, icon: 'description', action: () => loadMarkdown(fileName) }
        ]);
        updatePageTitle(fileName);
        
        const filePath = fileName.startsWith(CONFIG.baseUrl) ? fileName : `${CONFIG.baseUrl}/${fileName}`;
        const content = await loadMarkdownFile(filePath);
        await displayContent(content);
        
        currentPath = fileName;
        addToHistory(fileName, fileName);
        showLoading(false);
    } catch (error) {
        console.error(`Failed to load markdown ${fileName}:`, error);
        showError(`Failed to load ${fileName}`);
    }
}

// ====================================
// UI CONTROL FUNCTIONS
// ====================================
function updateBreadcrumb(items) {
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = '';
    
    items.forEach((item, index) => {
        const breadcrumbItem = document.createElement('span');
        breadcrumbItem.className = 'breadcrumb-item';
        if (index === items.length - 1) {
            breadcrumbItem.classList.add('active');
        }
        breadcrumbItem.onclick = item.action;
        
        breadcrumbItem.innerHTML = `
            <span class="material-icons">${item.icon}</span>
            ${item.text}
        `;
        
        breadcrumb.appendChild(breadcrumbItem);
        
        if (index < items.length - 1) {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = '>';
            breadcrumb.appendChild(separator);
        }
    });
}

function updatePageTitle(title) {
    document.getElementById('pageTitle').textContent = title;
    document.title = `${title} - Ambience`;
}

function setActiveNavItem(navId) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current nav item
    const activeItem = document.querySelector(`[data-nav-id="${navId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

function showLoading(show) {
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (show) {
        loadingSpinner.style.display = 'flex';
    } else {
        loadingSpinner.style.display = 'none';
    }
}

function showError(message) {
    const contentBody = document.getElementById('contentBody');
    contentBody.innerHTML = `
        <div class="bg-card text-center">
            <span class="material-icons" style="font-size: 48px; color: var(--accent-primary); margin-bottom: 16px;">error_outline</span>
            <h3>Error</h3>
            <p>${message}</p>
            <button class="action-btn" onclick="refreshContent()" style="margin-top: 16px; padding: 8px 16px; width: auto;">
                <span class="material-icons">refresh</span>
                Try Again
            </button>
        </div>
    `;
    showLoading(false);
}

// ====================================
// NAVIGATION HISTORY
// ====================================
function addToHistory(path, title) {
    // Remove any forward history if we're not at the end
    if (historyIndex < navigationHistory.length - 1) {
        navigationHistory = navigationHistory.slice(0, historyIndex + 1);
    }
    
    // Add new entry
    navigationHistory.push({ path, title, timestamp: Date.now() });
    historyIndex = navigationHistory.length - 1;
    
    // Limit history size
    if (navigationHistory.length > 50) {
        navigationHistory.shift();
        historyIndex--;
    }
}

function goBack() {
    if (historyIndex > 0) {
        historyIndex--;
        const historyItem = navigationHistory[historyIndex];
        navigateToPath(historyItem.path);
    }
}

function goForward() {
    if (historyIndex < navigationHistory.length - 1) {
        historyIndex++;
        const historyItem = navigationHistory[historyIndex];
        navigateToPath(historyItem.path);
    }
}

async function navigateToPath(path) {
    if (path === '' || path === 'home') {
        await navigateHome();
    } else if (path in CONFIG.repositoryStructure.subjects) {
        await navigateToSubject(path);
    } else if (path.includes('/')) {
        const [subject, experiment] = path.split('/');
        await navigateToExperiment(subject, experiment);
    } else {
        await loadMarkdown(path);
    }
}

// ====================================
// UI INTERACTION HANDLERS
// ====================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebarCollapsed = !sidebarCollapsed;
    
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
    } else {
        sidebar.classList.remove('collapsed');
    }
}

function toggleTheme() {
    // For future implementation of light/dark theme toggle
    console.log('Theme toggle clicked - future feature');
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function toggleFab() {
    const fab = document.getElementById('fab');
    const fabMenu = document.getElementById('fabMenu');
    
    fabMenuOpen = !fabMenuOpen;
    
    if (fabMenuOpen) {
        fab.classList.add('active');
        fabMenu.classList.add('active');
    } else {
        fab.classList.remove('active');
        fabMenu.classList.remove('active');
    }
}

function scrollToTop() {
    const contentBody = document.getElementById('contentBody');
    contentBody.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    toggleFab(); // Close FAB menu
}

async function refreshContent() {
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.classList.add('spinning');
    
    try {
        // Reload current content
        await navigateToPath(currentPath);
        updateLastUpdatedTime();
    } catch (error) {
        console.error('Failed to refresh content:', error);
        showError('Failed to refresh content');
    } finally {
        setTimeout(() => {
            refreshBtn.classList.remove('spinning');
        }, 1000);
    }
}

// ====================================
// AUTO-UPDATE MECHANISM
// ====================================
function startAutoUpdate() {
    setInterval(async () => {
        try {
            await checkForUpdates();
        } catch (error) {
            console.error('Auto-update check failed:', error);
        }
    }, CONFIG.autoUpdateInterval);
}

async function checkForUpdates() {
    // Simple implementation: check if files have been modified
    // In a real implementation, you might check file modification times
    // or use a webhook/polling mechanism
    const currentTime = new Date();
    
    // For now, just update the last updated time
    // This could be enhanced to actually check for file changes
    if (Math.random() < 0.1) { // 10% chance to simulate update
        updateLastUpdatedTime();
    }
}

function updateLastUpdatedTime() {
    lastUpdateTime = new Date();
    const lastUpdatedElement = document.getElementById('lastUpdated');
    lastUpdatedElement.textContent = `Last updated: ${lastUpdateTime.toLocaleString()}`;
}

// ====================================
// EVENT HANDLERS
// ====================================
function handleKeyboardShortcuts(event) {
    // Ctrl/Cmd + R: Refresh
    if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
        event.preventDefault();
        refreshContent();
    }
    
    // Alt + Left: Go back
    if (event.altKey && event.key === 'ArrowLeft') {
        event.preventDefault();
        goBack();
    }
    
    // Alt + Right: Go forward
    if (event.altKey && event.key === 'ArrowRight') {
        event.preventDefault();
        goForward();
    }
    
    // Ctrl/Cmd + Home: Go to home
    if ((event.ctrlKey || event.metaKey) && event.key === 'Home') {
        event.preventDefault();
        navigateHome();
    }
    
    // Escape: Close FAB menu
    if (event.key === 'Escape' && fabMenuOpen) {
        toggleFab();
    }
}

function handleWindowResize() {
    const sidebar = document.getElementById('sidebar');
    
    if (window.innerWidth <= 768) {
        // Mobile view
        if (!sidebar.classList.contains('mobile-hidden')) {
            sidebar.classList.add('mobile-hidden');
        }
    } else {
        // Desktop view
        sidebar.classList.remove('mobile-hidden', 'open');
    }
}

function handleMobileClick(event) {
    const sidebar = document.getElementById('sidebar');
    const isClickInSidebar = sidebar.contains(event.target);
    const isClickOnToggle = event.target.closest('.sidebar-toggle');
    
    if (!isClickInSidebar && !isClickOnToggle && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
}

// ====================================
// UTILITY FUNCTIONS
// ====================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ====================================
// PERFORMANCE OPTIMIZATION
// ====================================
// Debounced window resize handler
const debouncedResize = debounce(handleWindowResize, 250);
window.addEventListener('resize', debouncedResize);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animations when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.bg-card, .nav-item');
    animateElements.forEach(el => fadeInObserver.observe(el));
});

// ====================================
// ERROR HANDLING
// ====================================
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // You could implement error reporting here
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
    // You could implement error reporting here
});

// ====================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ====================================
window.navigateHome = navigateHome;
window.navigateToSubject = navigateToSubject;
window.navigateToExperiment = navigateToExperiment;
window.loadMarkdown = loadMarkdown;
window.toggleSidebar = toggleSidebar;
window.toggleTheme = toggleTheme;
window.toggleFullscreen = toggleFullscreen;
window.toggleFab = toggleFab;
window.scrollToTop = scrollToTop;
window.refreshContent = refreshContent;
window.goBack = goBack;
window.goForward = goForward;
window.applyUpdate = applyUpdate;