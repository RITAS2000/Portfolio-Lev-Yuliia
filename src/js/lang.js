import ua from '/public/lang/ua.json';
import en from '/public/lang/en.json';

const translations = { ua, en };

let currentLang = localStorage.getItem('lang') || 'ua';
let currentLangData = translations[currentLang];
const listeners = [];

export async function loadLanguage(lang = currentLang) {
  const res = await fetch(`/lang/${lang}.json`);
  const data = await res.json();
  currentLangData = data;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.body.classList.toggle('ua', lang === 'ua');
  document.body.classList.toggle('en', lang === 'en');
  listeners.forEach(fn => fn());
}

export function t(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], currentLangData);
}

export function onLanguageChange(fn) {
  listeners.push(fn);
}

export async function toggleLanguage() {
  const newLang = currentLang === 'ua' ? 'en' : 'ua';
}
