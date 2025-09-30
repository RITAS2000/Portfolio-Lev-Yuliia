export default function Portfolio() {
  const sectionPortfolio = document.createElement('section');
  sectionPortfolio.classList.add('container', 'portfolio-section');
  sectionPortfolio.innerHTML = `<div><h2 class="portfolio-title">Portfolio</h2><p class="portfolio-text">Here, you can view some projects from my training practice — both individual and group projects.</p></div>
  <ul class="portfolio-list">
  <li class="portfolio-item">
  <a href="https://cars-project-azure.vercel.app/" target="_blank" rel="noreferrer noopener"><img  src="/my-portfolio.jpg" class="portfolio-img" alt="My Portfolio"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">My Portfolio</h3>
  <a href="https://github.com/RITAS2000/cars-project" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a>
  </div>
  <div class="project-contianer-text">
  <div>
 <p class="project-item-text"><span class="project-item-span">Type:</span> Solo</p>
 <p class="project-item-text"><span class="project-item-span">Year:</span> 2025</p>
 </div>
 <p class="project-item-text">Personal project – portfolio. Designed, developed front-end and back-end, and deployed independently. Includes a responsive design for mobile, tablet, and desktop versions. Used Vite as a bundler, Vercel for deployment, and the Swiper library for interactive sliders. The project features interactive sections, slider for skills, as well as a contact form for feedback.</p>

 <p class="project-item-text"><span class="project-item-span">Tech Stack:</span> HTML, SCSS, JavaScript, Vercel.</p>
 </div>
  </div>
  </li>
  <li class="portfolio-item">
  <a href="https://cars-project-azure.vercel.app/" target="_blank" rel="noreferrer noopener"><img  src="/car.jpg" class="portfolio-img" alt="Rental Car"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Rental Car</h3>
  <a href="https://github.com/RITAS2000/cars-project" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a>
  </div>
  <div class="project-contianer-text">
  <div>
 <p class="project-item-text"><span class="project-item-span">Type:</span> Solo</p>
 <p class="project-item-text"><span class="project-item-span">Year:</span> 2025</p>
 </div>
 <p class="project-item-text">Developed an hourly car rental application with a desktop-responsive design, implementing filters by brand, hourly price, and minimum-to-maximum mileage. The application state is managed using Redux. Also created a detailed car description page with a booking form and ensured smooth functionality across all components.</p>
 <p class="project-item-text"><span class="project-item-span">Tech Stack:</span> React, Redux, CSS Modules, JavaScript, HTML, Vercel.</p>
 </div>
  </div>
  </li>
  <li class="portfolio-item"><a href="https://d-cgroup-project-f1-x2.vercel.app/" target="_blank" rel="noreferrer noopener"><img src="/taste.jpg" class="portfolio-img" alt="Tasteorama"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Tasteorama</h3>
  <a href="https://github.com/RITAS2000/DCgroup-project-f1-x2" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a></div>
  <div class="project-contianer-text">
  <div>
 <p class="project-item-text"><span class="project-item-span">Type:</span> Group</p>
 <p class="project-item-text"><span class="project-item-span">Year:</span> 2025</p>
 </div>
 <p class="project-item-text">Led a team of 10 developers in building both the front-end and back-end of the Tasteorama platform. Oversaw the development of responsive UI, integration with the backend for data retrieval, and ensured smooth communication between front-end and back-end components. Coordinated tasks, maintained code quality, and guided the team to deliver the project on schedule.</p>
 <p class="project-item-text"><span class="project-item-span">Tech Stack:</span> React, Redux, CSS Modules, JavaScript, Node, MongoDB, HTML, Vercel.</p>
 </div>
  </div></li>
  <li class="portfolio-item"><a href="https://ritas2000.github.io/stp-8884/" target="_blank" rel="noreferrer noopener"><img src="/rivengard.jpg" class="portfolio-img" alt="Rivengard"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Rivengard</h3>
  <a href="http://github.com/RITAS2000/stp-8884" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a></div>
  <div class="project-contianer-text">
  <div>
 <p class="project-item-text"><span class="project-item-span">Type:</span> Group</p>
 <p class="project-item-text"><span class="project-item-span">Year:</span> 2025</p>
 </div>
 <p class="project-item-text">Collaborated in a small team (designer and one other developer) on the implementation of the user interface and interactive features for a game by Evoplay. I was responsible for developing the "About the Game", "Features", "How to Play", "Preview", "User Reviews", and "FAQ" sections, ensuring a responsive design and smooth functionality across all components.</p>
 <p class="project-item-text"><span class="project-item-span">Tech Stack:</span> HTML, CSS, JavaScript.</p>
 </div>
  </div></li>
  <li class="portfolio-item"><a href="https://ritas2000.github.io/js-project-dcgroup/" target="_blank" rel="noreferrer noopener"><img src="/lloyd.jpg" class="portfolio-img" alt="Portfolio"></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Portfolio</h3>
  <a href="https://github.com/RITAS2000/js-project-dcgroup" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a></div>
  <div class="project-contianer-text">
  <div>
 <p class="project-item-text"><span class="project-item-span">Type:</span> Group</p>
 <p class="project-item-text"><span class="project-item-span">Year:</span> 2025</p>
 </div>
 <p class="project-item-text"> Led a team of 9 developers in creating a modern portfolio website. We focused on responsive design and interactive UI using JavaScript libraries such as Swiper and Accordion. The project emphasized effective collaboration, task delegation, and code quality to deliver a polished final product on time.</p>
 <p class="project-item-text"><span class="project-item-span">Tech Stack:</span> HTML, CSS, JavaScript.</p>
 </div>
  </div></li>
  <li class="portfolio-item"><a href="https://ritas2000.github.io/project-dcgroup/" target="_blank" rel="noreferrer noopener"><img src="/green.jpg" class="portfolio-img" alt="Green Harvest."></a>
  <div>
  <div class="project-container-title"><h3 class="project-name">Green Harvest</h3>
  <a href="https://github.com/RITAS2000/project-dcgroup" target="_blank" rel="noreferrer noopener" class="project-link">GitHub</a></div>
  <div class="project-contianer-text">
  <div>
 <p class="project-item-text"><span class="project-item-span">Type:</span> Group</p>
 <p class="project-item-text"><span class="project-item-span">Year:</span> 2024</p>
 </div>
 <p class="project-item-text">Led a team of 9 developers in creating a website using the Vite bundler, which ensured fast builds and a smooth development process. This project became a valuable hands-on experience in honing teamwork skills, maintaining code quality, and meeting deadlines.</p>
 <p class="project-item-text"><span class="project-item-span">Tech Stack:</span> HTML, CSS, JavaScript.</p>
 </div>
  </div></li></ul>`;
  return sectionPortfolio;
}
