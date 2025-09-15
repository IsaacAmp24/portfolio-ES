// js/script.js

// =====================
//  Menú hamburguesa
// =====================
const navToggle = document.querySelector('.nav-toggle');
const navList   = document.getElementById('primary-navigation');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  // Cerrar menú al hacer clic en un enlace (mobile)
  document.querySelectorAll('#primary-navigation a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('open')) {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (navList.classList.contains('open') && !e.target.closest('.navbar')) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('open')) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}

// =====================
//  Scroll suave
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// =====================
//  Header fijo con hide/show en scroll
// =====================
const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // 🔽 Desplazamiento hacia abajo → ocultar
      navbar.classList.add('hide');
    } else {
      // 🔼 Desplazamiento hacia arriba → mostrar
      navbar.classList.remove('hide');
    }

    lastScrollY = currentScrollY;
  });
}
