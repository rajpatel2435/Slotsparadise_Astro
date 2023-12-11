
  window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    400: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    1120: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Responsive breakpoints

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Responsive breakpoints
    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    
    400: {
      slidesPerView: 4,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 10,
      spaceBetween: 30
    },

    1120: {
      slidesPerView: 11,
      spaceBetween: 30
    }
  },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
});

  

