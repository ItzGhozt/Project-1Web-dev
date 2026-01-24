// Main JavaScript - ES6 Module

function initVideoScroll() {
    const video = document.querySelector('.hero-video');
    const videoOverlay = document.querySelector('.video-overlay');
    const heroSection = document.querySelector('.hero');
    const navbar = document.querySelector('.navbar');
    
    if (!video || !videoOverlay || !heroSection) return;
    
    let isVideoPlaying = true;
    
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        const scrollThreshold = heroHeight * 0.2;
        
        // Navbar background change
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Video pause and gray effect
        if (scrollPosition > scrollThreshold && isVideoPlaying) {
            video.pause();
            video.classList.add('scrolled');
            videoOverlay.classList.add('active');
            isVideoPlaying = false;
        } else if (scrollPosition <= scrollThreshold && !isVideoPlaying) {
            video.play();
            video.classList.remove('scrolled');
            videoOverlay.classList.remove('active');
            isVideoPlaying = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
}

function init() {
    console.log('Portfolio initialized');
    
    // Initialize video scroll effect
    initVideoScroll();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', init);