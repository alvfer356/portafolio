document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.fa-bars');
    const navLinks = document.querySelector('.nav-links');

    hamburgerIcon.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});