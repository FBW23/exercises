
const list = document.querySelector(".box");


const renderTracks=(tracks)=>{
    list.innerHTML = '';
tracks.forEach(x => {
    const minutes = Math.floor(x.trackTimeMillis / 60000);
    let seconds = Math.ceil(x.trackTimeMillis / 1000 % 60);
    seconds<10?seconds='0'+seconds:seconds;
    let time=minutes+':'+seconds;
   
    
  list.innerHTML += 
  `<div class='box2'>
   <div class='card text-white bg-dark'>
   <div class='card-body'>
   <div class='row no-gutters'>
        <div class='col'><img src='${x.artworkUrl100}'></div>
     
            <div class='col'>
               <small class='text-muted'>ARTIST</small> <a href=${x.trackViewUrl} target='_blank'><i class="fab fa-apple"></i></a><br>
               ${x.artistName} 
            </div>
     
    </div>
    <small class='text-muted'>ALBUM</small><br>
     <p class='card-text'> ${x.collectionName}</p>
    <div class='row no-gutters h4'><p class='card-text'>${x.trackName} </p></div>
    </div>
   <div class='card-footer'><p class='show'>show more <i class="fas fa-caret-down"></i></p></div>
   </div>
   
   <div class='info'>
           <div>
          <small class='text-muted'>Length</small><br>
          <p> ${time}</p>
          <small class='text-muted'>Price</small><br>
          <p> ${x.trackPrice}$</p>
            </div>
            <div>
          <small class='text-muted'>Release Date</small><br>
          <p> ${x.releaseDate.substring(0, 10)}</p>
          <small class='text-muted'>Album Price</small><br>
          <p> ${x.collectionPrice}$</p>
          </div>
          
          
   </div>
   </div>`;

    let showMore = document.querySelectorAll('.show');

    showMore.forEach(x => x.addEventListener('click', () => {
        x.parentElement.parentElement.nextElementSibling.classList.toggle('toggle')
    }))

   
  
});
   
}

const sort = document.querySelector('.sort');

sort.addEventListener('click', () => {
    sort.nextElementSibling.classList.toggle('toggle');
})

const price=document.querySelector('.price');

price.addEventListener('click',()=>{
    let sorted=music.sort((a,b)=>a.trackPrice-b.trackPrice);

    renderTracks(sorted);
})
const length = document.querySelector('.length');

length.addEventListener('click', () => {
    let sorted = music.sort((a, b) => a.trackTimeMillis - b.trackTimeMillis);

    renderTracks(sorted);
})
const release = document.querySelector('.release');

release.addEventListener('click', () => {
    let sorted = music.sort((a, b) => new Date(a.releaseDate.substr(0,10))-new Date(b.releaseDate.substr(0,10)));

    renderTracks(sorted);
})
const release2=document.querySelector('.release2');

release2.addEventListener('click',()=>{
    let sorted = music.sort((a, b) => new Date(b.releaseDate.substr(0, 10)) - new Date(a.releaseDate.substr(0, 10)));
    renderTracks(sorted);
})

document.querySelector("input").addEventListener("keyup", (e) => {
    const keyword = e.target.value.toLocaleLowerCase();

    let filteredMusic = music.filter(
        track => track.artistName.toLocaleLowerCase().includes(keyword)
            || track.trackName.toLocaleLowerCase().includes(keyword))

    if (filteredMusic.length === 0) {
        list.innerHTML = "No tracks were found";
        return;
    }

    renderTracks(filteredMusic);
})

renderTracks(music);


