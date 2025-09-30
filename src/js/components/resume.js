export default function Resume() {
  const resumeSection = document.createElement('resume-section');
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.innerHTML = `<div class="resume-text-container"><h2 class="resume-title">Resume</h2><p class="resume-text">You can download or print my resume directly in the window below.</p></div>
   <div class="resume-container">
   <img src="/resume.jpg" alt="Resume">
   <a href="../../../assets/Yuliia_Lev_Full_Stack_Developer.pdf" download="Yuliia_Lev_Full_Stack_Developer.pdf" class="resume-link"><span>Download</span></a>
   </div>`;
  return resumeSection;
}
