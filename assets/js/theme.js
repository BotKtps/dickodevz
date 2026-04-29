const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Cek status tema di LocalStorage (biar saat pindah halaman temanya gak ke-reset)
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
  htmlElement.classList.remove('dark');
  if(themeIcon) themeIcon.textContent = '🌙';
} else {
  htmlElement.classList.add('dark'); // Default to dark
  if(themeIcon) themeIcon.textContent = '☀️';
}

// Fungsi tombol
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      themeIcon.textContent = '🌙';
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      themeIcon.textContent = '☀️';
    }
  });
}
