var pokemonList=[
    
    {
        name: 'Charmander',
        height: 0.6,
        weight: 8.5,
        species: 'Lizard',
        types: ['Fire']

    },
    {
        name: 'Butterfree',
        height: 1.1,
        weight: 32,
        species: 'Butterfly',
        types: ['Bug' , 'Flying']

    },
    {
        name: 'Pikachu',
        height: 0.4,
        weight: 6,
        species: 'Mouse',
        types: ['Electric']

    },
    {
        name: 'Jigglypuff',
        height: 0.5,
        weight: 5.5,
        species: 'Balloon',
        types: ['Fairy', 'Normal'],

    },
    {
        name: 'Snorlax',
        height: 2.1,
        weight: 460,
        species: 'Dozing',
        types: ['Normal']

    }
];


// initialize arraycount for the loop
const heightThreshold = 2.0;
// loop through pokemon list
for (let item = 0; item < pokemonList.length; item++) {
// printing all pokrmon list from an array
document.write(` <p> ${pokemonList[item].name} (height: ${pokemonList[item].height}) </p>`);
// checks wheather height is above the threshold 
if(pokemonList[item].height > heightThreshold){
    
// printing pokemon list with a statement to identify big pokemon
document.write(`<p>  ${pokemonList[item].name} (height: ${pokemonList[item].height} ) - <span> Wow, that's big! </span> </p>`);

}

}






























// ==================       for my reference       ======================


   // initialize arraycount for thw loop
//     let item=0

    // loop through pokemon list
//     while (item < pokemonList.length) {
//         let pokemons=`${pokemonList[item].name} (height : ${pokemonList[item].height})`;
        // checks wheather height is above the threshold 
//         if(pokemonList[item].height > heightThreshold){
           // added the statement for big height pokemon
//             pokemons = pokemons.concat(`- Wow, that's big!`);
            
           
//         }
        // printing the pokemon lists with statement for big pokemon
//         document.write(`<option>${pokemons} </option>`);
        // increment for next item
//          item++;
//     } 






// let ages = [20, 30, 25, 22, 31];
//  for (let i = 0; i < ages.length; i++) {
//    console.log(ages[i]);
//  }
