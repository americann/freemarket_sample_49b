$(document).on("turbolinks:load", function(){
  $(function() {
    $(".sale-price__form-box__first__inside__price__input").on("keyup paste",function(){
      let input = $(".sale-price__form-box__first__inside__price__input").val()
      if(input>=300){
        let fee = Math.floor(input *0.1);
        $(".sale-price__form-box__second__mark1").text("¥"+fee);
        let profit = input - fee;
        $(".sale-price__form-box__third__mark1").text("¥"+profit);
      }else{
        $(".sale-price__form-box__second__mark1").text("-");
        $(".sale-price__form-box__third__mark1").text("-");
      }
    })
  });
}); 
