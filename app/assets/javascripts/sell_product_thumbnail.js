$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img id="img"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
                <ul class='image-container'>
                </ul>
                <div class='form__upload__dropbox__visible'>
                <input class="hidden" type="file" name="product[images]" id="product_images" />
                <p>
                ドラッグアンドドロップ
                またはクリックしてファイルをアップロード
                </p>
                </div>
                </div>`
return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $('.hidden').change(function(){
      // 画像データの取得
      var file = $(this).prop('files')[0];
      // console.log(file);
      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $(".image-container").append(buildHTML(file));
      // 仮
      var reader = new FileReader();
      reader.onload = function() {
      $('#img').attr('src', reader.result);
    }
    reader.readAsDataURL(file);
    var boxLength =($(".image-box").length);
    if(boxLength == 5){
      $(".form__upload").append(formBox);
      $("#top-dropbox").css("display","none");
      $(".sell-content").css("margin-top","162px");
    }
    });
  });

  

}); 






// // 複数
// $(function() {
//   $('input[type=file]').after('<span></span>');

//   // アップロードするファイルを複数選択
//   $('input[type=file]').change(function() {
//     $('span').html('');
//     var file = $(this).prop('files');

//     var img_count = 1;
//     $(file).each(function(i) {
//       // 5枚まで
//       if (img_count > 5) {
//         return false;
//       }

//       if (! file[i].type.match('image.*')) {
//         $(this).val('');
//         $('span').html('');
//         return;
//       }

//       var reader = new FileReader();
//       reader.onload = function() {
//         var img_src = $('<img>').attr('src', reader.result);
//         $('span').append(img_src);
//       }
//       reader.readAsDataURL(file[i]);
      
//       img_count = img_count + 1;
//     });
//   });
// });
