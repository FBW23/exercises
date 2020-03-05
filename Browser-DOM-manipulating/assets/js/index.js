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

// for (let i = 0; i < books.length; i++) {
//   let bookN = document.createElement('li');
//   let bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
//   bookN.appendChild(bookDescription);
//   document.body.appendChild(bookN);
//   bookN.classList.add('li');
//   bookN.style.get
// }



// document.querySelector('ul').innerHTML += '<li></li>';

const bookList = document.createElement('ul');
for (var i = 0; i < books.length; i++) {
document.querySelector('ul').innerHTML +=
  `<li class="card book" style="width: 18rem;">
  <img class="card-img-top book-cover" src=${books[i].img} alt="Card image cap">
  <section class="card-body">
    <h5 class="card-title">${books[i].title}</h5>
    <p class="card-text text-muted">${books[i].author}</p>
    <a href="#" class="btn btn-primary status">${'Read'}</a>
  </section>
</li>`
}