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




books.forEach(book => {

  let list = document.createElement('li');
  document.querySelector('.book-list').appendChild(list);

  let image = document.createElement('IMG');
  document.querySelector('li').appendChild(image);
  image.classList.add('card', 'book');
  image.src = book.img;
  image.classList.add('card-img-top', 'book-cover');

  let div = document.createElement('div');
  document.querySelector('.card').appendChild(div);
  div.classList.add('card-body');

  let h5 = document.createElement('h5');
  document.querySelector('.card-body').appendChild(h5);
  h5.classList.add('card-title');
  h5.innerText = book.title;

  let p = document.createElement('p');
  document.querySelector('.card-body').appendChild(p);
  p.classList.add('card-text', 'text-muted');
  p.innerText = book.author;


  let a = document.createElement('a');
  document.querySelector('.card-body').appendChild(a);
  a.classList.add('btn', 'btn-success', 'status');
  a.innerText = 'Read';

})