// === SoniTrace Scripts — Based on StartBootstrap Agency ===

// Shrink navbar on scroll
function navbarShrink() {
  const navbar = document.getElementById('mainNav');
  if (!navbar) return;
  if (window.scrollY === 0) {
    navbar.classList.remove('navbar-shrink');
  } else {
    navbar.classList.add('navbar-shrink');
  }
}
navbarShrink();
window.addEventListener('scroll', navbarShrink);

// Activate Bootstrap ScrollSpy
const mainNav = document.getElementById('mainNav');
if (mainNav) {
  new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    offset: 74,
  });
}

// Collapse responsive navbar when a nav link is clicked
const navbarToggler = document.querySelector('.navbar-toggler');
const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click();
    }
  });
});

// Simple client-side contact form handling
const form = document.getElementById('contactForm');
if (form) {
  const success = document.getElementById('submitSuccessMessage');
  const error = document.getElementById('submitErrorMessage');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('was-validated');
    if (!form.checkValidity()) {
      error.classList.remove('d-none');
      success.classList.add('d-none');
      return;
    }
    error.classList.add('d-none');
    success.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
  });
}
