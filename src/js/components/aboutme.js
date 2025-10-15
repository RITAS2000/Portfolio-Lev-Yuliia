export default function AboutMe() {
  const aboutMeSection = document.createElement('section');
  aboutMeSection.id = 'aboutme';
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
</ul>
<div class="plush-img-container">
<img src="/plush2.png" class="plush-img">
<img src="/plush2.png" class="plush-img">
<img src="/plush2.png" class="plush-img"></div>
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
    <li class="about-me-list-item">
    <p>In my work, I follow my principles based on the
    <span class="span-two-text">RITAS</span> system:</p>
   <ul>
  <li><span class="span-two-text">Rational:</span> <span class="span-three-text">The system makes decisions based on data and logic, works optimally.</span></li>
  <li><span class="span-two-text">Innovative:</span> <span class="span-three-text">Constantly updates and implements new approaches.</span></li>
  <li><span class="span-two-text">Thorough:</span> <span class="span-three-text">Ensures stable and predictable results.</span></li>
  <li><span class="span-two-text">Adaptive:</span> <span class="span-three-text">Adjusts to different conditions and user needs.</span></li>
  <li><span class="span-two-text">Systematic:</span> <span class="span-three-text">A comprehensive approach that combines all elements into a coherent structure.</span></li>
</ul>
  </li>
   <li class="about-me-list-item">
    <p>I am looking for people who want effective results in their projects, even if they have a small budget. As a beginner, I want to work with motivated clients to showcase my coding skills. Every project helps me learn, get inspired by new ideas, and bring my clients' ideas to life.</p>
  </li>
</ul>
<div class="plush-img-container">
<img src="/plush2.png" class="plush-img">
<img src="/plush2.png" class="plush-img">
<img src="/plush2.png" class="plush-img"></div>
  <ul class="about-me-list">
  <li class="about-me-list-item">
 <p>When it comes to achieving goals, I follow the <span class="span-two-text">RRR</span> principle — <span class="span-two-text">Resolve</span>, <span class="span-two-text">Resolution</span>, <span class="span-two-text">Result</span>.</p></li>
  <li class="about-me-list-item">
<p>I believe that work should not only deliver results but also bring joy.</p>
</li>
  <li class="about-me-list-item">
  <p>Outside of work, I like hanging out with my family or diving into computer games.</p>
  </li>
  </ul>
  </div>
  </div>`;
  return aboutMeSection;
}
