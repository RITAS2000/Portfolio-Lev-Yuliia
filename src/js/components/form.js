import axios from 'axios';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { t, onLanguageChange, getCurrentLang } from '../lang.js';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Form() {
  const formSection = document.createElement('section');
  formSection.id = 'form';
  formSection.classList.add('container', 'form-section');

  formSection.addEventListener('input', event => {
    const input = event.target;

    if (input.classList.contains('input')) {
      input.value = input.value.replace(/[<>\/\\{}[\];$]/g, '');

      const span = input.nextElementSibling;

      if (!span) return;

      if (input.value.length === 0) {
        input.classList.remove('touched-invalid', 'touched-valid');
        span.textContent = '';
        return;
      }
      if (input.type === 'text') {
        if (input.value.length < (input.minLength || 0)) {
          input.classList.add('touched-invalid');
          input.classList.remove('touched-valid');
          span.textContent = t('form.invalid_name');
          span.style.color = 'red';
        } else {
          input.classList.remove('touched-invalid');
          input.classList.add('touched-valid');
          span.textContent = t('form.valid_name');
          span.style.color = 'green';
        }
      } else if (input.type === 'email') {
        if (!input.checkValidity()) {
          input.classList.add('touched-invalid');
          input.classList.remove('touched-valid');
          span.textContent = t('form.invalid_email');
          span.style.color = '#f51111';
        } else {
          input.classList.remove('touched-invalid');
          input.classList.add('touched-valid');
          span.textContent = t('form.valid_email');
          span.style.color = 'green';
        }
      } else if (input.name === 'message') {
        if (!input.checkValidity()) {
          input.classList.add('touched-invalid');
          input.classList.remove('touched-valid');
          span.textContent = t('form.invalid_message');
          span.style.color = '#f51111';
        } else {
          input.classList.remove('touched-invalid');
          input.classList.add('touched-valid');
          span.textContent = t('form.valid_message');
          span.style.color = 'green';
        }
      }
    }
  });

  formSection.innerHTML = `<div class='title-container'><h2 data-i18n="form.title" class="form-title"></h2>
  <p data-i18n="form.text" class="form-text"></p></div>

  <form class="form">
    <label  class="label"><span data-i18n="form.label_name"></span>
   <svg  class="form-icon" width="22" height="22" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"  viewBox="0 0 24 24"><path d="M9.5,11c-.276,0-.5-.224-.5-.5,0-1.215-.771-2.5-1.5-2.5s-1.5,1.285-1.5,2.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5c0-1.652,1.069-3.5,2.5-3.5s2.5,1.848,2.5,3.5c0,.276-.224,.5-.5,.5Zm9.5-.5c0-1.652-1.069-3.5-2.5-3.5s-2.5,1.848-2.5,3.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5c0-1.215,.771-2.5,1.5-2.5s1.5,1.285,1.5,2.5c0,.276,.224,.5,.5,.5s.5-.224,.5-.5Zm5,1.5C24,5.383,18.617,0,12,0S0,5.383,0,12s5.383,12,12,12,12-5.383,12-12Zm-1,0c0,6.065-4.935,11-11,11S1,18.065,1,12,5.935,1,12,1s11,4.935,11,11Zm-5.185,3.888c.214-.174,.246-.488,.073-.702-.174-.213-.489-.246-.703-.074-.023,.019-2.37,1.889-5.186,1.889s-5.162-1.87-5.186-1.889c-.216-.172-.528-.139-.703,.074-.173,.214-.141,.528,.073,.702,.106,.087,2.638,2.112,5.815,2.112s5.709-2.025,5.815-2.112Z"/></svg>
    <input type="text" name="text" class="input" minlength="2" 
     maxlength="36" required />
     <span class="js-input-message"></span>
    </label>
    <label class="label"> <span data-i18n="form.label_email"></span>
   <svg class="form-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><g fill="none" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m7 9l5 3.5L17 9"/><path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/></g></svg>
    <input type="email" name="email" class="input" pattern="^[a-zA-Z0-9._\\-]+@[a-zA-Z0-9._\\-]+\\.[a-zA-Z]{2,4}$" maxlength="64" required>
    <span class="js-input-message"></span>
    </label >
    <label class="label"><span data-i18n="form.label_message"></span>
    <svg class="form-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 576 512"><path d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
    <textarea name="message" rows="8" class="textarea input" minlength="5"maxlength="560" required></textarea>
    <span class="js-textaera-message"></span></label>
    <button type="submit"  class="button"><span data-i18n="form.button"></span></button>
    </form>`;

  function clearInputs() {
    formSection.querySelectorAll('.input').forEach(input => {
      input.value = '';
      input.classList.remove('touched-valid', 'touched-invalid');
      const span = input.nextElementSibling;
      if (span) span.textContent = '';
    });
  }
  function renderTexts() {
    formSection.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    clearInputs();
  }
  onLanguageChange(renderTexts);
  formSection.querySelector('.form').addEventListener('submit', event => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('text');
    const email = formData.get('email');
    const message = formData.get('message');

    const data = {
      name,
      email,
      message,
    };
    const lang = getCurrentLang();

    const successMessage =
      lang === 'ua'
        ? 'Ваше повідомлення успішно відправлено!'
        : 'Your message has been sent successfully!';

    const failMessage =
      lang === 'ua'
        ? 'Не вдалося відправити повідомлення. Спробуйте ще раз.'
        : 'Failed to send message. Please try again.';

    axios
      .post(`${backendUrl}/portfolio/message`, data)
      .then(() => {
        form.reset();
        Toastify({
          text: successMessage,
          duration: 3000,
          newWindow: true,
          gravity: 'top',
          position: 'center',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
        }).showToast();
      })
      .catch(() => {
        Toastify({
          text: failMessage,
          duration: 3000,
          gravity: 'top',
          position: 'center',
          style: {
            background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
          },
        }).showToast();
      });

    form.querySelectorAll('.input').forEach(input => {
      input.classList.remove('touched-invalid', 'touched-valid');
      const span = input.nextElementSibling;
      if (span) span.textContent = '';
    });
  });

  return formSection;
}
