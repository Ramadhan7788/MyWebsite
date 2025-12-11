// static/js/main.js - Final working version
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    const navOverlay = document.getElementById('navOverlay');

    // Function to open menu
    function openMenu() {
        mainNav.classList.add('active');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling

        // Change icon
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }

    // Function to close menu
    function closeMenu() {
        mainNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling

        // Change icon
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

    // Toggle menu on button click
    if (navToggle && mainNav && navOverlay) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();

            if (mainNav.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close menu when clicking overlay
        navOverlay.addEventListener('click', closeMenu);

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // Highlight active page
    const currentPath = window.location.pathname;
    const allNavLinks = document.querySelectorAll('.nav__link');

    allNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});