// example "Write" will be write and "Php" will be PHP

function roundString (inputString) {
    let outputString = '';
    let smallLetter = 0;
    let bigLetter = 0;
    for (let i=0; i < inputString.length; i++) {
        let currentChar = inputString.charAt(i);
        
        if (currentChar === ' ') {

        }else if(currentChar === currentChar.toLowerCase()) {
            smallLetter++;
        }else {
            bigLetter++;
        }
    }if (smallLetter >= bigLetter) {
        outputString = inputString.toLowerCase();

    }else {
        outputString= inputString.toUpperCase();
    }
return outputString;
}
outputString('Hello World');