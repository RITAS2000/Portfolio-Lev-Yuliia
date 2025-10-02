export default function Header() {
  const header = document.createElement('header');

  header.innerHTML = `<section class="section-big">
    <a href="../../../index.html" class="logo-link"><div class="logo-container">
   <img src="/logo.jpg" alt="Yuliia Lev" class="logo">
    <div class="logo-text-container">
    <p class="logo-name">Lev Yuliia</p>
    <p class="logo-text">Full-Stack</p></div>
    </div>
    </a>
    <button type="button" class="burger">
    <svg class="icon" width="32" height="32">
  <use href="/icons.svg#icon-burger"></use>
  </svg>
  </button>
 <div class="backdrop-burger" id="mobile-menu">
  <div class="modal">
    <button class="modal-close-btn" type="button" aria-label="Modal close button">
      <svg class="icon-close" width="28" height="28">
        <use href="/img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <nav><ul>
    <li>About My</li>
    <li>Portfolio</li>
    <li>Connect</li>
    </ul></nav>
  </div>
</div>
  </section>`;

  const modalWindow = header.querySelector('.backdrop-burger');
  const openMenuBtn = header.querySelector('.burger');
  const closeModalBtn = header.querySelector('.modal-close-btn');

  let scrollPosition = 0;

  function interactionModalWindow() {
    const isOpen = !modalWindow.classList.contains('is-open');

    modalWindow.classList.toggle('is-open', isOpen);
    openMenuBtn.setAttribute('aria-expanded', isOpen);

    if (isOpen) {
      scrollPosition = window.pageYOffset;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    }
  }

  openMenuBtn.addEventListener('click', interactionModalWindow);
  closeModalBtn.addEventListener('click', interactionModalWindow);

  return header;
}
