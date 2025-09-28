export default function Header() {
  const header = document.createElement('header');
  header.innerHTML = `<section class="section-big">
    <a href="../../../index.html" class="logo-link"><div class="logo-container">
   <img src="logo.jpg" alt="Yuliia Lev" class="logo">
    <div class="logo-text-container">
    <p class="logo-name">Lev Yuliia</p>
    <p class="logo-text">Full-Stack</p></div>
    </div>
    </a>
    <button type="button" class="burger">
    <svg class="icon" width="32" height="32">
  <use href="icons.svg#icon-burger"></use>
  </svg>
  </button>
  </section>`;
  return header;
}
