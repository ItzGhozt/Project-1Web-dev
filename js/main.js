// Main JavaScript - ES6 Module

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
            setTimeout(typeCharacter, 80);
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

function init() {
    console.log('Portfolio initialized');
    initTypingAnimation();
}

document.addEventListener('DOMContentLoaded', init);