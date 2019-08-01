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
  $(function() {
    // アップロードするファイルを選択
    $('.hidden').change(function(){
      // 画像データの取得
      var file = $(this).prop('files')[0];
      console.log(file);
      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        // $('span').html('');
        return;
      }
      // 画像表示
      $(".image-container").append(buildHTML(file));

      // 仮
      $('.hidden').after('<span></span>');
      var reader = new FileReader();
    reader.onload = function() {
      $('#img').attr('src', reader.result);
      $('span').html(img_src);
    }
    reader.readAsDataURL(file);
    });
  });
}); 
