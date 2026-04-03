document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const navCta = document.getElementById('nav-cta');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            navCta.style.display = 'inline-flex';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
            navCta.style.display = 'none';
        }
    });

    // Mobile Hamburger Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('ion-icon');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('name', 'close-outline');
        } else {
            icon.setAttribute('name', 'menu-outline');
        }
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('ion-icon').setAttribute('name', 'menu-outline');
        });
    });

    // Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
});
