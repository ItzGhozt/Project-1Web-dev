// Main JavaScript - ES6 Module

function initScrollAnimation() {
    const aboutSection = document.querySelector('.about-section');
    
    if (!aboutSection) return;
    
    // Create Intersection Observer to detect when About Me enters viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });
    
    observer.observe(aboutSection);
}

function init() {
    console.log('Portfolio initialized');
    initScrollAnimation();
}

document.addEventListener('DOMContentLoaded', init);