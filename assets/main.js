// Typed.js
const typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
  ,
  typeSpeed: 100
});

// // Details Toggle
// const showDetailsRandomeal = () => {
//   const details = document.querySelector(".randomeal-details")
//   details.classList.toggle("visible");
//   const btn = document.querySelector("#randomeal-toggle");
//   btn.classList.toggle("active");
// }

// const randoBtn = document.querySelector("#randomeal-toggle")
// randoBtn.addEventListener('click', showDetailsRandomeal);

// const showDetailsRioserve = () => {
//   const details = document.querySelector(".rioserve-details")
//   details.classList.toggle("visible");
//   const btn = document.querySelector("#rioserve-toggle");
//   btn.classList.toggle("active");
// }

// const rioBtn = document.querySelector("#rioserve-toggle")
// rioBtn.addEventListener('click', showDetailsRioserve);

// const showDetailsCocktail = () => {
//   const details = document.querySelector(".cocktail-details")
//   details.classList.toggle("visible");
//   const btn = document.querySelector("#cocktail-toggle");
//   btn.classList.toggle("active");
// }

// const ctBtn = document.querySelector("#cocktail-toggle")
// ctBtn.addEventListener('click', showDetailsCocktail);

/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
  $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
      var $next = $(this).next('.quote');
      fade($next.length > 0 ? $next : $(this).parent().children().first());
 });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

  if ($(window).scrollTop() > 300) {
      $('.main_nav').addClass('sticky');
  } else {
      $('.main_nav').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
  if ($('.main_nav').hasClass('open-nav')) {
      $('.main_nav').removeClass('open-nav');
  } else {
      $('.main_nav').addClass('open-nav');
  }
});

$('.main_nav li a').click(function() {
  if ($('.main_nav').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.main_nav').removeClass('open-nav');
  }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

 $('.smoothscroll').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});

});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);