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
      <nav class="header-nav">
    <ul class="header-nav-list">
    <li><a href="#aboutme" class="header-nav-link">About My</a></li>
    <li><a href="#skills" class="header-nav-link">Skills</a></li>
    <li><a href="#portfolio" class="header-nav-link">Portfolio</a></li>
    <li><a href="#form" class="header-nav-link">Connect</a></li>
    </ul></nav>
    <button type="button" class="burger">
    <svg class="icon" width="32" height="32" viewBox="0 0 24 24">
    <polygon stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.44" points="20 18 4 18"/>
    <polygon stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.44" points="20 14 4 14"/>
    <polygon stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.44" points="20 10 4 10"/>
    <polygon stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.44" points="20 6 4 6"/>
  </svg>
  </button>
 <div class="backdrop-burger" id="mobile-menu">
  <div class="modal">
    <button class="modal-close-btn" type="button" aria-label="Modal close button">
      <svg class="icon-close" viewBox="0 0 20 20">
         <path fill-rule="evenodd" d="M16.293 17.707a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z"/>
      </svg>
    </button>
    <nav class="modal-nav">
    <ul class="modal-nav-list">
    <li><a href="#aboutme" class="modal-nav-link">About My</a></li>
    <li><a href="#skills" class="modal-nav-link">Skills</a></li>
    <li><a href="#portfolio" class="modal-nav-link">Portfolio</a></li>
    <li><a href="#form" class="modal-nav-link">Connect</a></li>
    </ul>
    <a href="https://www.canva.com/design/DAGi4BypnSM/SBUeIUMxwoWk9knlu18kuQ/view?utm_content=DAGi4BypnSM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h206f792fbb" target="_blank" rel="noreferrer noopener" class="modal-resume-link"><span>Resume</span></a></nav>
  </div>
</div>
  </section>`;

  const modalWindow = header.querySelector('.backdrop-burger');
  const openMenuBtn = header.querySelector('.burger');
  const closeModalBtn = header.querySelector('.modal-close-btn');
  const modalLinks = header.querySelectorAll('.modal nav a');
  const links = header.querySelectorAll('.header-nav-list a');

  links.forEach(link => {
    link.addEventListener('click', function () {
      // прибираємо current у всіх
      links.forEach(l => l.classList.remove('current'));
      // додаємо тільки на натиснуте
      this.classList.add('current');
    });
  });
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
