const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: { 
      320: { 
        slidesPerView: 1,
      },
      768: { 
        slidesPerView: 2,
      }
    },


    spaceBetween: 40,

    slidesPerGroup: 2,
  });