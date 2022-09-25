var swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 25,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     dynamicBullets: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },

   breakpoints:{
       0: {
           slidesPerView: 1,
       },
       520: {
           slidesPerView: 2,
       },
       950: {
           slidesPerView: 3,
       },
   },
 });

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.
addEventListener("click", () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
}))
