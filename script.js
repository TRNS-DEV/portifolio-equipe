document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  // Alterna menu em telas pequenas
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Rola suavemente ao clicar nos links do menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Fecha o menu mobile se estiver aberto
      navMenu.classList.remove('active');

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});