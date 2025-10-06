/*=============== HOME SPLIT TEXT ===============*/
const text1 = new SplitType('.home__profession-1', { types: 'chars' })
const text2 = new SplitType('.home__profession-2', { types: 'chars' })

function animateProfessions() {
  anime.timeline({ loop: true })
    .add({
      targets: '.home__profession-1',
      opacity: [0, 1],
      translateY: ['100%', '0%'],
      easing: 'easeOutCubic',
      duration: 900
    })
    .add({
      targets: '.home__profession-1',
      opacity: 1,
      duration: 2000
    })
    .add({
      targets: '.home__profession-1',
      opacity: [1, 0],
      translateY: ['0%', '-100%'],
      easing: 'easeInCubic',
      duration: 900
    })
    .add({
      targets: '.home__profession-2',
      opacity: [0, 1],
      translateY: ['100%', '0%'],
      easing: 'easeOutCubic',
      duration: 900
    })
    .add({
      targets: '.home__profession-2',
      opacity: 1,
      duration: 2000
    })
    .add({
      targets: '.home__profession-2',
      opacity: [1, 0],
      translateY: ['0%', '-100%'],
      easing: 'easeInCubic',
      duration: 900
    });
}
animateProfessions();

/*=============== SWIPER PROJECTS ===============*/
const swiper = new Swiper(".projects__swiper", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 'auto',

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },

  speed: 1000, // smooth transition speed in ms
});

