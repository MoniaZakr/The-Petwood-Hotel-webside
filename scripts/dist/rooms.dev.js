"use strict";

var swiper = new Swiper(".swiper", {
  spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    360: {
      spaceBetween: 52
    },
    375: {
      spaceBetween: 50
    },
    384: {
      spaceBetween: 37
    },
    390: {
      spaceBetween: 30
    },
    412: {
      spaceBetween: -2
    },
    428: {
      spaceBetween: -20
    },
    810: {
      spaceBetween: 200
    }
  }
});
//# sourceMappingURL=rooms.dev.js.map
