// # The Book List
// Create a personalized book website! Instead of adding all of the details of books in HTML, add data on the page from the `books` array in `index.js` using JavaScript.

// ## Book Details
// Display the book details on the page, such as author's name, book title and reading status. The book cover should appear above the book details and the image should link to the URL of the book cover.

// ## Status
// The styling of reading status should be updated depending on whether the book has been read - the bootstrap badge style should change as well as the text, which should appear as "Read".

// ## Order
// The authors' last names should appear first e.g. "Smith, John". Furthermore, the books should be displayed on the page in alphabetical order according to the authors' last names.


// **Images**:

// ![alt text](assets/images/list-desktop.png "Desktop Menu")

// ![alt text](assets/images/list-tablet.png "Tablet Menu")

// ![alt text](assets/images/list-mobile.png "Mobile Menu")


// **Notes**:
// * Deadline: 2hrs.
// * Work with the `index.html` and `index.js` files provided in this repository.
// * Add bootstrap styling where necessary. See the reference images for result.

const books = {
  lists : [{
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
],
}
;





for (let i=0; i<books.length; i++){

  document.querySelector('ul').innerHTML += `
  <li class="card" style="width: 18rem;">
  <img class="card-img-top" src=${books.lists[i].img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${books.lists[i].title}</h5>
    <p class="card-text">${books.lists[i].author.split(' ').reverse().join(', ')}</p>
    <a href="#" class="btn btn-primary">Read</a>
  </div>
  </li>
  `

}
// document.querySelector('ul').innerHTML = document.querySelector('ul').innerHTML + '>img';
// // document.querySelector('ul').innerHTML += '<li></li>';
// // document.querySelector('ul').innerHTML += '<li>new third item</li>';
// // document.querySelector('ul').innerHTML += '<li>new third item</li>';
// const li = document.querySelectorAll('li');
// for(let i=0; i<li.length; i++){
//   li[i].classList.add('book');
// }
// document.querySelector('li').innerHTML = document.querySelector('li').innerHTML + '<img>';
// let a = document.createElement('a');

// a.innerText = 'book1';
// a.setAttribute('href', 'http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy');

// document.querySelector('img').appendChild(a);
// document.querySelector('li').innerText = books[1].title;

// <ul class="class-columns book-list">
// <li class="card book" style="width: 18rem;">
//   <img class="card-img-top book-cover" src="..." alt="Card image cap">
//   <section class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary status">Go somewhere</a>
//   </section>
// </li>
// ...
// </ul> 
