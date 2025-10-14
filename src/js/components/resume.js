export default function Resume() {
  const resumeSection = document.createElement('section');
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.id = 'resume';
  resumeSection.classList.add('container', 'resume-section');
  resumeSection.innerHTML = `
  <div class="resume-text-container">
  <h2 class="resume-title">Certifications</h2><p class="certifications-text">This certificate confirms the successful completion of the GoIT course.</p></div>
   
    </div>
    <div class="certifications-img-container"><img src="/Certifications.jpg" alt="Certifications" class="certifications-img"></div>
    </div><div class="star" style="top:10%; left:20%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div>
  <div class="star" style="top:30%; left:50%;"><img src="/star.png" class="rotating-star" width="150" height="150"></div>
  <div class="star" style="top:70%; left:80%;"><img src="/star.png" class="rotating-star" width="100" height="100"></div>
  <div class="star" style="top:50%; left:10%;"><img src="/star.png" class="rotating-star" width="150" height="150"></div>
  <div class="star" style="top:80%; left:40%;"><img src="/star.png" class="rotating-star" width="100" height="100">`;
  return resumeSection;
}

{
  /* <div class="resume-container">
  
   <a href="https://www.canva.com/design/DAGi4BypnSM/SBUeIUMxwoWk9knlu18kuQ/view?utm_content=DAGi4BypnSM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h206f792fbb" target="_blank" rel="noreferrer noopener" class="resume-img-link"><img src="/resume.jpg" alt="Resume"></a>
   </div> */
}
