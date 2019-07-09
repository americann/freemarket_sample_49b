$(function(){

  var category_ul = ".header-nav-left__nav1 ul"
  var brand_ul = ".header-nav-left__nav2 ul"
  
  $(".navbar").on("mouseover", function(){
    $(this.querySelector("span")).css({"color": "#0099e8"});
  }).on("mouseout", function(){
    $(this).children().css({"color": ""});
  })

  $("#category").on("mouseover", function(){
    $(category_ul).show();
  }).on("mouseout", function(){
    $(category_ul).hide();
  })



  $("#brand").on("mouseover", function(){
    $(brand_ul).show();
  }).on("mouseout", function(){
    $(brand_ul).hide();
  })


})