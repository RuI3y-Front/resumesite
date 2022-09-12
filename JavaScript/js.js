/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween:30,
    loop:'true',

     
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

  //? Swiper Two 

  var newSwiper = new Swiper(".new-swiper", {
    spaceBetween:14,
    // برایه فاصله بینشون
    slidesPerView:"auto",
    // برایه ریسپانسیو
    centeredSlides:true,
    loop:'true',
  
     
  
  });
//! Scroll total
const scroll=document.getElementById('scroll-up')
  function scrollup(){
   if(this.scrollY <=300){
    scroll.classList.remove('show-scroll')
  } else{ 
    scroll.classList.add('show-scroll')
  }}
window.addEventListener('scroll',scrollup)


// NAV STIKY
function scrollHeader(){
  const header=document.querySelector('.header')
  if(this.scrollY >=50)header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)