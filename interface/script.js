// Ambience Interface JavaScript
console.log('Ambience starting');

// Configuration for subjects
const subjects = {
    'cpp': {
        title: 'C++ Programming',
        file: '../record/cpp/README.md',
        icon: 'code'
    },
    'dsa': {
        title: 'Data Structures & Algorithms', 
        file: '../record/dsa/README.md',
        icon: 'account_tree'
    },
    'de': {
        title: 'Digital Electronics',
        file: '../record/de/README.md', 
        icon: 'electrical_services'
    }
};

let currentPath = 'home';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    loadNavigation();
    loadHome();
});

// Load navigation menu
function loadNavigation() {
    const navTree = document.getElementById('navTree');
    navTree.innerHTML = '';
    
    // Home link
    const homeItem = document.createElement('div');
    homeItem.className = 'nav-item';
    homeItem.innerHTML = '<div class="nav-link active" data-nav-id="home" onclick="loadHome()"><span class="material-icons">home</span><span>Home</span></div>';
    navTree.appendChild(homeItem);
    
    // Subject links
    for (const [key, subject] of Object.entries(subjects)) {
        const item = document.createElement('div');
        item.className = 'nav-item';
        item.innerHTML = '<div class="nav-link" data-nav-id="' + key + '" onclick="loadSubject(\'' + key + '\')"><span class="material-icons">' + subject.icon + '</span><span>' + subject.title + '</span></div>';
        navTree.appendChild(item);
    }
}

// Load home page
async function loadHome() {
    console.log('Loading home');
    showLoading(true);
    setActive('home');
    updateTitle('Welcome to Ambience');
    
    try {
        const response = await fetch('../README.md');
        const content = await response.text();
        displayMarkdown(content);
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to load home page');
    }
    
    showLoading(false);
}

// Load subject page  
async function loadSubject(subjectKey) {
    console.log('Loading subject:', subjectKey);
    showLoading(true);
    setActive(subjectKey);
    updateTitle(subjects[subjectKey].title);
    
    try {
        const response = await fetch(subjects[subjectKey].file);
        const content = await response.text();
        displayMarkdown(content);
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to load ' + subjects[subjectKey].title);
    }
    
    showLoading(false);
}

// Display markdown content
function displayMarkdown(content) {
    const contentBody = document.getElementById('contentBody');
    
    try {
        const html = marked.parse(content);
        const clean = DOMPurify.sanitize(html);
        contentBody.innerHTML = '<div class="markdown-body">' + clean + '</div>';
    } catch (error) {
        console.error('Error:', error);
        showError('Failed to display content');
    }
}

// Utility functions
function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = show ? 'flex' : 'none';
}

function showError(message) {
    const contentBody = document.getElementById('contentBody');
    contentBody.innerHTML = '<div style="text-align: center; padding: 40px;"><h3>Error</h3><p>' + message + '</p><button onclick="refreshContent()">Try Again</button></div>';
}

function setActive(navId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector('[data-nav-id="' + navId + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function updateTitle(title) {
    document.getElementById('pageTitle').textContent = title;
    document.title = title + ' - Ambience';
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function refreshContent() {
    if (currentPath === 'home') {
        loadHome();
    } else {
        loadSubject(currentPath);
    }
}

// Make functions available globally
window.navigateHome = loadHome;
window.loadSubject = loadSubject;
window.toggleSidebar = toggleSidebar;
window.refreshContent = refreshContent;

console.log('Ambience loaded successfully');
