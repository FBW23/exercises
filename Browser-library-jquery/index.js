// Work on your tasks here


$(document).ready(function(){
  $('.submit').on("click",function(){
    $('.modal').css("display","block")
  });
  $('.modal-close').on("click",function(){
    $('.modal').css("display","none")
  });
});

$(document).ready(function() {
  $(".teapot").on("click", function() {
    $(".teapot").css("-webkit-transform", "rotate(20deg)");
  });
  $(".teapot").on("dblclick", function() {
    $(".teapot").css("-webkit-transform", "rotate(0)");
  });
});

// changing text on hover

$(document).ready(function() {
  $(".tea-desc").on("mouseenter ", function() {
    let text = "";
    let phrases = new Array(
      "Great tea for a cold night",
      "Rich in flavours",
      "Best tea from Brasil",
      "Strong black tea"
    );
    let randomPhrase = Math.floor(Math.random() * phrases.length);
    text += phrases[randomPhrase];

    $(event.target).text(text);
  });
});
