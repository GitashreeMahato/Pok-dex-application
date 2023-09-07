let pokemonRepository = (function(){

let pokemonList=[]

// addded pokemon URL
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';



// returning all pokemon object using function
function getAll(){
    return pokemonList;
}

//   adding pokemon based the requirements
function add(pokemon){
    //  checking whether each pokemon is an object and checks keys of the pokemon object are present 
    if(typeof pokemon === 'object' && 
    "name" in pokemon){
    // "height" in pokemon && 
    // "weight" in pokemon && 
    // "species" in pokemon && 
    // "types" in pokemon 
    
        pokemonList.push(pokemon);
    }else{
        console.log("Pokemon is not correct");
    }
    // pokemonList.push(pokemon);
}

    //  validate whether specified object keys of parameter matches to all object keys of parameter

   function addv(pokemon){
    let expectedKeys =['name', 'height', 'types'];
    let actualKeys = Object.keys(pokemon);

     // checks no of actual keys matches the no of expected keys and checks all expected keys are present in the actual keys
     if(typeof pokemon=== 'object' && actualKeys.length === expectedKeys.length && expectedKeys.every(index => {
        actualKeys.includes(index)
    }) ){
        pokemonList.push(pokemon);
    }else{
        console.log("Invalid data. Only non empty objects with expected keys can be added");
    }
   }

function findPokemonByName(nameFilter){
 return pokemonRepository.getAll().filter(pokemon => pokemon.name.includes(nameFilter)).map(pokemon => pokemon.name);
   
    }

// create function where parameter represents single pokemon

function addListItem(pokemon){
    let unorderedList= document.querySelector('.pokemon-list');

    // create li and button element
    let listItem = document.createElement('li');
    let button = document.createElement('button');

// set the pokemon name to button and add a class
    button.innerText = pokemon.name;
    button.classList.add('button');

    // append button to li and li to ul
    listItem.appendChild(button);
    unorderedList.appendChild(listItem);

    // call the buttonEventListner function
    buttonListner(button, pokemon);
  
    }

// creating a function to print details of single pokemon item on console
    function showDetails(pokemon){
        // execute details of pokemon when user click on the particular pokemon
        pokemonRepository.loadDetails(pokemon).then(function(){
            console.log(pokemon);
        })
    }
    
    // create a function to add eventListner to button

    function buttonListner(buttons, pokemon){
        buttons.addEventListener('click', function(event){
            showDetails(pokemon);
        })
    }






//  create loadlist function to load the list of pokemon

    function loadList(){
        showLoadingMessage();
        return fetch(apiUrl).then(function(response){
            hideLoadingMessage();
            return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl : item.url
                };
                add(pokemon);
                // console.log(pokemon);
            })
        }).catch(function(e){
            hideLoadingMessage();
            console.error(e);
        })
    }


// create loadDetails function to  add the detailsUrl property

function loadDetails(item){
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url).then(function(response){
        hideLoadingMessage();
        return response.json();
    }).then(function(details){
        
        // add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
    }).catch(function(e){
        hideLoadingMessage();
        console.error(e);
    })
}


//   function to display the loading message
function showLoadingMessage(){
    let div = document.querySelector('.loadPokemon');
    let paragraph = document.createElement('p');
    paragraph.classList.add('loadingMessage');
    paragraph.innerText= 'Loading......'
    div.appendChild(paragraph);


}

// function to hide loading message
function hideLoadingMessage(){
    let loadingMessage= document.querySelector('.loadingMessage');
    loadingMessage.remove();

}


return{
    getAll : getAll,
    add : add,
    addv : addv,
    findPokemonByName : findPokemonByName,
    addListItem : addListItem,
    loadList : loadList,
    loadDetails : loadDetails,
    
}
})();


// ---------------------------   Exercise 1.7    -----------------------------------


pokemonRepository.loadList().then(function(){
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    })
})



// ------------------     Exercise 1.6    ----------------------


//  displaying pokemon name in DOM
pokemonRepository.getAll().forEach(function(pokemon){
let nameFilter = 'Jigglypuff';
console.log(`Pokémon with name length greater than ${nameFilter} characters:      ${pokemonRepository.findPokemonByName(nameFilter)}`);
// console.log(p);
    pokemonRepository.addListItem(pokemon);
})















































//! ======================================   for    my       reference   =======================================


//? --------------------------------------- exercise 1.6 -------------------------------------
// display pokemon name using option element
    // let select = document.querySelector('.pokemon-list');
    // let option = document.createElement('option');
    // let button = document.createElement('button');
    // option.innerText = pokemon.name;
    // option.classList.add('pokemon-list_item');
    // select.appendChild(option);


//?--------------------------------    upto Exercise  1.5   --------------------------------
// printing all pokemon list using getAll() function
// console.log(pokemonRepository.getAll());

// pokemonRepository.getAll().forEach(function(pokemon){
//     document.write(`<p> ${pokemon.name} : (species : ${pokemon.species})`);
// })

// // iterating for each function over all pokemon list with index
// pokemonRepository.getAll().forEach(function(item, index){
//     document.write(`<p> ${index+1} : ${item.name} (species : ${item.species})`);


//     // finding big pokemon based on the height
// if(item.height > 2){
//     document.write(` - Wow, that's big! `);
// }

// // printing  pokemon type 
// document.write(` and Type: ${item.types[0]}`);

// //checks pokemon second type  if it exits 
// if(item.types[1] !== undefined){
//     document.write(` and ${item.types[1]}`);
// }
// })

    
// //  adding new pokemon in the pokemon list
// pokemonRepository.add( {
//             name: 'Nidorina',
//             height: 0.9,
//             weight: 19.5,
//             species: 'Telekinesis',
//             types: ['Psychic']
    
//         })
        
// console.log(pokemonRepository.getAll());
// // document.write(pokemonRepository.addNewPokemon);



// //  find specific pokemon by name using length of pokemon name

// let minLength = 7;
// console.log(`Pokémon with name length greater than ${minLength} characters:`);
// console.log(pokemonRepository.findPokemonByName(minLength));

//? ------------------------------------------------------------------------------------------------------------------

   






//? ====================================   using for loop iterated pokemon list ====================================

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


//? ================================     pokemonlist2   =================================================
//       pokemonList1
// {
//     name: 'Charmander',
//     height: 0.6,
//     weight: 8.5,
//     species: 'Lizard',
//     types: ['Fire']

// },
// {
//     name: 'Butterfree',
//     height: 1.1,
//     weight: 32,
//     species: 'Butterfly',
//     types: ['Bug' , 'Flying']

// },
// {
//     name: 'Pikachu',
//     height: 0.4,
//     weight: 6,
//     species: 'Mouse',
//     types: ['Electric']

// },
// {
//     name: 'Jigglypuff',
//     height: 0.5,
//     weight: 5.5,
//     species: 'Balloon',
//     types: ['Fairy', 'Normal'],

// },
// {
//     name: 'Snorlax',
//     height: 2.1,
//     weight: 460,
//     species: 'Dozing',
//     types: ['Normal']

// }

// ----------------------------------------
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
