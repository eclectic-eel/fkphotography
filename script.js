/* =============================================
   F.K. PHOTOGRAPHY — script.js
   ============================================= */

// ── Mobile menu ──────────────────────────────

function openMenu() {
  document.getElementById('navOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('navOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close menu on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeMenu();
});


// ── Fade-in on scroll ────────────────────────

const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, {
  threshold: 0.08
});

fadeEls.forEach(function (el) {
  observer.observe(el);
});
