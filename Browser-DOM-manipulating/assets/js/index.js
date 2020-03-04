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

const createParagraph = (book) => {
  const paragraph = document.createElement("p");
  // write content to paragraph
  paragraph.innerText = `${book.title} - by ${book.author}`;
  return paragraph;
}

books.forEach((book) => {
  const bookParagraph = createParagraph(book);

  // insert into the html after <h1>
  // target h1
  const h1 = document.querySelector('h1');

  // insert adjacent to h1
  // insertAdjacentElement because `bookParagraph` is an HTML element
  // not a string
  h1.insertAdjacentElement('afterend', bookParagraph);
})



