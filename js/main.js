
let header = $("#header-js");
let intro = $("#mainjs");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function() {
  introH = intro.innerHeight();
  scrollPos = $(this).scrollTop();
  let navList = $(".nav-list");
  
  if( scrollPos > introH ) {
    header.addClass("fixed");
  } else{
    header.removeClass("fixed");
  }
});

$("[data-scroll]").on("click", function(event) {
  // event.preventDefoult();

  let elementId = $(this).data('scroll')
  let elementOffset = $(elementId).offset().top;
  let navList = $(".nav-list, .header-burger");
  let body = $("body");
  navList.removeClass("active");
  body.removeClass("lock");



  // nav.removeClass("active");

  $("html, body").animate({
    scrollTop: elementOffset + 1
  });

  console.log(elementOffset);
});



$(".sl").slick({
  slidesToShow: 4,
  infinite: false,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 50

      }
      },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        touchThreshold: 100
      }
    },
  ]
});
$(".logos-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  touchThreshold: 50,
  responsive: [
    {
      breakpoint: 2570,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
  touchThreshold: 50,

      }
      },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
  touchThreshold: 50,

      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
  touchThreshold: 50,

      }
    },
  ]
});
$(".test-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2570,
  infinite: true,
  touchThreshold: 1500,

  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
  touchThreshold: 1500,

      }
    },
  ]
});
$(function() {
  let filter = $("[data-filter]");
  filter.on("click", function() {
  let cat = $(this).data('filter');
      if (cat == 'all') {
      $("[data-cat]").removeClass('hide') 
      } else{
           $("[data-cat]").each(function() {
  let workCat = $(this).data('cat');
  if(workCat != cat) {
      $(this).addClass('hide');
  } else{
      $(this).removeClass('hide');
  }
  });
      }
 
  });
});
document.querySelector('.latest-ul').addEventListener('click', fTabs);

function fTabs (event) {
    console.log(event);
    if (event.target.className == "latest-link"){
      var dataTab = event.target.getAttribute('data-tab');
      var tabH = document.getElementsByClassName('latest-link');
      for(var i=0; i<tabH.length; i++) {
          tabH[i].classList.remove('red');
      }
      event.target.classList.add('red');
      var tabBody = document.getElementsByClassName('lorem-body');
      for (var i =0; i<tabBody.length; i++) {
          if (dataTab==i){
              tabBody[i].style.display = 'block';
          }
          else{
              tabBody[i].style.display = 'none';
          }
      } 
    }
}
$('.header-burger').click(function(event){
  $('.header-burger, .nav-list').toggleClass('active');
  $('body').toggleClass('lock');
});

