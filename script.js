/* ============================================
   PetPark V2 - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCarousel();
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

/* ----- 2. Review Carousel ----- */
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const cards = track.querySelectorAll('.review-card');

  if (cards.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  function getVisibleCount() {
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1200) return 2;
    return 3;
  }

  function getCardWidth() {
    const card = cards[0];
    const gap = 20;
    return card.offsetWidth + gap;
  }

  function maxIndex() {
    return Math.max(0, cards.length - getVisibleCount());
  }

  function slideTo(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex()));
    const offset = currentIndex * getCardWidth();
    track.style.transform = `translateX(-${offset}px)`;
  }

  function next() {
    slideTo(currentIndex >= maxIndex() ? 0 : currentIndex + 1);
  }

  function prev() {
    slideTo(currentIndex <= 0 ? maxIndex() : currentIndex - 1);
  }

  prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
  nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

  // Autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(next, 4000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  carousel.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  carousel.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(autoplayTimer);
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev();
    }
    startAutoplay();
  }, { passive: true });

  // Recalculate on resize
  window.addEventListener('resize', () => slideTo(currentIndex));

  startAutoplay();
}

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
