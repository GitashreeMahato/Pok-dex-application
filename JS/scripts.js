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

let pokemonList2 = [
    {
        name: 'Abra',
        height: 0.9,
        weight: 19.5,
        species: 'Telekinesis',
        types: ['Psychic']

    },
    {
        name: 'Nidorina',
        height: 0.8,
        weight: 20,
        species: 'Poison Needle',
        types: ['Poison']
    },
    {
        name: 'Mankey',
        height: 0.5,
        weight: 28,
        species: 'Pig Monkey',
        types: ['Fighting']
    },
    {
        name: 'Metapod',
        height: 0.7,
        weight: 9.9,
        species: 'Chrysalis',
        types: ['Bug']
    }
]


function getPokemon(pokemon){
    document.write(`<p> ${pokemon.name}  (species : ${pokemon.species}) </p>`);
}
pokemonList.forEach(getPokemon);











// pokemonList.forEach(function(pokemon){
    // document.write(`<p> ${pokemon.name}  (species : ${pokemon.species}) </p>`);
    // document.write()  
// })























// // initialize arraycount for the loop
// const heightThreshold = 2.0;
// // loop through pokemon list
// for (let item = 0; item < pokemonList.length; item++) {
// // printing all pokrmon list from an array
// document.write(` <p> ${pokemonList[item].name} (height: ${pokemonList[item].height}) </p>`);
// // checks wheather height is above the threshold 
// if(pokemonList[item].height > heightThreshold){
    
// // printing pokemon list with a statement to identify big pokemon
// document.write(`<p>  ${pokemonList[item].name} (height: ${pokemonList[item].height} ) - <span> Wow, that's big! </span> </p>`);

// }

// }

// function printArrayDetails(list){
//     for(let i=0; i < list.length; i++){
//         document.write(`<p> ${list[i].name}   (species : ${list[i].species})`)
//     }
// }
// printArrayDetails(pokemonList)
// printArrayDetails(pokemonList2)






























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
