var container = document.querySelector('.gallery');
var mixer = mixitup(container, {
  selectors:{
    control: '[control]'
  }
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop:true,
    autoplayTimeout: 2000,
    smartSpeed: 300,
    responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:3,
           nav:false
       },
       1000:{
           items:5,
           nav:true,
           loop:true
       }
   }
  });
  $('.navbar-nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  $('.top').click(function(){
    $("html,body").animate({
      scrollTop: 0
    }, 1000);
  });
  $('.top').hide();
  $(window).scroll(function(){
    var ourWindow = $(this).scrollTop();

    if(ourWindow<200){
      $('.top').fadeOut();
    }else {
      $('.top').fadeIn();
    }

    if(ourWindow>200){
      $('body').addClass('fixed');
    }else {
      $('body').removeClass('fixed');
    }
  });

  $('.navbar-nav a[href^="#"]').click(function(e){
    e.preventDefault();

    var target= this.hash;

    $('html,body').animate({
      scrollTop: $(target).offset().top -72
    }, 1000);
  });












});
