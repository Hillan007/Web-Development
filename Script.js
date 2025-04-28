// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const typingText = document.querySelector('.typing-text');

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
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

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
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