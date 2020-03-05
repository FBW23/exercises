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

function compare(a, b) {
  const bookA = a.author.split(' ').reverse().join(' ').toUpperCase();
  const bookB = b.author.split(' ').reverse().join(' ').toUpperCase();

  let comparison = 0;

  if (bookA > bookB) {
    comparison = 1;
  } else if (bookA < bookB) {
    comparison = -1
  }
  return comparison;
}

// [orderedObject] - alphabetical order according to the authors' last names
const orderedObject = books.sort(compare);
console.log(orderedObject);


const bookList = document.querySelector(".book-list");
// Add row class to the bookList
bookList.style.listStyle = "none";
// create 4 <li> items with class col-sm
for (let i = 0; i < 4; i++) {
  bookList.innerHTML += '<li class="book card"></li>'
}

const allListElements = document.querySelectorAll("li");
// allListElements.forEach(item => item.innerHTML += "<div class='card-body'></div>")
// BOOKS IMAGE
const bookImgLinks = orderedObject.map(item => {
  return item.img;
});

console.log(bookImgLinks);
allListElements.forEach((item, index) => {
  item.innerHTML += `<a href="${bookImgLinks[index]}"><img class="book-cover card-img-top" src="${bookImgLinks[index]}"></a>`;
})

allListElements.forEach(item => item.innerHTML += "<div class='card-body'></div>")
const allDivElements = document.querySelectorAll(".card-body");


// BOOKS TITLE
const booksTitle = orderedObject.map(item => {
  return item.title;
})

allDivElements.forEach((item, index) => {
  item.innerHTML += `<h5 class="card-title">${booksTitle[index]}</h5>`;
})

// BOOKS AUTHOR
const bookAuthors = orderedObject.map(item => {
  return item.author;
})

allDivElements.forEach((item, index) => {
  item.innerHTML += `<p class="card-text">${bookAuthors[index].split(' ').reverse().join(' ')}</p>`;
})

// READ OR NOT

const readOrNot = orderedObject.map(item => {
  return item.alreadyRead;
})

allDivElements.forEach((item, index) => {
  item.innerHTML += `<button type="button" class="status btn-sm btn btn-success">${readOrNot[index]}</button>`;
})


// style
const cardBody = document.querySelectorAll(".card-body");







const buttons = document.querySelectorAll('.btn');
// buttons.forEach(item => {
//   item.style.width = "30%";
//   item.style.placeSelf = "flex-end"
// });

// read or to read 

buttons.forEach(item => {
  if (item.innerHTML === "true") {
    item.innerHTML = "Read";
  } else if (item.innerHTML === "false") {
    item.innerHTML = "To Read";
    item.classList.remove("btn-success");
    item.classList.add("btn-secondary");
  }

  let parentDiv = document.createElement('div');
  parentDiv.classList.add("card-footer");
  let replace = item.parentNode;
  replace.replaceChild(parentDiv, item);
  parentDiv.appendChild(item);
});

// to put the card footer outside the card body !