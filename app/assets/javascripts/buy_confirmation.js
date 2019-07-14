$(document).on("turbolinks:load", function(){
  $(function() {
    $('.top-content__select-points').click(function(){
      $(".select-box").slideToggle();
      $(".fas.fa-angle-down").css({'transform':'rotateZ(180deg)','font-size':'35px','padding-bottom':'30px'})
    });
    $(".how_points").click(function(){
      $("#part-of-points").prop('checked', true);
    })
  });
}); 
