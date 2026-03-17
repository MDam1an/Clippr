/* ══════════════════════════════════════
   faq.js — Clippr
   Accordion de perguntas frequentes:
   - abre/fecha ao clicar
   - só um item aberto por vez
   - acessibilidade aria-expanded
══════════════════════════════════════ */

(function () {
  'use strict';

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const btn = item.querySelector('.faq-question');

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Fecha todos os outros
      faqItems.forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-question')
             .setAttribute('aria-expanded', 'false');
      });

      // Abre o clicado (toggle)
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

})();
