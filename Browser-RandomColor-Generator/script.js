<<<<<<< HEAD
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
=======
const btn = document.querySelector("#btn");
const num = document.querySelector("#numFields");
const form = document.querySelector("form");
const colorPallette = document.querySelector("#colorPallette");

btn.addEventListener("click", createUnit);

function rndClr() {
    const signs = '0123456789ABCDEF';
    let clr = "#";
    for (let i = 0; i < 6; i++) {
        clr += signs[Math.floor(Math.random() * 16)];
      }
    return clr;
}

function createUnit() {
    event.preventDefault();
    let numFields = num.value;
    for (let index = 0; index < numFields; index++) {
        let unit = document.createElement("div");
        unit.addEventListener("dblclick", () => {
            colorPallette.removeChild(unit);
        });
        let color = rndClr();
        unit.classList.add("pallette");
        unit.style.backgroundColor = color
        unit.innerText = color;
        colorPallette.appendChild(unit);
    }
}
>>>>>>> b54d375f3c088fb244f79043840ef3bac0c41a6b
