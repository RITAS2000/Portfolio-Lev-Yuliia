export default function Resume() {
  const resumeSection = document.createElement('section');
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.id = 'resume';
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.innerHTML = `<div class="resume-text-container"><h2 class="resume-title">Resume & Certifications</h2><p class="resume-text">You can download or print my resume directly in the window below.</p></div>
   <div class="resume-container">
  
   <a href="https://www.canva.com/design/DAGi4BypnSM/SBUeIUMxwoWk9knlu18kuQ/view?utm_content=DAGi4BypnSM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h206f792fbb" target="_blank" rel="noreferrer noopener" class="resume-img-link"><img src="/resume.jpg" alt="Resume"></a>
   </div>
   <div class="plush-img-container">
<img src="/plush2.png" class="plush-img">
<img src="/plush2.png" class="plush-img">
<img src="/plush2.png" class="plush-img"></div>
   <div class="certifications-container"><div>
    <p class="certifications-text">This certificate confirms the successful completion of the GoIT course.</p>
    </div>
    <div class="certifications-img-container"><img src="/Certifications.jpg" alt="Certifications" class="certifications-img"></div>
    </div>`;
  return resumeSection;
}
