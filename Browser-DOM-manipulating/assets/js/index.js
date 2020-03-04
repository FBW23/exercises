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


let cards = document.querySelector('.book-list.card-column');
let author = books[0].author.split(' ');
author = `${author[1]} ${author[0]}`;



// for(let i=0;i<author.length;i++){
//   if(author[i]===" "){
//     for(let j=author[i];j<author.length;j++){
//       author.push(author[j]);
//     }
//     author.push(author[i]);
//   }

// };






for (let i = 0; i < books.length; i++) {
  document.querySelector('.book-list.card-column').innerHTML += `<li class="card" style="width: 18rem;">
    <img class="card-img-top" src=${books[i].img} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">
      ${books[i].title}
        </h5>
      <p class="card-text">${books[i].author}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </li>` ;
};




