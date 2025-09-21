// Global variables
let isResponseVisible = false;

// Page navigation function
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Toggle response text on Page 1
function toggleResponse() {
    const responseText = document.getElementById('responseText');
    isResponseVisible = !isResponseVisible;
    
    if (isResponseVisible) {
        responseText.classList.add('show');
    } else {
        responseText.classList.remove('show');
    }
}

// Show user info alert on Page 3
function showInfo() {
    alert('avantika sanyal 240905648');
}

// Initialize page when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial page
    showPage('page1');
    
    // Add click event listeners for navigation if needed
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const pageId = 'page' + (index + 1);
            showPage(pageId);
        });
    });
});

// Additional animations and interactions
function addHoverEffects() {
    // Add hover effects to image cards
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0px) scale(1)';
        });
    });
}

// Call additional functions when page loads
window.addEventListener('load', function() {
    addHoverEffects();
    
    // Add smooth scrolling effect
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Adjust layout if needed
    const width = window.innerWidth;
    if (width < 768) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    const currentPage = document.querySelector('.page.active');
    const currentPageId = currentPage.id;
    
    // Navigate with arrow keys
    if (event.key === 'ArrowLeft') {
        if (currentPageId === 'page2') showPage('page1');
        if (currentPageId === 'page3') showPage('page2');
    } else if (event.key === 'ArrowRight') {
        if (currentPageId === 'page1') showPage('page2');
        if (currentPageId === 'page2') showPage('page3');
    }
    
    // Space bar to trigger button on current page
    if (event.code === 'Space') {
        event.preventDefault();
        if (currentPageId === 'page1') {
            toggleResponse();
        } else if (currentPageId === 'page3') {
            showInfo();
        }
    }
});