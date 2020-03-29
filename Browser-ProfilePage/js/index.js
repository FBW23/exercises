// Your JS here!
// const nameInput = document.querySelector('#nameInput');
// const birthdayInput = document.querySelector('#birthdayInput');
// const primaryColor = document.querySelector('#primaryColor');
// const secondaryColor = document.querySelector('#secondaryColor');
// const textArea = document.querySelector('textarea');
// const checkboxes = document.querySelectorAll('.skills');
// const profileContainer = document.querySelector('.container');


//  // Colors 
//  const userPrimaryColor = primaryColor.value;
//  const userSecondaryColor = secondaryColor.value;

//  profileContainer.style.backgroundColor = userPrimaryColor;
//  profileContainer.style.color = userSecondaryColor;

//  // Adding the value of the nameInput into the h4 element
//  const userName = document.querySelector('#userName');
//  const name = nameInput.value;
//  userName.innerHTML = name;

//  // Adding the value of birthdayInput to the p element
//  const userAge = document.querySelector('#userAge');
//  const age = birthdayInput.value
//  userAge.innerHTML = ` ${name} is born at ${age}`;


// Add paragraph about yourself 
// const aboutMe = document.querySelector('#aboutMe')
// const userText = textArea.value;
// aboutMe.innerHTML = userText;


// // Adding the Skills
// const userSkills = document.querySelector('#userSkills');
// const skillsArr = [];
// for (let i = 0; i < checkboxes.length; i++) {
//   if (checkboxes[i].checked === true) {
//     skillsArr.push(checkboxes[i].value);
//   }
//   userSkills.innerHTML = `The programing skills of ${name} are ${[...skillsArr]}`
// }





// const form = document.querySelector('form');


document.addEventListener('submit', function () {
  event.preventDefault();
 

  //this is the inputfield of the img (upload button)
  const userImage = document.querySelector('#imgUpload').files[0];

//this is the img in the container div after the form, id="img"
  const image = document.querySelector('#img');


  //this is a variable that holds the filerReader function. but it does not know, what to read yet.
  const accessImg = new FileReader();

//this is a function that tells the accessImg function what to do.

  accessImg.onload = (function (showImg) {

    //this is a function within the function that accesses the image,
    //to declare the path(src) to the image, which is equal to the event.target.result

    return function (e) {
      showImg.src = e.target.result;
    };

    //
  })(image);

  //this takes the img source from the function above and gives the uploaded img to it
  accessImg.readAsDataURL(userImage);

  

});