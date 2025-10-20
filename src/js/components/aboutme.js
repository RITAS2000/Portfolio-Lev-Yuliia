import { t, onLanguageChange } from '../lang.js';

export default function AboutMe() {
  const aboutMeSection = document.createElement('section');
  aboutMeSection.id = 'aboutme';
  aboutMeSection.classList.add('container', 'about-me-section');
  aboutMeSection.innerHTML = `
  <div>
  <h2 data-i18n="aboutme.title" class="about-me-title"></h2>
  <div class="about-me-container">
  <ul class="about-me-list">
  <li class="about-me-list-item">
    <p data-i18n="aboutme.list1"></p></li>
  <li class="about-me-list-item">
    <p data-i18n="aboutme.list2"></p></li>
  <li class="about-me-list-item">
    <p> <span data-i18n="aboutme.list3"></span><span data-i18n="aboutme.list3_span" class="span-two-text"></span></p></li>
  </ul>
  <div class="plush-img-container">
  <img src="/plush2.png" class="plush-img">
  <img src="/plush2.png" class="plush-img">
  <img src="/plush2.png" class="plush-img"></div>
  <ul class="about-me-list">
  <li class="about-me-list-item">
    <p data-i18n="aboutme.list4"></p>
  </li>
  <li class="about-me-list-item">
    <p data-i18n="aboutme.list5"></p>
  </li>
  <li class="about-me-list-item">
    <p data-i18n="aboutme.list6"></p>
  </li>
    <li class="about-me-list-item">
    <p ><span data-i18n="aboutme.list7"></span><span data-i18n="aboutme.list7_span" class="span-two-text"></span></p>
 <li class="about-me-list-item">
    <p data-i18n="aboutme.list8"></p>
  </li>
</ul>
<div class="plush-img-container">
<img src="/plush2.png" class="plush-img">
<img src="/plush2.png" class="plush-img">
<img src="/plush2.png" class="plush-img"></div>
  <ul class="about-me-list">
  <li class="about-me-list-item">
 <p><span data-i18n="aboutme.list9"></span><span data-i18n="aboutme.list9_span" class="span-two-text"></span></p></li>
  <li class="about-me-list-item">
<p data-i18n="aboutme.list10"></p>
</li>
  <li class="about-me-list-item">
  <p data-i18n="aboutme.list11"></p>
  </li>
  </ul>
  </div>
  </div>`;
  function renderTexts() {
    aboutMeSection.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
  }
  onLanguageChange(renderTexts);
  return aboutMeSection;
}
