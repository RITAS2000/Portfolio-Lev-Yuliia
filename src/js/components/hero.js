export default function Hero() {
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');
  heroSection.innerHTML = ` <button id="theme-toggle"></button> <div class="star" style="top:10%; left:20%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div>
  <div class="star" style="top:30%; left:50%;"><img src="/star.png" class="rotating-star" width="150" height="150"></div>
  <div class="star" style="top:70%; left:80%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div>
  <div class="star" style="top:50%; left:10%;"><img src="/star.png" class="rotating-star" width="150" height="150"></div>
  <div class="star" style="top:80%; left:40%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div><div class="hero-container">
  <div class="hero-text-container"><h1 class="hero-titel">Hello, I'm Yuliia Lev — Full-Stack Developer.</h1>
  <p class="hero-text">Take a journey into my portfolio and discover what I build.</p>
  </div>
  <div class="hero-img-container"><img src="photo_2025.jpg"  alt="Lev Yuliia" width="201" height="201" class="hero-img"></div>
  </div>
  <div class="hero-links">
  <a href="https://www.canva.com/design/DAGi4BypnSM/SBUeIUMxwoWk9knlu18kuQ/view?utm_content=DAGi4BypnSM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h206f792fbb" target="_blank" rel="noreferrer noopener" class="hero-link"><span>Resume</span></a>
  <a href="https://github.com/RITAS2000/Portfolio-Lev-Yuliia" class="gh-link" target="_blank" rel="noreferrer noopener"><img src="/gh-icon.jpg" width="40" height="40"></a>
  </div>`;
  return heroSection;
}
