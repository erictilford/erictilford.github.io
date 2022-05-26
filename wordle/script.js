$( document ).ready(function() {
  $("#convert-button").click(function() {
    let input = $("#input").val();
    let bs = $("#bsquare").val();
    let ys = $("#ysquare").val();
    let gs = $("#ysquare").val();
    //let str = input.toLowerCase();
    let output = input.replace(/:black_large_square:/g,bs).replace(/:large_yellow_square:/g,ys).replace(/:large_green_square:/g,gs);
    console.log(bs);
    //$("#outputText").text(input);
  });
});