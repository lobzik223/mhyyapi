// Mobile Menu Script
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    console.log('Mobile menu elements:', { mobileMenuToggle, navLinks });
    console.log('Window width:', window.innerWidth);
    console.log('Mobile menu toggle display:', mobileMenuToggle ? mobileMenuToggle.style.display : 'not found');
    console.log('Mobile menu toggle computed style:', mobileMenuToggle ? getComputedStyle(mobileMenuToggle).display : 'not found');
    
    if (mobileMenuToggle && navLinks) {
        // Show mobile menu toggle on mobile devices
        function showMobileMenu() {
            if (window.innerWidth <= 1024) {
                mobileMenuToggle.style.display = 'flex';
                mobileMenuToggle.style.visibility = 'visible';
                mobileMenuToggle.style.opacity = '1';
                mobileMenuToggle.style.position = 'relative';
                mobileMenuToggle.style.zIndex = '1002';
                console.log('Mobile menu toggle shown');
            } else {
                mobileMenuToggle.style.display = 'none';
                console.log('Mobile menu toggle hidden');
            }
        }
        
        // Initial check
        showMobileMenu();
        
        // Force show mobile menu toggle immediately
        if (window.innerWidth <= 1024) {
            mobileMenuToggle.style.setProperty('display', 'flex', 'important');
            mobileMenuToggle.style.setProperty('visibility', 'visible', 'important');
            mobileMenuToggle.style.setProperty('opacity', '1', 'important');
            console.log('Mobile menu toggle forced to show');
        }
        
        // Force hide nav-links on mobile
        function hideNavLinks() {
            if (window.innerWidth <= 1024) {
                navLinks.style.display = 'none';
                navLinks.classList.remove('active');
                console.log('Nav links hidden on mobile');
            }
        }
        
        hideNavLinks();
        
        // Check on resize
        window.addEventListener('resize', function() {
            showMobileMenu();
            hideNavLinks();
        });
        
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu toggle clicked');
            
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Add animation delay for smooth transition
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                setTimeout(() => {
                    navLinks.style.opacity = '1';
                    navLinks.style.transform = 'translateY(0)';
                }, 10);
            } else {
                navLinks.style.opacity = '0';
                navLinks.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    navLinks.style.display = 'none';
                }, 300);
            }
        });
        
        // Close menu when clicking on a link
        const navLinkItems = navLinks.querySelectorAll('.nav-link');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function(e) {
                console.log('Nav link clicked:', this.href);
                
                // Close menu with animation
                navLinks.style.opacity = '0';
                navLinks.style.transform = 'translateY(-20px)';
                mobileMenuToggle.classList.remove('active');
                
                setTimeout(() => {
                    navLinks.classList.remove('active');
                    navLinks.style.display = 'none';
                }, 300);
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                if (navLinks.classList.contains('active')) {
                    navLinks.style.opacity = '0';
                    navLinks.style.transform = 'translateY(-20px)';
                    mobileMenuToggle.classList.remove('active');
                    
                    setTimeout(() => {
                        navLinks.classList.remove('active');
                        navLinks.style.display = 'none';
                    }, 300);
                }
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.style.opacity = '0';
                navLinks.style.transform = 'translateY(-20px)';
                mobileMenuToggle.classList.remove('active');
                
                setTimeout(() => {
                    navLinks.classList.remove('active');
                    navLinks.style.display = 'none';
                }, 300);
            }
        });
    } else {
        console.error('Mobile menu elements not found');
    }
});
