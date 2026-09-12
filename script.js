document.querySelectorAll('.features, .history, .site-footer').forEach((el) => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const sections = document.querySelectorAll('main section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav__link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach((section) => navObserver.observe(section));

// --- Защита от копирования (демо-версия для клиента) ---
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  const blockedCombo =
    (e.ctrlKey && ['U', 'S', 'C'].includes(key)) ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(key)) ||
    key === 'F12';

  if (blockedCombo) e.preventDefault();
});
