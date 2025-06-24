const sentence = "this is a sentence";

const people = [
    { name: "Sanika", age: 20 },
    { name: "Sweta", age: 22 },
    { name: "Mihir", age: 23 },
    { name: "Smruti", age: 24 },
    { name: "Prasanna", age: 25 },
];

const person = {
    name: "Alisha",
    age: 26
};

// traditional
for(let index = 0; index < sentence.length; index++) {
    const char = sentence[index];
    console.log(char);   
}

for(let index = 0; index < people.length; index++) {
    const person = people[index];
    console.log(person.age, person.name);
}

const personKeys = Object.keys(person);
// ["name", "age"]
for(let index = 0; index < personKeys.length; index++) {
    const key = personKeys[index];
    const value = person[key];
    console.log(key, value);
}

// for in loop

for(const index in sentence) {
    // index => string
    console.log(typeof index); // string
    const char = sentence[index];
    console.log(char);
}

for(const index in people) {
    const person = people[index];
    console.log(person.name, person.age);
}

for(const key in person) {
    const value = person[key];
    console.log(key, value);
}

// for of loop
for(const char of sentence) {
    console.log(char);
}

for(const { age, name } of people) {
    // const { age, name } = person;
    console.log(name, age);
}
