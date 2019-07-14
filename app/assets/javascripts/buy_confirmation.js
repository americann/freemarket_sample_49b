$(document).on("turbolinks:load", function(){
  $(function() {
    $('.top-content__select-points__text').click(function(){
      $(".select-box").slideToggle();
    });
    // $(".top-content__select-points__text").on("click", function() {
    //   $(this).toggleClass('');
    // });
    $(".how_points").click(function(){
      $("#part-of-points").prop('checked', true);
    })
  });
}); 
