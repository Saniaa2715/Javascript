
const onHRLogin = () => 'hello HR';
const onEmployeeLogin = () => 'hello Employee';

const login = (callback) => {
    // callback is reference to fn
    // callback = onEmployeeLogin
    const message = callback()
    console.log(message);
}

const employeeType = "employee";

if(employeeType === "HR") {
    login(onHRLogin);
} else if (employeeType === "employeee") {
    login(onEmployeeLogin);
}



const numbers = [1, 2, 3, 4];

const customMap = (arr, modifierFn) => {
    // arr =  [1, 2, 3, 4];
    // modifierFn = n => n ** 3
    // n = 2
    const modifiedArr = [];
    // [1, 8, 27, 64]
    for(let index = 0; index < arr.length; index++) {
        // 2
        const element = arr[index];
        // 3
        const modifiedElem = modifierFn(element)
        modifiedArr.push(modifiedElem);
    }
    return modifiedArr;
}

const cubes = customMap(numbers, n => n ** 3);
const numericStrings = customMap(["1", "2", "3"], str => parseFloat(str));
const arrOfArr = customMap(
    [
        [1, 2, 3],
        [2, 3, 4],
        [4, 5, 6]
    ],
    arr => customMap(arr, n => n ** 3)
)

const customFilter = (arr, predicate) => {
    const filteredArr = [];
    for(let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const shouldKeep = predicate(element)
        if(shouldKeep) filteredArr.push(arr[index]);
    }
    return filteredArr;
}

const customReduce = (arr, reducer, initialValue = undefined) => {
    // [1, 2, 3, 4]
    // (cV, cE) => cV + cE
    //  1,  2
    let currentValue = initialValue || arr[0];
    // 10
    let startingIndex = initialValue ? 0 : 1;
    // 1
    for(let index = startingIndex; index < arr.length; index++) {
        // 3
        const currentElement = arr[index];
        // 4
        currentValue = reducer(currentValue, currentElement)
    }

    return currentValue;
}

customReduce([1, 2, 3, 4], (cV, cE) => cV + cE);

// Hardik => map
// Anjali => filter
// Sanika => reduce
// Rahul => every
// Behla => some
// Purvi => forEach
// Smruti => use cases for all.


const customEvery = (arr, predicate) => {
    for(let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const isTruthy = predicate(element);
        if(!isTruthy) return false;
    }

    return true;
}

function isGreaterThan5(n) {
    return n > 5
}

customEvery([1,2,3], isGreaterThan5);
