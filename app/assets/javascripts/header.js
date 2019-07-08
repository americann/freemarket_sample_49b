$(function(){
  
  $(".navbar").on("mouseover", function(){
    $(this.querySelector("span")).css({"color": "#0099e8"});
  }).on("mouseout",function(){
    $(this).children().css({"color": ""});
  })

  
})