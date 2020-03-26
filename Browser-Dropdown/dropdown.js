

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelectorAll(".dropdown-toggle");
  // console.log(dropdown);
  let buttons = document.querySelectorAll('p');
  const actorName = (e) => {
      // make a loop of all the uls to add "d-none" to all of them
      console.log(e.target);
      const ul = e.target.nextElementSibling;
      ul.classList.remove('d-none');
  };
  for (let j = 0; j < 4; j++) {
      let allUl = document.querySelectorAll('ul');
      allUl[j].classList.add('d-none');
  }
  for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', actorName);
  }
});

  


































