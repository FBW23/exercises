// # Handlebars: Emojis list





// Next, create a Handlebars template that displays each one of the emojis as image together with its key. Try to use appropriate HTML tags.

// Take a look at the example image:

// ![example](example.png)

document.addEventListener("DOMContentLoaded", function () {

    // const contentScript = document.querySelector("#content").innerHTML;
    // const compiledTemplate = Handlebars.compile(contentScript);
    // const generatedHtml = compiledTemplate(emoji);
    // const actualContainer = document.querySelector("#output");
    // actualContainer.innerHTML = generatedHtml;



    const structure = 
`   
    {{#each this}} 
    <div class="row">
     <p><img src='{{this}}'></p>
    
    <p>{{@key}}</p>
    </div>
    {{/each}}
`;

let template = Handlebars.compile(structure);
const templateEmojis = template(emojis);
console.log(templateEmojis);
const output = document.querySelector('#output');
output.innerHTML += templateEmojis;


})