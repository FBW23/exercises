// # I like to ride with Handlebars

// **Instructions**
// * Create a **very** simple landing page using **Handlebars** templates. The landing page should be about your favorite band/musician/ genre of music.
// * You must include: 
//     - Embedded handlebars expressions
//     - Block expression using a list

// ![reference-image](/images/reference.png)

document.addEventListener("DOMContentLoaded", function () {

            // let trackContainer = document.createElement("div");
            // trackContainer.setAttribute("class", "trackContainer");
            // document.querySelector("body").append(trackContainer);




            // const bandInfo = () => {

            //     for (let i = 0; i < scooter.length; i++) {
            //         const trackBox = document.createElement("div");
            //         const track = document.createElement("div");
            //         const year = document.createElement("div");

            //         trackBox.setAttribute("class", "trackBox");

            //         trackContainer.append(trackBox);
            //         trackBox.append(track);
            //         trackBox.append(year);

            //         track.innerText = scooter[i].track;
            //         year.innerText = scooter[i].year;
            //     };
            // };
    const contentScript = document.querySelector("#content").innerHTML;
    const compiledTemplate = Handlebars.compile(contentScript);
    const generatedHtml = compiledTemplate(balasz);
    const actualContainer = document.querySelector("#actualContainer");
    actualContainer.innerHTML = generatedHtml;
});