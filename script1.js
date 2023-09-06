function swiper1(){
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}
function swiper2(){
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}
swiper1();
swiper2();






// onComplete:function(){
//   gsap.to("#part1 .section2",{
//     scrollTrigger:{
//       scroller:"#main",
//       trigger:"#part1",
//       start:"top 3%",
//       scrub:1,
//       end:"top 100%",
//       pin:true,
//       markers:true
//     },
//     delay:-1,
//      scale:0,
//     duration:1,
//     ease:Expo.easeInout
//   })
  
//  }