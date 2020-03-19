let tbody = document.querySelector('tbody');

let table = '';
music.forEach(element => {
    console.log(element);
    table += `
<tr class='line'>
<td scope="col" class="pic"><img src="assets/img/music.jpg"></td>
<td scope="col" class="track">${element.trackName}</td>
<td scope="col" class="artist">${element.artistName}</td>
<td scope="col" class="type">${element.collectionName}</td>
<td scope="col" class="date">${element.releaseDate}</td>
</tr>
`;
    tbody.innerHTML = table;
})