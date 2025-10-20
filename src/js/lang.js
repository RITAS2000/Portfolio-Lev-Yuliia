let translations = {};
let currentLang = localStorage.getItem('lang') || 'ua';
const listeners = [];

export async function loadLanguage(lang = currentLang) {
  console.log('Завантажуємо мову:', lang);
  const res = await fetch(`/lang/${lang}.json`);
  translations = await res.json();
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.body.classList.toggle('ua', lang === 'ua');
  document.body.classList.toggle('en', lang === 'en');
  listeners.forEach(fn => fn());
}

export function t(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], translations);
}

export function onLanguageChange(fn) {
  listeners.push(fn);
}

export async function toggleLanguage() {
  const newLang = currentLang === 'ua' ? 'en' : 'ua';
  try {
    await loadLanguage(newLang);
    console.log('hhh');
  } catch (e) {
    console.error('Не вдалося завантажити мову:', newLang, e);
  }
}
