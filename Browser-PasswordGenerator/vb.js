// # Password Generator

// Description:

// - This app generates passwords.

// - There should be a Generate Password button which the user can click to show a new password using all letters and different characters. 


// 3. If the second argument is true, use uppercase for every third character.


const form = document.querySelector("form");
const tick = document.querySelector("#tick");
const text = document.querySelector("#text");
const button = document.querySelector("#button");
const passGen = () => {
    event.preventDefault();
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';
    let passLength = document.querySelector("#length").value;
    let pass = "";
    for (let i = 0; i < passLength; i++) {
        let random = Math.floor(Math.random() * charset.length);
        pass += charset.charAt(random)
    }
    // if (event.target.checked) {       
    //     text.style.textTransform = "uppercase";
    // } else {
    //     text.style.textTransform = "lowercase";
    // } 


    if (event.target.checked) {
       // text(i+3).style.textTransform = "uppercase";
        text.style.textTransform = "uppercase";
    } else {
        text.style.textTransform = "lowercase";
    }
    text.value = pass;

};

// const capitol = () => {   
//     if (event.target.checked) {
//         text.style.textTransform = "uppercase";
//     } else {
//         text.style.textTransform = "lowercase";
//     }
// };
tick.addEventListener("change", passGen);
// tick.addEventListener("change", capitol);
button.addEventListener("click", passGen);
document.addEventListener("DOMContentLoaded", passGen);
// document.addEventListener("DOMContentLoaded", capitol);