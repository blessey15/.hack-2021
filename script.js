function dropdown(){
    const d=document.getElementById("dropdown");
    if(d.style.display=="block"){
      d.style.display="none"
    }else{
      d.style.display="block"
    }
  }

  $("[data-trigger]").on("click", function(){
    var trigger_id =  $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

  (function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".preloader").length > 0)
          {
              $(".preloader").fadeOut("slow");
          }
      });
  })(jQuery)

  typing_effect(['24 hours of Coding', 'Endless space for innovation', 'See you soon!'],
            ['black', 'black', 'black']);

      function typing_effect(words, colors) {

      var cursor = document.getElementById('cursor'); //cursor
      var text = document.getElementById('text') //text

      var blink = true;
      var wait = false;
      var letters_count = 1;
      var temp = 1;

      text.style.color = colors[0]
      window.setInterval(function () { //wait between words when it starts writting
        if (letters_count === 0 && wait === false) {
          wait = true;

          text.innerHTML = '' // leave a blank
          window.setTimeout(function () {
            var usedColor = colors.splice(0, 1)[0] //remove first element and get it as str
            colors.push(usedColor);
            var usedWord = words.splice(0, 1)[0]
            words.push(usedWord);
            temp = 1;
            text.style.color = colors[0]
            letters_count += temp;
            wait = false;
          }, 1000)
        } else if (letters_count === words[0].length + 1 && wait === false) {
          wait = true;
          window.setTimeout(function () { //wait a bit until words finished and start deleting
            temp = -1;
            letters_count += temp;
            wait = false;
          }, 1000)
        } else if (wait === false) { //write words                    
          text.innerHTML = words[0].substr(0, letters_count)
          letters_count += temp;
        }
      }, 120)
      window.setInterval(function () {
        if (blink) {
          cursor.style.opacity = "0";
          blink = false;
        } else {
          cursor.style.opacity = "1";
          blink = true;
        }
      }, 400)
    } 
