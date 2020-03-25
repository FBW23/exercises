const structure =
    `   <dl>
    {{#each this}} 
    <dd><a href='{{this}}'>{{@key}}</a></dd> <dt><img src='{{this}}'></dt>
    <p>{{this}}</p>
    {{/each}}
    </dl>
`;

let template = Handlebars.compile(structure);

const templateEmojis = template(emojis);
console.log(templateEmojis);

const output = document.querySelector('#output');

output.innerHTML += templateEmojis;