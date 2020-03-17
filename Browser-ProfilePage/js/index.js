// Your JS here!



let resetto = document.querySelector(".reset")
resetto.addEventListener("click", resetForm)

function resetForm() {
  document.querySelector(".form").reset();
}
document.body.style.background = 'purple'

function showDiv() {
  document.querySelector('createCv').style.display = "block";
}
let age = document.querySelector('date');
//  let name=document.querySelector('name')



// var date = new Date();
// var birthdate = new Date( document.getElementById( "birthdate" ).value );
// let age= date.getFullYear() - birthdate.getFullYear();
function createCv() {
  
 document.querySelector('h1').write(nume)
}
let nume = document.querySelector('nome').value
nume.addEventListener('click', createCv)
let info = document.querySelector('.info').value
console.log('hi')