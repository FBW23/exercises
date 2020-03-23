<<<<<<< HEAD
//const row = document.querySelectorAll(".row")
//const track = document.querySelectorAll(".track");
// const author= document.querySelector(".author");
// const type = document.querySelector(".type")
// const date = document.querySelector(".date")
const table = document.querySelector("table");

for (let i = 0; i < 50; i++) {
    let trackName = music[i].trackName;
    let artist = music[i].artistName;
    let wrapperType = music[i].primaryGenreName;
    let releaseDate = music[i].releaseDate;

    // <tr class="row">
    //     <td class="img"><img src="img/music.jpg" alt="playbutton"></td>
    //     <td class="track">Sound of Silence</td>
    //     <td class="author">Simon & Garfunkel</td>
    //     <td class="type">Alternative</td>
    //     <td class="date">2010</td>

    // </tr>
    const row = document.createElement("tr");
    row.classList.add("row");
    const td = document.createElement("td");
    td.classList.add("img");
    const img = document.createElement("img");
    img.setAttribute("src", "img/music.jpg");
    img.setAttribute("alt", "playbutton");
    const track = document.createElement("td");
    track.classList.add("track");
    const author = document.createElement("td");
    author.classList.add("author");
    const type = document.createElement("td");
    type.classList.add("type");
    const date = document.createElement("td");
    date.classList.add("date");

    track.innerText = trackName;
    author.innerText = artist;
    type.innerText = wrapperType;
    date.innerText = releaseDate;

    // append here 
    td.append(img);
    row.append(td);
    row.append(track);
    row.append(author);
    row.append(type);
    row.append(date);
    table.append(row);
=======
// HTML elements saved in Lets
let line = document.querySelectorAll('.line');
let track = document.querySelector('.track');
let artist = document.querySelector('.artist');
let date = document.querySelector('.date');
// Looping the HTML elements modifications
for (let i = 0; i < 5; i++) {
    // console.log('music array object ', music[i]); // we get the five array objects - KEWL
   
    let currentTrack = line[i].children[1];
    currentTrack.innerText = music[i]['trackName'];
    let currentArtist = line[i].children[2];
    currentArtist.innerText = music[i]['artistName'];
    let currentCollection = line[i].children[3];
    currentCollection.innerText = music[i]['collectionName'];
    // KEWL
    let releaseDate = line[i].children[4];
    let releaseYear = music[i]['releaseDate'];
    releaseDate.innerText = releaseYear.substr(0,4);
    // let's add the key values to the html
    
>>>>>>> b54d375f3c088fb244f79043840ef3bac0c41a6b
}