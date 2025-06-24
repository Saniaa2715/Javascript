// if, else if, else
// ternary
// switch

if(8 > 7) {
   // execute this block if the condition is true 
}
const name ="aniruddha";

const customerAge = 20;
const thirdFloorThreshold = 25;
const secondFloorThreshold = 18;

if(customerAge >= thirdFloorThreshold) {
    console.log("3rd floor");
} else if (customerAge >= secondFloorThreshold) {
    console.log("2nd floor");
} else {
    console.log("1st floor");
}

// ternary operators
// ? :

customerAge >= thirdFloorThreshold ? 
              console.log("3rd floor") : 
              customerAge >= secondFloorThreshold ? 
              console.log("2nd floor") : 
              console.log("1st floor");


const selectedPokemon = "Pikachu";

switch(selectedPokemon){
    case "Pikachu":
        console.log("I choose you Pikachu");
        break;
    case "Psyduck":
        console.log("Psyyyyy ayayaya");
        break;
    case "Mewtwo":
        console.log("mew");
        break;
    default:
        console.log("run out of pokemon");
}

// localeCompare = Ruchira
// [[prototype]] vs __proto__ = Harshali
