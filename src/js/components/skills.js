import { t, onLanguageChange } from '../lang.js';

export default function MySkills() {
  const skillsSection = document.createElement('section');
  skillsSection.id = 'skills';
  skillsSection.classList.add('container', 'skills-section');
  skillsSection.innerHTML = `<div class="skills-container">
  <div>
 
  <h2 data-i18n="skills.title" class="skills-title"></h2>
  <p data-i18n="skills.description" class="skills-text"></p>

  <div class="swiper swiper-skills">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">HTML</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">CSS</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">SCSS</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">JavaScript</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">React.js</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">TypeScript</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">Next.js</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">Node.js</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">Express.js</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">MongoDB</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">GitHub</p></div></div>
     <div class="swiper-slide"><div class="slide-item"><p class="item-text">Compass</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">Postman</p></div></div>
      <div class="swiper-slide"><div class="slide-item"><p class="item-text">Vercel</p></div></div>
    <div class="swiper-slide"><div class="slide-item"><p class="item-text">Render</p></div></div>
  </div>
</div>
 <div class=" custom-prev"><img src="/plush2.png" width="30" hieght="30" class="rotate90"></div>
  <div class="custom-next"><img src="/plush2.png" width="30" hieght="30" class="rotate-90"></div>
  </div>
  </div>
  <div>
  <p data-i18n="skills.softSkillsDescription" class="skills-text"></p>
  <ul class="soft-list">
  <li class="skills-soft-item"><p data-i18n="skills.softSkills1"></li>

<li class="skills-soft-item"><p data-i18n="skills.softSkills2"></p></li>

<li class="skills-soft-item"><p data-i18n="skills.softSkills3"></p></li>

<li class="skills-soft-item"><p data-i18n="skills.softSkills4"></p></li>

<li class="skills-soft-item"><p data-i18n="skills.softSkills5"></p></li>

<li class="skills-soft-item"><p data-i18n="skills.softSkills6"></p></li>

<li class="skills-soft-item"><p data-i18n="skills.softSkills7"></p></li>

<li class="skills-soft-item"><p data-i18n="skills.softSkills8"></p></li>
<li class="skills-soft-item"><p data-i18n="skills.softSkills9"></p></li></ul></div>`;
  function renderTexts() {
    skillsSection.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
  }
  onLanguageChange(renderTexts);
  return skillsSection;
}
