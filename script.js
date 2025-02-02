// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// Close menu on click outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        document.querySelector('nav').classList.remove('active');
    }
});