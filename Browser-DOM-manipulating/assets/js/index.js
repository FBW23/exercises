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
// bookImgLinks <- an Array with book image links
// bookAuthors <- an Array with author names
// booksTitle  <- an Array with books titles

// const bookImgLinks = books.map(item => {
//   return item.img;
// });

// // author names
// const bookAuthors = books.map(item => {
//   return item.author;
// })

// // book title
// const booksTitle = books.map(item => {
//   return item.title;
// })
// console.log(booksTitle);

// // true or false arr
// const readOrNot = books.map(item => {
//   return item.alreadyRead;
// })

// console.log(readOrNot)

function compare(a, b) {
  const bookA = a.author.split(' ').reverse().join(' ').toUpperCase();
  const bookB = b.author.split(' ').reverse().join(' ').toUpperCase();
  
  let comparison = 0;

  if(bookA > bookB) {
    comparison = 1;
  } else if(bookA < bookB) {
    comparison = -1
  }
  return comparison;
}

// [orderedObject] - alphabetical order according to the authors' last names
const orderedObject = books.sort(compare);
console.log(orderedObject);


const bookList = document.querySelector(".book-list");
// Add row class to the bookList
bookList.classList.add("row");

bookList.innerHTML += '<li>hello</li>'