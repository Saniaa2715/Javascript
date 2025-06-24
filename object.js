const manOfTheMatch = 10;
const usersKey = "manOfTheSeries"
const value = 20;
const cricketPlayer = {
    0: "some value",
    name: "Mahendra Singh Dhoni",
    age: 48,
    canCaptain: false,
    technique: undefined,
    captaincy: null,
    "last Five Innings": [7, 20, 0, 6, 20],
    trophies: {
        worldCup: 2011,
        ipl: [2007, 2008, 2009],
        ct: [2013]
    },
    bat: function() {
        console.log("OUT");
    },
    // key       : value (comes from const manOfTheMatch)
    // manOfTheMatch: manOfTheMatch,
    manOfTheMatch,
    [usersKey]: value
}

// access values
cricketPlayer.name; // "Mahendra Singh Dhoni"
cricketPlayer["canCaptain"]; // false
const key = "lastFiveInnings";
cricketPlayer.key; // undefined
cricketPlayer["key"]; // undefined
cricketPlayer[key]; // cricketPlaye["lastFiveInnings"] // [7, 20, 0, 6, 20]
const name = "something else";
cricketPlayer[name]; // undefined


// modify values
cricketPlayer.name = "MSD"; // "Mahendra Singh Dhoni"
cricketPlayer["canCaptain"] = false; // false
cricketPlayer[key] = [10, 10, 10, 10, 10]; // cricketPlaye["lastFiveInnings"] // [7, 20, 0, 6, 20]
cricketPlayer.key = "something";
// cricketPlayer.0 = "some value"; DEFINITELY DOES NOT WORK
cricketPlayer[0] = "some value"; // DEFINITELY WORKS
cricketPlayer["0"] = "some value"; // DEFINITELY WORKS

cricketPlayer.spouse; // undefined
cricketPlayer.technique; // undefined

if(cricketPlayer.technique === undefined) {
    console.log("technique does not exist");
}

Object.hasOwn(cricketPlayer, "technique");
cricketPlayer.hasOwnProperty("technique");

Object.keys({ name: "a", age: 25 }); 
// ["name", "age"]

Object.values({ name: "a", age: 25 })
// ["a", 25]

// destructuring 
const computer = {
    processor: "i7",
    ram: "16GB",
    brand: "Lenovo"
}

let { brand, processor } = computer;
brand = "asjnlas"
const { brand: make } = computer;

const { ram, ...restComputer } = computer;

const computerClone = {...computer};

cricketPlayer.bat();
