// Your JS here!

// elements
const nameInput = document.querySelector('#nameInput');
const birthdayInput = document.querySelector('#birthdayInput');
const primaryColor = document.querySelector('#primaryColor');
const secondaryColor = document.querySelector('#secondaryColor');
const textArea = document.querySelector('textarea');
const checkboxes = document.querySelectorAll('.skills');
const form = document.querySelector('form');
const profileContainer = document.querySelector('.container');



// Submit
document.addEventListener('submit', function () {
  event.preventDefault();
  // Colors 
  const userPrimaryColor = primaryColor.value;
  const userSecondaryColor = secondaryColor.value;

  profileContainer.style.backgroundColor = userPrimaryColor;
  profileContainer.style.color = userSecondaryColor;

  // Adding the value of the nameInput into the h4 element
  const userName = document.querySelector('#userName');
  const name = nameInput.value;
  userName.innerHTML = name;

  // Adding the value of birthdayInput to the p element
  const userAge = document.querySelector('#userAge');
  const age = birthdayInput.value
  userAge.innerHTML = ` ${name} is born at ${age}`;

  // Adding the image 
  const userImage = document.getElementById('avatar').files[0];
  const image = document.querySelector('#image');
  const reader = new FileReader();
  reader.onload = (function (aImg) {
    return function (e) {
      aImg.src = e.target.result;
    };
  })(image);
  reader.readAsDataURL(userImage);

  // Add paragraph about yourself 
  const aboutMe = document.querySelector('#aboutMe')
  const userText = textArea.value;
  aboutMe.innerHTML = userText;


  // Adding the Skills
  const userSkills = document.querySelector('#userSkills');
  const skillsArr = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      skillsArr.push(checkboxes[i].value);
    }
    userSkills.innerHTML = `The programing skills of ${name} are ${[...skillsArr]}`
  }

});