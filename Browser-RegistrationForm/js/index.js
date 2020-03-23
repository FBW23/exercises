// # Registration Form

// Go through and use the existing form setup to create a 3 Phase/Part Registration that displays all user entries, as represented below. By default, the first form is shown and the rest are hidden.
// The functionality of this registration form is as follows:
// - Page one: the user is asked for personal information (first name, last name, date of birth, etc.).
// - Page two: the user is asked for address information. 
// - Page three: the user is asked for profile information (username, password and profile photo).


// 1. Using the `checkValidity()` method, write a function that checks if the requirement for every input field has been met. e.g

// ```javascript
// let checkNationality = document
//   .getElementsByName('nationality')[0]
//   .checkValidity();
// ```

// <br>

// 2. `alert()` the user if they haven't given valid input for all of the form's fields.

// 3. Upon completion, the next phase should be displayed and the previous hidden.

// 4. Write a function `showData()` that shows all user data upon successful completion of the form.

// 4. The user should be able to go back to the previous page to make changes.

// > Hint: Refer to [MDN](https://developer.mozilla.org/en-US/ 'MDN Homepage')
// > & the representation below, for an idea of what your result should look like.

// ![demo](demo.gif)










//const firstName=document.querySelector("")




const button = document.querySelector("#next1");
const form1 = document.querySelector("#form1");
const next = document.createElement("submit");












const submitForm = () => {
  event.preventDefault();

  const formContainer = document.querySelector("#formContainer");



  button.style.background = "blue";


  const submitNewForm = () => {
    if (formContainer.contains(form1)) {
      form1.remove();


      const form2 = document.createElement("form");
      const previous = document.createElement("button");
      const address = document.createElement("p");
      const houseNumber = document.createElement("p");
      const zipCode = document.createElement("p");
      const addressLabel = document.createElement("p");
      const houseNumberLabel = document.createElement("p");
      const zipCodeLabel = document.createElement("p");
      
      form2.setAttribute("id", "form2");
      form2.setAttribute("class", "form");


      address.setAttribute("class", "inputField")
      address.setAttribute("type", "input")
      zipCode.setAttribute("type", "number");
      zipCode.setAttribute("class", "inputField");
      previous.setAttribute("type", "button");
      next.setAttribute("type", "submit");

      form2.append(addressLabel);
      form2.append(address);
      form2.append(houseNumberLabel);
      form2.append(houseNumber);
      form2.append(zipCodeLabel)
      form2.append(zipCode);
      form2.append(previous);
      form2.append(next);


      formContainer.append(form2);
    } else if (formContainer.contains("#form2")) {
      form2.remove();
      formContainer.append(form3);
    } else if (formContainer.contains("#form3")) {
      form3.remove();
      formContainer.append(form4);
    }
  }

   submitNewForm();
};

form1.addEventListener("submit", submitForm);

// const submitForm2 = () => {






// };








// const submitForm3 = () => {
//   const addPicLabel = document.createElement("p");


//   const userName = document.createElement("input");
//   const password = document.createElement("input");
//   const repeatPassword = document.createElement("input");

//   const addPic = document.createElement("button");

//   userName.setAttribute("type", "text");
//   password.setAttribute("type", "password");
//   repeatPassword.setAttribute("type", "password");
//   addPicLabel.setAttribute("class", "label");






//   form2.append(userName)
//   form2.append(password)
//   form2.append(repeatPassword)




//   //form2.append(addPicLabel)
//   //form2.append(addPic)
// };






















// const next=

// function previous(element) {
//   let fatherDiv = element.parentNode.id;
//   switch (fatherDiv) {
//     case 'addressDiv':
//       element.parentNode.style.display = 'none';
//       document.getElementById('personalDiv').style.display = 'block';
//       document.getElementById('profileDiv').style.display = 'none';
//       document.getElementById('resultDiv').style.display = 'none';
//       break;
//     case 'profileDiv':
//       element.parentNode.style.display = 'none';
//       document.getElementById('personalDiv').style.display = 'none';
//       document.getElementById('addressDiv').style.display = 'block';
//       document.getElementById('resultDiv').style.display = 'none';

//       break;
//     case 'resultDiv':
//       element.parentNode.style.display = 'none';
//       document.getElementById('personalDiv').style.display = 'none';
//       document.getElementById('addressDiv').style.display = 'none';
//       document.getElementById('profileDiv').style.display = 'block';

//       break;

//     default:
//       break;
//   }
// }