// Your JS here!

// window.addEventListener('load', function() {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('img');  // $('img')[0]
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//             img.onload = imageIsLoaded;
//         }
//     });
//   });
  
//   function imageIsLoaded() { 
//     alert(this.src);  // blob url
//     // update width and height ...
//   };


  function myFunction() {
    document.getElementById("Form").reset();
  };

console.log(`36_CV`);
const createObj = document.getElementById(`create`);
const resetObj = document.getElementById(`reset`);
createObj.onclick = function(event) {
  event.preventDefault();
//   createObj.addEventListener("click" event)
//     event.preventDefault(); 
  
  const cvObj = document.getElementById(`cv`);
  const nameObj = document.getElementById(`name`);
  const birthdayObj = document.getElementById(`birthday`);
  const photoObj = document.getElementById(`photo`);
  const favColor1Obj = document.getElementById(`preferredColor1`);
  const favColor2Obj = document.getElementById(`preferredColor2`);
  const descriptionObj = document.getElementById(`description`);
  const skillsObj = document.getElementsByClassName(`skills`);
  const newCvObj = document.createElement(`div`);
  newCvObj.classList.add(`yourCV`);
  newCvObj.style.background = favColor1Obj.value;
  newCvObj.style.color = favColor2Obj.value;
  newCvObj.style.marginBottom = `20px`;
  newCvObj.style.margin = "10px auto";
  newCvObj.style.width = "40%";
  cvObj.append(newCvObj);
  const removeBtnObj = document.createElement(`button`);
  removeBtnObj.innerText = "X";
  removeBtnObj.classList.add(`removeBtn`);
  newCvObj.appendChild(removeBtnObj);
  removeBtnObj.onclick = function() {
    this.parentElement.remove();
  };
  const nameH1Obj = document.createElement(`h1`);
  nameH1Obj.innerText = nameObj.value;
  nameH1Obj.style.textAlign = "center"
  newCvObj.appendChild(nameH1Obj);
  const ageObj = document.createElement(`h2`);
  let birthdayArr = birthdayObj.value.split(`-`);
  let yearOfBirth = parseInt(birthdayArr[0]);
  let today = new Date();
  let alter = today.getFullYear() - yearOfBirth;
  ageObj.innerText = `${nameObj.value} is ${alter} years old`;
  newCvObj.appendChild(ageObj);
  const newPhotoObj = document.createElement(`div`);
  newPhotoObj.classList.add(`foto`);
  newPhotoObj.style.width = "10%"
  newPhotoObj.style.height = "20%"
  newPhotoObj.style.backgroundImage = `url(${photoObj.value})`;
  newCvObj.appendChild(newPhotoObj);
  const newDescriptionObj = document.createElement(`h2`);
  newDescriptionObj.innerText = descriptionObj.value;
  newCvObj.appendChild(newDescriptionObj);
  const newSkillsObj = document.createElement(`h4`);
  let skillsStr = ``;
  for (let i = 0; i < skillsObj.length; i++) {
    if (skillsObj[i].checked === true) {
      skillsStr += skillsObj[i].value + `, `;
    }
  }
  skillsStr = skillsStr.slice(0, skillsStr.length - 2);
  if (skillsStr.split(`, `)[0] === "") {
    alert(`You should not apply as a web developer!`);
  } else if (skillsStr.split(`, `).length === 1) {
    newSkillsObj.innerText = `The programming skill of ${nameObj.value} is: ${skillsStr}.`;
    newCvObj.appendChild(newSkillsObj);
  } else {
    newSkillsObj.innerText = `The programming skills of ${nameObj.value} are: ${skillsStr}.`;
    newCvObj.appendChild(newSkillsObj);
  }
};
resetObj.onclick = function() {
  location.reload();
};