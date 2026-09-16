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