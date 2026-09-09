document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) window.lucide.createIcons();

  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const thesisFilters = [...document.querySelectorAll('[data-thesis-filter]')];
  const thesisItems = [...document.querySelectorAll('[data-thesis-item]')];
  const thesisCount = document.querySelector('[data-thesis-count]');
  const thesisEmpty = document.querySelector('[data-thesis-empty]');

  const filterTheses = () => {
    const values = Object.fromEntries(
      thesisFilters.map((filter) => [filter.dataset.thesisFilter, filter.value])
    );
    let visible = 0;

    thesisItems.forEach((item) => {
      const matchesMacroarea = values.macroarea === 'all' || item.dataset.macroarea === values.macroarea;
      const matchesDegree = values.degree === 'all' || item.dataset.degree === values.degree;
      const matchesApproach = values.approach === 'all' || item.dataset.approach === values.approach;
      const show = matchesMacroarea && matchesDegree && matchesApproach;
      item.hidden = !show;
      if (show) visible += 1;
    });

    if (thesisCount) thesisCount.textContent = String(visible);
    if (thesisEmpty) thesisEmpty.hidden = visible !== 0;
  };

  thesisFilters.forEach((filter) => filter.addEventListener('change', filterTheses));
});
