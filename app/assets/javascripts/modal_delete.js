$(document).on('turbolinks:load', function() {
$(function(){
  $('.detail-wrapper__btns__ele').on('click' , function(){
    $('.modal_delete_js').show();
  });
  $('.modal_cancel').on('click',function(){
    $('.modal_delete_js').hide();
  });
  $('.modal_delete_btn_js').on('click' , function(){
    $('.modal_delete_js').hide();
  });

});
setTimeout("$('.notice').fadeOut('slow')", 1000) ;
});