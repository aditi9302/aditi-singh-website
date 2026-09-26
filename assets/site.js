const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
function syncTheme() {
  const dark = root.dataset.theme === 'dark';
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' mode');
  document.querySelector('link[rel="icon"]').href = '/favicon-' + (dark ? 'dark' : 'light') + '.svg';
}
toggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('aditi-editorial-theme', root.dataset.theme); } catch (_) {}
  syncTheme();
});
syncTheme();
