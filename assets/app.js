const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => header.classList.remove('menu-open')));
}

document.querySelectorAll('.plan-button').forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.dataset.plan;
    const select = document.getElementById('planSelect');
    [...select.options].forEach(o => o.selected = o.value === plan || o.text === plan);
    document.getElementById('order').scrollIntoView({behavior:'smooth'});
    setTimeout(() => select.focus(), 600);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
const params = new URLSearchParams(window.location.search);
if (params.get('submitted') === '1') {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5500);
  history.replaceState({}, '', window.location.pathname + '#order');
}
