$(document).on("turbolinks:load", function(){

  $(function() {
    $(".category__box__parent").change(function() {
      var category_parent = $(this).val();
      $.ajax({
        url: "/products/new",
        type: "GET",
        dataType: 'json',
        data: {
          parent_id: category_parent 
        },
      })
      .done(function(data){
        $(".category__box__child option").remove();
        $(".category__box__child").append(`<option>---</option>`);
        data.forEach(function(el){
          $(".category__box__child").append(`<option value =${el.id}>${el.name}</option>`);
        })
      })
    })
    

      $(".category__box__child").change(function() {
        var category_child= $(this).val();
        $.ajax({
          url: "/products/new",
          type: "GET",
          dataType: 'json',
          data: {
            child_id: category_child
          },
        })

      .done(function(data){
        $(".category__box__grandchild option").remove();
        $(".category__box__grandchild").append(`<option>---</option>`);
        data.forEach(function(elm){
          $(".category__box__grandchild").append(`<option value =${elm.id}>${elm.name}</option>`);
        })
      })
    })
    })
});