function linkBlank() {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', () => {
      const link = button.getAttribute('data-link');
      if (link) {
        window.location.href = link;
      }
    });
  });
}

linkBlank();

function initScrollSmoothAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length > 0) {
    function animationScroll() {
      const middleTop = window.innerHeight * 0.4;
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const inSectionVisible = middleTop - sectionTop > 0;
        if (inSectionVisible) section.classList.add('active');
        else {
          section.classList.remove('active');
        }
      });
    }
  }
  animationScroll();
  window.addEventListener('scroll', animationScroll);
}

initScrollSmoothAnimation();
