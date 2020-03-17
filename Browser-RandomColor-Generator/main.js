function addDiv() {
  var color = random_color();
  var div1 = $('<div class=container><div class="color-box" style="background-color:' + color + ';"></div><' + color + '></div>');
  $("body").append(div1);
}

//random color include 000000 (black) & FFFFFF (white)
function random_color() {
  var color;
  color = "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
  return color;
}