$(document).on('turbolinks:load', function() {
  $(function(){
    $(document).on("click",".delete", function(){
      $(this).parent().parent().remove();
      $(".hidden").val('');
    });
  });
});
