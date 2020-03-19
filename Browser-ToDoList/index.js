
let closeBtn = document.getElementsByClassName("close");

//creating Function TO DO
function createNewElement(){
    // event.preventDefault();
    let li = document.createElement("li");
    li.classList.add('mt-2');
    li.classList.add('pl-2');
    let theInputValue = document.getElementById("the-input").value;
    let textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);
    if (theInputValue == "") {
        document.querySelector("#the-input").style.backgroundColor = "red";
        document.querySelector("#the-input").placeholder = " Please input Your Task"

    }else {
        document.getElementById("the-ul").appendChild(li);
        document.querySelector("#the-input").style.backgroundColor = "white";
        document.querySelector("#the-input").placeholder = " What want To Do...."
    }
    document.getElementById("the-input").value="";
    let thePanTag = document.createElement("SPAN");
    let txt = document.createTextNode('x');
    thePanTag.className="close";
    thePanTag.appendChild(txt)
    li.appendChild(thePanTag);

   
    // loop with function that remove items on click
    for (i=0; i < closeBtn.length;i++) {
        function closeTask(){
            let theDiv=event.target.parentNode;
            theDiv.style.display="none";}
        closeBtn[i].addEventListener("click",closeTask)
        
            
        
    }
}
let createButton = document.querySelector("#createBtn");
createButton.addEventListener("click", createNewElement);




