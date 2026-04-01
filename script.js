// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Tab Navigation System
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Function to switch tabs
function switchTab(targetId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === targetId) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    }
    
    // Scroll to top of the section
    window.scrollTo({
        top: 80,
        behavior: 'smooth'
    });
}

// Add click event to all nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        switchTab(targetId);
    });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize the page with Home section active
window.addEventListener('DOMContentLoaded', () => {
    // Check if there's a hash in the URL
    const hash = window.location.hash.substring(1);
    const validSections = ['home', 'products', 'features', 'about', 'contact'];
    
    if (hash && validSections.includes(hash)) {
        switchTab(hash);
    } else {
        switchTab('home');
    }
});