
let input=document.querySelector("#text") // name
let output = document.querySelector(".d"); // before the box
let button = document.querySelector("#btn"); // button box

const myFunction=()=>{
     let today = new Date().getDay(); // it give the output of number of days
    // let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // day=day[today -1]; // will put numbers into string
    let daysRemain = 5- today;
    day=new Date().toLocaleString('en-EN',{
        weekday:'long'
    })

    if(daysRemain<1){
        daysRemain=0;
    }
    if (input.value){
        output.innerText=`${input.value}, Today is ${day}, Only ${daysRemain} days until Weekend`;
    }// this will change the the result after you click.

}

button.addEventListener("click", myFunction);
