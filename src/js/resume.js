import '../scss/style.scss';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Resume from './components/resume.js';
import Certifications from './components/certifications.js';

const bodyR = document.querySelector('#body-resume');
const mainR = document.createElement('main');

bodyR.appendChild(Header());
bodyR.appendChild(mainR);
mainR.appendChild(Resume());
mainR.appendChild(Certifications());
bodyR.appendChild(Footer());
