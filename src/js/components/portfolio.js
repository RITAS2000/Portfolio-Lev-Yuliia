import { t, onLanguageChange } from '../lang.js';

export default function Portfolio() {
  const portfolioSection = document.createElement('section');
  portfolioSection.id = 'portfolio';
  portfolioSection.classList.add('container', 'portfolio-section');
  portfolioSection.innerHTML = `<div>
  <h2 data-i18n="portfolio.title" class="portfolio-title"></h2>
  <p data-i18n="portfolio.description" class="portfolio-text"></p></div>
  <ul class="portfolio-list">
  <li class="portfolio-item">
  <a href="https://portfolio-lev-yuliia.vercel.app/" target="_blank" rel="noreferrer noopener" class="portfolio-img-box"><img  src="/projects/my-portfolio-rrr.jpg" class="portfolio-img" alt="My Portfolio"></a>
  <div>
  <div class="project-container-title">
  <h3 class="project-name">My Portfolio</h3>
  <a href="https://github.com/RITAS2000/Portfolio-Lev-Yuliia" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a>
  </div>
  <div class="project-contianer-text">
<div>
  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project1_type_label"></span>
    <span data-i18n="portfolio.project1_type_value"></span>
  </p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project1_year_label"></span>
    <span data-i18n="portfolio.project1_year_value"></span>
  </p>
</div>
 <p data-i18n="portfolio.project1_description" class="project-item-text"></p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project1_tech_label"></span>
    <span data-i18n="portfolio.project1_tech_value"></span>
  </p>
 </div>
  </div>
  </li>
  <li class="portfolio-item">
  <a href="https://cars-project-azure.vercel.app/" target="_blank" rel="noreferrer noopener" class="portfolio-img-box"><img  src="/projects/car.jpg" class="portfolio-img" alt="Rental Car"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Rental Car</h3>
  <a href="https://github.com/RITAS2000/cars-project" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a>
  </div>
  <div class="project-contianer-text">
  <div>
  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project2_type_label"></span>
    <span data-i18n="portfolio.project2_type_value"></span>
  </p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project2_year_label"></span>
    <span data-i18n="portfolio.project2_year_value"></span>
  </p>
</div>
 <p data-i18n="portfolio.project2_description" class="project-item-text"></p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project2_tech_label"></span>
    <span data-i18n="portfolio.project2_tech_value"></span>
  </p>
 
 </div>
  </div>
  </li>
  <li class="portfolio-item"><a href="https://d-cgroup-project-f1-x2.vercel.app/" target="_blank" rel="noreferrer noopener" class="portfolio-img-box"><img src="/projects/taste.jpg" class="portfolio-img" alt="Tasteorama"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Tasteorama</h3>
  <a href="https://github.com/RITAS2000/DCgroup-project-f1-x2" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a></div>
  <div class="project-contianer-text">
  <div>
  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project3_type_label"></span>
    <span data-i18n="portfolio.project3_type_value"></span>
  </p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project3_year_label"></span>
    <span data-i18n="portfolio.project3_year_value"></span>
  </p>
</div>
 <p data-i18n="portfolio.project3_description" class="project-item-text"></p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project3_tech_label"></span>
    <span data-i18n="portfolio.project3_tech_value"></span>
  </p>
 </div>
  </div></li>
  <li class="portfolio-item"><a href="https://ritas2000.github.io/stp-8884/" target="_blank" rel="noreferrer noopener" class="portfolio-img-box"><img src="/projects/rivengard.jpg" class="portfolio-img" alt="Rivengard"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Rivengard</h3>
  <a href="http://github.com/RITAS2000/stp-8884" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a></div>
  <div class="project-contianer-text">
  <div>

   <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project4_type_label"></span>
    <span data-i18n="portfolio.project4_type_value"></span>
  </p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project4_year_label"></span>
    <span data-i18n="portfolio.project4_year_value"></span>
  </p>
</div>
 <p data-i18n="portfolio.project4_description" class="project-item-text"></p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project4_tech_label"></span>
    <span data-i18n="portfolio.project4_tech_value"></span>
  </p>

 </div>
  </div></li>
  <li class="portfolio-item"><a href="https://ritas2000.github.io/js-project-dcgroup/" target="_blank" rel="noreferrer noopener" class="portfolio-img-box"><img src="/projects/lloyd.jpg" class="portfolio-img" alt="Portfolio"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Portfolio</h3>
  <a href="https://github.com/RITAS2000/js-project-dcgroup" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a></div>
  <div class="project-contianer-text">
  <div>
  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project5_type_label"></span>
    <span data-i18n="portfolio.project5_type_value"></span>
  </p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project5_year_label"></span>
    <span data-i18n="portfolio.project5_year_value"></span>
  </p>
</div>
 <p data-i18n="portfolio.project5_description" class="project-item-text"></p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project5_tech_label"></span>
    <span data-i18n="portfolio.project5_tech_value"></span>
  </p>
 </div>
  </div></li>
  <li class="portfolio-item"><a href="https://ritas2000.github.io/project-dcgroup/" target="_blank" rel="noreferrer noopener" class="portfolio-img-box"><img src="/projects/green.jpg" class="portfolio-img" alt="Green Harvest."></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Green Harvest</h3>
  <a href="https://github.com/RITAS2000/project-dcgroup" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a></div>
  <div class="project-contianer-text">
  <div>
   <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project6_type_label"></span>
    <span data-i18n="portfolio.project6_type_value"></span>
  </p>

  <p class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project6_year_label"></span>
    <span data-i18n="portfolio.project6_year_value"></span>
  </p>
</div>
 <p data-i18n="portfolio.project6_description" class="project-item-text"></p>

  <p6 class="project-item-text">
    <span class="project-item-span" data-i18n="portfolio.project6_tech_label"></span>
    <span data-i18n="portfolio.project6_tech_value"></span>
  </p6
 </div>
  </div></li></ul>`;

  function renderTexts() {
    portfolioSection.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
  }
  onLanguageChange(renderTexts);
  return portfolioSection;
}
