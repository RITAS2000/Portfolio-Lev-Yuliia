import { t, toggleLanguage, onLanguageChange } from '../lang.js';

export default function Hero() {
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');
  heroSection.innerHTML = ` <button id="theme-toggle"></button>
  <button id="lang-toggle">EN|UA</button> <div class="star" style="top:10%; left:20%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div>
  <div class="star" style="top:30%; left:50%;"><img src="/star.png" class="rotating-star" width="150" height="150"></div>
  <div class="star" style="top:70%; left:80%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div>
  <div class="star" style="top:50%; left:10%;"><img src="/star.png" class="rotating-star" width="150" height="150"></div>
  <div class="star" style="top:80%; left:40%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div><div class="hero-container">
  <div class="hero-text-container"><h1 data-i18n="hero.title" class="hero-titel"></h1>
  <p data-i18n="hero.description" class="hero-text"></p>
  </div>
  <div class="hero-img-container"><img src="photo_2025.jpg"  alt="Lev Yuliia" width="201" height="201" class="hero-img"></div>
  </div>
  <div class="hero-links">
  <a href="https://github.com/RITAS2000/Portfolio-Lev-Yuliia" class="gh-link" target="_blank" rel="noreferrer noopener"><img src="/gh-icon.jpg" width="40" height="40"></a>
  </div>`;
  function renderTexts() {
    heroSection.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
  }
  onLanguageChange(renderTexts);
  const langButton = heroSection.querySelector('#lang-toggle');
  langButton.addEventListener('click', () => {
    toggleLanguage();
  });

  return heroSection;
}
