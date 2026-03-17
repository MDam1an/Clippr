/* ══════════════════════════════════════
   features.js — Clippr
   Controla as abas interativas do
   painel de preview de funcionalidades
══════════════════════════════════════ */

(function () {
  'use strict';

  // ── Abas do painel de preview ──
  const tabs     = document.querySelectorAll('.fpt');
  const panels   = document.querySelectorAll('.pv-panel');
  const featItems = document.querySelectorAll('.feat-item');

  /**
   * Ativa uma aba e o painel correspondente.
   * @param {string} tabName - valor do atributo data-tab
   */
  function setActiveTab(tabName) {
    // Abas
    tabs.forEach(function (t) {
      t.classList.toggle('active', t.dataset.tab === tabName);
    });

    // Painéis
    panels.forEach(function (p) {
      p.classList.toggle('active', p.id === 'pv-' + tabName);
    });
  }

  // Clique nas abas do preview
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      setActiveTab(tab.dataset.tab);
    });
  });

  // Clique nos itens da lista de features (lado esquerdo)
  featItems.forEach(function (item) {
    item.addEventListener('click', function () {
      setActiveTab(item.dataset.tab);
      // Scroll suave para o preview em mobile
      if (window.innerWidth < 1024) {
        const preview = document.querySelector('.feat-preview');
        if (preview) {
          preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

})();
