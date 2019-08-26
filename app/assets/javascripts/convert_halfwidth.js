$(function() {
  $(".sale-price__form-box__first__inside__price__input").on("keyup paste", function(){
    var num = $(this).val().slice(0 ,-2).replace(/[０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248); 
    });
    var converted = $(this).val().slice(-1).replace(/[０-９]/g, function(s) { 
      return String.fromCharCode(s.charCodeAt(0) - 65248); 
    });
    $(this).val(num + converted);
    console.log(num);
    console.log(converted);
  });
});


// function change() {
//   //全角数字を半角数字に変換
//   var before = new Array("１","２","３","４","５","６","７","８","９","０");
//   var after=new Array("1","2","3","4","5","6","7","8","9","0");
//   var val = document.getElementById("bef").value;

//   var bef = before;
//   var aft = after;

//   for (i = 0; i < aft.length; i++) {
//       reg = new RegExp(bef[i], "g");
//       val = val.replace(reg, aft[i]);
//   }
//   val=Number(val);
// }
