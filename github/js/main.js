// BLACK Táxi Aéreo — interações do site
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (toggle && drawer) {
    const closeDrawer = () => {
      toggle.classList.remove('is-open');
      drawer.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    const openDrawer = () => {
      toggle.classList.add('is-open');
      drawer.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ---------- Contadores animados ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const animate = (el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = el.dataset.count.includes('.') ? 1 : 0;
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = decimals
          ? value.toFixed(decimals).replace('.', ',')
          : Math.round(value).toLocaleString('pt-BR');
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach((el) => observer.observe(el));
  }

  /* ---------- Formulário de contato (sem backend) ---------- */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = contactForm.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = 'Mensagem pronta para ser enviada — conecte este formulário a um e-mail ou CRM para ativar o envio.';
        feedback.hidden = false;
      }
      contactForm.reset();
    });
  }

  /* ---------- Formulário "vamos voar juntos" (placeholder) ---------- */
  const bookingForm = document.querySelector('.booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.location.href = 'fale-conosco.html';
    });
  }

  /* ---------- Ano no rodapé ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Scroll reveal (fade + translate ao entrar na tela) ---------- */
  const revealSelector = [
    'main section .card',
    'main section .fleet-card',
    'main section .testimonial',
    'main section .news-card',
    'main section .pillar',
    '.split > div',
    '.split > .photo-duo',
    '.split > .media-frame',
    '.split > img',
    '.section-head',
    '.stats-headline',
    '.stats-grid',
    '.contact-info',
    'form.contact-form',
    '.empty-state'
  ].join(', ');

  const revealEls = document.querySelectorAll(revealSelector);
  if (revealEls.length && 'IntersectionObserver' in window) {
    revealEls.forEach((el, i) => {
      el.classList.add('reveal-init');
      el.style.transitionDelay = `${Math.min(i % 3, 2) * 0.12}s`;
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ---------- Parallax sutil no fundo da stats-band ---------- */
  const parallaxBg = document.querySelector('.stats-bg');
  if (parallaxBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    const updateParallax = () => {
      const rect = parallaxBg.parentElement.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = (progress - 0.5) * 60;
      parallaxBg.style.transform = `translateY(${offset}px)`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    updateParallax();
  }
});
