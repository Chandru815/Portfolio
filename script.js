// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Mobile Menu
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Certificate Modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];

function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

// Close modal when checking X
if (closeBtn) {
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
}

// Close modal when clicking outside the image
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add escape key listener
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
    }
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const words = ["Frontend Developer", "MERN Stack Learner"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Deleting speed
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150; // Typing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before next word
    }

    setTimeout(type, typeSpeed);
}

// Start typing animation
if (typingText) {
    type();
}

