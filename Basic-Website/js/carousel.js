document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: window.innerWidth < 1024, // Enable grabCursor for smaller devices
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: window.innerWidth > 768 ? 200 : 100, // Dynamic depth
      modifier: 3,
      slideShadows: true
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    loop: true,
    autoplay: {
      delay: 1500, // 1.5 seconds delay
      disableOnInteraction: false, // Keeps autoplay active
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
      1560: { slidesPerView: 3 }
    },
    slidesPerView: 1, // Default value
    spaceBetween: 10 // Default value
  });
});

  
