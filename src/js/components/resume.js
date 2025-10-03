export default function Resume() {
  const resumeSection = document.createElement('section');
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.id = 'resume';
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.innerHTML = `<div class="resume-text-container"><h2 class="resume-title">Certifications</h2><p class="certifications-text">This certificate confirms the successful completion of the GoIT course.</p></div>
   
    </div>
    <div class="certifications-img-container"><img src="/Certifications.jpg" alt="Certifications" class="certifications-img"></div>
    </div>`;
  return resumeSection;
}

{
  /* <div class="resume-container">
  
   <a href="https://www.canva.com/design/DAGi4BypnSM/SBUeIUMxwoWk9knlu18kuQ/view?utm_content=DAGi4BypnSM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h206f792fbb" target="_blank" rel="noreferrer noopener" class="resume-img-link"><img src="/resume.jpg" alt="Resume"></a>
   </div> */
}
