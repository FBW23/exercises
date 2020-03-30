document.addEventListener('DOMContentLoaded', () => {
    // saving the elements
    let nameInput = document.querySelector('.nameInput');
    let dateInput = document.querySelector('.dateInput');
    // let imgInput = document.querySelector('.imgInput');
    let firstColorInput = document.querySelector('.firstColorInput');
    let secondColorInput = document.querySelector('.secondColorInput');
    let textAreaInput = document.querySelector('.textAreaInput');

    let button = document.querySelector('.button');

    const skillsName = document.querySelectorAll('.skills-name');
    console.log(skillsName);


    const submit = () => {
        // saving values
        event.preventDefault();
        let nameInputValue = nameInput.value;
        let dateInputValue = dateInput.value;
        // let imgInputValue = imgInput.value;
        let firstColorInputValue = firstColorInput.value;
        let secondColorInputValue = secondColorInput.value;
        let textAreaInputValue = textAreaInput.value;
        // Creating the Profile DIV
        document.querySelector('.d-none').classList.remove('d-none');

        // Creating the Name Input Value into the profile
        document.querySelector('.nameOutput').innerText = nameInputValue;

        // Printing the age value
        document.querySelector('.ageOutput').innerHTML = `${nameInputValue}birthday date is ${dateInputValue}`;

        // Adding the image 
        const userImage = document.getElementById('avatar').files[0]; // ?
        const image = document.querySelector('.image');
        const reader = new FileReader();
        reader.onload = (function (aImg) {
            return function (e) {
                aImg.src = e.target.result;
            };
        })(image);
        reader.readAsDataURL(userImage);

        // Adding the color
        document.getElementById('profile').style.backgroundColor = "grey"; // firstColorInputValue;
        document.getElementById('profile').style.color = "yellow"; // secondColorInputValue;

        // Adding a small paragraph 
        document.querySelector('.statusOutput').innerText = textAreaInputValue;

        // Adding the Skills
        const userSkills = document.querySelector('.skillsOutput');
        const checkboxes = document.querySelectorAll('.skills');

        const skillsArr = [];
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked === true) {
                skillsArr.push(skillsName[i].value);
            }
            userSkills.innerHTML = `The programing skills of ${nameInputValue} are ${[...skillsArr]}`
        }
    };

    button.addEventListener('click', submit);
});

// // Your JS here!
// // elements
// const nameInput = document.querySelector('#nameInput');
// const birthdayInput = document.querySelector('#birthdayInput');
// const primaryColor = document.querySelector('#primaryColor');
// const secondaryColor = document.querySelector('#secondaryColor');
// const textArea = document.querySelector('textarea');
// const checkboxes = document.querySelectorAll('.skills');
// const form = document.querySelector('form');
// const profileContainer = document.querySelector('.container');
// // Submit
// document.addEventListener('submit', function () {
//   event.preventDefault();
//   // Colors 
//   const userPrimaryColor = primaryColor.value;
//   const userSecondaryColor = secondaryColor.value;
//   profileContainer.style.backgroundColor = userPrimaryColor;
//   profileContainer.style.color = userSecondaryColor;
//   // Adding the value of the nameInput into the h4 element
//   const userName = document.querySelector('#userName');
//   const name = nameInput.value;
//   userName.innerHTML = name;
//   // Adding the value of birthdayInput to the p element
//   const userAge = document.querySelector('#userAge');
//   const age = birthdayInput.value
//   userAge.innerHTML = ` ${name} is born at ${age}`;
//   // Adding the image 
//   const userImage = document.getElementById('avatar').files[0];
//   const image = document.querySelector('#image');
//   const reader = new FileReader();
//   reader.onload = (function (aImg) {
//     return function (e) {
//       aImg.src = e.target.result;
//     };
//   })(image);
//   reader.readAsDataURL(userImage);
//   // Add paragraph about yourself 
//   const aboutMe = document.querySelector('#aboutMe')
//   const userText = textArea.value;
//   aboutMe.innerHTML = userText;
//   // Adding the Skills
//   const userSkills = document.querySelector('#userSkills');
//   const skillsArr = [];
//   for (let i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked === true) {
//       skillsArr.push(checkboxes[i].value);
//     }
//     userSkills.innerHTML = `The programing skills of ${name} are ${[...skillsArr]}`
//   }
// });