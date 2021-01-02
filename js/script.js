// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'particles.json', function () {});
/* Bulma load navburger */
$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});




/* Loading for Animate.css animations*/
$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).removeClass('hidden')
        $(this).addClass('slideInUp');

      }
    });
  });
});

/* Preloader */

$(document).ready(function() {
  setTimeout(function() {
    document.getElementById('preloader').style['display'] = 'none';
    document.getElementById('loader').style['display'] = 'none';
    document.getElementById('loader1').style['display'] = 'none';
  }, 1500);
});

// //Smooth Scroll

$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});
// var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
//
// var options = {
//     "behavior": "smooth",
//     "left": left,
//     "top": top
// };
//
// if (isSmoothScrollSupported) {
//     // Native smooth scrolling
//     // window.scrollTo(options);
// } else {
//     // Old way scrolling without effects
//       $('a[href*="#"]:not([href="#"])').click(function(){
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
//           var target = $(this.hash);
//           target = $(this.hash);
//           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//           if (target.length) {
//             $('html, body').animate({
//             scrollTop: target.offset().top
//           }, 1000);
//           return false;
//           }
//         }
//       });
// }
