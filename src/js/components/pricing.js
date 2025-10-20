import { t, onLanguageChange } from '../lang.js';

export default function Pricing() {
  const pricingSection = document.createElement('section');
  pricingSection.id = 'pricing';
  pricingSection.classList.add('container', 'pricing-section');
  pricingSection.innerHTML = `<h2 data-i18n="pricing.title" class="pricing-title"></h2>
 <div class="pricing-text-container">
 <div><p data-i18n="pricing.text1"class="pricing-text"></p>
  <ul class="services-list">
    <li data-i18n="pricing.service1" class="pricing-list-item"></li>
    <li data-i18n="pricing.service2" class="pricing-list-item"></li>
    <li data-i18n="pricing.service3" class="pricing-list-item"></li>
    <li data-i18n="pricing.service4" class="pricing-list-item"></li>
    <li data-i18n="pricing.service5" class="pricing-list-item"></li>
  </ul></div>
 
 <div>
  <p data-i18n="pricing.text2" class="pricing-text"></p>
  <ul class="pricing-list">
    <li data-i18n="pricing.price1"class="pricing-list-item"></li>
    <li data-i18n="pricing.price2" class="pricing-list-item"></li>
    <li data-i18n="pricing.price3" class="pricing-list-item"></li>
  </ul></div></div>`;
  function renderTexts() {
    pricingSection.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
  }
  onLanguageChange(renderTexts);
  return pricingSection;
}
