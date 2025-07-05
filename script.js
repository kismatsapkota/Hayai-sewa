const hamburger = document.querySelector('.hamburger');
const mobileNav = document.getElementById('mobile-nav');
const mobileMenu = document.getElementById('mobile-menu');
const desktopNav = document.getElementById('desktop-nav');
const hamburgerNav = document.getElementById('hamburger-nav');

// Hamburger click toggles aria-expanded and mobile menu visibility
hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!isExpanded));

  // Toggle mobileNav display if it exists
  if (mobileNav) {
    if (mobileNav.style.display === 'flex') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'flex';
    }
  }

  // Also toggle mobileMenu hidden class if it exists
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
});

// Close mobile nav when clicking a link inside mobileNav
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Function to toggle nav display based on zoom (devicePixelRatio)
function toggleNavOnZoom() {
  const zoom = window.devicePixelRatio;

  if (zoom >= 1.75) {
    if (desktopNav) desktopNav.style.display = 'none';
    if (hamburgerNav) hamburgerNav.style.display = 'block';
  } else {
    if (desktopNav) desktopNav.style.display = 'flex';
    if (hamburgerNav) hamburgerNav.style.display = 'none';
  }
}

window.addEventListener('resize', toggleNavOnZoom);
window.addEventListener('load', toggleNavOnZoom);
