function swiper1(){
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

swiper1();
gsap.registerPlugin(ScrollTrigger);
function loco(){
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

 const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();
function navAnimation(){
  document.querySelectorAll(".a1")
  .forEach(function(elem){
    elem.addEventListener("mouseenter",function(dets){
      gsap.to(dets.target.children[1],{
          y:17,
          ease:Expo.easeInout,
          duration:.5,
          opacity:1
      })  
    })
  })
  document.querySelectorAll(".a1")
  .forEach(function(elem){
    elem.addEventListener("mouseleave",function(dets){
      gsap.to(dets.target.children[1],{
          y:100,
          ease:Expo.easeInout,
          duration:.5
      })  
    })
  })
  
  
  document.querySelectorAll("#nav .button")
  .forEach(function(elem){
     elem.addEventListener("mouseenter",function(dets){
        gsap.to(dets.target.children[1],{
           x:10,
          ease:Expo.easeInout,
          duration:.5
        })
     })
  })
  
  document.querySelectorAll("#nav .button")
  .forEach(function(elem){
     elem.addEventListener("mouseleave",function(dets){
        gsap.to(dets.target.children[1],{
           x:0,
          ease:Expo.easeInout,
          duration:.5
        })
     })
  })
  document.querySelectorAll("#nav .bdiv")
  .forEach(function(elem){
     elem.addEventListener("mouseenter",function(dets){
        gsap.to(dets.target.children[1],{
           x:10,
          ease:Expo.easeInout,
          duration:.5
        })
     })
  })
  
  document.querySelectorAll("#nav .bdiv")
  .forEach(function(elem){
     elem.addEventListener("mouseleave",function(dets){
        gsap.to(dets.target.children[1],{
           x:0,
          ease:Expo.easeInout,
          duration:.5
        })
     })
  })
}
navAnimation();

function scrollTrigger(){

  
gsap.to("#part1 .section",{
   scrollTrigger:{
     scroller:"#main",
     trigger:"#part1 .section",
     start:"top -30%",
     scrub:1,
     end:"top 100%",
     pin:true,
   },
    scale:0,
   duration:1,
   ease:Expo.easeInout,
   
})
gsap.to("#part3",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#part3",
    start:"top 30%",
    scrub:3,
    end:"top 100%"
  },
  width:"100vw",
  height:"270vh",
  ease:Expo.easeInout,
  duration:.5
})
gsap.to("#part4 #a",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#part4 img",
    start:"top 0%",
  },
  width:"20%",
  left:"16.1%",
  top:"22%",
  height:"13%",
  ease:Expo.easeInout,
  duration:2
})
gsap.to("#part4 #b",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#part4 img",
    start:"top 0%",
  },
  width:"20%",
  left:"39.1%",
  top:"22%",
  height:"13%",
  ease:Expo.easeInout,
  duration:2
})
gsap.to("#part4 #c",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#part4 img",
    start:"top 0%",
  },
  width:"20%",
  left:"61.1%",
  top:"22%",
  height:"13%",
  ease:Expo.easeInout,
  duration:2
})

}


function cardhoverAnimation(){
document.querySelector("#a")
.addEventListener("mouseenter",function(){
    gsap.to("#a",{
      scale:1.1,
      ease:Expo.easeInout,
      duration:1
    })
})
document.querySelector("#a")
.addEventListener("mouseleave",function(){
  gsap.to("#a",{
    scale:1,
    ease:Expo.easeInout,
    duration:1
  })
})
document.querySelector("#b")
.addEventListener("mouseenter",function(){
    gsap.to("#b",{
      scale:1.1,
      ease:Expo.easeInout,
      duration:1
    })
})
document.querySelector("#b")
.addEventListener("mouseleave",function(){
  gsap.to("#b",{
    scale:1,
    ease:Expo.easeInout,
    duration:1
  })
})
document.querySelector("#c")
.addEventListener("mouseenter",function(){
    gsap.to("#c",{
      scale:1.1,
      ease:Expo.easeInout,
      duration:1
    })
})
document.querySelector("#c")
.addEventListener("mouseleave",function(){
  gsap.to("#c",{
    scale:1,
    ease:Expo.easeInout,
    duration:1
  })
})
}
cardhoverAnimation();
scrollTrigger();