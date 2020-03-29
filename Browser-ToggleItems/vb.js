// # Toggle Favourite Destinations

// Create a list of your favourite destinations with a button to toggle the list

// **Requirements:**
// - use Bootstrap CDN
// - use `Element.classList` methods

// **Example:**

// ![screenshot](toggle.gif)

// **Bonus:**

// - Let the user select the favourite destination
// - Show in the event object
// - Style the list to your pleasing.

// ![screenshot](select.gif)


let button=document.querySelector("#button");




const toggleList=()=>{
    let container=document.querySelector(".list-group");
   if(container.classList.contains("d-none")){
       container.classList.remove("d-none");
       button.innerText="Hide destinations! "
   }else{
       container.classList.add("d-none");
       button.innerText="Show destinations! "
   }
};

button.addEventListener("click",toggleList)