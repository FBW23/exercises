// THE SWITCH CASE

var expr = 'Kiwis';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    case 'Kiwis':
        console.log('You want to eat ' + expr + '? Very good, they are for free.');
        break;
    default:
        console.log('Sorry, we are out of ' + expr + '.');
}