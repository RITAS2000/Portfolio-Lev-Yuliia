export default function Footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer-section');
  footer.innerHTML = `   <a href="../../../index.html" class="logo-link"><div class="logo-container">
   <img src="/logo.jpg" alt="Yuliia Lev" class="logo">
    <div class="logo-text-container">
    <p class="logo-name">Lev Yuliia</p>
    <p class="logo-text">Full-Stack</p></div>
    </div>
    </a><p class="footer-text">© 2025 Lev Yuliia - RITAS System</p>`;
  return footer;
}
