/* filepath: /C:/Users/surya/OneDrive/Documents/GitHub/Basic-Website/Basic-Website/js/homeNav.js */
document.addEventListener('DOMContentLoaded', function() {
    const navTrigger = document.querySelector('.navTrigger');
    const mainListDiv = document.querySelector('#mainListDiv');
    const navLinks = document.querySelectorAll('.navlinks li a');

    // Toggle menu
    navTrigger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainListDiv.classList.toggle('show_list');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navTrigger.classList.remove('active');
            mainListDiv.classList.remove('show_list');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mainListDiv.contains(e.target) && !navTrigger.contains(e.target)) {
            navTrigger.classList.remove('active');
            mainListDiv.classList.remove('show_list');
        }
    });

    // Add scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const nav = document.querySelector('.nav');

        if (currentScroll <= 0) {
            nav.style.top = "0";
            return;
        }
        
        if (currentScroll > lastScroll) {
            // Scrolling down
            nav.style.top = "-65px";
        } else {
            // Scrolling up
            nav.style.top = "0";
        }
        lastScroll = currentScroll;
    });
});