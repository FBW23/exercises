const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:  "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];



let firstBook = document.createElement('li');
document.querySelector('.book-list').appendChild(firstBook);
let im1 = document.createElement('IMG');
document.querySelector('li').appendChild(im1);
document.querySelector('li').classList.add('card');
im1.src = "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy";
document.querySelector('IMG').classList.add('book-cover');
document.querySelector('IMG');
let div = document.createElement('div');
document.querySelector('.card').appendChild(div);
document.querySelector('div').classList.add('card-body');
let h5 = document.createElement('h5');
document.querySelector('.card-body').appendChild(h5);
document.querySelector('h5').classList.add('card-title');
document.querySelector('h5').innerText = 'The Most Human Human';

let p = document.createElement('p');
document.querySelector('.card-body').appendChild(p);
document.querySelector('p').classList.add('card-text');
document.querySelector('p').innerText = 'Brian Christian';

let a = document.createElement('a');
document.querySelector('.card-body').appendChild(a);
document.querySelector('a').classList.add('btn', 'btn-primary');
document.querySelector('a').innerText = 'Read';





document.querySelectorAll('li').forEach(item => item.classList.add('book-cover', 'book'));

firstBook.setAttribute('href');
document.querySelector('.book-cover').appendChild(firstBook);
