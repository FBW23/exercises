
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