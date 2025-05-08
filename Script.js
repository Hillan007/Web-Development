// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const typingText = document.querySelector('.typing-text');

// Theme Toggle Functionality
// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'light-theme') {
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    
    // Toggle icon
    if (body.classList.contains('light-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light-theme');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', '');
    }
});

// Typing Animation
const texts = ['Web Developer', 'UI Designer', 'Photographer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? 100 : 200);
    }
}

// Start typing animation
typeText();

// Side Navigation Functionality
const expandBtn = document.querySelector('.expand');
const sideNav = document.querySelector('.side-nav');

expandBtn.addEventListener('click', () => {
    sideNav.classList.toggle('expanded');
});

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', () => {
    // Home button click handler
    document.querySelector('.home-link').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Other navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip for home link
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add scroll animation for elements
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
        document.querySelector('nav').classList.add('scrolled');
    } else {
        document.querySelector('nav').classList.remove('scrolled');
    }
});
