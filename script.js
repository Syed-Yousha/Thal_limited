
// Vertical slider
var splide = new Splide('.splide', {
    direction: 'ttb',
    height: '40rem',
    loop: true,
});

splide.mount();

function startSlideTimer() {
  var slideInterval = setInterval(function() {
      splide.go('>');
  }, 5000); 

  // Pause the slide timer when hovering over the slider
  splide.on('mouseover', function() {
      clearInterval(slideInterval);
  });

  // Resume the slide timer when not hovering over the slider
  splide.on('mouseout', function() {
      slideInterval = setInterval(function() {
          splide.go('>');
      }, 5000); 
  });
}

startSlideTimer();


// carousel
$(document).ready(function() {
  var slider = $('.slider');
  
  function initializeSlider() {
    var slidesToShowValue = $(window).width() < 700 ? 1.7 : 4.5;
    
    slider.slick({
      centerPadding: '100px',
      slidesToShow: slidesToShowValue,
      arrows: false,
      infinite: true
    });
  }
  
  initializeSlider();
  
  $(window).resize(function() {
    slider.slick('unslick');
    initializeSlider();
  });

  $('.box').click(function() {
    var currentIndex = $(this).index();
    var currentSlide = slider.slick('slickCurrentSlide');
    
    var diff = currentIndex - currentSlide;
    
    if (diff !== 0) {
      if (diff < 0) {
        slider.slick('slickPrev');
      } else {
        slider.slick('slickNext');
      }
    }
  });
});



// Boxes at phone size
var splide_mob = new Splide('.splide-box');
        splide_mob.mount();



// ======= Cards =========
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const cards1 =  document.getElementById('cards-sec-1');
const cards2 =  document.getElementById('cards-sec-2');

// For buttons
function addClassB1(){

    button1.classList.add('active');

}

function removeClassB1(){

    button1.classList.remove('active');

}

function addClassB2(){

    button2.classList.add('active');

}

function removeClassB2(){

    button2.classList.remove('active');

}


//For cards
function addClassCards1(){

    cards1.classList.add('d-none');

}

function removeClassCards1(){

    cards1.classList.remove('d-none');

}

function addClassCards2(){
    cards2.classList.add('d-none');

}

function removeClassCards2(){
    cards2.classList.remove('d-none');
}





// EventListener
button1.addEventListener('click', addClassB1);
button1.addEventListener('click', removeClassB2);
button1.addEventListener('click', removeClassCards1);
button1.addEventListener('click', addClassCards2);

button2.addEventListener('click', addClassB2);
button2.addEventListener('click', removeClassB1);
button2.addEventListener('click', removeClassCards2);
button2.addEventListener('click', addClassCards1);


// For mobile
const phoneCard1 =  document.getElementById('phone-cards-1');
const phoneCard2 =  document.getElementById('phone-cards-2');

//For cards
function P1displayNone(){

    phoneCard1.classList.add('d-none');

}

function P1visible(){

    phoneCard1.classList.remove('d-none');

}

function P2displayNone(){

    phoneCard2.classList.add('d-none');

}

function P2visible(){

    phoneCard2.classList.remove('d-none');

}


// EventListener for phone cards
button1.addEventListener('click', P2displayNone);
button1.addEventListener('click', P1visible);

button2.addEventListener('click', P1displayNone);
button2.addEventListener('click', P2visible);



//Carousel for phone
var P1 = new Splide('#phone-cards-1', {
    pagination: true,
    arrows: false // Disable arrow navigation
});
P1.mount();

var P2 = new Splide('#phone-cards-2', {
    pagination: true,
    arrows: false // Disable arrow navigation
});
P2.mount();