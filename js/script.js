



window.addEventListener('scroll', function(){
    let navbar = document.getElementById("menu-bar");
   if(window.pageYOffset >= 190){
     navbar.classList.add('stycky');
   }else{
    navbar.classList.remove('stycky');
   }
})

