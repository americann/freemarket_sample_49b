$(function(){

  var parent = ".category"
  var child = ".category__child"
  var parent_with_child = ".category, .category__child"
  var child_li = ".category__child li"
  var grandchild = ".category__grandchild"
  var grandchild_li = ".category__grandchild li"
  var GGC = ".category__GGC"
  var GC_with_GGC = ".category__grandchild, .category__GGC"
  var GC_li_with_GGC_li = ".category__grandchild li, .category__GGC li"


  $(".navbar").on("mouseover", function(){
    $(this.querySelector("span")).css({"color": "#0099e8"});
  }).on("mouseout", function(){
    $(this).children().css({"color": ""});
  })
  
  $("#category").on("mouseover", function(){
    $(parent_with_child).show();
  }).on("mouseout", function(){
    $(parent).hide();
  })
  
  $(parent_with_child).on("mouseover", function(){
    $(grandchild).show();
  }).on("mouseout", function(){
    $(grandchild).hide();
  })
  $(GC_with_GGC).on("mouseover", function(){
    $(GGC).show();
  }).on("mouseout", function(){
    $(GGC).hide();
  })

  $(child_li).on("mouseover", function(){
    $(this).css({"background-color": "#EA342D"});
    $(this).children().css({"color": "#fff"});
  }).on("mouseout", function(){
    $(child_li).css({"background-color": ""});
    $(this).children().css({"color": ""});
  })
  
  $(GC_li_with_GGC_li).on("mouseover", function(){
    $(this).css({"background-color": "#f5f5f5"});
    $(this).children().css({"color": ""});
  }).on("mouseout", function(){
    $(GC_li_with_GGC_li).css({"background-color": ""});
    // $(this).children().css({"color": ""});
  })

  $("#brand").on("mouseover", function(){
    $(this).children("ul").show();
  }).on("mouseout", function(){
    $(this).children("ul").hide();
  })

  $("#brand li").on("mouseover", function(){
    $(this).css({"background-color": "#EA342D"});
    $(this).children().css({"color": "#fff"});
  }).on("mouseout", function(){
    $("#brand li").css({"background-color": ""});
    $(this).children().css({"color": ""});
  })
  
  
})