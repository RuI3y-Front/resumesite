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

const header=document.querySelector('.header')
const home__content=document.querySelector('.information')
const nav=document.querySelector('.nav')
const stickyNav =function(entries){
const [entry]=entries;
console.log(entries);
if(!entry.isIntersecting){
  header.classList.add('scroll-header')
  console.log('s');
}
}


const headerObserver=new IntersectionObserver(stickyNav,{
  root:null,
  threshold:.1,
  rootMargin:'-4px',
  
})


headerObserver.observe(home__content)