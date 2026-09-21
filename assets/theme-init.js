// Light is the default; remember an explicit choice across visits and pages.
try {
  const chosen = localStorage.getItem('aditi-editorial-theme');
  if (chosen === 'dark') document.documentElement.dataset.theme = 'dark';
} catch (_) {}
