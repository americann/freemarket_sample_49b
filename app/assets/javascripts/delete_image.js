$(document).on('turbolinks:load', function() {
  $(function(){
    $(document).on("click",".delete", function(){
      $(this).parent().parent().remove();
      $(".hidden").val('');
      $(".form__upload__dropbox__visible__label").css("pointer-events" ,"auto");
    });
  });
});
