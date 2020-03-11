let prev = document.querySelector('div.prev');
let next = document.querySelector('div.next');
let index = 0;
let lis = document.querySelectorAll('ul.slider li');
let count = lis.length;

prev.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index--;
    if (index < 0){
        index = count-1;
    }

    lis[index].classList.add('visible');
});

next.addEventListener('click', function() {
    lis[index].classList.remove('visible');
    index++;
    if (index > count-1){
        index = 0;
    }

    lis[index].classList.add('visible');
});