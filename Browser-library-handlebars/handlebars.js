document.addEventListener("DOMContentLoaded", function () {

// Object with artist info
    const artist = {
        name: "Missy Elliot",
        image: 'images/missy-elliott.jpg',
        albums: ['Supa Dupa Fly 1997', 'Da Real World 1999', 'Miss E... So Addictive 2001', 'Under Contruction 2002', 'This is not a test 2003', 'The Cookbook 2005'],
        wikipedia: 'https://en.wikipedia.org/wiki/Missy_Elliott'
    };

    // get the container html element by its ID
    const container = document.querySelector('#container');

     // HTML structure       
    const structure = `
   <img src='{{image}}'> 
   <h1>{{name}}: Fan Page</h1> 
   <p class='discography'>Discography:</p>
   <ul>
       {{#each albums}} 
           <li>
               {{this}}
           </li>
       {{/each}}
   </ul>
   <p class="more-info">Find out more<a href='{{wikipedia}}'> here </a></p>
   `;

    // Compile the html structure
    let template = Handlebars.compile(structure);
    // put bandData inside the template function;
    const templateArtist = template(artist);
    // add the content of the compiled object inside the container
    container.innerHTML += templateArtist;

});