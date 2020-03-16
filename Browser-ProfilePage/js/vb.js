// # Profile Page

// Using the existing form setup:

// 1. Create a function that takes the values of the form fields on submit and creates a profile section, as represented in the example below.

// 2. Specify an image folder path to enable the user upload an image. (Best in your project directory)

// 3. Create a reset button for the form.

// 4. Add a delete or close button for the profile page section that the user generated.

// 5. **Optional:** Style to your pleasing.

// Use the files provided in this repository and add your solution to these files.

// > Hint: Refer to the representation below, for an idea of what your result should look like.

// ![demo](demo.gif)

const text = document.querySelector("#text");
const date = document.querySelector("#date");
const file = document.querySelector("#photo");
const favColor = document.querySelector("#favColor");
const secColor = document.querySelector("#secColor");
const textarea = document.querySelector("#textarea");
const js = document.querySelector("#js");
const ruby = document.querySelector("#ruby");
const python = document.querySelector("#python");
const java = document.querySelector("#java");
const php = document.querySelector("#php");
const checkbox = document.querySelectorAll(".checkbox");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
let textValue = document.querySelector("#textValue");
let dateValue = document.querySelector("#dateValue");
let fileValue = document.querySelector("#fileValue");
let favColorValue = document.querySelector("#favColorValue");
let secColorValue = document.querySelector("#secColorValue");
let jsValue = document.querySelector("#jsValue");
let rubyValue = document.querySelector("#rubyValue");
let javaValue = document.querySelector("#javaValue");
let pythonValue = document.querySelector("#jsValue");
let phpValue = document.querySelector("#phpValue");
let textareaValue = document.querySelector("#textareaValue");


const values = () => {
    textValue.innerText = text.value
    dateValue.innerText = date.value;
    // fileValue.innerText = file.value;
    // favColorValue.innerHTML = favColor.value;
    // secColorValue.innerText = secColor.value;



    document.querySelector("#languages").innerText=`The programming skills of ${text.value} are:` 
    if (js.checked) {
        jsValue.innerText = "Javascript";
    }
    if (ruby.checked) {
        rubyValue.innerText = "ruby";
    }
    if (java.checked) {
        javaValue.innerText = "Java";
    }
    if (python.checked) {
        pythonValue.innerText = "python";
    }
    if (php.checked) {
        phpValue.innerText = "php";
    }


    textareaValue.innerText = textarea.value;
    photoValue.innerHTML = photo.value;


}

// const checks=()=>{

//        // document.querySelector("#languages").innerText=`the programming skills of ${text.value} are:` 
//     if (js.checked) {
//         jsValue.innerText = "Javascript";
//     }
//     if (ruby.checked) {
//         rubyValue.innerText = "ruby";
//     }
//     if (java.checked) {
//         javaValue.innerText = "Java";
//     }
//     if (python.checked) {
//         pythonValue.innerText = "python";
//     }
//     if (php.checked) {
//         phpValue.innerText = "php";
//     }

// }


submit.addEventListener("click", values);
// checkbox.addEventListener("change", checks);