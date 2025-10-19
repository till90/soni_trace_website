// Activate Bootstrap scrollspy for active nav highlighting
const mainNav = document.getElementById('mainNav');
if (mainNav) {
  new bootstrap.ScrollSpy(document.body, { target: '#mainNav', offset: 80 });
}

// Collapse responsive navbar when a nav link is clicked
const navbarToggler = document.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
responsiveNavItems.map(function (navItem) {
  navItem.addEventListener('click', () => {
    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      navbarToggler.click();
    }
  });
});

// Simple client-side form validation + fake success
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      document.getElementById('submitErrorMessage').classList.remove('d-none');
      return;
    }
    document.getElementById('submitErrorMessage').classList.add('d-none');
    document.getElementById('submitSuccessMessage').classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
  }, false);
}