let tbody = document.querySelector('tbody')



let table2 = ''
music.forEach(element => {
console.log(element);
table2 +=  `
<tr class='line'>
<th scope="col" class="pic"><img src="assets/img/music.jpg"></th>
<th scope="col" class="track">${element.trackName}</th>
<th scope="col" class="artist">${element.artistName}</th>
<th scope="col" class="type">${element.collectionName}</th>
<th scope="col" class="date">${element.releaseDate}</th>
</tr>
`;
tbody.innerHTML = table2;
})