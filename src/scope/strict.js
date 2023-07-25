'use strict'
pi = 3.1416;
console.log(pi); // error

function myFunction() {
    'use strict'
    return pi = 3.1416;
}

console.log(myFunction()); // error