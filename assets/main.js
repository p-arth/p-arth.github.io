// import { builtinModules } from "module";

// Typed.js
const typed = new Typed('#typed', {
  stringsElement: '#typed-strings'
  ,
  typeSpeed: 100
});

// Details Toggle

const showDetailsRandomeal = () => {
  const img = document.querySelector("#randomeal-img");
  img.classList.toggle("open");
  const details = document.querySelector("#randomeal-details");
  details.classList.toggle("active");
}

const openRandoImage = document.querySelector("#randomeal-img")
const openRandoImageX = document.querySelector("#rando-more")
openRandoImage.addEventListener('click', showDetailsRandomeal);
openRandoImageX.addEventListener('click', showDetailsRandomeal);


const showDetailsRioserve = () => {
  const img = document.querySelector("#rioserve-img");
  img.classList.toggle("open");
  const details = document.querySelector("#rioserve-details");
  details.classList.toggle("active");
}

const openRioImage = document.querySelector("#rioserve-img")
const openRioImageX = document.querySelector("#rio-more")
openRioImage.addEventListener('click', showDetailsRioserve);
openRioImageX.addEventListener('click', showDetailsRioserve);


const showDetailsCocktail = () => {
  const img = document.querySelector("#cocktail-img");
  img.classList.toggle("open");
  const details = document.querySelector("#cocktail-details");
  details.classList.toggle("active");
}

const openCocktailImage = document.querySelector("#cocktail-img")
const openCocktailImageX = document.querySelector("#cocktail-more")
openCocktailImage.addEventListener('click', showDetailsCocktail);
openCocktailImageX.addEventListener('click', showDetailsCocktail);

const showDetailsMicro = () => {
  const img = document.querySelector("#micro-img");
  img.classList.toggle("open");
  const details = document.querySelector("#micro-details");
  details.classList.toggle("active");
}

const openMicroImage = document.querySelector("#micro-img")
const openMicroImageX = document.querySelector("#micro-more")
openMicroImage.addEventListener('click', showDetailsMicro);
openMicroImageX.addEventListener('click', showDetailsMicro);


const showMusic = () => {
  const music = document.querySelector(".music");
  music.classList.toggle("show");
}

const openMusic = document.querySelector("#show-music");
openMusic.addEventListener('click', showMusic);

/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
  $ele.fadeIn(1000).delay(6000).fadeOut(1000, function() {
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


// Tooltip

tippy('[data-tippy-content]', {
  animation: 'scale',
  theme: 'p-gradient',
});
