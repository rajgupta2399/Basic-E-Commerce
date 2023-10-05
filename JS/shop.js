const swiperWomen = new Swiper('.swiper-women', {
    // Optional parameters
    direction: 'vertical',
    speed:600,
    loop: true,
    autoplay:{
        delay :2000,
        disableOnInteraction : false,
        pauseOnMouseEnter:true,
    },
    slidesPerView:2,
    spaceBetween:10,
  });


const swiperMen = new Swiper('.swiper-men', {
    // Optional parameters
    direction: 'vertical',
    speed:600,
    loop: true,
    autoplay:{
        delay :2000,
        disableOnInteraction : false,
        pauseOnMouseEnter:true,
        reverseDirection:true,
    },
    slidesPerView:3,
    spaceBetween:10,
  });


  const swiperNew = new Swiper('.swiper-new', {
    // Optional parameters
    direction: 'vertical',
    speed:600,
    loop: true,
    autoplay:{
        delay :2000,
        disableOnInteraction : false,
        pauseOnMouseEnter:true,
    },
    slidesPerView:2,
    spaceBetween:10,
  });


