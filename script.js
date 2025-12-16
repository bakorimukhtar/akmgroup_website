document.addEventListener('DOMContentLoaded', () => {
    
    // ---------------------------------------------------------
    // 1. MOBILE MENU TOGGLE
    // ---------------------------------------------------------
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ---------------------------------------------------------
    // 2. SCROLL ANIMATIONS
    // ---------------------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // ---------------------------------------------------------
    // 3. NAVBAR SCROLL SHADOW
    // ---------------------------------------------------------
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // ---------------------------------------------------------
    // 4. TYPING TEXT EFFECT (FIXED)
    // ---------------------------------------------------------
    const textElement = document.getElementById('typing-text');
    
    // Words to cycle through
    const words = ["Future", "Tomorrow", "World", "Economy", "Legacy", "Vision"];
    
    let wordIndex = 0;
    // STARTING POINT: We set the index to the length of "Future" (6)
    let charIndex = words[0].length; 
    // IMPORTANT FIX: We start in "deleting" mode because "Future" is already there
    let isDeleting = true; 
    
    let typeSpeed = 100;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Remove a character
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 100; // Deleting speed
        } else {
            // Add a character
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Typing speed
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Word is complete, pause before deleting
            isDeleting = true;
            typeSpeed = 2000; // Wait 2 seconds before deleting
        } else if (isDeleting && charIndex === 0) {
            // Deletion complete, switch to next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
            typeSpeed = 500; // Pause before typing new word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Only run if the element exists
    if (textElement) {
        // Wait 2 seconds before starting to delete the first word
        setTimeout(typeEffect, 2000);
    }

    console.log("AKM Group Modern Engine Loaded");
});