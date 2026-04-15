/* ============================================
   PetPark V2 - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initHeader();
  initEventStrip();
});

/* ----- 1. Scroll Reveal ----- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* ----- 2. Testimonials Columns (pure CSS animation, no JS needed) ----- */

/* ----- 3. Header ----- */
function initHeader() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.overlay');
  const mobileNavClose = document.querySelector('.mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

  // Scroll shadow
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 0);
    }, { passive: true });
  }

  // Hamburger toggle
  function openMenu() {
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));
}

/* ----- 4. Event Strip Rotation (Mobile) ----- */
function initEventStrip() {
  const items = document.querySelectorAll('.strip-item');
  if (items.length <= 1) return;

  let activeIndex = 0;

  setInterval(() => {
    if (window.innerWidth > 767) return;

    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % items.length;
    items[activeIndex].classList.add('active');
  }, 3000);
}
