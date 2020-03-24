// # jQuery Introduction 

// Use jQuery to complete the tasks below for a custom tea shop! Feel free to use the following cheat sheet on a quick guide to the jQuery methods: https://oscarotero.com/jquery/

// **Instructions**:
// * Use the elements found in the `index.html` to display a modal if the user clicks "Submit" at the end of the form. The user should be able to exit the modal by clicking the `.close-modal` element or another part of the window. ![alt text](./images/modal.png "Modal")

const form = $("#form");
const button = $(".submit mt-2");

const modalFunction = () => {
    event.preventDefault();
    const modal = $(".modal");
    modal.show();
    closeIt = () => {
        modal.hide()
    };
    $("#closing").click(closeIt);
}

form.on("submit", modalFunction);

// * If the user clicks the teapot image at the top of the page, the teapot should rotate by 20degrees. If the user clicks the teapot again, the image should pop back into place.
// ![alt text](./images/teapot.png "Modal")


const teapot=$(".teapot");

const turnIt=()=>{
   // teapot.rotate(20);
   teapot.attr("class","teapot-rotate");


   const turnItBack=()=>{
    teapot.attr("class","teapot");
   }
   teapot.click(turnItBack)
}


 teapot.click(turnIt)

// * If the user hovers over the `.tea-desc` nested in the `selection__option`s, the text should change to a random phrase, e.g. "Great tea for a cold night", "Rich in flavours" etc.
// ![alt text](./images/tea-descriptions.png "Modal")


const description=$(".tea-desc");

const randomText=()=>{
    const words=["Great tea for a cold night","Rich in flavours","If you don't like coffee"];

    const randomizer=Math.floor(Math.random()*3);
    
    const target = $( event.target );
    console.log(target)
    if ( target.is( description) ) {
      target.text(words[randomizer]);
    }
   

    //  description.text(words[randomizer])
   
}



description.hover(randomText);



// **Notes**: 
// * Deadline: ~1hr
// * See images for reference 