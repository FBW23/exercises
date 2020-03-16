// Your JS here!

// elements
const nameInput = document.querySelector('#nameInput');
const birthdayInput = document.querySelector('#birthdayInput');
const primaryColor = document.querySelector('#primaryColor');
const secondaryColor = document.querySelector('#secondaryColor');
const textArea = document.querySelector('textarea');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const form = document.querySelector('form');



// values

// Submit
document.addEventListener('submit', function () {
  event.preventDefault();

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

  // Adding the Skills
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      console.log(checkboxes[i].innerHTML)
    }
  }
});