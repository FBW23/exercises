const titles = document.querySelectorAll('p');
const lists = document.querySelectorAll('.dropdown-menu');
const showBlock = function () {
    // HIDE ALL 
    for(let i=0; i<lists.length; i++) {
        lists[i].style.display = 'none';
    }
    if (event.target.nextElementSibling.style.display === 'flex') {
        event.target.nextElementSibling.style.display = 'none';
    } else {
        event.target.nextElementSibling.style.display = 'flex';
    }
}
titles.forEach(title => {
    title.addEventListener('click', showBlock);
})