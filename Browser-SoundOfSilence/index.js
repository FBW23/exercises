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
    img.setAttribute("src", "music.jpg");
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
}