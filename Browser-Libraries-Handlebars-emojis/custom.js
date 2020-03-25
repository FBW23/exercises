const structure = 
`   
    {{#each this}} 
    <p><img src='{{this}}'>{{@key}}</p>
    {{/each}}
    
`;

let template = Handlebars.compile(structure);

const templateEmojis = template(emojis);
console.log(templateEmojis);

const output = document.querySelector('#output');

output.innerHTML += templateEmojis;

