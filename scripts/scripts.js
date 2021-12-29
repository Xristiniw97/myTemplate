// Owlcarousel
$(document).ready(function(){
  $(".offers-carousel").owlCarousel({

  loop:false,
  margin:50,
  autoplay:false,
  // autoplayTimeout:7000,
  // autoplaySpeed:1000,
  // autoplayHoverPause:true,
  nav:true,
  navText: [" ", ""],
  dots: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1300:{
          items:3
      }
  }
});
$(".rooms-carousel").owlCarousel({

  loop:false,
  margin:30,
  autoplay:false,
  // autoplayTimeout:7000,
  // autoplaySpeed:1000,
  // autoplayHoverPause:true,
  nav:true,
  navText: [" ", ""],
  dots: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1600:{
          items:3
      }
  }
});
$(".room-carousel-inner").owlCarousel({

  loop:false,
  margin:0,
  autoplay:false,
  // autoplayTimeout:7000,
  // autoplaySpeed:1000,
  // autoplayHoverPause:true,
  nav:true,
  navText: [" ", ""],
  dots: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1600:{
          items:3
      }
  }
});
$(".destination-carousel").owlCarousel({

  loop:false,
  margin:0,
  autoplay:false,
  // autoplayTimeout:7000,
  // autoplaySpeed:1000,
  // autoplayHoverPause:true,
  nav:true,
  navText: [" ", ""],
  dots: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1400:{
          items:3
      }
  }
});

$(".testimonials-carousel").owlCarousel({
  loop: true,
  center: true,
  margin: 0,
  responsiveClass: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
      nav: false },

    680: {
      items: 2,
      nav: false,
      loop: false },

    1000: {
      items: 3,
      nav: true } } 
});

$(".innerPage-carousel").owlCarousel({
  loop: true,
  center: true,
  margin: 0,
  responsiveClass: true,
  nav:true,
  navText: [" ", ""],
  items: 1
});



$(".innerPageGallery-carousel").owlCarousel({

  loop:false,
  margin:20,
  autoplay:false,
  // autoplayTimeout:7000,
  // autoplaySpeed:1000,
  // autoplayHoverPause:true,
  nav:true,
  navText: [" ", ""],
  dots: false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1400:{
          items:3
      }
  }
});

});

$(function () {
 
  // MENU TOGGLER 
  $(".navbar-toggle, nav").click(function () {
    $(".navbar-toggle").toggleClass("navbar-on");
    $("nav").fadeToggle();
    $("nav").removeClass("nav-hide");
  });
  // MENU TOGGLER 


   /*Scroll to top and bottom*/
    var btnScrollUp = $('.scrollup');
    var btnScrollDown = $('.scroll-down');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btnScrollUp.fadeIn();
        btnScrollUp.addClass('show');
        btnScrollDown.fadeOut();
        btnScrollDown.css("display", "none");
      } else {
        btnScrollDown.fadeIn();
        btnScrollUp.removeClass('show');
        btnScrollUp.fadeOut();
        btnScrollUp.css("display", "none");
      }
    });
    
    btnScrollUp.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 'slow');
    });

    btnScrollDown.click (function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: $('section#ok').offset().top }, 'slow');
      return false;
    });
    /*Scroll to top and bottom*/

});

// HEADER ON SCROLL 
$(function(){
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 800) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("active");
      }
  });

 
});
// HEADER ON SCROLL 


// HOME CAROUSEl 
var myCarousel = document.querySelector('#homeCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: false,
  pause: 'hover'
});
// HOME CAROUSEl 

