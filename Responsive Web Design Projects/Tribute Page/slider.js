const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      spaceBetween: 2,
      slidesPerView:2,
      autoHeight: true,
      freeMode: true,
      speed:500,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});