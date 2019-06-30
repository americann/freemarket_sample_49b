$(document).on("turbolinks:load", function(){
  $(function() {
    $('.slider').slick({
      prevArrow: '<img src="assets/slider/carousel-prev.png" class="slide-arrow prev-arrow">',
      nextArrow: '<img src="assets/slider/carousel-next.png" class="slide-arrow next-arrow">',
      dots: true
    });
  });
}); 
