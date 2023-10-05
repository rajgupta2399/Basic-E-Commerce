// switch left right middle of banner

function toggleBtn(){
    const resetBtn = document.querySelector(".reset");
    resetBtn.classList.toggle("active")
    // resetBtn.style.transform = "rotateZ(180deg)"
}


console.log("hello")
function switchBanner(name){
    const banner = document.querySelector("#banner");
    if (!banner.classList.contains(name)){
        banner.className = 'banner'; 
        banner.classList.add(name);
    }
    toggleBtn()
    return;
}

function resetBanner(){
    const banner = document.querySelector("#banner");
    banner.className = "banner"
    toggleBtn();
}


// slider

const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy)



// 
const swiperWomen = new Swiper('.swiper-women', {
    // Optional parameters
    direction: 'vertical',
    speed:600,
    loop: true,
    autoplay:{
        delay :1500,
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
        delay :1500,
        disableOnInteraction : false,
        pauseOnMouseEnter:true,
    },
    slidesPerView:2,
    spaceBetween:10,
  });