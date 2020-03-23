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
  li.innerHTML = `<span class="delete"><i class="fas fa-times"></i></span><input class='checkbox' type="checkbox"><label>${task}</label>`; //<i class="fas fa-times"></i>
  ul.appendChild(li);
  document.querySelector('.container-fluid').classList.remove('d-none');
  // checkbox.addEventListener('click', checked);
  let checkboxTick = document.querySelectorAll('.checkbox');
  let label = document.querySelector('label');
  console.log('checkboxTick.length ' + checkboxTick.length); //
  for (let i = 0; i < checkboxTick.length; i++) {
    checkboxTick[i].addEventListener('change', function () { // here <-and to change the label of ithe e
      if (checkboxTick[i].checked === true) { // 
        label.classList.add('line-trough'); // hello error my old friend this should work :@  but why it was working with = line trough :D 
      } else { // 
        label.classList.add = ('line-none'); // yeah but only for the first "li"
      }
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

  let icon = document.querySelectorAll('.fas');
  icon.forEach(element => {
    element.addEventListener('click', function (e) {
      // e.target.parentNode.parentNode.style.display = "none";
      let singleElement = e.target.parentNode.parentNode;
      singleElement.remove();
    })
  })
}