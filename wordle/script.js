$(document).ready(function () {

  $("#convert-button").click(function () {
    let input = $("#inputText").val();

    if ($("#wordle-button").hasClass("active")) 
    {
      let bs = $("#bsquare").val();
      let ys = $("#ysquare").val();
      let gs = $("#gsquare").val();
      let output = input.replace(/\u2B1B|\u2B1C/g, bs).replace(/\uD83D\uDFE8|\uD83D\uDFE6/g, ys).replace(/\uD83D\uDFE9|\uD83D\uDFE7/g, gs);
      $("#outputText").val(output);
    } 
    else if ($("#heardle-button").hasClass("active"))
    {
      let sp = $("#speaker").val();
      let bs = $("#bsquare-h").val();
      let rs = $("#rsquare").val();
      let gs = $("#gsquare-h").val();
      let ws = $("#wsquare").val();
      let output = input.replace(/\uD83D\uDD0A|\uD83D\uDD07/g, sp);
      output = output.replace(/\u2B1B/g, bs);
      output = output.replace(/\uD83D\uDFE5/g, rs);
      output = output.replace(/\uD83D\uDFE9/g, gs);
      output = output.replace(/\u2B1C/g, ws);
      output = output.replace(/[\r\n]+https:\/\/spotify.com\/heardle/g, "");
      $("#outputText").val(output);
    } 
    
    $("#outputDiv").show();
  }); 
  $("#outputText").click(function () {
    $("#outputText").select();
    document.execCommand('copy');
  });


  $("#wordle-button").click(function () {
    $("#heardle-inputs").hide();
    $("#wordle-inputs").show();
  });
  $("#heardle-button").click(function () {
    $("#heardle-inputs").show();
    $("#wordle-inputs").hide();
  });
}); // https://emojiterra.com/