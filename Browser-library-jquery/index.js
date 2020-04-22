$(document).ready(function () {
  $("#teapot").click(function () {
    $("#teapot").toggleClass("showLayers");
  });


  const submit = $('#submit');
  const modal = $('.modal');
  const x = $('span');

  const showModal = function () {
    modal.show();
  }

  const hideModal = function () {
    modal.hide();
  }
  submit.on('click', showModal);
  x.on('click', hideModal);


  let quotes = [
    "Good for cold nights!",
    "Strong Flavor",
    "Fruity",
    "Tastes like death",
    "Is this poison?"
  ];

  $(".tea-desc").on("mouseenter", function () {
    let q = quotes[Math.floor(Math.random() * quotes.length)];
    //console.log(q);
    $(event.target).text(q);
  });



});