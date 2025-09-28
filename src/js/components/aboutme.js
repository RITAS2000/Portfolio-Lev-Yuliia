export default function AboutMe() {
  const aboutMeSection = document.createElement('section');
  aboutMeSection.classList.add('container', 'about-me-section');
  aboutMeSection.innerHTML = `<div><h2 class="about-me-title">About Me</h2>
  <div class="about-me-container">
  <ul class="about-me-list">
  <li class="about-me-list-item">
  <p>Hi! I'm Yuliia Lev, a junior full-stack developer. I build websites both from ready-made templates and from scratch by writing code myself.</p></li>
  <li class="about-me-list-item">
  <p>I enjoy experimenting with different technologies in web development and finding simple solutions to complex problems.</p></li>
  <li class="about-me-list-item">
  <p>I love working in a team and have experience as a team lead. I always motivate my colleagues with the motto:
  <span class="span-two-text">"If you don't know how to do it — just start!"</span></p></li>
 <li class="about-me-list-item">
 <p>When it comes to achieving goals, I follow the <span class="span-two-text">RRR</span> principle — <span class="span-two-text">Resolve</span>, <span class="span-two-text">Resolution</span>, <span class="span-two-text">Result</span>.</p></li>
<li class="about-me-list-item">
<p>I believe that work should not only deliver results but also bring joy.</p>
</li>
</ul>
<div class="plush-img-container"><img src="../../../public/plush2.png" class="plush-img">
<img src="../../../public/plush2.png" class="plush-img">
<img src="../../../public/plush2.png" class="plush-img"></div>
<ul class="about-me-list">
  <li class="about-me-list-item">
    <p>I have completed courses at GoIT School and received a certificate as a Full-Stack Developer.</p>
  </li>
  <li class="about-me-list-item">
    <p>During my studies, I gained practical experience building web projects from scratch and working with various technologies.</p>
  </li>
  <li class="about-me-list-item">
    <p>I also have experience working with databases and deploying projects using cloud platforms.</p>
  </li>
</ul>
<div class="plush-img-container"><img src="../../../public/plush2.png" class="plush-img">
<img src="../../../public/plush2.png" class="plush-img">
<img src="../../../public/plush2.png" class="plush-img"></div>
  <div class="about-me-list">
  <p class="about-me-list-item">Outside of work, I like hanging out with my family or diving into computer games.</p>
  </div>
 
  </div>
  </div>`;
  return aboutMeSection;
}
