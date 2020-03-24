const titles = document.querySelectorAll('p');
const lists = document.querySelectorAll('.dropdown-menu');
const showBlock = function () {
    // HIDE ALL 

    for(let i=0; i<lists.length; i++) {
        lists[i].style.display = 'none';
    }

    if (event.target.nextElementSibling.style.display === 'none') {
        event.target.nextElementSibling.style.display = 'flex';
    } else {
        event.target.nextElementSibling.style.display = 'none';
    }

}

titles.forEach(title => {
    title.addEventListener('mouseover', showBlock);
})

window.addEventListener('mouseover', e => {
    lists.style.display ='none';
});