   // HTML structure       
   const structure = `
   <img src='{{image}}'> 
   <h1>{{name}}: Fan Page</h1> 
   <p class='albums'>Albums:</p>
   <ul>
       {{#each albums}} 
           <li>
               {{this}}
           </li>
       {{/each}}
   </ul>
   <p class="more-info">Find out more<a href='{{wikipedia}}'> here </a> !</p>
   `;
   // Compile the html structure
   let template = Handlebars.compile(structure);
   
   // Object with band info
   const bandData = {
       name: 'Disturbed',
       image: 'https://wallpapermemory.com/uploads/196/disturbed-wallpaper-full-hd-1080p-269572.jpg',
       albums: ['The Sickness 2000', 'Believe 2002', 'Ten Thousand Fists 2005', 'Indestructible 2008', 'Asylum 2010', 'Immortalized 2015', 'Evolution 2018'],
       wikipedia: 'https://en.wikipedia.org/wiki/Disturbed_(band)'
   }
   // put bandData inside the template function;
   const templateBandData = template(bandData);

   // get the container html element by its ID
   const container = document.querySelector('#container');

   // add the content of the compiled object inside the container
   container.innerHTML += templateBandData;
