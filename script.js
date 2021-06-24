function dropdown(){
    const d=document.getElementById("dropdown");
    if(d.style.display=="block"){
      d.style.display="none"
    }else{
      d.style.display="block"
    }
  }

 

  (function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".preloader").length > 0)
          {
              $(".preloader").fadeOut("slow");
          }
      });
  })(jQuery)

  