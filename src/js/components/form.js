export default function Form() {
  const formSection = document.createElement('section');
  formSection.classList.add('container', 'form-section');
  formSection.innerHTML = `<div><h2 class="form-title">Let's Connect!</h2>
  <p class="form-text">You can write me a message, share your thoughts, or simply leave a comment using this form.</p></div>
  <form class="form">
    <label>Name
    <svg class="form-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
 <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM16.961 22.22c4.383-0.866 7.785-2.861 9.014-5.519-0.677 5.249-5.047 9.299-10.339 9.299-3.726 0-6.996-2.009-8.84-5.030 2.2 1.721 6.079 2.056 10.165 1.249zM20 11c0-1.657 0.895-3 2-3s2 1.343 2 3c0 1.657-0.895 3-2 3s-2-1.343-2-3zM11 11.609c-1.306 0-2.417 0.489-2.829 1.172-0.111-0.183-0.171-1.005-0.171-1.211 0-0.971 1.343-1.758 3-1.758s3 0.787 3 1.758c0 0.206-0.061 1.028-0.171 1.211-0.412-0.683-1.522-1.172-2.829-1.172z"></path>
    </svg>
    <input type="text" name="text" class="input" minlength="2" 
     maxlength="32" required />
    </label>
    <label>Email
   <svg class="form-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0a3b0a"><g fill="none" stroke="#0a3b0a" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="m7 9l5 3.5L17 9"/><path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/></g></svg>
    <input type="email" name="email" class="input" pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+"  required>
    </label>
    <label>Message
    <svg class="form-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 576 512"><path d="m402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9L216.2 301.8l-7.3 65.3l65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1l30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
    <textarea name="message" rows="8" class="textarea" maxlength="192" required></textarea></label>
    <button type="submit" class="button"><span>Send</span></button>
    </form>`;
  return formSection;
}
