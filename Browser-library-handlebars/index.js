document.addEventListener("DOMContentLoaded", function () {

    // Band Info Display

    const structureBand = `<a href="https://www.youtube.com/watch?v=MM62wjLrgmA" target="_blank"><img src="images/tool.png"></a>
    <h1>{{band}} Fan Page</h1>
    <p>{{band}} is a {{genre}} band from {{city}} formed in the year {{year}}.</p>`;

    let bandTemplate = Handlebars.compile(structureBand);
    let bandObjectValues = bandTemplate(context);
    console.log(bandObjectValues); // saving structureBand into handlebars and linking to the object values in the script.js related to "context", hence the band values.
    const outputBand = document.querySelector('.content-placeholder');
    outputBand.innerHTML = bandObjectValues;


    // Members Info Display

    const structureMembers =
        `<p class="bold">Band Members</p>
    <p>{{vocals}}: vocals </p>
    <p>{{guitar}}: guitar </p>
    <p>{{bass}}: bass </p>
    <p>{{drums}}: drums </p>`;

    let membersTemplate = Handlebars.compile(structureMembers);
    let membersObjectValues = membersTemplate(members); // the const members found in the script.js
    console.log(membersObjectValues)
    const outputMembers = document.querySelector('.members-placeholder');
    outputMembers.innerHTML = membersObjectValues;

    // Discography

    const structureDiscography =
        `<p class="bold">Discography </p>
    <p>{{first}} - (1993)</p>
    <p>{{second}} - (1996)</p>
    <p>{{third}} - (2001)</p>
    <p>{{fourth}} - (2006)</p>
    <p>{{fifth}} - (2019)</p>`;

    const discographyTemplate = Handlebars.compile(structureDiscography);
    const discographyObjectValues = discographyTemplate(albums);
    const outputDiscography = document.querySelector('.albums-placeholder');
    outputDiscography.innerHTML = discographyObjectValues;

    // Visual Prospect

    const structureVisuals =
        `<p class="bold centered">Visuals</p>
    <p>{{guitar}} is responsible for most of the band's artwork concepts. Their album Undertow features a ribcage sculpture by {{guitar}} on its cover and photos contributed by the band members. Later albums included artwork by collaborating artists: Ænima and Salival featured works by Cam de Leon; Lateralus and 10,000 Days were created with the help of Alex Grey. The releases garnered positive critical reception, with a music journalist of the Associated Press attributing to the band a reputation for innovative album packaging.Both Ænima and 10,000 Days were nominated for the Grammy Award for Best Recording Package, but while the former failed to win in 1997, the latter did win in 2007. {{guitar}} created packaging for 10,000 Days that features a pair of stereoscopic lenses for viewing 3-D artwork and photos. {{guitar}}, a lifelong fan of stereoscopic photography, wanted the packaging to be unique and to reflect the 1970s artwork he appreciates. The CD packaging for Fear Inoculum included a rechargeable 4 inch HD video screen and a speaker which played a hidden track along with a video when opened and also included a 36-page booklet.</p>`;

    const visualsTemplate = Handlebars.compile(structureVisuals);
    const visualsObjectValues = visualsTemplate(members);
    const outputVisuals = document.querySelector('.visuals-placeholder');
    outputVisuals.innerHTML = visualsObjectValues;

});

// OLD CODE

// document.addEventListener("DOMContentLoaded", function () {

// // Grab the template script
// const theBandInfoScript = document.querySelector("#band-template").innerHTML;
// const theMembersScript = document.querySelector("#members-template").innerHTML;
// const theAlbumsScript = document.querySelector("#albums-template").innerHTML;
// const visualsScript = document.querySelector("#artwork-template").innerHTML;

// // Compile the template
// const theBandInfosTemplate = Handlebars.compile(theBandInfoScript);
// const theMembersTemplate = Handlebars.compile(theMembersScript);
// const theAlbumsTemplate = Handlebars.compile(theAlbumsScript);
// const visualsTemplate = Handlebars.compile(visualsScript);

// // Pass our data to the template
// const theBandInfosTemplateCompiled = theBandInfosTemplate(context);
// const theMembersTemplateCompiled = theMembersTemplate(members);
// const theAlbumsCompiled = theAlbumsTemplate(albums);
// const visualsCompiled = visualsTemplate(visuals, members);


// // Add the compiled html to the page
// document.querySelector('.content-placeholder').innerHTML = theBandInfosTemplateCompiled;
// document.querySelector('.members-placeholder').innerHTML = theMembersTemplateCompiled;
// document.querySelector('.albums-placeholder').innerHTML = theAlbumsCompiled;
// document.querySelector('.visuals-placeholder').innerHTML = visualsCompiled;

// }