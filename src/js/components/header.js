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
      <svg class="icon-close" viewBox="0 0 20 20">
         <path fill-rule="evenodd" d="M16.293 17.707a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z"/>
      </svg>
    </button>
    <nav><ul>
    <li><a href="#aboutme">About My</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#form">Connect</a></li>
    </ul></nav>
  </div>
</div>
  </section>`;

  const modalWindow = header.querySelector('.backdrop-burger');
  const openMenuBtn = header.querySelector('.burger');
  const closeModalBtn = header.querySelector('.modal-close-btn');
  const modalLinks = header.querySelectorAll('.modal nav a');

  let scrollPosition = 0;

  function openModal() {
    scrollPosition = window.pageYOffset;

    modalWindow.classList.add('is-open');
    openMenuBtn.setAttribute('aria-expanded', true);

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  function closeModal() {
    modalWindow.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';

    window.scrollTo(0, scrollPosition);
  }

  openMenuBtn.addEventListener('click', () => {
    if (!modalWindow.classList.contains('is-open')) openModal();
    else closeModal();
  });

  closeModalBtn.addEventListener('click', closeModal);

  modalLinks.forEach(link => {
    link.addEventListener('click', closeModal);
  });

  return header;
}
