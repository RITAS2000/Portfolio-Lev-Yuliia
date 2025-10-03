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
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // коли ширина >= 1024px
      //   1024: {
      //     slidesPerView: 3,
      //     spaceBetween: 30,
      //   },
      //   // коли ширина >= 1440px
      //   1440: {
      //     slidesPerView: 4,
      //     spaceBetween: 40,
      //   },
    },
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
