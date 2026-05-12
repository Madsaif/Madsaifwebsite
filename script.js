const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const path = window.location.pathname;
    let currentPage = 'index';
    if (path.includes('apps') || path.includes('messtracker') || path.includes('businessmanagement') || path.includes('todo')) {
        currentPage = 'apps';
    } else if (path.includes('services')) {
        currentPage = 'services';
    } else if (path.includes('about')) {
        currentPage = 'about';
    } else if (path.includes('contact')) {
        currentPage = 'contact';
    }
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.querySelector('#mobileMenuBtn i').classList.add('fa-bars');
            document.querySelector('#mobileMenuBtn i').classList.remove('fa-times');
        }
    });
});

const yearSpan = document.getElementById('currentYear');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', setActiveNavLink);