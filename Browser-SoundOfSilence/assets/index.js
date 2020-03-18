// // HTML elements saved in Lets
//  let row = document.querySelectorAll('.row');
// let track = document.querySelector('.track');
// let artist = document.querySelector('.artist');
// let date = document.querySelector('.date');
// let content=document.querySelector("#content");
//  let body = document.querySelector("body");
// Looping the HTML elements modifications


for (let i = 0; i < music.length; i++) {

  let table = document.createElement("table");
  table.classList.add("table");
  let row = document.createElement("tr");
  row.classList.add("row");
  table.append(row);
  for (let j = 0; j < 5; j++) {
    let column = document.createElement("td");
    column.classList.add("column");
    columnNow = column[j];
    row.append(column);
  }
  content.append(table);
}



// let currentTrack = line[i].children[1];
// currentTrack.innerText = music[i]['trackName'];
// let currentArtist = line[i].children[2];
// currentArtist.innerText = music[i]['artistName'];
// let currentCollection = line[i].children[3];
// currentCollection.innerText = music[i]['collectionName'];
// // KEWL
// let releaseDate = line[i].children[4];
// let releaseYear = music[i]['releaseDate'];
// releaseDate.innerText = releaseYear.substr(0, 4);

const row = document.querySelectorAll(".row");

for (let i = 0; i < music.length; i++) {
  let trackName = music[i].trackName;
  let artist = music[i].artistName;
  let type = music[i].primaryGenreName;
  let releaseDate = music[i].releaseDate;




  let typeNow = row[i].children[3];
  typeNow.style.backgroundColor = "pink";
  typeNow.innerText = type;

  let imgNow = row[i].children[0];
  
  //imgNow.style.backgroundImage = "url('assets/img/music.jpg')";
  //imgNow.innerText = "here goes the image";
  imgNow.style.backgroundColor = "blue";

  let trackNow = row[i].children[1];
  trackNow.innerText = trackName;
  //trackNow.style.backgroundColor = "blue";

  let authorNow = row[i].children[2];
  authorNow.style.backgroundColor = "green";
  authorNow.innerText = artist;

  let dateNow = row[i].children[4];
   dateNow.style.border = "1px solid grey";
  dateNow.innerText = releaseDate.substr(0, 4);
}