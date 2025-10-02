export default function MySkills() {
  const skillsSection = document.createElement('section');
  skillsSection.id = 'skills';
  skillsSection.classList.add('container', 'skills-section');
  skillsSection.innerHTML = `<div class="skills-container">
  <div>
 
  <h2 class="skills-title">My Skills</h2>
  <p class="skills-text">Take a look at my skills by scrolling through the slider to see the technologies I work with.</p>

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
  <p class="skills-text">Take a look at my soft skills that support me in my development work.</p>
  <ul class="soft-list">
  <li class="skills-soft-item"><p><span class="span-two-text">Independent thinking</span> - I always analyze first and try solutions independently.</p></li>
<li class="skills-soft-item"><p><span class="span-two-text">Systemic thinking</span> - I understand how different parts of code and the project interact.</p></li>
<li class="skills-soft-item"><p><span class="span-two-text">Organization</span> - I keep files, project structure, and UI organized.</p></li>
<li class="skills-soft-item"><p><span class="span-two-text">Analytical skills</span> - I find bugs and solve them logically.</p></li>
<li class="skills-soft-item"><p><span class="span-two-text">Patience</span> - I test and fix issues until everything works correctly.</p></li>
<li class="skills-soft-item"><p><span class="span-two-text">Creativity</span> - I generate ideas for UI, animations, and game elements.</p></li>
<li class="skills-soft-item"><p><span class="span-two-text">Communication</span> - I clearly formulate requests and explain code logic.</p></li>
<li class="skills-soft-item"><p><span class="span-two-text">Flexibility</span> - I quickly adapt to new technologies.</p></li>
<li class="skills-soft-item"><p><span class="span-two-text">Teamwork</span> - I integrate my solutions into the team project.</p></li></ul></div>`;
  return skillsSection;
}
