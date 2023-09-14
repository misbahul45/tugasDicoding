
const aside = document.querySelector("aside");
const menuBar = document.querySelector(".menu i");
let isClick = false;

menuBar.onclick=()=>{
    if (isClick===false) {
        menuBar.classList.remove("fa-bars");
        menuBar.classList.add("fa-close");
        aside.style.transform = "translateY(0) scale(1)";
        isClick=true;
    }else{ 
        menuBar.classList.remove("fa-close");
        menuBar.classList.add("fa-bars");
        aside.style.transform="translateY(-500px)scale(0)"
        isClick=false;
    }
    console.log('klskls')
}



















//scrool animation
const header = document.querySelector(".header-animation");
const textHome=document.querySelector(".text-title");
const textP=document.querySelector(".text p")
const textButton=document.querySelector(".text button");
function animationHome(){
    setTimeout(()=>{
        textHome.style.transform="scale(1)"
        textP.style.transform="scale(1)"
        textButton.style.transform="translateY(0) scale(1)"
    },200)
    setTimeout(()=>{
      header.style.transform="scale(1)"
    },750)
}
animationHome()
window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.style.backdropFilter = "blur(10px)";
    header.style.background = "rgba(0,259,259,0.12)";
  } else {
    header.style.backdropFilter = "none";
    header.style.background="transparent";
  }
});

gsap.registerPlugin(ScrollTrigger);

function animationRight(element){
  gsap.to(element,{
    x:0,
    opacity:1,
    scrollTrigger:{
        trigger:element,
        start:"top 90%",
        end:"top center",
        scrub:true,
        pin:".square",
        pinSpacing:false,
    }
  })
}
function animationLeft(element){
  gsap.to(element,{
    x:0,
    opacity:1,
    scrollTrigger:{
        trigger:element,
        start:"top 90%",
        end:"top center",
        scrub:true,
        pin:".square",
        pinSpacing:false,
    }
  })
}
function animationBottom(element){
  gsap.to(element,{
    y:0,
    opacity:1,
    scrollTrigger:{
        trigger:element,
        start:"top 90%",
        end:"top center",
        scrub:true,
        pin:".square",
        pinSpacing:false,
    }
  })
}
animationRight(".content-text-right");
animationLeft(".content-text-left");
animationBottom(".swiper-container");
animationBottom(".portfolio-swiper");




//typing animation
const typing1=new Typed(".text-typing", {
  strings: ["","App Developer","Web Developer","Fullstack Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

//navbar Animation

const navbarItem=document.querySelectorAll("nav ul li");
navbarItem.forEach((item)=>{
    item.onclick=()=>{

      if(!item.classList.contains("navbar-item")){
        navbarItem.forEach((otherItem)=>{
          otherItem.classList.remove("navbar-active")
          otherItem.querySelector("a").classList.add("a-item")
        item.querySelector("a").classList.remove("a-active");
        })
      
      }


      item.classList.add("navbar-active")
      item.querySelector("a").classList.remove("a-item");
      item.querySelector("a").classList.add("a-active");
    }
})

//animation swipper services
const mySwiperServices = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 120,
      modifier: 1,
      slideShadows: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.services-slide-next',
      prevEl: '.services-slide-prev',
  },

})

//swiper portfolio
const swiper = new Swiper('.portfolio-swiper', {
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 100,
      depth: 120,
      modifier: 1,
      slideShadows: true,
  },

});