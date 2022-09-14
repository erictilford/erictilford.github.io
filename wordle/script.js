$(document).ready(function () {

  // Rotating background color
  var intervalId = window.setInterval(function(){
    var backgroundColor = $("body").css("background-color");
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
    var hueShifted = changeHue(rgb2hex(backgroundColor),5);
    $("body").css("background-color", hueShifted);
  }, 150);

  // If convert button is pressed
  $("#convert-button").click(function () {
    let input = $("#inputText").val();

    if ($("#wordle-button").hasClass("active")) 
    {
      let bs = $("#bsquare").val();
      let ys = $("#ysquare").val();
      let gs = $("#gsquare").val();
      let output = input.replace(/\u2B1B|\u2B1C/g, bs);
      output = output.replace(/\uD83D\uDFE8|\uD83D\uDFE6/g, ys);
      output = output.replace(/\uD83D\uDFE9|\uD83D\uDFE7/g, gs);
      $("#outputText").val(output);
    } 
    else if ($("#heardle-button").hasClass("active")) 
    {
      let sp = $("#speaker").val();
      let bs = $("#bsquare-h").val();
      let rs = $("#rsquare").val();
      let ys = $("#ysquare-h").val();
      let gs = $("#gsquare-h").val();
      let ws = $("#wsquare").val();
      let output = input.replace(/\uD83D\uDD0A|\uD83D\uDD07/g, sp);
      output = output.replace(/\u2B1B/g, bs);
      output = output.replace(/\uD83D\uDFE5/g, rs);
      output = output.replace(/\uD83D\uDFE8/g, ys);
      output = output.replace(/\uD83D\uDFE9/g, gs);
      output = output.replace(/\u2B1C/g, ws);
      output = output.replace(/#Heardle/g, "Heardle");
      output = output.replace(/[\r\n]+https:\/\/spotify.com\/heardle/g, "");
      $("#outputText").val(output);
    } 

    $("#outputDiv").show();
  }); 

  $('#inputText').on('input', function() {
    // if text contains Wordle
    let input = $("#inputText").val();
    if (input.includes("Wordle")) {
      $("#heardle-button").removeClass("active");
      $("#wordle-button").addClass("active");
      showWordleInputs();
    } else if (input.includes("Heardle")) {
      $("#heardle-button").addClass("active");
      $("#wordle-button").removeClass("active");
      showHeardleInputs();
    }
  });

  $("#outputText").click(function () {
    $("#outputText").select();
    document.execCommand('copy');
  });

  $("#wordle-button").click(function () { 
    showWordleInputs();
  });

  $("#heardle-button").click(function () {
    showHeardleInputs();
  });

  function showWordleInputs() {
    $("#heardle-inputs").hide();
    $("#wordle-inputs").show();
    $("#heardle-preset-buttons").hide();
    $("#wordle-preset-buttons").show();
  }

  function showHeardleInputs() {
    $("#heardle-inputs").show();
    $("#wordle-inputs").hide();
    $("#heardle-preset-buttons").show();
    $("#wordle-preset-buttons").hide();
  }

  function LoadPresets(buttonNumber) {

    if ($("#wordle-button").hasClass("active")) 
    {
      if (localStorage.getItem("wordlePreset"+buttonNumber)) {
        let storedInputs = JSON.parse(localStorage.getItem("wordlePreset"+buttonNumber));
        $("#bsquare").val(storedInputs[0]);
        $("#ysquare").val(storedInputs[1]);
        $("#gsquare").val(storedInputs[2]);
      } else {
        $("#bsquare").val("");
        $("#ysquare").val("");
        $("#gsquare").val("");
      }
    }
    else if ($("#heardle-button").hasClass("active")) 
    {
      if (localStorage.getItem("heardlePreset"+buttonNumber)) {
        let storedInputs = JSON.parse(localStorage.getItem("heardlePreset"+buttonNumber));
        $("#speaker").val(storedInputs[0]);
        $("#bsquare-h").val(storedInputs[1]);
        $("#rsquare").val(storedInputs[2]);
        $("#ysquare-h").val(storedInputs[3]);
        $("#gsquare-h").val(storedInputs[4]);
        $("#wsquare").val(storedInputs[5]);
      } else {
        $("#speaker").val('');
        $("#bsquare-h").val('');
        $("#rsquare").val('');
        $("#ysquare-h").val('');
        $("#gsquare-h").val('');
        $("#wsquare").val('');
      }
    }
  }

  $("#wordle-preset-buttons .btn, #heardle-preset-buttons .btn").click(function () {
    LoadPresets($(this).find($(".label-text")).text());
  });

  LoadPresets(1);

  $("#heardle-preset-buttons").hide();

  $("#save-preset-button").click(function () {
    // if in "wordle mode":
    if ($("#wordle-button").hasClass("active")) 
    {
      let activeButton = $("#wordle-preset-buttons .active .label-text").text();
      let bs = $("#bsquare").val();
      let ys = $("#ysquare").val();
      let gs = $("#gsquare").val();
      const inputs = [bs, ys, gs];
      // localStorage only supports strings. Use JSON.stringify() and JSON.parse() for arrays.
      localStorage.setItem("wordlePreset"+activeButton, JSON.stringify(inputs));
    } 
    else if ($("#heardle-button").hasClass("active")) 
    {
      let activeButton = $("#heardle-preset-buttons .active .label-text").text();
      let sp = $("#speaker").val();
      let bs = $("#bsquare-h").val();
      let rs = $("#rsquare").val();
      let ys = $("#ysquare-h").val();
      let gs = $("#gsquare-h").val();
      let ws = $("#wsquare").val();
      const inputs = [sp, bs, rs, ys, gs, ws];
      localStorage.setItem("heardlePreset"+activeButton, JSON.stringify(inputs));
    } 
  });

}); // https://emojiterra.com/



//TODO - add rotating hue to background