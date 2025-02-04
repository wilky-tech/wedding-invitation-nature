var swiper1 = new Swiper(".box-1, .box-3", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 3000,
    effect: "slide",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  document.querySelector(".box-1").addEventListener("touchstart", handleTouchStart, false);
  document.querySelector(".box-1").addEventListener("touchmove", handleTouchMove, false);
  
  touchStartX = 0;
  touchEndX = 0;
  
  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }
  
  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
  }
  
  document.querySelector(".box-1").addEventListener("touchend", function () {
    let diffX = touchStartX - touchEndX;
    let swipeThreshold = 50;
  
    if (diffX > swipeThreshold) {
      swiper1.slideNext();  
    } else if (diffX < -swipeThreshold) {
      swiper1.slidePrev();  
    }
  });
