/* ══════════════════════════════════════
   reveal.js — Clippr
   Animação de entrada dos elementos
   ao fazer scroll (Intersection Observer)
══════════════════════════════════════ */

(function () {
  'use strict';

  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(function (el) {
    observer.observe(el);
  });

})();
