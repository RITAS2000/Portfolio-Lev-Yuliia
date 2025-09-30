import '../../src/scss/style.scss';
import Header from '../../src/js/components/header.js';
import Footer from '../../src/js/components/footer.js';
import Resume from '../../src/js/components/resume.js';
import Certifications from '../../src/js/components/certifications.js';

const bodyR = document.querySelector('#body-resume');
const mainR = document.createElement('main');

bodyR.appendChild(Header());
bodyR.appendChild(mainR);
mainR.appendChild(Resume());
mainR.appendChild(Certifications());
bodyR.appendChild(Footer());
