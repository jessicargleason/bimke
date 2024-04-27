const button = document.getElementById('nav-button');
const nav = document.getElementById('nav');
const isDesktop = window.matchMedia("(min-width: 1024px)");

if (!isDesktop.matches) {
    nav.setAttribute('aria-expanded', 'false');
} else {
    nav.setAttribute('aria-expanded', 'true');
}

button.addEventListener('click', function() {
    const isNavOpen = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', !isNavOpen);
});