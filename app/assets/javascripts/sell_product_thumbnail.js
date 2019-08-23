$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img1"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
                <ul class='image-container'　id='image-container2'>
                </ul>
                <div class='form__upload__dropbox__visible' id='top-dropbox'>
                <p>
                ドラッグアンドドロップ
                またはクリックしてファイルをアップロード
                </p>
                <label class='form__upload__dropbox__visible__label' for="hidden6">
                <input class="hidden" type="file" name="product[images]" id="hidden6" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden7">
                <input class="hidden" type="file" name="product[images]" id="hidden7" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden8">
                <input class="hidden" type="file" name="product[images]" id="hidden8" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden9">
                <input class="hidden" type="file" name="product[images]" id="hidden9" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden10">
                <input class="hidden" type="file" name="product[images]" id="hidden10" />
                </label>
                </di>
                </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden1", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
      
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      $(".image-container").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img1').attr('src', reader.result);
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
// 2バージョン
$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img2"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
    <ul class='image-container'　id='image-container2'>
    </ul>
    <div class='form__upload__dropbox__visible' id='top-dropbox'>
    <p>
    ドラッグアンドドロップ
    またはクリックしてファイルをアップロード
    </p>
    <label class='form__upload__dropbox__visible__label' for="hidden6">
    <input class="hidden" type="file" name="product[images]" id="hidden6" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden7">
    <input class="hidden" type="file" name="product[images]" id="hidden7" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden8">
    <input class="hidden" type="file" name="product[images]" id="hidden8" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden9">
    <input class="hidden" type="file" name="product[images]" id="hidden9" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden10">
    <input class="hidden" type="file" name="product[images]" id="hidden10" />
    </label>
    </di>
    </div>`
    return html;
  }
  function inputFile(){
    var html = `<input class="hidden2" type="file" name="product[images]" id="product_images" />`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden2", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止

      
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $(".image-container").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img2').attr('src', reader.result);
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

$(document).on("turbolinks:load", function(){
  function buildHTML(file){

    var html = `<li class="image-box">
                  <img class="img3"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
    <ul class='image-container'　id='image-container2'>
    </ul>
    <div class='form__upload__dropbox__visible' id='top-dropbox'>
    <p>
    ドラッグアンドドロップ
    またはクリックしてファイルをアップロード
    </p>
    <label class='form__upload__dropbox__visible__label' for="hidden6">
    <input class="hidden" type="file" name="product[images]" id="hidden6" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden7">
    <input class="hidden" type="file" name="product[images]" id="hidden7" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden8">
    <input class="hidden" type="file" name="product[images]" id="hidden8" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden9">
    <input class="hidden" type="file" name="product[images]" id="hidden9" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden10">
    <input class="hidden" type="file" name="product[images]" id="hidden10" />
    </label>
    </di>
    </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden3", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $(".image-container").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img3').attr('src', reader.result);
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

$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img4"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
    <ul class='image-container'　id='image-container2'>
    </ul>
    <div class='form__upload__dropbox__visible' id='top-dropbox'>
    <p>
    ドラッグアンドドロップ
    またはクリックしてファイルをアップロード
    </p>
    <label class='form__upload__dropbox__visible__label' for="hidden6">
    <input class="hidden" type="file" name="product[images]" id="hidden6" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden7">
    <input class="hidden" type="file" name="product[images]" id="hidden7" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden8">
    <input class="hidden" type="file" name="product[images]" id="hidden8" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden9">
    <input class="hidden" type="file" name="product[images]" id="hidden9" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden10">
    <input class="hidden" type="file" name="product[images]" id="hidden10" />
    </label>
    </di>
    </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden4", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $(".image-container").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img4').attr('src', reader.result);
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


$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img5"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
    <ul class='image-container'　id='image-container2'>
    </ul>
    <div class='form__upload__dropbox__visible' id='top-dropbox'>
    <p>
    ドラッグアンドドロップ
    またはクリックしてファイルをアップロード
    </p>
    <label class='form__upload__dropbox__visible__label' for="hidden6">
    <input class="hidden" type="file" name="product[images]" id="hidden6" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden7">
    <input class="hidden" type="file" name="product[images]" id="hidden7" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden8">
    <input class="hidden" type="file" name="product[images]" id="hidden8" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden9">
    <input class="hidden" type="file" name="product[images]" id="hidden9" />
    </label>
    <label class='form__upload__dropbox__visible__label' for="hidden10">
    <input class="hidden" type="file" name="product[images]" id="hidden10" />
    </label>
    </di>
    </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden5", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $(".image-container").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img5').attr('src', reader.result);
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

$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img6"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
                <ul class='image-container'　id='image-container2'>
                </ul>
                <div class='form__upload__dropbox__visible' id='top-dropbox'>
                <p>
                ドラッグアンドドロップ
                またはクリックしてファイルをアップロード
                </p>
                <label class='form__upload__dropbox__visible__label' for="hidden6">
                <input class="hidden" type="file" name="product[images]" id="hidden6" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden7">
                <input class="hidden" type="file" name="product[images]" id="hidden7" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden8">
                <input class="hidden" type="file" name="product[images]" id="hidden8" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden9">
                <input class="hidden" type="file" name="product[images]" id="hidden9" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden10">
                <input class="hidden" type="file" name="product[images]" id="hidden10" />
                </label>
                </di>
                </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden6", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止      
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $("#image-container2").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img1').attr('src', reader.result);
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

$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img7"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
                <ul class='image-container'　id='image-container2'>
                </ul>
                <div class='form__upload__dropbox__visible' id='top-dropbox'>
                <p>
                ドラッグアンドドロップ
                またはクリックしてファイルをアップロード
                </p>
                <label class='form__upload__dropbox__visible__label' for="hidden6">
                <input class="hidden" type="file" name="product[images]" id="hidden6" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden7">
                <input class="hidden" type="file" name="product[images]" id="hidden7" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden8">
                <input class="hidden" type="file" name="product[images]" id="hidden8" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden9">
                <input class="hidden" type="file" name="product[images]" id="hidden9" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden10">
                <input class="hidden" type="file" name="product[images]" id="hidden10" />
                </label>
                </di>
                </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden7", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $("#image-container2").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img1').attr('src', reader.result);
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

$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img8"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
                <ul class='image-container'　id='image-container2'>
                </ul>
                <div class='form__upload__dropbox__visible' id='top-dropbox'>
                <p>
                ドラッグアンドドロップ
                またはクリックしてファイルをアップロード
                </p>
                <label class='form__upload__dropbox__visible__label' for="hidden6">
                <input class="hidden" type="file" name="product[images]" id="hidden6" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden7">
                <input class="hidden" type="file" name="product[images]" id="hidden7" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden8">
                <input class="hidden" type="file" name="product[images]" id="hidden8" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden9">
                <input class="hidden" type="file" name="product[images]" id="hidden9" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden10">
                <input class="hidden" type="file" name="product[images]" id="hidden10" />
                </label>
                </di>
                </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden8", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $("#image-container2").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img1').attr('src', reader.result);
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

$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img9"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
                <ul class='image-container'　id='image-container2'>
                </ul>
                <div class='form__upload__dropbox__visible' id='top-dropbox'>
                <p>
                ドラッグアンドドロップ
                またはクリックしてファイルをアップロード
                </p>
                <label class='form__upload__dropbox__visible__label' for="hidden6">
                <input class="hidden" type="file" name="product[images]" id="hidden6" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden7">
                <input class="hidden" type="file" name="product[images]" id="hidden7" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden8">
                <input class="hidden" type="file" name="product[images]" id="hidden8" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden9">
                <input class="hidden" type="file" name="product[images]" id="hidden9" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden10">
                <input class="hidden" type="file" name="product[images]" id="hidden10" />
                </label>
                </di>
                </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden9", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $("#image-container2").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img1').attr('src', reader.result);
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

$(document).on("turbolinks:load", function(){
  function buildHTML(file){
    var html = `<li class="image-box">
                  <img class="img10"></img>
                  <div class="button">
                    <a class="edit">編集</a>
                    <a class="delete">削除</a>
                  </div>
                </li>`
    return html;
  }
  function formBox(){
    var html = `<div class='form__upload__dropbox'>
                <ul class='image-container'　id='image-container2'>                </ul>
                <div class='form__upload__dropbox__visible' id='top-dropbox'>
                <p>
                ドラッグアンドドロップ
                またはクリックしてファイルをアップロード
                </p>
                <label class='form__upload__dropbox__visible__label' for="hidden6">
                <input class="hidden" type="file" name="product[images]" id="hidden6" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden7">
                <input class="hidden" type="file" name="product[images]" id="hidden7" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden8">
                <input class="hidden" type="file" name="product[images]" id="hidden8" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden9">
                <input class="hidden" type="file" name="product[images]" id="hidden9" />
                </label>
                <label class='form__upload__dropbox__visible__label' for="hidden10">
                <input class="hidden" type="file" name="product[images]" id="hidden10" />
                </label>
                </di>
                </div>`
    return html;
  }
  $(function() {
    // アップロードするファイルを選択
    $(document).on("change","#hidden10", function(){
      $(this).parent().css("pointer-events" ,"none");
      $(this).parent().remove;
      // 画像データの取得
      var file = $(this).prop('files')[0];

      // 画像以外は処理を停止
      if (! file.type.match('image.*')) {
        // クリア
        $(this).val('');
        $(this).html('');
        return;
      }
      // 画像表示
      $("#image-container2").append(buildHTML(file));
      var reader = new FileReader();
      reader.onload = function() {
        $('.img1').attr('src', reader.result);
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
