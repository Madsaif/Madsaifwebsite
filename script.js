document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu toggle

    const menuBtn =
    document.getElementById('mobileMenuBtn');

    const navMenu =
    document.getElementById('navMenu');

    if (menuBtn) {

        menuBtn.addEventListener('click', () => {

            navMenu.classList.toggle('active');

            const icon =
            menuBtn.querySelector('i');

            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');

        });

    }

    // Set active nav link based on current page

    function setActiveNav(){

        const links =
        document.querySelectorAll('.nav-link');

        let currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .replace(".html","")
        .toLowerCase();

        if(currentPage === ""){
            currentPage = "index";
        }

       // Founder page will highlight About

        if(currentPage === "founder"){
            currentPage = "founder";
        }

        links.forEach(link => {

            link.classList.remove('active');

            if(
                link.dataset.page === currentPage
            ){
                link.classList.add('active');
            }

        });

    }

    setActiveNav(); 


    // Typing effect for home page

    const typingEl =
    document.getElementById('typingText');

    if (typingEl) {

        const words = [
            'AI-powered Apps ',
            'Casual Games ',
            'Smart Solutions ',
			'Tech Environment ',
            'Futuristic Tech '
        ];

        let i = 0,
            j = 0,
            isDeleting = false;

        function typeEffect() {

            let currentWord = words[i];

            if (isDeleting)
                typingEl.textContent =
                currentWord.substring(0, j--);

            else
                typingEl.textContent =
                currentWord.substring(0, j++);

            if (!isDeleting &&
                j === currentWord.length) {

                isDeleting = true;

                setTimeout(typeEffect, 1500);

            }

            else if (isDeleting && j === 0) {

                isDeleting = false;

                i = (i + 1) % words.length;

                setTimeout(typeEffect, 200);

            }

            else {

                setTimeout(typeEffect, 100);

            }

        }

        typeEffect();

    }

    // Particle network canvas

    const canvas =
    document.getElementById('particleCanvas');

    if (canvas) {

        let ctx = canvas.getContext('2d');

        let width = window.innerWidth,
            height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        let particleCount = 80;

        if (width < 768)
            particleCount = 35;

        else if (width < 1024)
            particleCount = 60;

        else
            particleCount = 90;

        let particles = [];

        for (let i = 0; i < particleCount; i++) {

            particles.push({

                x: Math.random() * width,
                y: Math.random() * height,

                radius:
                Math.random() * 2 + 1,

                dx:
                (Math.random() - 0.5) * 0.6,

                dy:
                (Math.random() - 0.5) * 0.6

            });

        }

        function drawParticles() {

            if (!ctx) return;

            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = '#E91E63';

            for (let p of particles) {

                ctx.beginPath();

                ctx.arc(
                    p.x,
                    p.y,
                    p.radius,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > width)
                    p.dx *= -1;

                if (p.y < 0 || p.y > height)
                    p.dy *= -1;

            }

            requestAnimationFrame(drawParticles);

        }

        drawParticles();

        window.addEventListener('resize', () => {

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width;
            canvas.height = height;

        });

    }

    // Scroll reveal

    const faders =
    document.querySelectorAll('.fade-up');

    const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting)
                entry.target.classList.add('appear');

        });

    }, { threshold: 0.2 });

    faders.forEach(el => observer.observe(el));

    // Current year in footer

    const yearSpan =
    document.getElementById('currentYear');

    if (yearSpan)
        yearSpan.textContent =
        new Date().getFullYear();

    // Close mobile menu when clicking nav link

    document.querySelectorAll('.nav-link')
    .forEach(link => {

        link.addEventListener('click', () => {

            if (
                navMenu &&
                navMenu.classList.contains('active')
            ) {

                navMenu.classList.remove('active');

                if (menuBtn) {

                    const icon =
                    menuBtn.querySelector('i');

                    icon.classList.add('fa-bars');

                    icon.classList.remove('fa-times');

                }

            }

        });

    });

});