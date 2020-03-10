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


const button = document.querySelector('button');





function hideContent() {
    const div = document.querySelector('div');
    if(div.classList.contains('invisible')){
        div.classList.add('visible')
    } else{
        div.classList.add('invisible');
        button.innerText = 'Show destinations ';
    }
   
   
}

// function showContent(){
//     const div = document.querySelector('div');
//     div.classList.add('visible');
//     button.innerText = 'Hide destinations ';
// }

  
  // add event listener to table



// // add event listener to table


button.addEventListener("click", hideContent);


