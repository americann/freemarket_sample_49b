$(document).on("turbolinks:load", function(){
$(function() {

  $('#address_table').toggle();
  $('#step2').toggle();

	$("#button").click(function() {

    $("#address_table").toggle();
    $("#button").toggle();
    $("#user_table").toggle();

    $('#step2').toggle();
    $('#step1').toggle();
  })
});
});