const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.extension-card[data-category]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

const toast = document.getElementById('toast');
document.querySelectorAll('[data-placeholder]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    toast.textContent = link.dataset.placeholder;
    toast.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  });
});

// Accent theme picker. Persists across pages in this browser.
(() => {
  const key = 'developer-tools-accent';
  const root = document.documentElement;
  const saved = localStorage.getItem(key) || '#79f2b0';

  function apply(color) {
    root.style.setProperty('--theme-accent', color);
    localStorage.setItem(key, color);
    document.querySelectorAll('.theme-swatch').forEach(
      b => b.classList.toggle('active', b.dataset.themeColor.toLowerCase() === color.toLowerCase())
    );
    const custom = document.querySelector('.theme-custom');
    if (custom && /^#[0-9a-f]{6}$/i.test(color)) custom.value = color;
  }

  document.addEventListener('DOMContentLoaded', () => {
    apply(saved);
    document.querySelectorAll('.theme-swatch').forEach(
      b => b.addEventListener('click', () => apply(b.dataset.themeColor))
    );
    document.querySelectorAll('.theme-custom').forEach(
      input => input.addEventListener('input', () => apply(input.value))
    );
  });
})();
