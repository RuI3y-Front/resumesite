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


//TODO: Click Login
const nav_btn=document.querySelector('.nav__btns')
const login__close=document.querySelector('.login__close')
const login=document.querySelector('.login')
nav_btn.addEventListener('click',function(){
  login.style.right=0
  
})
login__close.addEventListener('click',function(){
  login.style.right='-100%'
})


//TODO:Lazy Loading 
const dataScr=document.querySelector('.section__title')
console.log(dataScr);
const srcFunc=function(elm,observer){
const [srcPic]=elm;
  if(!srcPic.isIntersecting)return
  const dataPic=document.querySelectorAll('img[data-src]')
dataPic.forEach(e=>{

  e.src=e.dataset.src;
  e.addEventListener('load',function(){
    console.log(e);
    e.classList.remove('lazy-img')
    })
})
observer.unobserve(srcPic.target);
}





const dataSrcObserver=new IntersectionObserver(srcFunc,{
root:null,
threshold:0,
rootMargin:'100px'
})



dataSrcObserver.observe(dataScr)
