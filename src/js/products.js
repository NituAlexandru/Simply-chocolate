import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    768: {
      slidesPerView: 2.6,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 18,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  waitForAnimate: false,
  variableWidth: true,
});
