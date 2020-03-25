const button = document.querySelector('button');

function submit(e) {
  // e.preventDefault();
  let textArea = document.querySelector('.form-control');
  if (textArea.value != '') {
    addTask(textArea.value);
  }
  textArea.value = '';
}

button.addEventListener('click', submit);


// add task function
function addTask(task) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete"><i class="fas fa-times"> close </i></span><input class='checkbox' type="checkbox"> check as finished <label>${task}</label>`; //<i class="fas fa-times"></i>
  ul.appendChild(li);
  document.querySelector('.container-fluid').classList.remove('d-none');
  // checkbox.addEventListener('click', checked);
  let checkboxTick = document.querySelectorAll('.checkbox');
  let label = document.querySelectorAll('label');
  for (let i = 0; i < checkboxTick.length; i++) {
    checkboxTick[i].addEventListener('change', function () {
      if (checkboxTick[i].checked === true) { 
        label[i].classList.add('line-through'); 
      } else { // 
        label[i].classList.add('line-none'); 
      }
    })
  }


  let icon = document.querySelectorAll('.fas');
  icon.forEach(element => {
    element.addEventListener('click', function (e) {
      // e.target.parentNode.parentNode.style.display = "none";
      let singleElement = e.target.parentNode.parentNode;
      singleElement.remove();
    })
  })
}

  // checkboxTick.forEach(item => {
  //   item.addEventListener('change', function () { // 
  //     if (.checked === true) {
  //       label.className = "line-through"; //
  //     } else {
  //       label.className = "line-none"; //  
  //     }
  //   })
  // })  
  // checkboxTick.addEventListener('change', function () {
  //   if (checkboxTick.checked === true) {
  //     label.className = "line-through"; // 
  //   } else {
  //     label.className = "line-none"; // 
  //   }
  // })