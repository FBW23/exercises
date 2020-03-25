// document.addEventListener("DOMContentLoaded", function () {
//     const structure = ` <dl>
//     {{#each this}}
//         <dd><img src='{{this}}'>{{@key}}</dd>
//     {{/each}}
// </dl> `

// const template = Handlebars.compile(structure);
// const templateEmojis = template(emojis);



// });

document.addEventListener("DOMContentLoaded", function(){

   // Grab the template script
    const theTemplateScript = document.querySelector("#emoji-template").innerHTML;


    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript);


    // Pass our data to the template
    const theCompiledHtml = theTemplate(emojis);



    // Add the compiled html to the page
    document.querySelector('#output').innerHTML += theCompiledHtml;
})