
const button = document.querySelector('button');

function submit(e) {
  e.preventDefault();
  let textArea = document.querySelector('textarea');
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
  li.innerHTML = `<span class="delete"><i class="fas fa-times"></i></span><input class='checkbox' type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.container-fluid').classList.remove('d-none');
  // checkbox.addEventListener('click', checked);
  let checkboxTick = document.querySelectorAll('.checkbox');
  let label = document.querySelectorAll('label');
  console.log(`this is the label ${label}`)

//   checkboxTick.addEventListener('change', function () {
//     if (checkboxTick.checked === true) {
//       label.style.textDecoration = "line-through";
//     } else {
//       label.style.textDecoration = "none";
//     }
//   })
  for(let i = 0; i < checkboxTick.length; i++) {
      checkboxTick[i].addEventListener('change', function(){
          if(checkboxTick[i].checked === true) {
              label[i].classList.add('checked');
          } else {
              label[i].classList.add('unchecked');
          }

      })
  }
  let icon = document.querySelectorAll('.fas');
  icon.forEach(element => {
    element.addEventListener('click', function (e) {
      e.target.parentNode.parentNode.style.display = "none";
    })
  })

}