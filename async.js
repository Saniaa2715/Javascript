// setTimeout
console.log("before timeout");

setTimeout(() => {
    console.log('hello');
}, 3000);

console.log("after timeout");

const getUsersUsingCallbacks = (successFn, errorFn) => {
    const duration = Math.random() * 5000;
    const users = [
        { name: "Sanika", age: 20 },
        { name: "Sweta", age: 22 },
        { name: "Mihir", age: 23 },
        { name: "Smruti", age: 24 },
        { name: "Prasanna", age: 25 },
    ];
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            successFn(users);
        } else {
            errorFn("Something went wrong");
        }
    }, duration);
}

getUsersUsingCallbacks(
    users => console.log("SUCCESSSS", users),
    errorMsg => console.log(errorMsg)
);

getUsersUsingCallbacks(
    users => console.log(users.map(u => u.name)),
    errorMsg => console.log(errorMsg)
);

const promiseObj = new Promise((resolve, reject) => {
    // resolve and reject => we dont pass them => promise constructor passes these.
    resolve((aaa) => console.log("aa"));
    // 1. state of promise is set to fulfilled
    // 2. the then methods callback is invoked and parameter passed to resolve is passed to callback

    reject("Some Error")
    // 1. state of promise is set to rejected
    // 2. the catch methods callback is invoked and parameter passed to reject is passed to callback
});

promiseObj.then((response) => response("aaa"));     // -> promiseObj
promiseObj.catch((error) => console.log(error))    // -> promiseObj
promiseObj.finally(() => console.log("run everytime"))  // -> promiseObj

// method chaining => return the same object back
promiseObj.then().catch().finally()

const getUsersUsingPromises = () => {
    return new Promise((resolve, reject) => {
        const duration = Math.random() * 5000;
        const users = [
            { name: "Sanika", age: 20 },
            { name: "Sweta", age: 22 },
            { name: "Mihir", age: 23 },
            { name: "Smruti", age: 24 },
            { name: "Prasanna", age: 25 },
        ];
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve(users);
            } else {
                reject("Something went wrong");
            }
        }, duration);
    })
}

getUsersUsingPromises()
    .then(users => console.log(users))
    .catch(errorMsg => console.log(errorMsg))
    .finally(() => console.log("done"))

getUsersUsingPromises()
    .then(users => {
        console.log(users)
        return getUsersUsingPromises()
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        console.log("done");
    });

console.log("before promise");


const somePromise = new Promise((resolve, reject) => {
    resolve("abcd");
})

setTimeout(() => {
    console.log("pqrs");
}, 0);

somePromise.then(console.log);

console.log("after promise");

// async await
// top level await (limited support)
// const users = await getUsersUsingPromises();

const getUsers = async () => {
    try {
        const users = await getUsersUsingPromises();
        return users; // resolve
    } catch (e) {
        throw e; // reject
    } finally {
        console.log("done");
    }
} 

getUsers().then(response => console.log(response));


const getPosts = async () => {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        // do something with data
    } catch (error) {
        console.log("do something with the error")
    } finally {
        console.log("finalyy is oing to be executed everytime")
    }
}
