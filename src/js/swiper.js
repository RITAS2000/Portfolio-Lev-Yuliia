import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Keyboard } from 'swiper/modules';

export default function swiperSkills() {
  //   const swiperEl = document.querySelector('.swiper-skills');
  //   if (!swiperEl) return;
  new Swiper('.swiper-skills', {
    modules: [Navigation, Keyboard],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
}
