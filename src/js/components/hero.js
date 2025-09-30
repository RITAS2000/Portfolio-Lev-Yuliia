export default function Hero() {
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');
  heroSection.innerHTML = `<div>
  <h1 class="hero-titel">Hello, I'm Yuliia Lev — Full-Stack Developer.</h1>
  <p class="hero-text">Take a journey into my portfolio and discover what I build.</p>
  <img src="photo_2025.jpg" class="hero-img" alt="Lev Yuliia" width="240" height="240">
  <div class="hero-links">
  <a href="#resume" class="hero-link"><span>Resume</span></a>
  <a href="https://github.com/RITAS2000/Portfolio-Lev-Yuliia" class="gh-link" target="_blank" rel="noreferrer noopener"><img src="/gh-icon.jpg" width="40" height="40"></a>
  </div></div>`;
  return heroSection;
}
