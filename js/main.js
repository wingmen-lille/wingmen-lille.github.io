/**
 * WINGMEN LILLE — Script principal (Vanilla JS)
 * - Menu mobile accessible
 * - Révélation douce des sections au défilement
 * - Suivi de la section active dans la barre de navigation
 * - Onglets interactifs des paliers d'objectifs
 * - Bascule d'affichage intégré du Google Forms sur smartphone
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollReveal();
  initActiveNavTracking();
  initLevelTabs();
  initMobileFormToggle();
});

/**
 * 1. Navigation mobile
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if (!toggleBtn || !primaryNav) return;

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    primaryNav.classList.toggle('is-open', !isExpanded);
  });

  // Fermer le menu au clic sur un lien
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Fermer avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

/**
 * 2. Apparition douce des éléments au défilement
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * 3. Mise en évidence du lien actif dans le menu au scroll
 */
function initActiveNavTracking() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const isMatch = link.getAttribute('href') === `#${currentId}`;
            link.classList.toggle('active', isMatch);
          });
        }
      });
    },
    {
      rootMargin: '-25% 0px -60% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * 4. Onglets interactifs pour les exemples d'objectifs par palier
 */
function initLevelTabs() {
  const tabs = Array.from(document.querySelectorAll('.level-tab'));
  const panels = Array.from(document.querySelectorAll('.level-panel'));
  if (!tabs.length || !panels.length) return;

  const activateTab = (selectedTab) => {
    const targetId = selectedTab.getAttribute('aria-controls');

    tabs.forEach((tab) => {
      const isSelected = tab === selectedTab;
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', String(isSelected));
    });

    panels.forEach((panel) => {
      const isTarget = panel.id === targetId;
      panel.classList.toggle('active', isTarget);
      if (isTarget) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));

    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const nextIndex = (index + dir + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
      }
    });
  });
}

/**
 * 5. Sur smartphone : bouton permettant d'afficher ou masquer le Google Forms intégré
 */
function initMobileFormToggle() {
  const toggleInlineBtn = document.getElementById('gf-toggle-inline');
  const iframeContainer = document.getElementById('gf-iframe-container');
  if (!toggleInlineBtn || !iframeContainer) return;

  toggleInlineBtn.addEventListener('click', () => {
    const isCollapsed = iframeContainer.classList.toggle('is-collapsed-mobile');
    toggleInlineBtn.textContent = isCollapsed
      ? 'Afficher le questionnaire directement dans la page'
      : 'Masquer le questionnaire intégré';
  });
}
