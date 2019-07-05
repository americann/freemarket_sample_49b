$(document).on("turbolinks:load", function(){
  $(function() {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '<img src="/carousel-prev.png" class="slide-arrow prev-arrow">',
      nextArrow: '<img src="/carousel-next.png" class="slide-arrow next-arrow">',
      dots: true
    });
  });
}); 
