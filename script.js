// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Hero Swiper
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll to top when clicking logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    
    // Handle mobile menu icon click
    if (mobileMenuIcon && mobileMenu) {
        mobileMenuIcon.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu when clicking on links
        const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Form handling (if forms exist)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            alert('Form submitted successfully!');
        });
    });
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add smooth animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .stat-item, .benefit-item, .value-card, .team-member');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
