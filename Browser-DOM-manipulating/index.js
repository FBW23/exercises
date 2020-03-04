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

let ul = document.querySelector("ul");

for (let i = 0; i < books.length; i++) {
  let book = books[i];

  let listItem = document.createElement("li");
  listItem.innerHTML = [book.title,book.author,book.alreadyRead]
  


  ul.appendChild(listItem);
  }
  let img = new Image();
let div = document.querySelector('ul');
 
img.onload = function() {
  div.appendChild(img);
};
 
img.src = ["https://eloquentjavascript.net/img/cover.jpg"]
// img.src="https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg";

// document.querySelector("ul").style.height = "300px";
// document.querySelector("ul").style.width = "300px";


let elements = document.querySelector(".book-list card-column");
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

