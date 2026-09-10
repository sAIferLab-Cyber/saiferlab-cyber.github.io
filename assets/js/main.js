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

  const openLinkedThesis = () => {
    if (!window.location.hash) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (target?.matches('.thesis-topic')) target.open = true;
  };

  openLinkedThesis();
  window.addEventListener('hashchange', openLinkedThesis);

  document.querySelectorAll('[data-interest]').forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.add('is-selected');
      button.setAttribute('aria-pressed', 'true');
      const label = button.querySelector('span');
      if (label) label.textContent = 'Interest email ready';
    });
  });

  const rulesDialog = document.querySelector('[data-rules-dialog]');
  if (rulesDialog) {
    const acknowledgedKey = 'saifer-thesis-rules-acknowledged-v1';
    const dismissedKey = 'saifer-thesis-rules-dismissed-v1';
    let acknowledged = false;
    let dismissed = false;

    try {
      acknowledged = window.localStorage.getItem(acknowledgedKey) === 'true';
      dismissed = window.sessionStorage.getItem(dismissedKey) === 'true';
    } catch (error) {
      // Storage can be unavailable in privacy-focused browser modes.
    }

    if (!acknowledged && !dismissed) {
      if (typeof rulesDialog.showModal === 'function') rulesDialog.showModal();
      else rulesDialog.setAttribute('open', '');
    }

    rulesDialog.querySelector('[data-rules-ack]')?.addEventListener('click', () => {
      try { window.localStorage.setItem(acknowledgedKey, 'true'); } catch (error) {}
    });

    const dismissRules = () => {
      try { window.sessionStorage.setItem(dismissedKey, 'true'); } catch (error) {}
      rulesDialog.close();
    };

    rulesDialog.querySelector('[data-rules-close]')?.addEventListener('click', dismissRules);
    rulesDialog.addEventListener('click', (event) => {
      if (event.target === rulesDialog) dismissRules();
    });
  }
});
