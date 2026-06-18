// On attend que toute la page HTML soit chargée
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav ul');

  // Menu hamburger
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('open');
    });

    // Fermer le menu au clic sur un lien
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('open');
      });
    });
  }

  // Animation au scroll
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

  if (elementsToAnimate.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    elementsToAnimate.forEach(el => observer.observe(el));
  }
});