import { t, onLanguageChange } from '../lang.js';

export default function Resume() {
  const resumeSection = document.createElement('section');
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.id = 'resume';
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.innerHTML = `
  <div class="resume-text-container">
  <h2 data-i18n="resume.title" class="resume-title"></h2><p data-i18n="resume.description" class="certifications-text">This certificate confirms the successful completion of the GoIT course.</p></div>
   
    </div>
    <div class="certifications-img-container"><img src="/Certifications.jpg" alt="Certifications" class="certifications-img"></div>
    </div><div class="star" style="top:10%; left:20%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div>
  <div class="star" style="top:30%; left:50%;"><img src="/star.png" class="rotating-star" width="150" height="150"></div>
  <div class="star" style="top:70%; left:80%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div>
  <div class="star" style="top:50%; left:5%;"><img src="/star.png" class="rotating-star" width="150" height="150"></div>
  <div class="star" style="top:80%; left:40%;"><img src="/star.png" class="rotating-star" width="100" height="100">`;

  function renderTexts() {
    resumeSection.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
  }
  onLanguageChange(renderTexts);
  return resumeSection;
}
