$(function(){

  var icon = ".far.fa-heart, .fa.fa-bell, .fa.fa-check, .fa.fa-smile"

  $(".category__child").hide();

  $(".navbar").on("mouseover", function(){
    $(this.querySelector("span")).css({"color": "#0099e8"});
    $(this.querySelector(icon)).css({"color": "#0099e8"});
  }).on("mouseout", function(){
    $(this).children().css({"color": ""});
  })
  
  // $(".header-nav-left li").on("mouseover", function(){
  //   $('ul', this).show();
  //   $('ul li ul', this).hide();
  // }).on("mouseout", function(){
  //   $('ul', this).hide();
  // })

  $(".header-nav-left li").hover(function(){
    $('ul', this).show();
    $('ul li ul', this).hide();
  },function(){
    $('ul', this).hide();
  })

  $(".category__child li, .header-nav-left__nav2 ul li").on("mouseover", function(){
    $(this).css({"background-color": "#EA342D"});
    $(this).children().css({"color": "#fff"});
  }).on("mouseout", function(){
    $(this).css({"background-color": ""});
    $(this).children().css({"color": ""});
  })
  
  $(".category__grandchild li").on("mouseover", function(){
    $(this).css({"background-color": "#f5f5f5"});
    $(this).children().css({"color": ""});
  }).on("mouseout", function(){
    $(this).css({"background-color": ""});
  })
  
  $("#notification").on("mouseover", function(){
    $(".notification-box").show();
  }).on("mouseout", function(){
    $(".notification-box").hide();
  })

  $(".notification-box li").on("mouseover", function(){
    $(this).css({"background-color": "#f5f5f5"});
  }).on("mouseout", function(){
    $(this).css({"background-color": ""});
  })

  $("#mypage").on("mouseover", function(){
    $(".mypage-box").show();
  }).on("mouseout", function(){
    $(".mypage-box").hide();
  })

  $(".mypage-box li").on("mouseover", function(){
    $(this).css({"background-color": "#f5f5f5"});
  }).on("mouseout", function(){
    $(this).css({"background-color": ""});
  })

})