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
    <div class="address-item">Ukraine, Lviv</div>
    <div class="address-item">Telegram: @ritas_2000</div>
    <div class="address-item">Email: <a href="mailto:yuliya.lev.2000@gmail.com" class="emeil-link">yuliya.lev.2000@gmail.com</a></div>
   
    </address>
    <p class="footer-text">© 2025 Lev Yuliia - RITAS System</p>`;
  return footer;
}
