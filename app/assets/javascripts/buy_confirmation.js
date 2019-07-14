$(document).on("turbolinks:load", function(){
  $(function() {
    var state = "close";
    $('.top-content__select-points').click(function(){
      $(".select-box").slideToggle();
      if (state == "close"){
        $(".fas.fa-angle-down").css({'transform':'rotateZ(180deg)','font-size':'35px','padding-bottom':'30px'});
        state = "open";
      }else{
        $(".fas.fa-angle-down").css({'transform':'rotateZ(0deg)','font-size':'25px','padding-bottom':'30px'});
        state = "close";
      }
    });
    $(".how_points").click(function(){
      $("#part-of-points").prop('checked', true);
    })
  });
}); 
