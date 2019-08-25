$(function() {
  $(".sale-price__form-box__first__inside__price__input").on("keyup paste", function(){
    var converted = $(this).val().replace(/[０-９]/g, function(s) { 
      return String.fromCharCode(s.charCodeAt(0) - 65248); 
    });
    $(this).val("");
    $(this).val(converted);
  });
});
