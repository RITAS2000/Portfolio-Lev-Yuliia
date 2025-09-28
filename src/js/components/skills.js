export default function MySkills() {
  const skillsSection = document.createElement('section');
  skillsSection.classList.add('container', 'skills-section');
  skillsSection.innerHTML = `<div class="skills-container">
  <div>
  <h2 class="skills-title">My Skills</h2>
  <p class="skills-text">Take a look at my skills by scrolling through the slider to see the technologies I work with.</p>
  </div>
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
 <div class=" custom-prev"><img src="../../../public/plush2.png" width="30" hieght="30" class="rotate90"></div>
  <div class="custom-next"><img src="../../../public/plush2.png" width="30" hieght="30" class="rotate-90"></div>
  </div>`;
  return skillsSection;
}
