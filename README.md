# Clippr — Landing Page

Plataforma de gestão para barbearias brasileiras.

---

## 📁 Estrutura do Projeto

```
clippr/
├── index.html              # Página principal (landing page)
│
├── css/
│   ├── reset.css           # Reset de estilos cross-browser
│   ├── variables.css       # Tokens de design (cores, fontes, sombras)
│   ├── base.css            # Estilos globais, tipografia e botões
│   ├── nav.css             # Navegação sticky + menu mobile
│   ├── hero.css            # Seção hero com split diagonal e mock window
│   ├── strips.css          # Faixa de integrações
│   ├── features.css        # Funcionalidades com painel interativo
│   ├── preview.css         # Preview do painel em tema escuro
│   ├── pricing.css         # Cards de planos de preço
│   ├── faq.css             # Accordion de perguntas frequentes
│   ├── cta.css             # Seção CTA final
│   ├── footer.css          # Rodapé
│   ├── whatsapp.css        # Botão flutuante do WhatsApp
│   ├── animations.css      # Animações de entrada e scroll
│   └── responsive.css      # Breakpoints: tablet, mobile, mobile-sm
│
└── js/
    ├── nav.js              # Scroll shadow + hamburguer mobile
    ├── features.js         # Abas interativas do painel de preview
    ├── faq.js              # Accordion do FAQ
    └── reveal.js           # Scroll reveal (Intersection Observer)
```

---

## 🚀 Como usar

1. Abra o arquivo `index.html` em qualquer navegador moderno.
2. Não é necessário nenhum servidor ou dependência externa.
3. Todas as fontes são carregadas via Google Fonts (requer internet).

---

## ✏️ Personalização

### Número do WhatsApp
Busque por `wa.me/5511999999999` no `index.html` e substitua pelo número real.

### Preços
Edite os valores diretamente em `index.html`, na seção `#planos`.

### Cores
Todas as cores estão em `css/variables.css` como variáveis CSS. Altere ali e o site inteiro atualiza.

### Textos
Todos os textos estão no `index.html`, cada seção tem um comentário indicando do que se trata.

---

## 📱 Responsividade

O site é totalmente responsivo com 3 breakpoints:

| Breakpoint    | Largura     |
|---------------|-------------|
| Desktop       | > 1024px    |
| Tablet        | ≤ 1024px    |
| Mobile        | ≤ 768px     |
| Mobile pequeno| ≤ 480px     |

---

## 🗺️ Seções da Landing Page

1. **Nav** — Navegação fixa com âncoras e botão WhatsApp
2. **Hero** — Título, subtítulo, CTAs e mock do dashboard
3. **Integrações** — Faixa com WhatsApp, PIX, Google Agenda etc.
4. **Funcionalidades** — 4 features com painel interativo
5. **Preview do painel** — Simulação em tema escuro
6. **Planos** — Básico / Pro / Empresarial
7. **FAQ** — 6 perguntas com accordion
8. **CTA Final** — Chamada de conversão com WhatsApp
9. **Footer** — Links institucionais

---

## 🔮 Próximos passos

- [ ] Página de cadastro / onboarding
- [ ] Painel da barbearia (área logada)
- [ ] Integração com backend (Node.js / Firebase)
- [ ] Sistema de pagamento (Stripe / Mercado Pago)

---

Desenvolvido com ✂️ para barbearias brasileiras.
