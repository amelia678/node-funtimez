const nerds = require('nerds');

let harryPotterArray = nerds.resolve('Harry Potter', 3).asArray();

let starWarsArray = nerds.resolve('Star Wars', 3).asArray();

for (let i=0; i<harryPotterArray.length; i++) {
    let hpCharacter = harryPotterArray[i];
    let swCharacter = starWarsArray[i];
    console.log(`${hpCharacter.first} ${hpCharacter.last} punches ${swCharacter.name} in the neck`);
}


// harryPotterArray.forEach(charObj => {
//     console.log(`${charObj.first} ${charObj.last} wants a cookie`);
// })

