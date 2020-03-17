function adddiv(n) {
    for(i=0;i<n;i++){$("<div id='box' style='background:"+getRandomColor()+"';></div>").hide().appendTo("#wrapper").fadeIn(150);}
  }
  
  function addnum() {adddiv($('#num').val());};
  
  function removeall() {
    $('#wrapper').empty();
    $('#num').val("3");
  };
  
  function updaten() {
    $('#nnn').empty();
    $('#nnn').append("n = "+n);
  }
  
  function getRandomColor() {
      let letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
  
  
  let closebtns = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function () {
          this.parentElement.style.display = 'none';
      });
  }