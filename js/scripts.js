function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("body").css("background-color", "rgb(" + r + "," + g +", " + b + ")");

  }

$("input[type=range]").change(changeColor);



function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


$("input[type=range]").change(rgb2hex);
