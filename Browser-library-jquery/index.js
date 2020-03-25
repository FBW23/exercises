$(document).ready(function(){
  $('form').on("submit",function(){
    event.preventDefault();
    $('.modal').show();//display Div Modal Block
  });
  $('.modal-close').on("click",function(){
    $('.modal').hide(); //hide Div modal
  });
  $(".teapot").on("click", function() {//create function that rotate Tea Pot
    $(".teapot").css("-webkit-transform", "rotate(20deg)"); // no empty space after ' rotate ()-this is wrong'
  });
  $(".teapot").on("dblclick", function() {
    $(".teapot").css("-webkit-transform", "rotate(0)");
  });
  $(".tea-desc").on("mouseenter ", function() { 
    let text = "";
    let phrases = new Array(
      "Great tea for a cold night",
      "Rich in flavours",
      "Best tea from Brasil",
      "Strong black tea"
    );
    let randomPhrase = Math.floor(Math.random() * phrases.length);//take random Phrase from array
    text += phrases[randomPhrase];//adding phrase to our variable

    $(event.target).text(text);        // event.target- used to the event where we action our function 
  });
});

