// {{this}} in handlebars gives the value contained in the object (emojis const) 
// for the key we use {{@key}}
const structure =
`<dl>
    {{#each this}} 
        <dt><img src='{{this}}'></dt>
        <dd><a href='{{this}}'>{{@key}}</a></dd>
    {{/each}}
</dl>`;
let template = Handlebars.compile(structure); // we load up the structure in handlebars
const templateEmojis = template(emojis); // the binding between the template (above) and the data contained in the "emoji const"
console.log(templateEmojis);
const output = document.querySelector('#output');
output.innerHTML += templateEmojis; 