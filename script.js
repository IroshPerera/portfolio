const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeColor = document.querySelector('[data-theme-color]');
const galleryLightbox = document.querySelector('[data-gallery-lightbox]');
const galleryLightboxImage = document.querySelector('[data-gallery-lightbox-image]');
const galleryLightboxTitle = document.querySelector('[data-gallery-lightbox-title]');
const galleryLightboxNote = document.querySelector('[data-gallery-lightbox-note]');
const galleryCloseButton = document.querySelector('[data-gallery-close]');
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = [...document.querySelectorAll('main section[id]')];

const themeStorageKey = 'irosh-portfolio-theme';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

const getSavedTheme = () => {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch (_) {
    return null;
  }
};

const applyTheme = (theme, persist = false) => {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  const nextLabel = nextTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;
  themeColor?.setAttribute('content', nextTheme === 'dark' ? '#08111f' : '#f7f9fc');
  themeToggle?.setAttribute('aria-label', nextLabel);
  themeToggle?.setAttribute('title', nextLabel);

  if (persist) {
    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch (_) {
      // The selected theme still applies for the current page session.
    }
  }
};

applyTheme(document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme, true);
});

systemTheme.addEventListener?.('change', (event) => {
  if (!getSavedTheme()) applyTheme(event.matches ? 'dark' : 'light');
});

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 16);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const closeMenu = () => {
  menu?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
  document.body.classList.remove('menu-open');
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  menu?.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

menu?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.querySelectorAll('[data-gallery-open]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!galleryLightbox || !galleryLightboxImage || !galleryLightboxTitle) return;

    galleryLightboxImage.src = button.dataset.gallerySrc || '';
    galleryLightboxImage.alt = button.dataset.galleryAlt || '';
    galleryLightboxTitle.textContent = button.dataset.galleryTitle || '';
    if (galleryLightboxNote) galleryLightboxNote.textContent = button.dataset.galleryNote || '';
    document.body.classList.add('lightbox-open');
    galleryLightbox.showModal();
  });
});

const closeGallery = () => {
  galleryLightbox?.close();
  document.body.classList.remove('lightbox-open');
};

galleryCloseButton?.addEventListener('click', closeGallery);
galleryLightbox?.addEventListener('click', (event) => {
  if (event.target === galleryLightbox) closeGallery();
});
galleryLightbox?.addEventListener('close', () => document.body.classList.remove('lightbox-open'));

const recommendationCarousel = document.querySelector('[data-recommendation-carousel]');
if (recommendationCarousel) {
  const recommendationTrack = recommendationCarousel.querySelector('[data-recommendation-track]');
  const recommendationSlides = [...recommendationCarousel.querySelectorAll('[data-recommendation-slide]')];
  const recommendationDots = [...recommendationCarousel.querySelectorAll('[data-recommendation-dot]')];
  const previousRecommendation = recommendationCarousel.querySelector('[data-recommendation-prev]');
  const nextRecommendation = recommendationCarousel.querySelector('[data-recommendation-next]');
  let activeRecommendation = 0;

  const showRecommendation = (nextIndex) => {
    if (!recommendationTrack || recommendationSlides.length === 0) return;
    activeRecommendation = (nextIndex + recommendationSlides.length) % recommendationSlides.length;
    recommendationTrack.style.transform = `translate3d(-${activeRecommendation * 100}%, 0, 0)`;

    recommendationSlides.forEach((slide, index) => {
      const isActive = index === activeRecommendation;
      slide.setAttribute('aria-hidden', String(!isActive));
      slide.inert = !isActive;
    });

    recommendationDots.forEach((dot, index) => {
      const isActive = index === activeRecommendation;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  previousRecommendation?.addEventListener('click', () => showRecommendation(activeRecommendation - 1));
  nextRecommendation?.addEventListener('click', () => showRecommendation(activeRecommendation + 1));
  recommendationDots.forEach((dot) => {
    dot.addEventListener('click', () => showRecommendation(Number(dot.dataset.recommendationDot)));
  });
  recommendationCarousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showRecommendation(activeRecommendation - 1);
    if (event.key === 'ArrowRight') showRecommendation(activeRecommendation + 1);
  });

  showRecommendation(0);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  },
  { rootMargin: '-25% 0px -65% 0px', threshold: [0, 0.2, 0.5] }
);

sections.forEach((section) => sectionObserver.observe(section));

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
