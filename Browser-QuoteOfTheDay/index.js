const generate = document.querySelector('.generate');
// console.log(generate);
const quoteArea = document.querySelector('.quote');
// console.log(quoteArea);
const immortal = ['Gha\'agsheblah Hell salamanders', 'Midst a furious storm, up blazing wind', 'Thy darkness infringe hither upon us', 'The arrival of thee devouring prince', 'Whither thou goest, we shalt go', 'Chief rebel governor, first hierarchy', 'Fowled angel with black feathered wings', 'Holdeth viper majestic dragon beast carried', 'Within circle ceremonial let be revealed', 'Imperium magnum infernalis', 'Ash-Taroth Ash-Taroth', 'Thou was one of the seven princes of hell', 'That on earth paid a visit to Faust', 'One of the celestial angels that fell', 'Rebelling the dissidents cause', 'Now times of vengeance has reached us at last', 'The wind turns our way into rage', 'United we stand in a circle of death', 'To welcome this new darkened age', 'Now answereth truly the matters', 'Of future, the present and past', 'Ye provider of liberal sciences', 'Ars goetian daemon bombast', 'Whither thou goest, we shalt go', 'Hurtful angel poisonous cometh', 'Alongside disease and cold death, Followed by forty legions of spirits', 'Stunning immense with noisome breath'];
// console.log(immortal.length);

(function clearText() {
    quoteArea.innerText = immortal[Math.floor(Math.random() * immortal.length)]; // maximum of the array
}()); // calls satan straight away as the page loads

generate.addEventListener("click", clearText);

