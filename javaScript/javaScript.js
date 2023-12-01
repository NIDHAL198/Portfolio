// togel nav bar
let menuIcon = document.querySelector("#menu-icon");
let navbar  = document.querySelector(".navbar");
menuIcon.onclick =  () => {
   menuIcon.classList.toggle('fa-xmark')
   navbar.classList.toggle('active')
}

// scroll section active links 
let section = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")
window.onscroll = ()=>{
   section.forEach((sec)=>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 150 ;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >=offset && top < offset + height) {
         navLinks.forEach((link)=>{
            link.classList.remove('active')
            document.querySelector('header nav a[href*='+ id +']').classList.add("active");
         })
      }
   })


   // scroll section active links 
   let header = document.querySelector('header')
   header.classList.toggle('sticky',window.scrollY > 100)
   // remove togle and navbar when click navbarlink (scroll)
   menuIcon.classList.remove('fa-xmark')
   navbar.classList.remove('active')
}  
// scrool reval 
ScrollReveal({ 
   reset: true,
   distance:'80px',
   duration:2000,
   delay:200
});
ScrollReveal().reveal('.home-content,.heading', { origin: "top"});
ScrollReveal().reveal('.sklls-content,.project-continer,.contact form,home-img', { origin: "top"});
ScrollReveal().reveal('.home-content h1', { origin: "left"});
ScrollReveal().reveal('.home-content p', { origin: "right"});


// typed js
const typed = new Typed(".multipel-text",{
   strings: ['Frontend Devloper','Computer Science Engineering',"Freelancer"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop:true,
})