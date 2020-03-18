// HTML elements saved in Lets
let line = document.querySelectorAll('.line');
let track = document.querySelector('.track');
let artist = document.querySelector('#artist');
let date = document.querySelector('#date');
// Looping the HTML elements modifications
for (let i = 0; i < 5; i++) {
    // console.log('music array object ', music[i]); // we get the five array objects - KEWL
    // console.log('line ', line[i].childNodes);
    // track[i]=line[i].childNodes[2];
    let currentTrack = line[i].children[1];
    currentTrack.innerText = music[i]['trackName'];
    // KEWL
    //                 current line ,  div number 2   
    // console.log('current track', currentTrack)
    // console.log('track[i] ', track[i])
    // console.log('artist name', music[i]['artistName']); // TOP!
    // console.log('artist name', music[i]['collectionName']);
    // let's add the key values to the html

}