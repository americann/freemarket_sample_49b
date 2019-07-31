$(document).on("turbolinks:load", function(){
  function imageBox(file){
    var image = ( message.image ) ? `<img class= "lower-message__image" src=${file} >` : "";
    var html = `<div`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $('input[type=file]').change(function() {
      // 画像データの取得
      var file = $(this).prop('files')[0];
  
      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        // $('span').html('');
        return;
      }
      // 画像表示
      

    });
  });
}); 
