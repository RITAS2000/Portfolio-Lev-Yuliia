import { t, onLanguageChange } from '../lang.js';

export default function Footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer-section');
  footer.innerHTML = `   <a href="../../../index.html" class="logo-link"><div class="logo-container">
   <img src="/logo.jpg" alt="Yuliia Lev" class="logo">
    <div class="logo-text-container">
    <p class="logo-name">Lev Yuliia</p>
    <p class="logo-text">Full-Stack</p></div>
    </div>
    </a>
   
    <address class="footer-address">
    <p data-i18n="footer.address_country" class="address-item"></p>
    <p  class="address-item"><span data-i18n="footer.address_email_label"></span> <a href="mailto:ritas.system.2000@gmail.com" class="emeil-link">ritas.system.2000@gmail.com</a></p>
   
    </address>
    <p data-i18n="footer.copyright" class="footer-text"></p>`;
  function renderTexts() {
    footer.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
  }
  onLanguageChange(renderTexts);
  return footer;
}
