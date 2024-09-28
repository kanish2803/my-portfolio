// Restart GIFs when revisited
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        const src = img.src;
        img.src = '';
        img.src = src;
    });
});

// Toggle navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
