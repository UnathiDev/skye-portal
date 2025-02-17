// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Add 'visible' class to elements with fade-in-up class
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(element => {
        element.classList.add('visible');
    });
});

// Function to toggle the navigation menu on small screens
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();  // Disable right-click context menu
});

document.addEventListener('keydown', function (e) {
    // Disable Ctrl+C, Ctrl+X, Ctrl+V, and other shortcuts
    if ((e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'v')) || e.key === 'Insert') {
        e.preventDefault();
    }
});
