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




$(function(){
  //モーダルウィンドウを出現させるクリックイベント
  $("#modal-open").click( function(){
    //キーボード操作などにより、オーバーレイが多重起動するのを防止する
    $( this ).blur() ;	//ボタンからフォーカスを外す
    if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
    //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)
  
    //オーバーレイを出現させる
    $( "body" ).append( '<div id="modal-overlay"></div>' ) ;
    $( "#modal-overlay" ).fadeIn( "slow" ) ;
  
    //コンテンツをセンタリングする
    centeringModalSyncer() ;
  
    //コンテンツをフェードインする
    $( ".modal-content" ).fadeIn( "slow" ) ;
    // console.log(".modal-content")
  
    //[#modal-overlay]、または[#modal-close]をクリックしたら…
    $( "#modal-overlay,#modal-close" ).unbind().click( function(){
  
      //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
      $( ".modal-content,#modal-overlay" ).fadeOut( "slow" , function(){
  
        //[#modal-overlay]を削除する
        $('#modal-overlay').remove() ;
      } ) ;
    } ) ;
  } ) ;

$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
		var cw = $( "#modal-content" ).outerWidth();
		var ch = $( "#modal-content" ).outerHeight();

		//センタリングを実行する
		$( "#modal-content" ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}


});     


