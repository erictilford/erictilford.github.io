$( document ).ready(function() {
  $("#convert-button").click(function() {
    let input = $("#inputText").val();
    console.log("input = " + input);
    let bs = $("#bsquare").val();
    let ys = $("#ysquare").val();
    let gs = $("#gsquare").val();
    //let str = input.toLowerCase();
    let output = input.replace(/:black_large_square:/g,bs).replace(/:large_yellow_square:/g,ys).replace(/:large_green_square:/g,"geese");
    console.log("bs = " + bs);
    console.log("gs = " + gs);
    console.log("ys = " + ys);
    console.log(output);
    $("#outputText").val(output);
  });
});