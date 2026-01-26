// Main JavaScript - ES6 Module

function initPageIndicators() {
    const indicators = document.querySelector('.page-indicators');
    const videoIndicator = document.querySelector('[data-section="video"]');
    const aboutIndicator = document.querySelector('[data-section="about"]');
    const videoSection = document.querySelector('.hero-video-section');
    const aboutSection = document.querySelector('.about-section');
    const navbar = document.querySelector('.navbar');
    const instagramLogo = document.querySelector('.instagram-logo');
    
    if (!indicators || !videoIndicator || !aboutIndicator) return;
    
    let scrollTimeout;
    
    function updateActiveIndicator() {
        const scrollPosition = window.scrollY;
        const videoHeight = videoSection.offsetHeight;
        
        if (scrollPosition < videoHeight / 2) {
            videoIndicator.classList.add('active');
            aboutIndicator.classList.remove('active');
            navbar.classList.remove('dark-text');
            if (instagramLogo) {
                instagramLogo.src = 'images/instagram_logoW.png';
            }
        } else {
            videoIndicator.classList.remove('active');
            aboutIndicator.classList.add('active');
            navbar.classList.add('dark-text');
            if (instagramLogo) {
                instagramLogo.src = 'images/instagram_logoB.png';
            }
        }
    }
    
    function showIndicators() {
        indicators.classList.add('show');
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            indicators.classList.remove('show');
        }, 2000);
    }
    
    function handleScroll() {
        showIndicators();
        updateActiveIndicator();
    }
    
    window.addEventListener('scroll', handleScroll);
    updateActiveIndicator();
    
    videoIndicator.addEventListener('click', () => {
        videoSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    aboutIndicator.addEventListener('click', () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}

function initTypingAnimation() {
    const aboutText = document.querySelector('.about-text');
    
    if (!aboutText) return;
    
    const fullText = aboutText.textContent;
    aboutText.textContent = '';
    
    let charIndex = 0;
    let hasStarted = false;
    
    function typeCharacter() {
        if (charIndex < fullText.length) {
            aboutText.textContent += fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, 65);
        }
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                hasStarted = true;
                typeCharacter();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

function initLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const imageGridImages = document.querySelectorAll('.image-grid img');
    const masonryImages = document.querySelectorAll('.masonry-item img');
    
    if (!lightbox || !lightboxImage || !lightboxClose) return;
    
    const allImages = [...imageGridImages, ...masonryImages];
    
    allImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add('active');
        });
    });
    
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

function init() {
    console.log('Portfolio initialized');
    initPageIndicators();
    initTypingAnimation();
    initLightbox();
}

document.addEventListener('DOMContentLoaded', init);