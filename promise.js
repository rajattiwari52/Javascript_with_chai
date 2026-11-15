// =====================================================
// PROMISE 1
// =====================================================
   // Promise = future mein milne wale result ka object.
const promiseOne = new Promise(function(resolve, reject) {

    // Promise ke andar asynchronous task
    // Real life examples: DB call, API call, file operation
    setTimeout(function() {

        console.log('Async task is complete');

        // resolve() = operation successfully complete
        resolve();

    }, 1000);
});


// .then() runs when Promise is fulfilled/resolved
promiseOne.then(function() {

    console.log("Promise consumed");

});


// =====================================================
// PROMISE 2
// =====================================================

new Promise(function(resolve, reject) {

    setTimeout(function() {

        console.log("Async task 2");

        // Promise successfully resolved
        resolve();

    }, 1000);

})
.then(function() {

    // .then() receives successful completion
    console.log("Async 2 resolved");

});


// =====================================================
// PROMISE 3 — PASSING DATA
// =====================================================

const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(function() {

        // resolve() can send data to .then()
        resolve({
            username: "Chai",
            email: "chai@example.com"
        });

    }, 1000);

});


// Data passed inside resolve()
// becomes the argument of .then()
promiseThree.then(function(user) {

    console.log(user);

});


// =====================================================
// PROMISE 4 — RESOLVE / REJECT
// =====================================================

const promiseFour = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true;

        if (!error) {

            // Success
            resolve({
                username: "hitesh",
                password: "123"
            });

        } else {

            // Failure
            reject('ERROR: Something went wrong');

        }

    }, 1000);

});


// Promise chaining
promiseFour

    // Runs only if Promise is resolved
    .then((user) => {

        console.log(user);

        // Returned value goes to next .then()
        return user.username;

    })

    // Receives returned username
    .then((username) => {

        console.log(username);

    })

    // Handles rejection/error
    .catch(function(error) {

        console.log(error);

    })

    // Runs whether Promise resolves or rejects
    .finally(() => {

        console.log(
            "The promise is either resolved or rejected"
        );

    });


// =====================================================
// PROMISE 5 — ASYNC / AWAIT
// =====================================================

const promiseFive = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true;

        if (!error) {

            resolve({
                username: "javascript",
                password: "123"
            });

        } else {

            reject('ERROR: JS went wrong');

        }

    }, 1000);

});


async function consumePromiseFive() {

    try {

        // await waits for Promise to settle
        // If resolved → response gets resolved value
        const response = await promiseFive;

        console.log(response);

    } catch (error) {

        // If Promise rejects,
        // control comes here
        console.log(error);

    }

}

consumePromiseFive();


// =====================================================
// FETCH API
// =====================================================

// fetch() returns a Promise
fetch('https://api.github.com/users/hiteshchoudhary')

    // First .then() receives Response object
    .then((response) => {

        // Convert response body into JSON
        // response.json() also returns a Promise
        return response.json();

    })

    // Receives parsed JSON data
    .then((data) => {

        console.log(data);

    })

    // Handles rejected Promise/errors
    .catch((error) => {

        console.log(error);

    });


// =====================================================
// PROMISE.ALL
// =====================================================

// Used when multiple independent Promises
// need to be handled together.

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// IMPORTANT:
// Promise.all() resolves only when ALL promises resolve.
// If one rejects → Promise.all() rejects.