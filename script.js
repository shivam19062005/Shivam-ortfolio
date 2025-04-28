// Smooth scroll behavior for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create and handle back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Top';
backToTopButton.id = 'backToTop';
document.body.appendChild(backToTopButton);

// Button styles
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '40px';
backToTopButton.style.right = '40px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '18px';
backToTopButton.style.display = 'none';
backToTopButton.style.background = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '8px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.zIndex = '1000';

// Show/hide back-to-top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when button clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
