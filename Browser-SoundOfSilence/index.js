const table = document.querySelector("table");
for (let i = 0; i < music.length; i++) {
    let trackName = music[i].trackName;
    let artist = music[i].artistName;
    let wrapperType = music[i].primaryGenreName;
    let releaseDate = music[i].releaseDate.substr(0,4);
    const row = document.createElement("tr");
    row.classList.add("row");
    const td = document.createElement("td");
    td.classList.add("img");
    const img = document.createElement("img");
    img.setAttribute("src", "music.jpg");
    img.setAttribute("alt", "playbutton");
    </table>
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