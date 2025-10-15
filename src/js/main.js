import '../scss/style.scss';
import swiperSkills from './swiper.js';
import './theme.js';
import Header from './components/header.js';
import Hero from './components/hero.js';
import AboutMe from './components/aboutme.js';
import MySkills from './components/skills.js';
import Portfolio from './components/portfolio.js';
import Resume from './components/resume.js';
import Pricing from './components/pricing.js';
import Form from './components/form.js';
import Footer from './components/footer.js';

const bodyI = document.querySelector('#body-index');
const mainI = document.createElement('main');

bodyI.appendChild(Header());
bodyI.appendChild(mainI);
mainI.appendChild(Hero());
mainI.appendChild(AboutMe());
mainI.appendChild(MySkills());
mainI.appendChild(Portfolio());
mainI.appendChild(Resume());
mainI.appendChild(Pricing());
mainI.appendChild(Form());
bodyI.appendChild(Footer());

swiperSkills();
