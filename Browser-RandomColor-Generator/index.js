const hexLetter = 'abcdef0123456789';

for (let i = 0; i < 6; i++) {
    let hex = "";
    const colorNumber = Math.floor(Math.random() * hexLetter.length); 
    hex += `#${hexLetter[colorNumber]}`;
    console.log(hex);
}

