// Your JS here!


// function resetForm() {
//     document.querySelector(".form").onclick("click", function(){
//         document.querySelector(".reset").reset();
//       });
//     }

   
// document.querySelector(".reset").onclick = function() {
//     document.querySelector(".form").value='',
//     doccument.querySelector("checkbox").checked = false
    

//  };

 let resetto = document.querySelector(".reset")
resetto.addEventListener("click",resetForm)

function resetForm() {
document.querySelector(".form").reset(); 
} 
