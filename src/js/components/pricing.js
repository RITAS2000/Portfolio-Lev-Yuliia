export default function Pricing() {
  const pricingSection = document.createElement('section');
  pricingSection.id = 'pricing';
  pricingSection.classList.add('container', 'pricing-section');
  pricingSection.innerHTML = `<h2 class="pricing-title">Pricing</h2>
 <div class="pricing-text-container">
 <div><p class="pricing-text">Today, I am ready to offer my skills and creativity to help bring your ideas to life.</p>
  <ul class="services-list">
    <li class="pricing-list-item">Website layout from Figma mockup</li>
    <li class="pricing-list-item">Responsive design for mobile devices</li>
    <li class="pricing-list-item">Interactive elements and contact forms</li>
    <li class="pricing-list-item">Basic SEO optimization</li>
    <li class="pricing-list-item">Deployment to GitHub Pages or Vercel</li>
  </ul></div>
 
 <div>
  <p class="pricing-text">These are the starting prices for my services, though the final cost may vary depending on the scope and requirements of your project.</p>
  <ul class="pricing-list">
    <li class="pricing-list-item">Single-page website / landing: $90</li>
    <li class="pricing-list-item">Small project (2-3 pages): $125</li>
    <li class="pricing-list-item">Medium project (multi-page / simple functionality): $210</li>
  </ul></div></div>`;
  return pricingSection;
}
