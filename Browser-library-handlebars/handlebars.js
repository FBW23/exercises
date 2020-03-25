document.addEventListener("DOMContentLoaded", function () {


    const hits = {
        tracks: [
            "Get Ur Freak On 2001",
            "One Minute Man 2001",
            "Gossip Folks 2002",
            "Work It 2002",
            "Throw It Back 2019"
        ]
    };

    const theUlScript = document.querySelector("#ul-template").innerHTML;
    const theUl = Handlebars.compile(theUlScript);
    const theCompiledUl = theUl(hits);
    document.querySelector('.ul-placeholder').innerHTML = theCompiledUl;

    const artist = {
        "firstName": "Missy",
        "lastName": "Elliot",
    };

    const thePersonalScript = document.querySelector("#personal-template").innerHTML;
    const thePersonal = Handlebars.compile(thePersonalScript);
    const theCompiledPersonal = thePersonal(artist);
    document.querySelector('.content-placeholder').innerHTML = theCompiledPersonal;


});