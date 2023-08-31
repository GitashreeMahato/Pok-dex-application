let pokemonRepository = (function(){


let pokemonList=[
    
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
]
// returning all pokemon object using function
function getAll(){
    return pokemonList;
}

//   adding pokemon based the requirements
function add(pokemon){
    //  checking whether each pokemon is an object and checks keys of the pokemon object are present 
    if(typeof pokemon === 'object' && 
    "name" in pokemon && 
    "height" in pokemon && 
    "weight" in pokemon && 
    "species" in pokemon && 
    "types" in pokemon){

        pokemonList.push(pokemon);
    }else{
        console.log("Pokemon is not correct");
    }
    // pokemonList.push(pokemon);
}







    //     let expectedKeys=['name', 'type', 'height'];
    //     let actualKeys = Object.keys(pokemon);

    // checking whether each pokemon is an object and checks keys of the pokemon object are present 
    // if(typeof pokemon == 'object' && name in pokemon && height in pokemon && weight in pokemon && species in pokemon && types in pokemon){
    //     pokemonRepository.push(pokemon);
    // }
    //     // checks no of actual keys matches the no of expected keys and checks all expected keys are present in the actual keys
    //     else if(actualKeys === expectedKeys && actualKeys.every(keys => {   
    //         return expectedKeys.includes(keys);
    //     }))
    //         document.write(`<p> Pokemon is not correct`);
    //     console.log("pokemon is not correct");
     
    //     validate whether specified object keys of parameter matches to all object keys of parameter
   function addv(pokemon){
    let expectedKeys =['name', 'height', 'types'];
    let actualKeys = Object.keys(pokemon);
    if(typeof pokemon=== 'object' && actualKeys.length === expectedKeys.length && expectedKeys.every(index => {
        actualKeys.includes(index)
    }) ){
        pokemonList.push(pokemon);
    }else{
        console.log("Invalid data. Only non empty objects with expected keys can be added");
    }
   }

function findPokemonByName( minLength){
 return pokemonRepository.getAll().filter( pokemon => pokemon.name.length > minLength);
   
    }
    

return{
    getAll : getAll,
    add : add,
    addv : addv,
    findPokemonByName : findPokemonByName,
}
})();



// printing all pokemon list using getAll() function
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
    document.write(`<p> ${pokemon.name} : (species : ${pokemon.species})`);
})

// iterating for each function over all pokemon list with index
pokemonRepository.getAll().forEach(function(item, index){
    document.write(`<p> ${index+1} : ${item.name} (species : ${item.species})`);


    // finding big pokemon based on the height
if(item.height > 2){
    document.write(` - Wow, that's big! `);
}

// printing  pokemon type 
document.write(` and Type: ${item.types[0]}`);

//checks pokemon second type  if it exits 
if(item.types[1] !== undefined){
    document.write(` and ${item.types[1]}`);
}
})

    
//  adding new pokemon in the pokemon list
pokemonRepository.add( {
            name: 'Nidorina',
            height: 0.9,
            weight: 19.5,
            species: 'Telekinesis',
            types: ['Psychic']
    
        })
        
console.log(pokemonRepository.getAll());
// document.write(pokemonRepository.addNewPokemon);



//  find specific pokemon by name using length of pokemon name

let minLength = 7;
console.log(`Pokémon with name length greater than ${minLength} characters:`);
console.log(pokemonRepository.findPokemonByName(minLength));



   




























// ======================================   for    my       reference   =======================================






// ================================     pokemonlist2   =================================================

// function getPokemon(pokemon){
//     document.write(`<p> ` + pokemonRepository.getAll());
// }
// pokemonList.forEach(getPokemon);


// let pokemonList2 = [
//     {
//         name: 'Abra',
//         height: 0.9,
//         weight: 19.5,
//         species: 'Telekinesis',
//         types: ['Psychic']

//     },
//     {
//         name: 'Nidorina',
//         height: 0.8,
//         weight: 20,
//         species: 'Poison Needle',
//         types: ['Poison']
//     },
//     {
//         name: 'Mankey',
//         height: 0.5,
//         weight: 28,
//         species: 'Pig Monkey',
//         types: ['Fighting']
//     },
//     {
//         name: 'Metapod',
//         height: 0.7,
//         weight: 9.9,
//         species: 'Chrysalis',
//         types: ['Bug']
//     }
// ]

// Object.keys(pokemonList2).forEach(function(pokemon2){
//     document.write('<p>'+ pokemonList2[pokemon2].name);
    
// });


// ====================================   using for loop iterated pokemon list ====================================

// initialize arraycount for the loop
// const heightThreshold = 2.0;
// loop through pokemon list
// for (let item = 0; item < pokemonList.length; item++) {

// printing all pokrmon list from an array
// document.write(` <p> ${pokemonList[item].name} (height: ${pokemonList[item].height}) </p>`);

// checks wheather height is above the threshold 
// if(pokemonList[item].height > heightThreshold){
    
// printing pokemon list with a statement to identify big pokemon
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
