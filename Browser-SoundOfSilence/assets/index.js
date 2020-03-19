// HTML elements saved in Lets
let line = document.querySelectorAll('.line');
let track = document.querySelector('.track');
let artist = document.querySelector('.artist');
let date = document.querySelector('.date');


const creteTable = () => {
    let table = document.querySelector('.table');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let th5 = document.createElement('th');
    let img = document.createElement('img');

    tr.classList.add('line');

    img.src = 'assets/img/music.jpg'
    th1.setAttribute('scope', 'col')
    th1.classList.add('pic');

    th2.setAttribute('scope', 'col')
    th2.classList.add('track');

    th3.setAttribute('scope', 'col')
    th3.classList.add('artist');

    th4.setAttribute('scope', 'col')
    th4.classList.add('type');

    th5.setAttribute('scope', 'col')
    th5.classList.add('date');

    tbody.appendChild(tr);
    tr.appendChild(th1);
    th1.appendChild(img);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    table.appendChild(tbody);
}

// Looping the HTML elements modifications
for (let i = 0; i < music.length; i++) {
    // console.log('music array object ', music[i]); // we get the five array objects - KEWL
    // create the html
    
    // create the html
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
    
    creteTable()
}

