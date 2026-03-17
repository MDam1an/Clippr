/* ══════════════════════════════════════
   nav.js — Clippr
   Comportamentos da navegação:
   - scroll shadow
   - hamburguer mobile
   - fechar menu ao clicar em link
══════════════════════════════════════ */

(function () {
  'use strict';

  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('nav-links');

  // ── Scroll: adiciona sombra na nav ──
  function onScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Hamburguer toggle ──
  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // ── Fechar menu ao clicar em link ──
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // ── Fechar menu ao redimensionar para desktop ──
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

})();
