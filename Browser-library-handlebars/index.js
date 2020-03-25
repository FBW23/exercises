document.addEventListener("DOMContentLoaded", function () {

    // Define our data object
    const context = {
        "band": "Tool",
        "genre": "rock",
        "city": "Los Angeles",
        "year": "1990"
    };

    const members = {
        "vocals": "Maynard James Keenan",
        "guitar": "Adam Jones",
        "bass": "Justin Chancellor",
        "drums": "Danny Carey"
    }

    const albums = {
        "first": "Undertow",
        "second": "Aenima",
        "third": "Lateralus",
        "fourth": "10.000 Days",
        "fifth": "Fear Inoculum"
    }

    // Grab the template script
    const theBandInfoScript = document.querySelector("#band-template").innerHTML;
    const theMembersScript = document.querySelector("#members-template").innerHTML;
    const theAlbumsScript = document.querySelector("#albums-template").innerHTML;
    const visualsScript = document.querySelector("#artwork-template").innerHTML;

    // Compile the template
    const theBandInfosTemplate = Handlebars.compile(theBandInfoScript);
    const theMembersTemplate = Handlebars.compile(theMembersScript);
    const theAlbumsTemplate = Handlebars.compile(theAlbumsScript);
    const visualsTemplate = Handlebars.compile(visualsScript);

    // Pass our data to the template
    const theBandInfosTemplateCompiled = theBandInfosTemplate(context);
    const theMembersTemplateCompiled = theMembersTemplate(members);
    const theAlbumsCompiled = theAlbumsTemplate(albums);
    const visualsCompiled = visualsTemplate(members);


    // Add the compiled html to the page
    document.querySelector('.content-placeholder').innerHTML = theBandInfosTemplateCompiled;
    document.querySelector('.members-placeholder').innerHTML = theMembersTemplateCompiled;
    document.querySelector('.albums-placeholder').innerHTML = theAlbumsCompiled;
    document.querySelector('.visuals-placeholder').innerHTML = visualsCompiled;

});
