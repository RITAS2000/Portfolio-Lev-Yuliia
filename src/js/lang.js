import ua from '../lang/ua.json';
import en from '../lang/en.json';

const translations = { ua, en };

let currentLang = localStorage.getItem('lang') || 'en';
let currentLangData = translations[currentLang];
const listeners = [];
export function getCurrentLang() {
  return currentLang;
}

export async function loadLanguage(lang = currentLang) {
  currentLangData = translations[lang];
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.body.classList.toggle('ua', lang === 'ua');
  document.body.classList.toggle('en', lang === 'en');
  listeners.forEach(fn => fn());
}

export function t(path) {
  if (!currentLangData) return '';
  return path.split('.').reduce((obj, key) => obj?.[key], currentLangData);
}

export function onLanguageChange(fn) {
  listeners.push(fn);
}

export async function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'ua' : 'en';
  await loadLanguage(newLang);
}
