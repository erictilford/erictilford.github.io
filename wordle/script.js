$( document ).ready(function() {
  $("#convert-button").click(function() {
    let input = $("#inputText").val();
    let bs = $("#bsquare").val();
    let ys = $("#ysquare").val();
    let gs = $("#gsquare").val();
    let output = input.replace(/\u2B1B/g,bs).replace(/\uD83D\uDFE8|\uD83D\uDFE6/g,ys).replace(/\uD83D\uDFE9|\uD83D\uDFE7/g,gs); // https://emojiterra.com/
    $("#outputText").val(output);
    $("#outputDiv").show();
  });
  $("#outputText").click(function(){
    $("#outputText").select();
    document.execCommand('copy');
});
});