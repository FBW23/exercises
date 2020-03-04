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
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
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

// FLEX CONTAINER
document.querySelector('ul').classList.add('book-list');

// FIRST BOOK


let firstBook = document.createElement('li');
document.querySelector('.book-list').appendChild(firstBook);

let image = document.createElement('img');
document.querySelector('li').appendChild(image);
image.setAttribute('src', 'http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy');
document.querySelector('img').classList.add('book', 'book-cover');

let h4 = document.createElement('h4');
document.querySelector('li').appendChild(h4);
document.querySelector('h4').innerText = "The Most Human Human";
document.querySelector('h4').classList.add('book');

// SECOND BOOK
let secondBook = document.createElement('li');
document.querySelector('.book-list').appendChild(secondBook);


// THIRD BOOK
let thirdBook = document.createElement('li');
document.querySelector('.book-list').appendChild(thirdBook);

// FOURTH BOOK
let fourthBook = document.createElement('li');
document.querySelector('.book-list').appendChild(fourthBook);

document.querySelectorAll('li').forEach(item => item.classList.add('book-cover', 'li-dot',));

