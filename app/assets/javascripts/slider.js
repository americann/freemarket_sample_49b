$(document).on("turbolinks:load", function(){
  $(function() {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '<img src="assets/slider/carousel-prev.png" class="slide-arrow prev-arrow">',
      nextArrow: '<img src="assets/slider/carousel-next.png" class="slide-arrow next-arrow">',
      dots: true
    });
  });
}); 
