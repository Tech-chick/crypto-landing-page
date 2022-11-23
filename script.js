const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("#navbar");

hamburger.addEventListener("click", () =>{
 hamburger.classList.toggle("active");
 navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.
  addEventListener("click", () => {
      hamburger.classList.remove("active");
      navBar.classList.remove("active");
  }))

  window.addEventListener("scroll", reveal);

  function reveal(){
      var reveals = document.querySelectorAll(".reveal");
      
      for (var i = 0; i < reveals.length; i++){
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 100;
  
          if(revealtop < windowheight - revealpoint){
              reveals[i].classList.add("active");
          } else{
              reveals[i].classList.remove("active")
          }
      }
  }

  window.addEventListener("scroll", reveal2);

  function reveal2(){
      var reveals = document.querySelectorAll(".reveal2");
      
      for (var i = 0; i < reveals.length; i++){
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 350;
  
          if(revealtop < windowheight - revealpoint){
              reveals[i].classList.add("active");
          } else{
              reveals[i].classList.remove("active")
          }
      }
  }
  
  