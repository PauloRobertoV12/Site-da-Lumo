const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('header__nav--open');
    menuBtn.classList.toggle('header__menu-btn--open', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  mainNav.querySelectorAll('.header__nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('header__nav--open');
      menuBtn.classList.remove('header__menu-btn--open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const galleryTrack = document.getElementById('galleryTrack');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

if (galleryTrack && galleryPrev && galleryNext) {
  const slides = galleryTrack.querySelectorAll('.gallery__slide');
  let currentSlide = 0;

  const goToSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    galleryTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle('gallery__slide--active', i === currentSlide);
    });
  };

  galleryPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
  galleryNext.addEventListener('click', () => goToSlide(currentSlide + 1));
}

document.querySelectorAll('.filter-tabs').forEach((tabGroup) => {
  tabGroup.querySelectorAll('.filter-tabs__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      tabGroup.querySelectorAll('.filter-tabs__btn').forEach((b) => {
        b.classList.remove('filter-tabs__btn--active');
      });
      btn.classList.add('filter-tabs__btn--active');
    });
  });
});

const faqAccordion = document.getElementById('faqAccordion');

if (faqAccordion) {
  faqAccordion.querySelectorAll('.faq__question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq__item');
      const isOpen = item.classList.contains('faq__item--open');

      faqAccordion.querySelectorAll('.faq__item').forEach((faqItem) => {
        faqItem.classList.remove('faq__item--open');
        faqItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('faq__item--open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
