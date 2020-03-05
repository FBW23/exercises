const books = [{
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

// arr[0].author ...

books.forEach(book => {
// FIRST BOOK

let firstBook = document.createElement('li');
document.querySelector('.book-list').appendChild(firstBook);
document.querySelector('li').classList.add('card','book'); // MAIN CARD - class: card

let image = document.createElement('img'); // CARD IMG-TOP
document.querySelector('li').appendChild(image);
image.setAttribute('src', book.img);
image.classList.add('card-img-top', 'book-cover');

let section = document.createElement('section'); // CARD BODY
document.querySelector('li').appendChild(section);
section.classList.add('card-body');

let title = document.createElement('h5'); // Book Title
document.querySelector('section').appendChild(title);
title.innerText = book.title;
title.classList.add('card-title');

let author = document.createElement('p'); // Author
document.querySelector('section').appendChild(author);
author.innerText = book.author;
author.classList.add('card-text', 'text-muted');

let link = document.createElement('a'); // Button link
document.querySelector('section').appendChild(link);
link.setAttribute('href', '#');
link.innerText = 'Read';
link.style.margin = '0rem 0rem 0rem 6rem';
document.querySelector('a').classList.add('btn', 'btn-success', 'status');

});

// let firstBook = document.createElement('li');
// document.querySelector('.book-list').appendChild(firstBook);
// document.querySelector('li').classList.add('card','book'); // MAIN CARD - class: card

// let image = document.createElement('img'); // CARD IMG-TOP
// document.querySelector('li').appendChild(image);
// image.setAttribute('src', 'http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy');
// document.querySelector('img').classList.add('card-img-top', 'book-cover');

// let section = document.createElement('section'); // CARD BODY
// document.querySelector('li').appendChild(section);
// document.querySelector('section').classList.add('card-body');

// let title = document.createElement('h5'); // Book Title
// document.querySelector('section').appendChild(title);
// document.querySelector('h5').innerText = 'The Most Human Human';
// document.querySelector('h5').classList.add('card-title');

// let author = document.createElement('p'); // Author
// document.querySelector('section').appendChild(author);
// document.querySelector('p').innerText = 'Brian Christian';
// document.querySelector('p').classList.add('card-text', 'text-muted');

// let link = document.createElement('a'); // Button link
// document.querySelector('section').appendChild(link);
// link.setAttribute('href', '#');
// link.innerText = 'Read';
// link.style.margin = '0rem 0rem 0rem 6rem';
// document.querySelector('a').classList.add('btn', 'btn-success', 'status');




// // SECOND BOOK
// let secondBook = document.createElement('li');
// document.querySelector('.book-list').appendChild(secondBook);


// // THIRD BOOK
// let thirdBook = document.createElement('li');
// document.querySelector('.book-list').appendChild(thirdBook);

// // FOURTH BOOK
// let fourthBook = document.createElement('li');
// document.querySelector('.book-list').appendChild(fourthBook);

// document.querySelectorAll('li').forEach(item => item.classList.add('book-cover', 'li-dot', ));