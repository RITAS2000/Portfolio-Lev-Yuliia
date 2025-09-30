export default function Certifications() {
  const certificationsSection = document.createElement('section');
  certificationsSection.classList.add('container', 'certifications-section');
  certificationsSection.innerHTML = `<div class="certifications-container"><div><h2 class="certifications-title">Certifications</h2>
    <p class="certifications-text">This certificate confirms the successful completion of the GoIT course.</p>
    </div>
    <div class="certifications-img-container"><img src="/Certifications.jpg" alt="Certifications" class="certifications-img"></div>
    </div>`;
  return certificationsSection;
}
